
const burgerQueries = `
    burgers: [Burger]!
    burger(id: ID!): Burger
    burgerInShop(shopId: ID!): [Burger]!
`
export default burgerQueries
