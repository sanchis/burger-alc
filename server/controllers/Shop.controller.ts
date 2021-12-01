import { CreateShopEntity, ShopEntity, UniqueShopEntity, UpdateShopEntity } from '../core/entities/Shop'
import { ShopService } from '../core/services'

export async function getShopList (): Promise<ShopEntity[]> {
  return await ShopService.getAll()
}

export async function getShopById (params: UniqueShopEntity): Promise<ShopEntity | null> {
  return await ShopService.findById(params)
}

export async function createShop (params: CreateShopEntity): Promise<ShopEntity> {
  return await ShopService.create(params)
}

export async function updateShop (params: UpdateShopEntity): Promise<ShopEntity> {
  return await ShopService.update(params)
}

export async function deleteShop (params: UniqueShopEntity): Promise<ShopEntity|null> {
  return await ShopService.delete(params)
}

export async function getShopListActive (): Promise<ShopEntity[]> {
  return await ShopService.getAllActive()
}
