export default {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'utilities'
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