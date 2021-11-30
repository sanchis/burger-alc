import { createShop, deleteShop, updateShop } from '../../../controllers/Shop.controller'
import { CreateShopEntity, UniqueShopEntity, UpdateShopEntity } from '../../../core/entities/Shop'

const shopMutations = {
  createShop: async (parent: any, params: CreateShopEntity) => await createShop(params),
  updateShop: async (parent: any, params: UpdateShopEntity) => await updateShop(params),
  deleteShop: async (parent: any, params: UniqueShopEntity) => await deleteShop(params)
}
export default shopMutations
