export default {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'api.customers'
    },
    rollupOptions: {
      external: [
      ],
      output: {
        globals: {
        }
      }
    }
  }
}