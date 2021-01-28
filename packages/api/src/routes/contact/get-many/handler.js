import { Contact } from '@vite-monorepo-example/model'
import data from '../../../../data/contacts.json'

export async function handler (_, reply) {
  const contacts = data.map(item => new Contact(item))

  reply.send({
    contacts
  })
}
