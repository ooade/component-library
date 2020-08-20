import fs from 'fs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const pkg = JSON.parse(
  fs.readFileSync('./package.json', { encoding: 'utf-8' })
);

export default {
  input: 'components',
  external: ['react', '@emotion/core', '@emotion/styled'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    nodeResolve({ browser: true }),
    terser(),
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
};
