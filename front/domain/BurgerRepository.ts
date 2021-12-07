import { Burger } from './entities/Burger'

export interface BurgerRepository{
  findBurgerInShop: (shopId: string) => Promise<Burger[]>
}
