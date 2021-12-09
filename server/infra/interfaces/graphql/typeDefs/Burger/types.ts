import { gql } from 'apollo-server-micro'

const burgerDefs = gql`
    type Burger {
        id: ID!
        name: String!
        description: String
        image: String
        price: String
    }

    type BurgerInShop{
        id: ID!
        name: String!
        description: String
        image: String
        price: String
        numberOfMarks: Int!
    } 
`
export default burgerDefs
