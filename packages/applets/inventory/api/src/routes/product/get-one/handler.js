import { Database } from '@vite-monorepo-example/database'

export async function handler ({ params }, reply) {
  const database = await Database.open()

  try {
    const { id } = params
    const product = await database.getProduct(id)

    if (product) {
      reply
        .send({
          customer: product
        })
    } else {
      reply
        .code(404)
        .send({ message: 'NOT FOUND' })
    }

  } finally {
    await database.close()
  }
}
