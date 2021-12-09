import PrismaDb from './Prisma'
import MarkRepository from 'server/domain/MarkRepository'
import { CreateMarkEntity, MarkEntity } from 'server/domain/entities/Mark'

export default class MarkPrismaRepository extends PrismaDb implements MarkRepository {
  async findByBurgerId (burgerId: string): Promise<MarkEntity[]> {
    return await this.db.mark.findMany({
      where: {
        burgerId
      }
    })
  }

  async createMark (params: CreateMarkEntity): Promise<MarkEntity> {
    return await this.db.mark.create({ data: params })
  }
}
