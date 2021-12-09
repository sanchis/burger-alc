import { Burger } from 'front/domain/entities/Burger'
import { FormEvent, ReactElement, useState } from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Textarea } from '@chakra-ui/textarea'
import { Image } from '@chakra-ui/image'
import { Center, Divider, Heading, Text } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import { MdAdd, MdHorizontalRule } from 'react-icons/md'
import { MarkUseCase } from 'front/usecases'
import { CreateMark, Mark } from 'front/domain/entities/Mark'
import { useLazyCaller } from 'front/infra/ui/react/hooks/useLazyCaller'
import CreateMarkForm from 'front/infra/ui/react/components/CreateMarkForm'

interface Props{
  isOpen: boolean
  onClose: () => void
  burger: Burger
}

export default function ModalCreateMark ({ onClose, isOpen, burger }: Props): ReactElement {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Reseña: {burger.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CreateMarkForm burger={burger} onCreate={onClose} onCancel={onClose} />
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}
