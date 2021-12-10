import { Box, Center, Divider, Grid, Heading, Text } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import { BurgerInShop } from 'front/domain/entities/Burger'
import { ReactElement, useEffect } from 'react'
import { useMarkByBurger } from './hooks/useMarkByBurger'

interface Props{
  burger: BurgerInShop
  expanded: boolean
}

export default function BurgerMarks ({ burger, expanded }: Props): ReactElement {
  const { run, marks, loading } = useMarkByBurger()
  useEffect(() => {
    if (expanded) {
      run(burger.id)
      // TODO clear marks on collapse
    }
  }, [expanded])
  return (
    <>
      <Divider mb='3' />

      {loading &&
        <Center>
          <Spinner size='xl' />
        </Center>}

      {!loading && marks.length === 0
        ? <Heading size='md' align='center'>Por el momento no tenemos ninguna reseña sobre esta hamburguesa😔. Animate a crear una!</Heading>
        : null}

      <Grid gap='3' templateColumns='repeat(auto-fill, minmax(356px, 1fr))'>
        {marks.map(mark =>
          <Box key={mark.id} borderWidth='1px' borderColor='brand.500' p='3' textAlign='center'>
            <Heading>{mark.mark}</Heading>
            <Text>{mark.comment}</Text>
          </Box>
        )}
      </Grid>
    </>
  )
}
