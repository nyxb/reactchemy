import fs from 'node:fs'
import path from 'node:path'

import type { Option, Post } from '@/types'

const GENERATED_PATH = path.resolve(process.cwd(), 'generated/component')

const allPosts = fs
   .readdirSync(`${GENERATED_PATH}/posts`)
   .filter(filename => /\.md?$/.test(filename))

function getComponent(name: string): Option<Buffer> {
   const pathname = path.join(GENERATED_PATH, 'components', `${name}.md`)
   return readFile(pathname)
}

function getDemo(name: string): Option<Buffer> {
   const pathname = path.join(GENERATED_PATH, 'demos', `${name}.md`)
   return readFile(pathname)
}

function readFile(pathname: string): Option<Buffer> {
   try {
      return fs.readFileSync(pathname)
   }
   catch (error) {
      console.warn(`Document not found: ${pathname}`)
      return null
   }
}

export function getComponentPosts(): Post[] {
   return allPosts
      .map((filename) => {
         const name = filename.replace(/\.mdx?$/, '')
         const slug = name.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
         const href = `/react-component/${slug}`
         const pathname = path.join(GENERATED_PATH, 'posts', filename)
         const docs = readFile(pathname)
         const component = getComponent(name)
         const demo = getDemo(name)
         return { name, slug, href, docs, component, demo }
      })
      .filter(post => post.docs && post.component && post.demo)
      .sort((a, b) => {
         if (a.name < b.name)
            return -1
         if (a.name > b.name)
            return 1
         return 0
      }) as Post[]
}

export function getComponentPost(slug: string): Option<Post> {
   const allPosts = getComponentPosts()
   const post = allPosts.find(post => post.slug === slug)
   return post || null
}
