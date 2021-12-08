import { MarkEntity } from './entities/Mark'

export default interface MarkRepository{
  getAll: () => Promise<MarkEntity[]>
  findByBurgerId: (burgerId: string) => Promise<MarkEntity[]>
}
