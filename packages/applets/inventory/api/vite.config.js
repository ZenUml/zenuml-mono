export default {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'inventory.api'
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