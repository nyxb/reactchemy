import Link from 'next/link'

import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { getHookPosts } from '@/lib/hookMdx'
import { cn } from '@/lib/utils'

interface DocsPagerProps {
   slug: string
}

export function DocsHookPager({ slug }: DocsPagerProps) {
   const pager = getHookPagerForDoc(slug)

   if (!pager)
      return null

   return (
    <div className='flex flex-row items-center justify-between'>
      {pager?.prev && (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: 'ghost' }))}
        >
          <Icons.chevronLeft className='mr-2 h-4 w-4' />
          {pager.prev.name}
        </Link>
      )}
      {pager?.next && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: 'ghost' }), 'ml-auto')}
        >
          {pager.next.name}
          <Icons.chevronRight className='ml-2 h-4 w-4' />
        </Link>
      )}
    </div>
   )
}

export function getHookPagerForDoc(slug: string) {
   const posts = getHookPosts()
   const activeIndex = posts.findIndex(post => post.slug === slug)
   const prev = activeIndex !== 0 ? posts[activeIndex - 1] : null
   const next = activeIndex !== posts.length - 1 ? posts[activeIndex + 1] : null

   return { prev, next }
}
