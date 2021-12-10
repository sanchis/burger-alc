import { Box, Heading, Text } from '@chakra-ui/layout'
import { ScaleFade } from '@chakra-ui/react'
import { Mark } from 'front/domain/entities/Mark'
import React, { ReactElement } from 'react'

interface Props extends React.CSSProperties{
  mark: Mark
  key?: string

}
export default function MarkComponent ({ mark, ...rest }: Props): ReactElement {
  return (
    <ScaleFade
      in delay={0.1} style={{
        ...rest
      }}
    >
      <Box borderWidth='1px' borderColor='brand.500' h='100%' p='3' textAlign='center' overflow='hidden'>
        <Heading>{mark.mark}</Heading>
        <Text>{mark.comment}</Text>
      </Box>
    </ScaleFade>
  )
}
