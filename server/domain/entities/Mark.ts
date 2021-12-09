import { Mark } from '@prisma/client'

export interface MarkEntity extends Mark {

}

export interface UpdateMarkEntity {
  mark: number
  comment: string
  burgerId: string
}

export interface CreateMarkEntity extends UpdateMarkEntity{

}

export interface UniqueMarkEntity{
  id: string
}
