import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json'; // eslint-disable-line import/extensions

export default {
  input: 'src/index.ts',
  output: [
    {
      exports: 'named',
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      exports: 'named',
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      clean: true,
      exclude: '**/__tests__/**',
    }),
  ],
};
