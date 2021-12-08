import { gql } from 'apollo-server-micro'
import { burgerTypes, burgerQueries } from './Burger'
import { markQueries, markTypes } from './Mark'
import { shopQueries, shopTypes } from './Shop'

const typeDefs = gql`
    ${burgerTypes}
    ${shopTypes}
    ${markTypes}

    type Query {
        ${shopQueries}
        ${burgerQueries}
        ${markQueries}
    }
`
export default typeDefs
