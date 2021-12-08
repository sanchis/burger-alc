import { UniqueShopEntity, ShopEntity } from './entities/Shop'

export default interface ShopRepository {
  getById: (params: UniqueShopEntity) => Promise<ShopEntity | null>
  getAll: () => Promise<ShopEntity[]>
  getAllActive: () => Promise<ShopEntity[]>
}
