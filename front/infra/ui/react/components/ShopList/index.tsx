import { Grid } from '@chakra-ui/layout'
import React, { ReactElement } from 'react'
import ShopItem from './components/ShopItem'
import { Shop } from 'front/domain/entities/Shop'

interface Props{
  shops: Shop[]
}

export default function ShopList ({ shops }: Props): ReactElement {
  return (
    <Grid w='100%' gap='6' templateColumns='repeat(auto-fill, minmax(346px, 1fr))'>
      {shops.map(shop => <ShopItem shop={shop} key={shop.id} />)}
    </Grid>
  )
}
