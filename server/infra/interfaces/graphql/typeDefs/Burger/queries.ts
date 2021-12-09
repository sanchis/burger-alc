
const burgerQueries = `
    burgers: [Burger]!
    burger(id: ID!): Burger
    burgerInShop(shopId: ID!): [BurgerInShop]!
`
export default burgerQueries
