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
