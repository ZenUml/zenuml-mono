import { Contact } from '@vite-monorepo-example/model'
import data from '../../../../data/contacts.json'

export async function handler ({ params }, reply) {
  const { id } = params

  const contacts = data.map(item => new Contact(item))
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
