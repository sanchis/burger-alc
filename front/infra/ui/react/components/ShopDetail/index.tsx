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
    <>
      {JSON.stringify(shop)}<br />
      {JSON.stringify(burgers)}<br />

      {shop?.gMapsHash !== null && shop?.gMapsHash !== undefined && shop?.gMapsHash !== ''
        ? <iframe
            src={`https://www.google.com/maps/embed?pb=${shop.gMapsHash}`}
            style={{
              border: '0px'
            }} allowFullScreen loading='lazy'
          />
        : null}
    </>
  )
}
