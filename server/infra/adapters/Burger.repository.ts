import { BurgerEntity, UniqueBurgerEntity } from '../../domain/entities/Burger'
import BurgerRepository from '../../domain/BurgerRepository'
import PrismaDb from './Prisma'

export default class BurgerPrismaRepository extends PrismaDb implements BurgerRepository {
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
