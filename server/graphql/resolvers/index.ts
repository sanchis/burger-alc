import { burgerMutations, burgerQueries } from './Burger'
import { shopMutations, shopQueries } from './Shop'

const resolvers = {
  Query: {
    ...shopQueries,
    ...burgerQueries
  },
  Mutation: {
    ...shopMutations,
    ...burgerMutations
  }
}
export default resolvers
