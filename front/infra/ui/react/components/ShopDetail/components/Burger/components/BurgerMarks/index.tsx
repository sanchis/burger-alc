import { Center, Divider, Heading } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import { Burger } from 'front/domain/entities/Burger'
import { ReactElement, useEffect } from 'react'
import { useMarkByBurger } from './hooks/useMarkByBurger'

interface Props{
  burger: Burger
  expanded: boolean
}

export default function BurgerMarks ({ burger, expanded }: Props): ReactElement {
  const { fetch, marks, loading } = useMarkByBurger(burger.id)
  useEffect(() => {
    if (expanded) {
      fetch()
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

      {/*
        <Divider />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. */}
    </>
  )
}
