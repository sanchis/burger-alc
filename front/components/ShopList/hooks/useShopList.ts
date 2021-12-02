import { useQuery } from '@apollo/client'
import { SHOP_LIST } from 'front/gql'
import { ShopListModel, ShopListResponse } from 'front/models/ShopList'

interface HookModel {
  loading: boolean
  data: ShopListModel[]
}

export function useShopList (): HookModel {
  const { data, loading } = useQuery<ShopListResponse>(SHOP_LIST)

  return {
    loading,
    data: data?.shopsActive ?? []
  }
}
