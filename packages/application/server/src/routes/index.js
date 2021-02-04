// Internal routes
import statusRoutes from './status'
// Routes introduced by applets
import customerRoutes from '@vue-vite-monorepo/customers.api'
import inventoryRoutes from '@vue-vite-monorepo/inventory.api'

export default [
  ...statusRoutes,
  ...customerRoutes,
  ...inventoryRoutes
]
