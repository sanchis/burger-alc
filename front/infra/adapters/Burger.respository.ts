import { BurgerRepository } from 'front/domain/BurgerRepository'
import { BURGER_IN_SHOP } from '../gql'
import GqlFetcher from '../gql/fetcher'
import { BurgerInShop } from 'front/domain/entities/Burger'
import { BurgerInShopDTO } from '../gql/dto/Burger.dto'

export default class BurgerGraphqlRepository extends GqlFetcher implements BurgerRepository {
  async findBurgerInShop (shopId: string): Promise<BurgerInShop[]> {
    return await this.fetchGql<BurgerInShopDTO>(BURGER_IN_SHOP, { shopId })
      .then(dto => dto.burgerInShop)
  }
}
