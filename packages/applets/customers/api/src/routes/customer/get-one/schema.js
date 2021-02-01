export const schema = {
  description: 'Returns a customer',
  tags: ['Customer'],

  params: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'Customer identifier'
      }
    }
  }
}
