import { BurgerRepository } from 'front/domain/BurgerRepository'
import { Burger } from 'front/domain/entities/Burger'

export default class BurgerUseCase {
  constructor (private readonly repository: BurgerRepository) {}

  async findBurgerInShop (shopId: string): Promise<Burger[]> {
    return await this.repository.findBurgerInShop(shopId)
  }
}
