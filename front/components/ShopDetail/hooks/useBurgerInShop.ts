import { useLazyQuery } from '@apollo/client'
import { BURGER_IN_SHOP } from 'front/gql'
import { BurgerInShop, BurgerInShopResponse } from 'front/models/BurgerList'
import { useEffect } from 'react'

interface HookModel{
  loading: boolean
  burgers: BurgerInShop[]
}
export function useBurgerInShop (shopId: string): HookModel {
  const [getBurgersInShop, { loading, data }] = useLazyQuery<BurgerInShopResponse>(BURGER_IN_SHOP)

  useEffect(() => {
    if (shopId !== undefined && shopId !== '') {
      getBurgersInShop({ variables: { shopId } })
        .catch(error => console.error('Fail to load burgers', error))
    }
  }, [shopId])

  return {
    loading,
    burgers: data?.burgerInShop ?? []
  }
}
