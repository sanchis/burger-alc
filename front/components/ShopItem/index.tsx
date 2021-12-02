import Icon from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Box, Divider, Heading, HStack, Stack, Text } from '@chakra-ui/layout'
import { ShopListModel } from 'front/models/ShopList'
import React, { ReactElement } from 'react'
import { MdLocationOn } from 'react-icons/md'

interface Props {
  shop: ShopListModel
  key?: string
}

export default function ShopItem ({ shop }: Props): ReactElement {
  return (
    <Stack key={shop.id} borderColor='brand.500' borderWidth='1px'>
      <Image src={shop.image} alt={`Image ${shop.name}`} width='100%' h='400px' fit='contain' fallbackSrc='https://via.placeholder.com/150' />
      <Stack p='3' h='100%' flex='1'>
        <Heading>{shop.name}</Heading>
        <Divider />
        <Text flex='1'>{shop.description}</Text>
        <Divider />
        <HStack fontSize='sm'>
          <Icon as={MdLocationOn} h='18' w='18' color='brand.500' />
          <Text>{shop.address}</Text>
        </HStack>
      </Stack>
    </Stack>
  )
}
