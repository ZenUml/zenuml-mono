import { Contact } from '@vite-monorepo-example/model'

/**
 * Rudimentary API client based on `window.fetch`
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
export const APIClient = {
  /**
   * API root
   */
  baseUrl: 'http://localhost:3000',

  /**
   * Returns a specified contact
   * @param id Contact identifier
   */
  async getContact (id) {
    const response = await this.request({ path: `contact/${id}` })
    if (response.error) {
      this.handleError(response)
    } else {
      // We type-cast the received data, so that
      // on the front-end we can use the exact same
      // model as on the back-end
      return new Contact(response.result.contact)
    }
  },

  /**
   * Returns all contacts
   */
  async getContacts () {
    const response = await this.request({ path: 'contact' })
    if (response.error) {
      this.handleError(response)
    } else {
      return response.result.contacts.map(contact => new Contact(contact))
    }
  },

  /**
   * Runs a HTTP request with the specified parameters
   * @param path Path to request, relative to {@link baseUrl}
   * @param method HTTP method, default is GET
   * @param query Optional dictionary of query parameters to add to the request URL
   * @param data Optional data to submit with the request
   */
  async request ({ path = '', method = 'get', query, data }) {
    try {
      const headers = {
        'Content-Type': 'application/json'
      }
      const options = {
        method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers,
        body: data ? JSON.stringify(data) : undefined
      }
      const url = new URL(this.baseUrl + '/' + path)
      url.search = new URLSearchParams(query).toString()

      const response = await fetch(url, options)
      const { ok, status, statusText } = response
      const result = await response.json() || {}
      if (ok) {
        return { status, result }
      } else {
        return { status, path, method, error: new Error(statusText) }
      }

    } catch (error) {
      return { path, method, error }
    }
  },

  /**
   * Trivial error handler
   */
  handleError ({ status, path, method, error }) {
    console.error(`${method} ${path} ERROR ${status}`)
    console.error(error)
  }
}
