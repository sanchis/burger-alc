import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from 'theme'

function MyApp ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='container.xl' centerContent>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
