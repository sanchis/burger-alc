import { Image } from '@chakra-ui/image'
import { Divider, Heading, Stack, Text } from '@chakra-ui/layout'
import { Burger } from 'front/domain/entities/Burger'
import { Shop } from 'front/domain/entities/Shop'
import { ReactElement } from 'react'

interface Props{
  shop: Shop
  burgers: Burger[]
}

export default function ShopDetail ({ shop, burgers }: Props): ReactElement {
  // TODO move map to component
  return (
    <Stack spacing='6'>
      <Image src={shop.image} alt={`logo of ${shop.name}`} width='100%' h='300px' objectPosition='center' fit='cover' />
      <div>
        <Heading>{shop.name}</Heading>
        <Divider />
        <Text>{shop.description}</Text>
      </div>

      <div>
        <Heading size='lg'>Donde estamos</Heading>
        <Divider mb='2' />
        {shop?.gMapsHash !== null && shop?.gMapsHash !== undefined && shop?.gMapsHash !== ''
          ? <iframe
              src={`https://www.google.com/maps/embed?pb=${shop.gMapsHash}`}
              allowFullScreen loading='lazy' width='100%' height='300px'
            />
          : 'Aun no tenemos localizacion para este restaurante 😕'}
      </div>

      <div>
        <Heading size='lg'>Hamburguesas </Heading>
        <Divider />
        <Stack>
          {burgers.map(burger =>
            <p key={burger.id}>{burger.name}</p>
          )}
        </Stack>
      </div>

    </Stack>
  )
}
