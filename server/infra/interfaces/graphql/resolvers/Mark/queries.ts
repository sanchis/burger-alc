import { MarkUseCase } from 'server/usecases'

const burgerQueries = {
  marks: async (parent: any) => await MarkUseCase.getAll(),
  marksInBurger: async (parent: any, params: { burgerId: string }) => await MarkUseCase.findByBurgerId(params.burgerId)
}
export default burgerQueries
