import { CreateShopEntity, ShopEntity, UniqueShopEntity, UpdateShopEntity } from '../entities/Shop'

export default interface ShopRepository {
  getById: (params: UniqueShopEntity) => Promise<ShopEntity | null>
  getAll: () => Promise<ShopEntity[]>
  update: (params: UpdateShopEntity) => Promise<ShopEntity>
  delete: (params: UniqueShopEntity) => Promise<ShopEntity | null>
  create: (obj: CreateShopEntity) => Promise<ShopEntity>
}
