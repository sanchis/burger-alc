import { BurgerInShop } from './entities/Burger'

export interface BurgerRepository{
  findBurgerInShop: (shopId: string) => Promise<BurgerInShop[]>
}
