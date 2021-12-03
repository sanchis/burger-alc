import { CreateBurgerEntity } from 'server/domain/entities/Burger'
import { BurgerUseCase } from 'server/usecases'

const burgerMutations = {
  createBurger: async (parent: any, params: CreateBurgerEntity) => await BurgerUseCase.create(params)
}
export default burgerMutations
