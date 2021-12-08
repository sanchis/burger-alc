import { BurgerEntity, UniqueBurgerEntity } from './entities/Burger'

export default interface BurgerRepository {
  getById: (params: UniqueBurgerEntity) => Promise<BurgerEntity | null>
  getByShopId: (shopId: string) => Promise<BurgerEntity[]>
  getAll: () => Promise<BurgerEntity[]>
}
