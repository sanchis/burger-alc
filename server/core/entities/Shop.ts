import { Shop } from '.prisma/client'

export interface ShopEntity extends Shop{

}

export interface UpdateShopEntity {
  id: string
  name: string
  address: string
  active: boolean
}

export interface CreateShopEntity extends UpdateShopEntity{
}

export interface UniqueShopEntity{
  id: string
}
