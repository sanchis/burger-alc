import { Shop } from '@prisma/client'

export interface ShopEntity extends Shop{

}

export interface UpdateShopEntity {
  id: string
  name: string
  address: string
  description: string
  active: boolean
  image: string
}

export interface CreateShopEntity extends UpdateShopEntity{
}

export interface UniqueShopEntity{
  id: string
}
