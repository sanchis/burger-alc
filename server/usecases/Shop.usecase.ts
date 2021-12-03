import { ShopEntity, UniqueShopEntity, CreateShopEntity, UpdateShopEntity } from 'server/domain/entities/Shop'
import ShopRepository from 'server/domain/ShopRepository'

export default class ShopUseCase {
  constructor (private readonly repository: ShopRepository) {
  }

  async getAll (): Promise<ShopEntity[]> {
    return await this.repository.getAll()
  }

  async getAllActive (): Promise<ShopEntity[]> {
    return await this.repository.getAllActive()
  }

  async findById (params: UniqueShopEntity): Promise<ShopEntity| null> {
    return await this.repository.getById(params)
  }

  async create (params: CreateShopEntity): Promise<ShopEntity> {
    return await this.repository.create(params)
  }

  async update (params: UpdateShopEntity): Promise<ShopEntity> {
    return await this.repository.update(params)
  }

  async delete (params: UniqueShopEntity): Promise<ShopEntity|null> {
    return await this.repository.delete(params)
  }
}
