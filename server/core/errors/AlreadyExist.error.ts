import { ApolloError } from 'apollo-server-micro'

export class AlreadyExistError extends ApolloError {
  constructor () {
    super('Already exist', '409')
  }
}
