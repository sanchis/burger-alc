import { burgerQueries } from './Burger'
import { markQueries } from './Mark'
import { shopQueries } from './Shop'

const resolvers = {
  Query: {
    ...shopQueries,
    ...burgerQueries,
    ...markQueries
  }
}
export default resolvers
