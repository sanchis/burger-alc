import { burgerQueries } from './Burger'
import { markQueries, markMutations } from './Mark'
import { shopQueries } from './Shop'

const resolvers = {
  Query: {
    ...shopQueries,
    ...burgerQueries,
    ...markQueries
  },
  Mutation: {
    ...markMutations
  }
}
export default resolvers
