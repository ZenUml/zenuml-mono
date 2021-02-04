import { Database } from '@vue-vite-monorepo/database'

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
