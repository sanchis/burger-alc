import { ReactElement } from 'react'
import logo from '../public/img/logo.svg'
import { Center } from '@chakra-ui/layout'
import Image from 'next/image'
import ShopList from 'front/infra/ui/react/components/ShopList'
import { ShopUseCase } from 'front/usecases'
import { GetServerSideProps } from 'next'
import { Shop } from 'front/domain/entities/Shop'

interface Props{
  shops: Shop[]
}

export default function Home ({ shops }: Props): ReactElement {
  return (
    <>
      <header>
        <Center m='7'>
          <Image width='200px' height='200px' src={logo} alt='logo' />
        </Center>
      </header>
      <ShopList shops={shops} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      shops: await ShopUseCase.findActiveShops()
    }
  }
}
