export default {
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'server'
    },
    rollupOptions: {
      external: [
        'fastify',
        'fastify-cors',
        'fastify-swagger'
      ],
      output: {
        globals: {
          'fastify': 'fastify',
          'fastify-cors': 'fastifyCORS',
          'fastify-swagger': 'fastifySwagger'
        }
      }
    }
  }
}