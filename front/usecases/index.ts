
import ShopUC from './Shop.usecase'
import BurgerUC from './Burger.usecase'
import ShopGraphqlRepository from 'front/infra/adapters/Shop.repository'
import BurgerGraphqlRepository from 'front/infra/adapters/Burger.respository'

export const ShopUseCase = new ShopUC(new ShopGraphqlRepository())
export const BurgerUseCase = new BurgerUC(new BurgerGraphqlRepository())
