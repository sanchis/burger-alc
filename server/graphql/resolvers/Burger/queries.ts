import { getBurgerById, getBurgerList } from '../../../controllers/Burger.controller'
import { UniqueBurgerEntity } from '../../../core/entities/Burger'

const burgerQueries = {
  burgers: async (parent: any) => await getBurgerList(),
  burger: async (parent: any, params: UniqueBurgerEntity) => await getBurgerById(params)
}
export default burgerQueries
