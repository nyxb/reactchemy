import { getHookPosts } from '@/lib/hookMdx'
import { getComponentPosts } from '@/lib/componentMdx'
import { getUtilPosts } from '@/lib/utilMdx'
import type { DocsConfig, NavItem } from '@/types'

export const hookNavItems: NavItem[] = getHookPosts().map(post => ({
   title: post.name,
   href: post.href,
}))

export const componentNavItems: NavItem[] = getComponentPosts().map(post => ({
   title: post.name,
   href: post.href,
}))

export const utilNavItems: NavItem[] = getUtilPosts().map(post => ({
   title: post.name,
   href: post.href,
}))

export const docsConfig: DocsConfig = {
   mainNav: [
      {
         title: 'Documentation',
         href: '/introduction',
      },
   ],
   sidebarNav: [
      {
         title: 'Getting Started',
         items: [
            {
               title: 'Introduction',
               href: '/introduction',
            },
         ],
      },
      {
         title: 'Hooks',
         items: hookNavItems,
      },
      {
         title: 'Components',
         items: componentNavItems,
      },
      {
         title: 'Utils',
         items: utilNavItems,
      },
   ],
}
