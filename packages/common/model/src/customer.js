export class Customer {
  constructor (data = {}) {
    Object.assign(this, data)
  }

  /**
   * Customer identifier
   */
  id

  /**
   * Company name
   */
  company

  /**
   * Person first name
   */
  firstName

  /**
   * Person last name
   */
  lastName

  /**
   * Person full name
   */
  get fullName () {
    return [
      this.firstName || '',
      this.lastName || ''
    ].join(' ')
  }
}
