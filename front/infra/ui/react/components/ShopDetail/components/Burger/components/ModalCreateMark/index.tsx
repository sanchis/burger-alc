import { Burger } from 'front/domain/entities/Burger'
import React, { ReactElement, useState } from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Textarea } from '@chakra-ui/textarea'
import { Image } from '@chakra-ui/image'
import { Center, Divider, Heading, Text } from '@chakra-ui/layout'
import { MdAdd, MdHorizontalRule } from 'react-icons/md'

interface Props{
  isOpen: boolean
  onClose: () => void
  burger: Burger
}

export default function ModalCreateMark ({ onClose, isOpen, burger }: Props): ReactElement {
  const [markNumber, setMarkNumber] = useState(0)

  function incrementMark (): void {
    setMarkNumber(mark => mark > 9 ? mark : mark + 1)
  }

  function decrementMark (): void {
    setMarkNumber(mark => mark < 1 ? mark : mark - 1)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Reseña: {burger.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center>
            <Image mr='2' src={burger.image} alt={burger.name} w='auto' h='150px' textAlign='center' />
          </Center>
          <Text p='2'>
            {burger.description}
          </Text>

          <Center>
            <Heading mb='2' size='md'>Puntuación</Heading>
          </Center>
          <Center>
            <Button mr='4' variant='outline' onClick={decrementMark}>
              <MdHorizontalRule />
            </Button>
            <Heading>{markNumber}</Heading>
            <Button ml='4' variant='outline' onClick={incrementMark}>
              <MdAdd />
            </Button>
          </Center>
          <Divider mt='3' mb='3' />
          <Textarea
            placeholder='Tu reseña'
            size='sm'
            resize='vertical'
          />
        </ModalBody>

        <ModalFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cerrar
          </Button>
          <Button>Enviar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
