import { createBurger } from '../../../controllers/Burger.controller'
import { CreateBurgerEntity } from '../../../core/entities/Burger'

const burgerMutations = {
  createBurger: async (parent: any, params: CreateBurgerEntity) => await createBurger(params)
}
export default burgerMutations
