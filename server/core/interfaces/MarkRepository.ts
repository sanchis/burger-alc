import { CreateMarkEntity, MarkEntity, UniqueMarkEntity, UpdateMarkEntity } from '../entities/Mark'

export default interface MarkRepository {
  update: (params: UpdateMarkEntity) => Promise<MarkEntity>
  delete: (uniqueParams: UniqueMarkEntity) => Promise<MarkEntity>
  create: (obj: CreateMarkEntity) => Promise<MarkEntity>
  getById: (params: UniqueMarkEntity) => Promise<MarkEntity | null>
  getAll: () => Promise<MarkEntity[]>
}
