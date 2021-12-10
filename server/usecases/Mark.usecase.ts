import { CreateMarkEntity, MarkEntity } from 'server/domain/entities/Mark'
import MarkRepository from 'server/domain/MarkRepository'
import { BadInputError } from 'server/infra/errors'

export default class MarkUseCase {
  constructor (private readonly repository: MarkRepository) {
  }

  async findByBurgerId (burgerId: string): Promise<MarkEntity[]> {
    return await this.repository.findByBurgerId(burgerId)
  }

  async createMark (params: CreateMarkEntity): Promise<MarkEntity> {
    if (params.comment.trim().length > 280) {
      throw new BadInputError('Maximum number of characters allowed is 280')
    }

    if (params.mark > 10 || params.mark < 0) {
      throw new BadInputError('Mark value has to be between 0 and 10')
    }

    return await this.repository.createMark(params)
  }
}
