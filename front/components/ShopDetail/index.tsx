import { ReactElement } from 'react'
import { useBurgerInShop } from './hooks/useBurgerInShop'
import { useShopDetail } from './hooks/useShopDetail'

interface Props{
  id: string
}

export default function ShopDetail ({ id }: Props): ReactElement {
  const { shop } = useShopDetail(id)
  const { burgers } = useBurgerInShop(id)

  // TODO move map to component
  return (
    <>
      {JSON.stringify(shop)}<br />
      {JSON.stringify(burgers)}

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
