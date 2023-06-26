import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DocsPageHeader } from '@/components/docs-page-header'
import { DocsUtilPager } from '@/components/utilPaper'
import { H2, Mdx } from '@/components/remote-mdx'
import type { TableOfContents } from '@/components/table-of-content'
import {
   DashboardTableOfContents,
} from '@/components/table-of-content'
import { siteConfig } from '@/config/site'
import { getUtilPost, getUtilPosts } from '@/lib/utilMdx'

export async function generateStaticParams() {
   return getUtilPosts().map(post => ({ slug: post.slug }))
}

export function generateMetadata(props: {
   params: { slug: string }
}): Metadata {
   const post = getUtilPost(props.params.slug)
   if (!post)
      return {}

   const title = post.name
   const description = `Discover how to use ${post.name} from reactchemy`
   const url = siteConfig.url + post.href
   const imageUrl = '/og.png'
   return {
      title,
      description,
      openGraph: {
         title,
         description,
         type: 'article',
         url,
         images: [
            {
               url: imageUrl,
               width: 1200,
               height: 630,
               alt: title,
            },
         ],
      },
      twitter: {
         card: 'summary_large_image',
         title,
         description,
         images: [`${siteConfig.url}/og.png`],
      },
   }
}

function PostLayout({ params }: { params: { slug: string } }) {
   const post = getUtilPost(params.slug)

   if (!post)
      notFound()

   const toc: TableOfContents = {
      items: [
         { title: 'Introduction', url: '#introduction' },
         { title: 'Usage', url: '#usage' },
         { title: 'Util', url: '#util' },
      ],
   }

   return (
    <main className='relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]'>
      <div className='mx-auto w-full min-w-0'>
        <DocsPageHeader
          id='introduction'
          className='scroll-m-20'
          heading={post.name}
        />
        <Mdx source={post.docs} />
        <H2 id='usage'>Usage</H2>
        <Mdx source={post.demo} />
        <H2 id='util'>Util</H2>
        <Mdx source={post.util} />
        <hr className='my-4 md:my-6' />
        <DocsUtilPager slug={post.slug} />
      </div>
      <div className='hidden text-sm xl:block'>
        <div className='sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10'>
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
   )
}

export default PostLayout
