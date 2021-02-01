export default {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'database'
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {
        }
      }
    }
  }
}