import { BurgerEntity, CreateBurgerEntity, UniqueBurgerEntity, UpdateBurgerEntity } from '../entities/Burger'
import BurgerRepository from '../interfaces/BurgerRepository'

export default class ShopService {
  constructor (private readonly repository: BurgerRepository) {
  }

  async getAll (): Promise<BurgerEntity[]> {
    return await this.repository.getAll()
  }

  async findById (params: UniqueBurgerEntity): Promise<BurgerEntity| null> {
    return await this.repository.getById(params)
  }

  async create (params: CreateBurgerEntity): Promise<BurgerEntity> {
    return await this.repository.create(params)
  }

  async update (params: UpdateBurgerEntity): Promise<BurgerEntity> {
    return await this.repository.update(params)
  }

  async delete (params: UniqueBurgerEntity): Promise<BurgerEntity|null> {
    return await this.repository.delete(params)
  }
}
