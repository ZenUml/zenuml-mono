export default {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'api.inventory'
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