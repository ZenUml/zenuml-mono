import Home from '../views/home.vue'
import customerRoutes from '@vue-vite-monorepo/customers.ui'
import inventoryRoutes from '@vue-vite-monorepo/inventory.ui'

export default [
  // Application routes
  {
    path: '/',
    name: 'home',
    component: Home,
  },

  // Routes introduced by customers.ui package
  ...customerRoutes,

  // Routes introduced by inventory.ui package
  ...inventoryRoutes
]
