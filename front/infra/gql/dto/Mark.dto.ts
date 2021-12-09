import { Mark } from 'front/domain/entities/Mark'

export interface MarkInBurgerDTO{
  marksInBurger: Mark[]
}

export interface CreateMarkDTO{
  createMark: Mark
}
