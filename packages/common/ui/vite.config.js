export default {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'ui'
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