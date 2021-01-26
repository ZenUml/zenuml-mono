export const schema = {
  description: 'Returns a contact',
  tags: ['Contact'],

  params: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'Contact identifier'
      }
    }
  }
}
