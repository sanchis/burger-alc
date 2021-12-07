
export const SHOP_LIST_ACTIVE = `
query Shops {
  shopsActive {
    id
    name
    address
    image
    description
  }
}`

export const SHOP_DETAIL = `
query Shop($shopId: ID!) {
  shop(id: $shopId) {
    id
    name
    address
    image
    description
    gMapsHash
  }
}`

export const BURGER_IN_SHOP = `
query Query($shopId: ID!) {
  burgerInShop(shopId: $shopId) {
    id
    name
  }
}
`
