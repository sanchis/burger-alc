import { getBurgerById, getBurgerByShopId, getBurgerList } from '../../../controllers/Burger.controller'
import { UniqueBurgerEntity } from '../../../core/entities/Burger'

const burgerQueries = {
  burgers: async (parent: any) => await getBurgerList(),
  burger: async (parent: any, params: UniqueBurgerEntity) => await getBurgerById(params),
  burgerInShop: async (parent: any, params: { shopId: string }) => await getBurgerByShopId(params.shopId)
}
export default burgerQueries
