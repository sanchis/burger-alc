import { Shop } from 'front/domain/entities/Shop'

export interface ShopDetailDTO{
  shop: Shop
}

export interface ShopListActiveDTO {
  shopsActive: Shop[]
}
