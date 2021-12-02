import PrismaCodeToError from 'prisma/PrismaErrors'
import { BurgerEntity, CreateBurgerEntity, UniqueBurgerEntity, UpdateBurgerEntity } from '../entities/Burger'
import BurgerRepository from '../interfaces/BurgerRepository'
import PrismaDb from './Prisma'

export default class BurgerPrismaRepository extends PrismaDb implements BurgerRepository {
  async create (obj: CreateBurgerEntity): Promise<BurgerEntity> {
    return await this.db.burger.create({ data: obj })
  }

  async update (params: UpdateBurgerEntity): Promise<BurgerEntity> {
    const { id, ...rest } = params
    return await this.db.burger.update({ data: rest, where: { id } })
      .catch(PrismaCodeToError)
  }

  async delete (uniqueParams: UniqueBurgerEntity): Promise<BurgerEntity> {
    return await this.db.burger.delete({ where: uniqueParams })
      .catch(PrismaCodeToError)
  }

  async getById (params: UniqueBurgerEntity): Promise<BurgerEntity |null > {
    return await this.db.burger.findUnique({ where: params })
  }

  async getByShopId (shopId: string): Promise<BurgerEntity[]> {
    return await this.db.burger.findMany({
      where: {
        shopId
      }
    })
  }

  async getAll (): Promise<BurgerEntity[]> {
    return await this.db.burger.findMany()
  }
}
