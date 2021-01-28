export default {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'model'
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