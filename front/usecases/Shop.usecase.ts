import { Shop } from 'front/domain/entities/Shop'
import { ShopRepository } from 'front/domain/ShopRepository'

export default class ShopUseCase {
  constructor (private readonly repository: ShopRepository) {
  }

  async findShop (id: string): Promise<Shop> {
    return await this.repository.findShop(id)
  }

  async findActiveShops (): Promise<Shop[]> {
    return await this.repository.findActiveShops()
  }
}
