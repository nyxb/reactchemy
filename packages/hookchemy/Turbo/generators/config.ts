import type { PlopTypes } from '@turbo/gen'
import format from 'date-fns/format'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
   plop.setGenerator('hook', {
      description: 'Create a post',
      prompts: [
         {
            type: 'input',
            name: 'name',
            message: 'post name please (eg: "use hook")',
         },
      ],
      actions: [
      // Create the hook file itself
         {
            type: 'add',
            path: 'src/hooks/{{camelCase name}}/{{camelCase name}}.ts',
            templateFile: 'templates/hook/hook.ts.hbs',
         },

         // Create the test file
         {
            type: 'add',
            path: 'src/hooks/{{camelCase name}}/{{camelCase name}}.test.ts',
            templateFile: 'templates/hook/hook.test.ts.hbs',
         },

         // Create the markdown file to present the hook (doc)
         {
            data: {
               date: format(new Date(), 'yyyy-MM-dd'),
            },
            type: 'add',
            path: 'src/hooks/{{camelCase name}}/{{camelCase name}}.md',
            templateFile: 'templates/hook/hook.mdx.hbs',
         },

         // Create the demo react component file
         {
            type: 'add',
            path: 'src/hooks/{{camelCase name}}/{{camelCase name}}.demo.tsx',
            templateFile: 'templates/hook/hook.demo.tsx.hbs',
         },

         // Update the global index file
         {
            type: 'append',
            path: 'src/index.ts',
            templateFile: 'templates/hook/index.ts.hbs',
         },
      ],
   })

   plop.setGenerator('util', {
      description: 'Create a post',
      prompts: [
         {
            type: 'input',
            name: 'name',
            message: 'post name please (eg: "render")',
         },
      ],
      actions: [
      // Create the util file itself
         {
            type: 'add',
            path: 'src/utils/{{lowerCase name}}/{{lowerCase name}}.ts',
            templateFile: 'templates/util/util.ts.hbs',
         },

         // Create the test file
         {
            type: 'add',
            path: 'src/utils/{{lowerCase name}}/{{lowerCase name}}.test.ts',
            templateFile: 'templates/util/util.test.ts.hbs',
         },

         // Create the markdown file to present the util (doc)
         {
            data: {
               date: format(new Date(), 'yyyy-MM-dd'),
            },
            type: 'add',
            path: 'src/utils/{{lowerCase name}}/{{lowerCase name}}.md',
            templateFile: 'templates/util/util.mdx.hbs',
         },

         // Create the demo react component file
         {
            type: 'add',
            path: 'src/utils/{{lowerCase name}}/{{lowerCase name}}.demo.tsx',
            templateFile: 'templates/util/util.demo.tsx.hbs',
         },

         // Update the global index file
         {
            type: 'append',
            path: 'src/index.ts',
            templateFile: 'templates/util/index.ts.hbs',
         },
      ],
   })

   plop.setGenerator('component', {
      description: 'Create a post',
      prompts: [
         {
            type: 'input',
            name: 'name',
            message: 'post name please (eg: "my component")',
         },
      ],
      actions: [
      // Create the util file itself
         {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'templates/component/component.tsx.hbs',
         },

         // Create the test file
         {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.ts',
            templateFile: 'templates/component/component.test.ts.hbs',
         },

         // Create the markdown file to present the component (doc)
         {
            data: {
               date: format(new Date(), 'yyyy-MM-dd'),
            },
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.md',
            templateFile: 'templates/component/component.mdx.hbs',
         },

         // Update the global index file
         {
            type: 'append',
            path: 'src/index.ts',
            templateFile: 'templates/component/index.ts.hbs',
         },
      ],
   })
}
