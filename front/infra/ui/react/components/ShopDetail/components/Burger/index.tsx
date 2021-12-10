import { AccordionButton, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Divider, Flex, HStack, Stack, Text } from '@chakra-ui/layout'
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
      padding='2'
    >
      {({ isExpanded }) => (
        <>
          <Flex h='200px'>
            <Image mr='2' src={burger.image} alt={burger.name} h='100%' width='300px' fit='cover' />
            <Stack flex='1'>
              <Text ml='2' flex='1'>{burger.description}</Text>
              <Divider />
              <HStack>
                <AccordionButton p='0' w='auto'>
                  <Button>{burger.numberOfMarks} Reseñas realizadas</Button>
                </AccordionButton>
                <Button onClick={onOpen}>Crear reseña</Button>
              </HStack>
            </Stack>
          </Flex>
          <ModalCreateMark isOpen={isOpen} onClose={onClose} burger={burger} />
          <AccordionPanel pb={4}>
            <BurgerMarks burger={burger} expanded={isExpanded} />
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}
