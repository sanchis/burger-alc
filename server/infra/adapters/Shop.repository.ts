import PrismaCodeToError from '../../../prisma/PrismaErrors'
import PrismaDb from './Prisma'
import ShopRepository from 'server/domain/ShopRepository'
import { UpdateShopEntity, ShopEntity, UniqueShopEntity, CreateShopEntity } from 'server/domain/entities/Shop'

export default class ShopPrismaRepository extends PrismaDb implements ShopRepository {
  async update (params: UpdateShopEntity): Promise<ShopEntity> {
    const { id, ...rest } = params
    return await this.db.shop.update({
      data: rest,
      where: { id }
    }).catch(PrismaCodeToError)
  }

  async delete (uniqueParams: UniqueShopEntity): Promise<ShopEntity | null> {
    return await this.db.shop.delete({ where: uniqueParams })
      .catch(PrismaCodeToError)
  }

  async create (obj: CreateShopEntity): Promise<ShopEntity> {
    return await this.db.shop.create({
      data: obj
    }).catch(PrismaCodeToError)
  }

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