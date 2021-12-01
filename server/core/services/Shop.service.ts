import { CreateShopEntity, ShopEntity, UniqueShopEntity, UpdateShopEntity } from '../entities/Shop'
import ShopRepository from '../interfaces/ShopRepository'

export default class ShopService {
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
