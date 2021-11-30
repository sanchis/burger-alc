import { CreateMarkEntity, MarkEntity, UniqueMarkEntity, UpdateMarkEntity } from '../entities/Mark'
import { NotImplementedError } from '../errors'
import MarkRepository from '../interfaces/MarkRepository'
import PrismaDb from './Prisma'

export default class BurgerPrismaRepository extends PrismaDb implements MarkRepository {
  async create (obj: CreateMarkEntity): Promise<MarkEntity> {
    throw new NotImplementedError()
  }

  async update (params: UpdateMarkEntity): Promise<MarkEntity> {
    throw new NotImplementedError()
  }

  async delete (uniqueParams: UniqueMarkEntity): Promise<MarkEntity> {
    throw new NotImplementedError()
  }

  async getById (params: UniqueMarkEntity): Promise<MarkEntity |null > {
    return this.db.mark.findUnique({ where: params })
  }

  async getAll (): Promise<MarkEntity[]> {
    return this.db.mark.findMany()
  }
}
