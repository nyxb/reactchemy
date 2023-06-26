import fs from 'node:fs'
import path from 'node:path'

import type { Option, Post } from '@/types'

const GENERATED_PATH = path.resolve(process.cwd(), 'generated/hook')

const allPosts = fs
   .readdirSync(`${GENERATED_PATH}/posts`)
   .filter(filename => /\.md?$/.test(filename))

function getHook(name: string): Option<Buffer> {
   const pathname = path.join(GENERATED_PATH, 'hooks', `${name}.md`)
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

export function getHookPosts(): Post[] {
   return allPosts
      .map((filename) => {
         const name = filename.replace(/\.mdx?$/, '')
         const slug = name.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
         const href = `/react-hook/${slug}`
         const pathname = path.join(GENERATED_PATH, 'posts', filename)
         const docs = readFile(pathname)
         const hook = getHook(name)
         const demo = getDemo(name)
         return { name, slug, href, docs, hook, demo }
      })
      .filter(post => post.docs && post.hook && post.demo)
      .sort((a, b) => {
         if (a.name < b.name)
            return -1
         if (a.name > b.name)
            return 1
         return 0
      }) as Post[]
}

export function getHookPost(slug: string): Option<Post> {
   const allPosts = getHookPosts()
   const post = allPosts.find(post => post.slug === slug)
   return post || null
}
