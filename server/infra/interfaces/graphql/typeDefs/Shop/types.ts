import { gql } from 'apollo-server-micro'

const shopDefs = gql`
    type Shop{
        id: ID!
        name: String!
        address: String!
        active: Boolean!
        description: String
        image: String
        gMapsHash: String
    }
`
export default shopDefs
