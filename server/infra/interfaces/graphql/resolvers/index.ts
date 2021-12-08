import { burgerQueries } from './Burger'
import { shopQueries } from './Shop'

const resolvers = {
  Query: {
    ...shopQueries,
    ...burgerQueries
  }
}
export default resolvers
