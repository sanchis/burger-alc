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

    type Mutation {
        createShop(name: String!, address: String!, active: Boolean!, image: String, description: String): Shop!
        updateShop(id: ID!, address: String!, active: Boolean!, image: String, description: String): Shop!
        deleteShop(id: ID!): Shop
        createBurger(name: String!, shopId: String!): Burger!
    }
`
export default typeDefs