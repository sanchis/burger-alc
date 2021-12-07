import { Shop } from './entities/Shop'

export interface ShopRepository{
  findActiveShops: () => Promise<Shop[]>
  findShop: (id: string) => Promise<Shop>
}
