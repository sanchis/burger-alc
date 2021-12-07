import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import { ChakraProvider, Container, Center } from '@chakra-ui/react'
import Image from 'next/image'
import theme from 'theme'
import logo from '../public/img/logo.svg'

function MyApp ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='container.xl'>
        <header>
          <Center m='7'>
            <Image width='200px' height='200px' src={logo} alt='logo' />
          </Center>
        </header>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
