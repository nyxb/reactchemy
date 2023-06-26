#!/usr/bin/env zx

import { fs, path } from 'zx'
import { isComponentFile, isHookFile, isUtilFile } from './utils.mjs'

const hooksDir = path.resolve('./packages/reactchemy/src/hooks')
const componentsDir = path.resolve('./packages/reactchemy/src/components')
const utilsDir = path.resolve('./packages/reactchemy/src/utils')

const baseOutputDir = path.resolve('./apps/web/generated')

copyFilesFromDir({
   sourceDir: hooksDir,
   baseOutputDir,
   type: 'hook',
   fileCheck: isHookFile,
})

copyFilesFromDir({
   sourceDir: componentsDir,
   baseOutputDir,
   type: 'component',
   fileCheck: isComponentFile,
})

copyFilesFromDir({
   sourceDir: utilsDir,
   baseOutputDir,
   type: 'util',
   fileCheck: isUtilFile,
})

function getFileName(pathname) {
   return pathname.split('/').reverse()[0]
}

function createDirIfNeeded(dir) {
   if (!fs.existsSync(path.resolve(dir)))
      fs.mkdirSync(dir, { recursive: true })
}

function copyFile({ source, dest, toMarkdown }) {
   if (!fs.existsSync(source)) {
      console.warn(`${getFileName(source)} doesn't exist`)
      return
   }

   let existingFile = false
   if (fs.existsSync(dest)) {
      fs.unlinkSync(dest)
      existingFile = true
   }

   fs.readFile(source, 'utf8', (err, data) => {
      if (err) {
         console.error(`Cannot read ${source}`)
         return
      }

      const name = getFileName(dest)
      const extension = source.split('.').reverse()[0]
      const writeStream = fs.createWriteStream(dest)
      const preCode = `\`\`\`${extension}`

      if (toMarkdown) {
         data = data
            .split('\n')
            .map(line => line
               .replace('from \'../..\'', 'from \'reactchemy\'')
               .replace(`from './${name}'`, 'from \'reactchemy\''),
            )
            .join('\n')

         data = `${preCode}\r${data}\`\`\`\r`
      }

      writeStream.write(data)
      writeStream.end()

      console.log(`${name} ${existingFile ? 'updated' : 'created'}`)
   })
}

function copyFilesFromDir({ sourceDir, baseOutputDir, type, fileCheck }) {
   fs.readdir(sourceDir, (err, files) => {
      if (err)
         throw err

      const outputDir = `${baseOutputDir}/${type}`
      createDirIfNeeded(`${outputDir}/${type}s`)
      createDirIfNeeded(`${outputDir}/demos`)
      createDirIfNeeded(`${outputDir}/posts`)

      for (const file of files) {
         if (!fileCheck(file))
            continue

         const name = file.replace(/\.md$/, '')

         copyFile({
            source: path.resolve(`${sourceDir}/${name}/${name}.${type === 'component' ? 'tsx' : 'ts'}`),
            dest: path.resolve(`${outputDir}/${type}s/${name}.md`),
            toMarkdown: true,
         })

         copyFile({
            source: path.resolve(`${sourceDir}/${name}/${name}.demo.tsx`),
            dest: path.resolve(`${outputDir}/demos/${name}.md`),
            toMarkdown: true,
         })

         copyFile({
            source: path.resolve(`${sourceDir}/${name}/${name}.md`),
            dest: path.resolve(`${outputDir}/posts/${name}.md`),
         })
      }
   })
}
