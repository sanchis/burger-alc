import { CreateMarkEntity, MarkEntity } from './entities/Mark'

export default interface MarkRepository{
  findByBurgerId: (burgerId: string) => Promise<MarkEntity[]>
  createMark: (params: CreateMarkEntity) => Promise<MarkEntity>
}
