import { UniqueBurgerEntity } from 'server/domain/entities/Burger'
import { BurgerUseCase } from 'server/usecases'

const burgerQueries = {
  burgers: async (parent: any) => await BurgerUseCase.getAll(),
  burger: async (parent: any, params: UniqueBurgerEntity) => await BurgerUseCase.findById(params),
  burgerInShop: async (parent: any, params: { shopId: string }) => await BurgerUseCase.findByShopId(params.shopId) // TODO obj param?
}
export default burgerQueries
