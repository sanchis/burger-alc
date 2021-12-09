export interface Burger{
  id: string
  name: string
  price?: number
  description?: string
  image?: string
}

export interface BurgerInShop extends Burger{
  numberOfMarks: number
}
