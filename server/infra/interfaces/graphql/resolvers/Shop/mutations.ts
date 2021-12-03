import { CreateShopEntity, UpdateShopEntity, UniqueShopEntity } from 'server/domain/entities/Shop'
import { ShopUseCase } from 'server/usecases'

const shopMutations = {
  createShop: async (parent: any, params: CreateShopEntity) => await ShopUseCase.create(params),
  updateShop: async (parent: any, params: UpdateShopEntity) => await ShopUseCase.update(params),
  deleteShop: async (parent: any, params: UniqueShopEntity) => await ShopUseCase.delete(params)
}
export default shopMutations
