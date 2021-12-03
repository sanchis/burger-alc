import { BurgerEntity, CreateBurgerEntity, UniqueBurgerEntity, UpdateBurgerEntity } from './entities/Burger'

export default interface BurgerRepository {
  update: (params: UpdateBurgerEntity) => Promise<BurgerEntity>
  delete: (uniqueParams: UniqueBurgerEntity) => Promise<BurgerEntity>
  create: (obj: CreateBurgerEntity) => Promise<BurgerEntity>
  getById: (params: UniqueBurgerEntity) => Promise<BurgerEntity | null>
  getByShopId: (shopId: string) => Promise<BurgerEntity[]>
  getAll: () => Promise<BurgerEntity[]>
}
