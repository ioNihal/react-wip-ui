import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false,
  sourcemap: false,
  clean: true,
  treeshake: true,
  minify: true,
  external: ['react', 'react-dom'],
});
