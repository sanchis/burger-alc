import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Center, Divider, Flex, Heading, Text } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import { Textarea } from '@chakra-ui/textarea'
import { Burger } from 'front/domain/entities/Burger'
import { Mark, CreateMark } from 'front/domain/entities/Mark'
import { MarkUseCase } from 'front/usecases'
import React, { FormEvent, ReactElement, useState } from 'react'
import { MdAdd, MdHorizontalRule } from 'react-icons/md'
import { useLazyCaller } from '../../hooks/useLazyCaller'
import { useNotification } from '../../hooks/useNotification'

interface Props{
  burger: Burger
  onCreate: (mar: Mark) => void
  onCancel: () => void
}

export default function CreateMarkForm ({ burger, onCreate, onCancel }: Props): ReactElement {
  const [mark, setMark] = useState(0)
  const { loading, run } = useLazyCaller<Mark, CreateMark>(async (params: CreateMark) => await MarkUseCase.createMark(params))
  const { showNotification } = useNotification()
  const [comment, setComment] = useState('')

  function incrementMark (): void {
    setMark(mark => mark > 9 ? mark : mark + 1)
  }

  function decrementMark (): void {
    setMark(mark => mark < 1 ? mark : mark - 1)
  }

  function validComment (): boolean {
    return comment.trim() !== ''
  }

  function onSubmit (event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    if (!validComment()) {
      return
    }
    run({
      burgerId: burger.id,
      mark,
      comment
    }).then(mark => {
      onCreate(mark)
      setComment('')
      setMark(0)
      showNotification({
        status: 'success',
        title: 'Reseña creada',
        description: `La reseña para ${burger.name} se ha creado con exito!`
      })
    }).catch(error => {
      console.error(error)
      showNotification({
        status: 'error',
        title: 'Error crear reseña',
        description: 'Se ha producido un error al intentar crear la reseña'
      })
    })
  }

  const formInputs = (
    <>
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
        <Heading>{mark}</Heading>
        <Button ml='4' variant='outline' onClick={incrementMark}>
          <MdAdd />
        </Button>
      </Center>
      <Divider mt='3' mb='3' />
      <Textarea
        value={comment}
        isRequired
        isInvalid={!validComment()}
        onChange={event => setComment(event.target.value)}
        placeholder='Tu reseña'
        size='sm'
        name='comment'
        resize='vertical'
      />
    </>
  )

  return (
    <>
      <form onSubmit={onSubmit} id='createMark'>
        {loading
          ? <Center><Spinner size='xl' /></Center>
          : formInputs}

        <Flex mt='4' justifyContent='flex-end'>
          <Button variant='outline' mr={3} onClick={onCancel}>
            Cerrar
          </Button>
          <Button type='submit' isLoading={loading}>Enviar</Button>
        </Flex>
      </form>

    </>
  )
}
