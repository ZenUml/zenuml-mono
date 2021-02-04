export default {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'customers.api'
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