import { BurgerEntity, UniqueBurgerEntity } from '../domain/entities/Burger'
import BurgerRepository from '../domain/BurgerRepository'

export default class ShopUseCase {
  constructor (private readonly repository: BurgerRepository) {
  }

  async getAll (): Promise<BurgerEntity[]> {
    return await this.repository.getAll()
  }

  async findById (params: UniqueBurgerEntity): Promise<BurgerEntity| null> {
    return await this.repository.getById(params)
  }

  async findByShopId (shopId: string): Promise<BurgerEntity[]> {
    return await this.repository.getByShopId(shopId)
  }
}
