import { getShopById, getShopList, getShopListActive } from '../../../controllers/Shop.controller'
import { UniqueShopEntity } from '../../../core/entities/Shop'

const shopQueries = {
  shops: async () => await getShopList(),
  shopsActive: async () => await getShopListActive(),
  shop: async (parent: any, params: UniqueShopEntity) => await getShopById(params)
}
export default shopQueries
