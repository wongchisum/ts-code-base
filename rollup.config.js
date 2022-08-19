import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

const isDev = process.env.NODE_ENV === 'develop'

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/main.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
      exclude: [],
    }),
    babel({
      exclude: '**/node_modules/**',
    }),
    typescript(),
    !isDev && terser(),
  ],
  external: [],
}
