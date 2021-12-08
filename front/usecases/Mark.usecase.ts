import { Mark } from 'front/domain/entities/Mark'
import { MarkRepository } from 'front/domain/MarkRepository'

export default class MarkUseCase {
  constructor (private readonly repository: MarkRepository) {}

  async findMarksByBurgerId (burgerId: string): Promise<Mark[]> {
    return await this.repository.findMarkInBurger(burgerId)
  }
}
