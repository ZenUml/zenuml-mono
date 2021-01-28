export class Contact {
  constructor (data = {}) {
    Object.assign(this, data)
  }

  id
  firstName
  lastName

  get fullName () {
    return [
      this.firstName || '',
      this.lastName || ''
    ].join(' ')
  }
}
