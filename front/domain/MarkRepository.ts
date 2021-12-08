import { Mark } from './entities/Mark'

export interface MarkRepository{
  findMarkInBurger: (burgerId: string) => Promise<Mark[]>
}
