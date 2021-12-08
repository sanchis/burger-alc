import { MarkEntity } from './entities/Mark'

export default interface MarkRepository{
  findByBurgerId: (burgerId: string) => Promise<MarkEntity[]>
}
