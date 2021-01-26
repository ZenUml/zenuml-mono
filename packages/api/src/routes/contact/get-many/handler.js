import { Contact } from '@vite-monorepo-example/model'

export async function handler (_, reply) {
  const contacts = [
    new Contact({ id: 1, firstName: 'Bob', lastName: 'Marley' }),
    new Contact({ id: 2, firstName: 'Mary', lastName: 'Stanley' }),
    new Contact({ id: 3, firstName: 'John', lastName: 'Doe' })
  ]

  reply.send({
    contacts
  })
}
