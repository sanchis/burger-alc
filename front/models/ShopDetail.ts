export interface ShopDetail{
  id: string
  name: string
  description?: string
  address: string
  image?: string
  gMapsHash?: string
}

export interface ShopDetailResponse{
  shop: ShopDetail
}
