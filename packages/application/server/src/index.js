import fastify from 'fastify'
import fastifyCORS from 'fastify-cors'
import fastifySwagger from 'fastify-swagger'
import pkg from '../package.json'
import routes from './routes'
import getDocumentationOptions from './documentation'

// Initialize fastify application
console.log('-'.repeat(50))
console.log(`API Server ${pkg.name} v.${pkg.version}, ${new Date().toLocaleTimeString()}`)
const app = fastify()
// Enables requests from UI running on another domain
app.register(fastifyCORS, { origin: '*' })
// Activates OpenAPI documentation at /documentation route
app.register(fastifySwagger, getDocumentationOptions('localhost', 3333, '/documentation'))

// Mount API routes
for (const route of routes) {
  console.log(`> ${route.method} ${route.url}`)
  app.route(route)
}
console.log('> GET /documentation')
console.log('-'.repeat(50))

// Start listening
const port = 3333
const start = async () => {
  try {
    await app.listen(port)
    console.log(`Listening on http://localhost:${port}/`)

  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
