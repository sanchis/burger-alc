import { Burger } from '@prisma/client'

export interface BurgerEntity extends Burger {
}

export interface UniqueBurgerEntity {
  id: string
}

export interface UpdateBurgerEntity{
  id: string
  shopId: string
  name: string
  description: string
  image: string
  price: number
}

export interface CreateBurgerEntity extends UpdateBurgerEntity{}
