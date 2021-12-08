import { gql } from 'apollo-server-micro'
import { burgerTypes, burgerQueries } from './Burger'
import { shopQueries, shopTypes } from './Shop'

const typeDefs = gql`
    ${burgerTypes}
    ${shopTypes}

    type Query {
        ${shopQueries}
        ${burgerQueries}
    }
`
export default typeDefs
