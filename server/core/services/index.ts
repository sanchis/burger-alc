import BurgerPrismaRepository from '../repositories/Burger.repository'
import ShopPrismaRepository from '../repositories/Shop.repository'
import ShopSrv from './Shop.service'
import BurgerSrv from './Burger.service'

export const ShopService = new ShopSrv(new ShopPrismaRepository())
export const BurgerService = new BurgerSrv(new BurgerPrismaRepository())
