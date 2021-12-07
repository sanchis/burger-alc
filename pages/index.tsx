import { ReactElement } from 'react'
import ShopList from 'front/infra/ui/react/components/ShopList'
import { ShopUseCase } from 'front/usecases'
import { GetServerSideProps } from 'next'
import { Shop } from 'front/domain/entities/Shop'

interface Props{
  shops: Shop[]
}

export default function Home ({ shops }: Props): ReactElement {
  return (
    <ShopList shops={shops} />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      shops: await ShopUseCase.findActiveShops()
    }
  }
}
