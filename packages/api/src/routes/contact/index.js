import getOneRoutes from './get-one/route'
import getManyRoutes from './get-many/route'

export default [
  ...getOneRoutes,
  ...getManyRoutes
]
