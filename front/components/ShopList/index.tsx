import { Grid } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { useShopList } from './hooks/useShopList'
import ShopItem from '../ShopItem'

export default function ShopList (): ReactElement {
  const { loading, data } = useShopList()
  return (
    <Grid w='100%' gap='6' templateColumns='repeat(auto-fill, minmax(346px, 1fr))'>
      {loading ? <Spinner size='xl' alignContent='center' /> : null}
      {data.map(shop => <ShopItem shop={shop} key={shop.id} />)}
    </Grid>
  )
}
