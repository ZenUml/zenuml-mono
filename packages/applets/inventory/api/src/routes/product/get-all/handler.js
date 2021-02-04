import { Database } from '@vue-vite-monorepo/database'

export async function handler (_, reply) {
  const database = await Database.open()

  try {
    const products = await database.getProducts()

    reply.send({
      products
    })

  } finally {
    await database.close()
  }
}
