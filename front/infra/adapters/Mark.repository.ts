import { CreateMark, Mark } from 'front/domain/entities/Mark'
import { MarkRepository } from 'front/domain/MarkRepository'
import { CREATE_MARK, MARK_IN_BURGER } from '../gql'
import { CreateMarkDTO, MarkInBurgerDTO } from '../gql/dto/Mark.dto'
import GqlFetcher from '../gql/fetcher'

export default class MarkGraphqlRepository extends GqlFetcher implements MarkRepository {
  async findMarkInBurger (burgerId: string): Promise<Mark[]> {
    return await this.fetchGql<MarkInBurgerDTO>(MARK_IN_BURGER, { burgerId })
      .then(response => response.marksInBurger)
  }

  async createMark (params: CreateMark): Promise<Mark> {
    return await this.fetchGql<CreateMarkDTO>(CREATE_MARK, params)
      .then(data => data.createMark)
  }
}
