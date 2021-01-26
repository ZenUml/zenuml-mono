import { Contact } from '@vite-monorepo-example/model'

export async function handler ({ params }, reply) {
  const { id } = params

  const contacts = [
    new Contact({ id: 1, firstName: 'Bob', lastName: 'Marley' }),
    new Contact({ id: 2, firstName: 'Mary', lastName: 'Stanley' }),
    new Contact({ id: 3, firstName: 'John', lastName: 'Doe' })
  ]

  const contact = contacts.find(c => c.id === id)

  if (contact) {
    reply
      .send({
        contact
      })
  } else {
    reply
      .code(404)
      .send({ message: 'NOT FOUND' })
  }
}
