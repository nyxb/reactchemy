import { DocsPageHeader } from '@/components/docs-page-header'
import { H2, Mdx } from '@/components/remote-mdx'

export default async function IntroductionPage() {
   return (
    <main className='relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]'>
      <div className='mx-auto w-full min-w-0'>
        <DocsPageHeader
          id='introduction'
          className='scroll-m-20'
          heading={'Getting started'}
        />
        <H2>Welcome</H2>
        <p>To get started, simply install the library with your favorite package manager and get started.</p>
        <Mdx source={Buffer.from('```bash\n# npm \nnpm i reactchemy\n\n# pnpm\npnpm add reactchemy\n\n# yarn\nyarn add reactchemy\n```')} />
      </div>
    </main>
   )
}
