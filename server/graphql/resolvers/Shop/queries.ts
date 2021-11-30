import { getShopById, getShopList } from '../../../controllers/Shop.controller'
import { UniqueShopEntity } from '../../../core/entities/Shop'

const shopQueries = {
  shops: async () => await getShopList(),
  shop: async (parent: any, params: UniqueShopEntity) => await getShopById(params)
}
export default shopQueries
