import Icon from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Divider, Heading, HStack, Stack, Text } from '@chakra-ui/layout'
import { ReactElement } from 'react'
import { MdLocationOn } from 'react-icons/md'
import NextLink from 'next/link'
import { Shop } from 'front/domain/entities/Shop'

interface Props {
  shop: Shop
  key?: string
}

export default function ShopItem ({ shop }: Props): ReactElement {
  return (
    <NextLink href={`/shop/${shop.id}`} passHref>
      <Stack
        key={shop.id} borderColor='brand.500' borderWidth='1px' cursor='pointer' boxShadow=''
        _hover={{
          borderColor: 'brand.200',
          boxShadow: '2xl'
        }}
      >
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
    </NextLink>
  )
}
