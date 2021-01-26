export default {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'api'
    },
    rollupOptions: {
      external: [
        'fastify'
      ],
      output: {
        globals: {
          'fastify': 'fastify'
        }
      }
    }
  }
}