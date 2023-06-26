import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { DocsPageHeader } from '@/components/docs-page-header'
import { DocsComponentPager } from '@/components/componentPaper'
import { H2, Mdx } from '@/components/remote-mdx'
import type { TableOfContents } from '@/components/table-of-content'
import {
   DashboardTableOfContents,
} from '@/components/table-of-content'
import { siteConfig } from '@/config/site'
import { getComponentPost, getComponentPosts } from '@/lib/componentMdx'

export async function generateStaticParams() {
   return getComponentPosts().map(post => ({ slug: post.slug }))
}

export function generateMetadata(props: {
   params: { slug: string }
}): Metadata {
   const post = getComponentPost(props.params.slug)
   if (!post)
      return {}

   const title = post.name
   const description = `Discover how to use ${post.name} from reactchemy`
   const url = siteConfig.url + post.href
   const imageUrl = `https://via.placeholder.com/1200x630.png/007ACC/fff/?text=${title}`
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
         images: [imageUrl],
      },
   }
}

function PostLayout({ params }: { params: { slug: string } }) {
   const post = getComponentPost(params.slug)

   if (!post)
      notFound()

   const toc: TableOfContents = {
      items: [
         { title: 'Introduction', url: '#introduction' },
         { title: 'Usage', url: '#usage' },
         { title: 'Component', url: '#component' },
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
        <H2 id='component'>Component</H2>
        <Mdx source={post.component} />
        <hr className='my-4 md:my-6' />
        <DocsComponentPager slug={post.slug} />
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
