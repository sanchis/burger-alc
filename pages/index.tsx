import { ReactElement } from 'react'
import logo from '../public/img/logo.svg'
import { Center } from '@chakra-ui/layout'
import Image from 'next/image'
import ShopList from 'front/components/ShopList'

export default function Home (): ReactElement {
  return (
    <>
      <header>
        <Center m='7'>
          <Image width='200px' height='200px' src={logo} alt='logo' />
        </Center>
      </header>
      <ShopList />
    </>
  )
}
