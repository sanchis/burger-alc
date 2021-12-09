import { CreateMark, Mark } from './entities/Mark'

export interface MarkRepository{
  findMarkInBurger: (burgerId: string) => Promise<Mark[]>
  createMark: (params: CreateMark) => Promise<Mark>
}
