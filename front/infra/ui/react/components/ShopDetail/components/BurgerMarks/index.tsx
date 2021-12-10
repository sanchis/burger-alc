import { Center, Divider, Grid, Heading } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import { BurgerInShop } from 'front/domain/entities/Burger'
import { ReactElement, useEffect } from 'react'
import { useMarkByBurger } from './hooks/useMarkByBurger'
import Mark from '../Mark'
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

      {!loading && marks.length > 0 && expanded &&
        <Grid gap='3' templateColumns='repeat(auto-fill, minmax(356px, 1fr))'>
          {marks.map(mark => <Mark maxHeight='200px' mark={mark} key={mark.id} />)}
        </Grid>}
    </>
  )
}
