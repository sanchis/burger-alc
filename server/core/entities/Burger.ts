import { Burger } from '.prisma/client'

export interface BurgerEntity extends Burger {
}

export interface UniqueBurgerEntity {
  id: string
}

export interface UpdateBurgerEntity{
  id: string
  shopId: string
  name: string
}

export interface CreateBurgerEntity extends UpdateBurgerEntity{}
