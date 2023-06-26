#!/usr/bin/env zx

import { fs, path } from 'zx'
import { camelToKebabCase, isComponentDemoFile, isComponentFile, isHookDemoFile, isHookFile, isUtilDemoFile, isUtilFile } from './utils.mjs'

const srcDir = path.resolve('./packages/reactchemy/src')
const readmeFile = path.resolve('./README.md')

const hooksDir = path.join(srcDir, 'hooks')
const componentsDir = path.join(srcDir, 'components')
const utilsDir = path.join(srcDir, 'utils')

const hooksFiles = fs.readdirSync(hooksDir)
const componentsFiles = fs.readdirSync(componentsDir)
const utilsFiles = fs.readdirSync(utilsDir)

let markdown = ''

function createUrl(filename, subDir) {
   const pathname = camelToKebabCase(filename)
   return `https://reactchemy/react-${subDir}/${pathname}`
}

function hasDemo(subDir, name, isDemoFile) {
   const demoFiles = fs
      .readdirSync(path.resolve(srcDir, subDir, name))
      .filter(isDemoFile)
   return demoFiles.length > 0
}

function createMarkdown(files, srcDir, createUrlFunc, isFileFunc, isDemoFileFunc) {
   return files
      .filter(isFileFunc)
      .map((name) => {
      // exclude from readme if it doesn't have a demo
         if (!hasDemo(srcDir, name, isDemoFileFunc)) {
            console.warn(`${name} doesn't have a demo yet!`)
            return ''
         }
         return `- [\`${name}()\`](${createUrlFunc(name)})\n`
      })
      .reduce((acc, line) => acc + line, '')
}

// Hooks
markdown += '## Hooks\n\n'
markdown += createMarkdown(hooksFiles, 'hooks', name => createUrl(name, 'hook'), isHookFile, isHookDemoFile)

// Components
markdown += '\n## Components\n\n'
markdown += createMarkdown(componentsFiles, 'components', name => createUrl(name, 'component'), isComponentFile, isComponentDemoFile)

// Utils
markdown += '\n## Utils\n\n'
markdown += createMarkdown(utilsFiles, 'utils', name => createUrl(name, 'util'), isUtilFile, isUtilDemoFile)

const hookListRegExp = new RegExp('<!-- DATA:START -->(.*)<!-- DATA:END -->', 'gms')

try {
   const data = fs
      .readFileSync(readmeFile, 'utf-8')
      .replace(
         hookListRegExp,
      `<!-- DATA:START -->\n\n${markdown}\n<!-- DATA:END -->`,
      )

   fs.writeFileSync(readmeFile, data, 'utf-8')
   console.log('README.md updated!')
}
catch (err) {
   console.error(`Error updating README.md: ${err}`)
}
