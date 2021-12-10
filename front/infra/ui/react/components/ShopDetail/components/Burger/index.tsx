import { AccordionButton, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Divider, Flex, Stack, Text } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/react'
import { BurgerInShop } from 'front/domain/entities/Burger'
import React, { ReactElement } from 'react'
import BurgerMarks from '../BurgerMarks'
import ModalCreateMark from '../ModalCreateMark'

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
              <Stack direction={['column', 'column', 'column', 'row']} spacing='2'>
                <AccordionButton
                  w='auto' display='inline-flex' as={Button} _hover={{
                    background: 'brand.300'
                  }}
                >
                  {burger.numberOfMarks} Reseñas realizadas
                </AccordionButton>
                <Button onClick={onOpen}>Crear reseña</Button>
              </Stack>
            </Stack>
          </Flex>
          <ModalCreateMark isOpen={isOpen} onClose={onClose} burger={burger} />
          <AccordionPanel p='0'>
            <BurgerMarks burger={burger} expanded={isExpanded} />
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}
