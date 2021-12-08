import { gql } from 'apollo-server-micro'
import burgerDefs from './Burger'
import shopDefs from './Shop'

const typeDefs = gql`
    ${burgerDefs}
    ${shopDefs}

    type Query {
        shops: [Shop]!
        shopsActive: [Shop]!
        shop(id: ID!): Shop
        burgers: [Burger]!
        burger(id: ID!): Burger
        burgerInShop(shopId: ID!): [Burger]!
    }
`
export default typeDefs
