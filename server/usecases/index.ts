
import ShopUC from './Shop.usecase'
import BurgerUC from './Burger.usecase'
import BurgerPrismaRepository from 'server/infra/adapters/Burger.repository'
import ShopPrismaRepository from 'server/infra/adapters/Shop.repository'

export const ShopUseCase = new ShopUC(new ShopPrismaRepository())
export const BurgerUseCase = new BurgerUC(new BurgerPrismaRepository())
