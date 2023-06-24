import type { BuildConfig } from 'buildkarium'

const config: BuildConfig = {
   entries: ['./src/index'],
   externals: [],
   declaration: true,
   rollup: {
      emitCJS: true,
      esbuild: {
         target: ['es2015'],
      },
   },
}
export default config
