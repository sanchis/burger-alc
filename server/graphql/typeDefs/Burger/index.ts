import { gql } from 'apollo-server-micro'

const burgerDefs = gql`
    type Burger {
        id: ID!
        name: String!
    }
`
export default burgerDefs
