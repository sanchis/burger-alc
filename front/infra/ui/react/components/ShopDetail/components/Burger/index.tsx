import { AccordionButton, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Flex, Text } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/react'
import { BurgerInShop } from 'front/domain/entities/Burger'
import React, { ReactElement } from 'react'
import BurgerMarks from './components/BurgerMarks'
import ModalCreateMark from './components/ModalCreateMark'

interface Props{
  burger: BurgerInShop
  key?: string
}
export default function BurgerComponent ({ burger }: Props): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <AccordionItem
      key={burger.id} mb='2' mt='2'
      borderWidth='4px' borderRadius='xl'
      borderColor='brand.500'
    >
      {({ isExpanded }) => (
        <>
          <AccordionButton
            w='100%' display='block' textAlign='initial' padding='2' _focus={{ shadow: 'none' }}
          >
            <Flex h='200px'>
              <Image mr='2' src={burger.image} alt={burger.name} h='100%' width='300px' fit='cover' />
              <Text ml='2' flex='1'>{burger.description}</Text>
            </Flex>
          </AccordionButton>
          {burger.numberOfMarks}
          <Button w='100%' onClick={onOpen}>Crear reseña</Button>
          <ModalCreateMark isOpen={isOpen} onClose={onClose} burger={burger} />
          <AccordionPanel pb={4}>
            <BurgerMarks burger={burger} expanded={isExpanded} />
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}
