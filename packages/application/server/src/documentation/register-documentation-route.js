import pkg from '../../package.json'

/**
 * API documentation options
 */
export default {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Vue+Vite Monorepo API',
      description: pkg.description,
      version: pkg.version
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'localhost:3333',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'Customers', description: 'Customer-related end-points' },
      { name: 'Inventory', description: 'Inventory-related end-points' }
    ]
  },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  },
  exposeRoute: true
}
