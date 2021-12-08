import { gql } from 'apollo-server-micro'

const markDefs = gql`
    type Mark{
        id: ID!
        mark: Float!
        comment: String!
        createAt: String!
# TODO maybe create custom type for dateTime?
    }
`
export default markDefs
