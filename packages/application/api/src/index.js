import fastify from 'fastify'
import fastifyCORS from 'fastify-cors'
import pkg from '../package.json'
import routes from './routes'

// Initialize fastify application
console.log(`API ${pkg.name} v.${pkg.version}, ${new Date().toLocaleTimeString()}`)
const app = fastify()
app.register(fastifyCORS, { origin: '*' })

// Mount API routes
for (const route of routes) {
  console.log(`> ${route.method} ${route.url}`)
  app.route(route)
}

// Start listening
const port = 3333
const start = async () => {
  try {
    await app.listen(port)
    console.log(`API server listening on http://localhost:${port}/`)

  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
