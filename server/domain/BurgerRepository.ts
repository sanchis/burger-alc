import { BurgerEntity, UniqueBurgerEntity, BurgerListEntity } from './entities/Burger'

export default interface BurgerRepository {
  getById: (params: UniqueBurgerEntity) => Promise<BurgerEntity | null>
  getByShopId: (shopId: string) => Promise<BurgerListEntity[]>
  getAll: () => Promise<BurgerEntity[]>
}
