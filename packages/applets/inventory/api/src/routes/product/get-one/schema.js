export const schema = {
  description: 'Returns a product',
  tags: ['Customer'],

  params: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'Product identifier'
      }
    }
  }
}
