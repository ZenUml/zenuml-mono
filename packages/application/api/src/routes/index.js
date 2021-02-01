// Internal routes
import statusRoutes from './status'
// Routes introduced by applets
import customerRoutes from '@vite-monorepo-example/api.customers'
import inventoryRoutes from '@vite-monorepo-example/api.inventory'

export default [
  ...statusRoutes,
  ...customerRoutes,
  ...inventoryRoutes
]
