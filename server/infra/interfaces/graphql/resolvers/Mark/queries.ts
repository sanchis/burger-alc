import { MarkUseCase } from 'server/usecases'

const burgerQueries = {
  marksInBurger: async (parent: any, params: { burgerId: string }) => await MarkUseCase.findByBurgerId(params.burgerId)
}
export default burgerQueries
