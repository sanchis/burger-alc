import ShopDetail from 'front/components/ShopDetail'
import { GetServerSideProps } from 'next'
import React, { ReactElement } from 'react'

interface Props {
  id: string
}

export default function Detail ({ id }: Props): ReactElement {
  return (
    <>
      {id
        ? <ShopDetail id={id} />
        : null}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.params?.id
    }
  }
}
