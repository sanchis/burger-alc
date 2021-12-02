
export interface ShopListResponse {
  shopsActive: ShopListModel[]
}

export interface ShopListModel{
  id: string
  name: string
  image: string
  address: string
  description: string
}
