import { Database } from '@vite-monorepo-example/database'

export async function handler ({ params }, reply) {
  const database = await Database.open()

  try {
    const { id } = params
    const customer = await database.getCustomer(id)

    if (customer) {
      reply
        .send({
          customer
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
