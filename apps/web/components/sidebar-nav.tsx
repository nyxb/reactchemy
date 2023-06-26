'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import type { SidebarNavItem } from '@/types'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'

export interface DocsSidebarNavProps {
   items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
   const pathname = usePathname()

   // Initialize the state for folding and unfolding
   const [collapseStatus, setCollapseStatus] = useState<Record<number, boolean>>(
      items.reduce((status, item, index) => {
         // Open the element when one of its subelements is active
         status[index] = item.items?.some(subItem => subItem.href === pathname) || false
         return status
      }, {} as Record<number, boolean>),
   )

   const toggleCollapse = (index: number) => {
      setCollapseStatus(prevStatus => ({
         ...prevStatus,
         [index]: !prevStatus[index],
      }))
   }

   return items.length
      ? (
      <div className='w-full'>
        {items.map((item, index) => (
          <div key={index} className={cn('pb-0')}>
            <h4
              className='mb-1 rounded-md px-2 py-1 text-sm font-medium cursor-pointer flex justify-between items-center hover:text-hoverColor2'
              onClick={() => toggleCollapse(index)}
            >
              {item.title}
              <Icons.chevronRight className={collapseStatus[index] ? 'hidden' : 'inline-block'} />
              <Icons.chevronDown className={collapseStatus[index] ? 'inline-block' : 'hidden'} />
            </h4>
            {item.items && collapseStatus[index] && (
              <DocsSidebarNavItems items={item.items} pathname={pathname} />
            )}
          </div>
        ))}
      </div>
         )
      : null
}

interface DocsSidebarNavItemsProps {
   items: SidebarNavItem[]
   pathname: string | null
}

export function DocsSidebarNavItems({
   items,
   pathname,
}: DocsSidebarNavItemsProps) {
   return items.length
      ? (
      <div className='grid grid-flow-row auto-rows-max text-sm sidebar-line pl-4'>
         {items.map((item, index) =>
            !item.disabled && item.href
               ? (
               <Link
                  key={index}
                  href={item.href}
                  className={cn(
                     'flex w-full items-center rounded-md p-2 hover:text-hoverColor',
                     {
                        'bg-muted': pathname === item.href,
                     },
                  )}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
               >
                  {item.title}
               </Link>
                  )
               : (
               <span className='flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60'>
                  {item.title}
               </span>
                  ),
         )}
      </div>
         )
      : null
}
