import { MarkEntity } from 'server/domain/entities/Mark'
import MarkRepository from 'server/domain/MarkRepository'

export default class MarkUseCase {
  constructor (private readonly repository: MarkRepository) {
  }

  async getAll (): Promise<MarkEntity[]> {
    return await this.repository.getAll()
  }

  async findByBurgerId (burgerId: string): Promise<MarkEntity[]> {
    return await this.repository.findByBurgerId(burgerId)
  }
}