import { gql } from 'apollo-server-micro'
import { burgerTypes, burgerQueries } from './Burger'
import { markMutations, markQueries, markTypes } from './Mark'
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

    type Mutation {
        ${markMutations}
    }
`
export default typeDefs
