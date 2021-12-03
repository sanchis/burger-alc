import { UniqueShopEntity } from 'server/domain/entities/Shop'
import { ShopUseCase } from 'server/usecases'

const shopQueries = {
  shops: async () => await ShopUseCase.getAll(),
  shopsActive: async () => await ShopUseCase.getAllActive(),
  shop: async (parent: any, params: UniqueShopEntity) => await ShopUseCase.findById(params)
}
export default shopQueries
