import { CreateMarkEntity } from 'server/domain/entities/Mark'
import { MarkUseCase } from 'server/usecases'

const markMutations = {
  createMark: async (parent: any, params: CreateMarkEntity) => {
    return await MarkUseCase.createMark(params)
  }
}
export default markMutations
