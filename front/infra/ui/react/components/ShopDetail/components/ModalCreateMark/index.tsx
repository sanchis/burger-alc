import { BurgerInShop } from 'front/domain/entities/Burger'
import { ReactElement } from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import CreateMarkForm from 'front/infra/ui/react/components/CreateMarkForm'

interface Props{
  isOpen: boolean
  onClose: () => void
  burger: BurgerInShop
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
