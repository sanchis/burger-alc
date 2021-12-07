import { Shop } from 'front/domain/entities/Shop'
import { ShopRepository } from 'front/domain/ShopRepository'
import { SHOP_DETAIL, SHOP_LIST_ACTIVE } from '../gql'
import { ShopDetailDTO, ShopListActiveDTO } from '../gql/dto/Shop.dto'
import GqlFetcher from '../gql/fetcher'

export default class ShopGraphqlRepository extends GqlFetcher implements ShopRepository {
  async findActiveShops (): Promise<Shop[]> {
    return await this.fetchGql<ShopListActiveDTO>(SHOP_LIST_ACTIVE)
      .then(dto => dto.shopsActive)
  }

  async findShop (shopId: string): Promise<Shop> {
    return await this.fetchGql<ShopDetailDTO>(SHOP_DETAIL, { shopId })
      .then(data => data.shop)
  }
}
