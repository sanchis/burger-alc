import { ApolloError } from 'apollo-server-micro'

export class ElementNotFoundError extends ApolloError {
  constructor () {
    super('Element not found', '404')
  }
}
