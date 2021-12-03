import { gql } from '@apollo/client'

export const SHOP_LIST = gql`
query Shops {
  shopsActive {
    id
    name
    address
    image
    description
  }
}`

export const SHOP_DETAIL = gql`
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

export const BURGER_IN_SHOP = gql`
query Query($shopId: ID!) {
  burgerInShop(shopId: $shopId) {
    id
    name
  }
}
`
