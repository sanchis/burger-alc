import { CreateMarkEntity, MarkEntity } from 'server/domain/entities/Mark'
import MarkRepository from 'server/domain/MarkRepository'

export default class MarkUseCase {
  constructor (private readonly repository: MarkRepository) {
  }

  async findByBurgerId (burgerId: string): Promise<MarkEntity[]> {
    return await this.repository.findByBurgerId(burgerId)
  }

  async createMark (params: CreateMarkEntity): Promise<MarkEntity> {
    return await this.repository.createMark(params)
  }
}
