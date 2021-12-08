import PrismaDb from './Prisma'
import ShopRepository from 'server/domain/ShopRepository'
import { ShopEntity, UniqueShopEntity } from 'server/domain/entities/Shop'

export default class ShopPrismaRepository extends PrismaDb implements ShopRepository {
  async getById (params: UniqueShopEntity): Promise<ShopEntity |null > {
    return await this.db.shop.findUnique({ where: params })
  }

  async getAll (): Promise<ShopEntity[]> {
    return await this.db.shop.findMany()
  }

  async getAllActive (): Promise<ShopEntity[]> {
    return await this.db.shop.findMany({ where: { active: true } })
  }
}
