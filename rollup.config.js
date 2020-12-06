import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';

import pkg from './package.json';

export default {
  input: pkg.svelte,
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name: 'Imgix' }
  ],
  plugins: [svelte(), resolve(), commonJS()]
};
