import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import { ChakraProvider, Container } from '@chakra-ui/react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import theme from 'theme'

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql', // TODO save in env
  cache: new InMemoryCache()
})
function MyApp ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Container maxW='container.xl' centerContent>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp
