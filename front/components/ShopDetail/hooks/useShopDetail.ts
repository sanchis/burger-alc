import { useLazyQuery } from '@apollo/client'
import { SHOP_DETAIL } from 'front/gql'
import { ShopDetail, ShopDetailResponse } from 'front/models/ShopDetail'
import { useEffect } from 'react'

interface HookModel{
  loading: boolean
  shop?: ShopDetail
}

export function useShopDetail (shopId: string): HookModel {
  const [getShopDetail, { loading, data }] = useLazyQuery<ShopDetailResponse>(SHOP_DETAIL)

  useEffect(() => {
    if (shopId !== undefined && shopId !== '') {
      getShopDetail({ variables: { shopId } })
        .catch(error => console.error('Fail to load shop', error))
    }
  }, [shopId])

  return {
    loading,
    shop: data?.shop
  }
}
