import { Database } from '@vite-monorepo-example/database'

export async function handler (_, reply) {
  const database = await Database.open()

  try {
    const customers = await database.getCustomers()

    reply.send({
      customers
    })

  } finally {
    await database.close()
  }
}
