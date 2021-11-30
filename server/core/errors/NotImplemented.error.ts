import { ApolloError } from 'apollo-server-micro'

export class NotImplementedError extends ApolloError {
  constructor () {
    super('Not implemented', '501')
  }
}
