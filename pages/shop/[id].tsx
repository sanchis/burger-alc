import { Burger } from 'front/domain/entities/Burger'
import { Shop } from 'front/domain/entities/Shop'
import ShopDetail from 'front/infra/ui/react/components/ShopDetail'
import { BurgerUseCase, ShopUseCase } from 'front/usecases'
import { GetServerSideProps } from 'next'
import React, { ReactElement } from 'react'

interface Props {
  shop: Shop
  burgers: Burger[]
}

export default function Detail ({ shop, burgers }: Props): ReactElement {
  return (
    <>
      {shop !== null
        ? <ShopDetail shop={shop} burgers={burgers} />
        : 'Shop not found'}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const shopId = context?.params?.id as string
  return {
    props: {
      shop: await ShopUseCase.findShop(shopId),
      burgers: await BurgerUseCase.findBurgerInShop(shopId)
    }
  }
}
