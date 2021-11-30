import { BurgerEntity, CreateBurgerEntity, UniqueBurgerEntity, UpdateBurgerEntity } from '../core/entities/Burger'
import { BurgerService } from '../core/services'

export async function getBurgerList (): Promise<BurgerEntity[]> {
  return await BurgerService.getAll()
}

export async function getBurgerById (params: UniqueBurgerEntity): Promise<BurgerEntity | null> {
  return await BurgerService.findById(params)
}

export async function createBurger (params: CreateBurgerEntity): Promise<BurgerEntity> {
  return await BurgerService.create(params)
}

export async function updateBurger (params: UpdateBurgerEntity): Promise<BurgerEntity> {
  return await BurgerService.update(params)
}

export async function deleteBurger (params: UniqueBurgerEntity): Promise<BurgerEntity|null> {
  return await BurgerService.delete(params)
}
