import { BurgerEntity, BurgerListEntity, UniqueBurgerEntity } from '../../domain/entities/Burger'
import BurgerRepository from '../../domain/BurgerRepository'
import PrismaDb from './Prisma'

export default class BurgerPrismaRepository extends PrismaDb implements BurgerRepository {
  async getById (params: UniqueBurgerEntity): Promise<BurgerEntity |null > {
    return await this.db.burger.findUnique({ where: params })
  }

  async getByShopId (shopId: string): Promise<BurgerListEntity[]> {
    return await this.db.burger.findMany({
      where: {
        shopId
      },
      include: {
        _count: {
          select: {
            marks: true
          }
        }
      }
    }).then(data => data.map(burger => {
      const { _count, ...rest } = burger
      return {
        ...rest,
        numberOfMarks: _count.marks ?? 0
      }
    }))
  }

  async getAll (): Promise<BurgerEntity[]> {
    return await this.db.burger.findMany()
  }
}
