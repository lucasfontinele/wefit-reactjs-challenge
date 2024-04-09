import { useCallback } from 'react'
import clsx from 'clsx'
import { useCart } from '../../../../data/store/cart'
import Button from '../../../../shared/components/Button'
import formatPrice from '../../../../shared/utils/format-price'
import styles from './styles.module.scss'
import SmBag from '../../../../shared/assets/icons/SmBag'

type MovieCardProps = {
  id: number
  price: number
  title: string
  cover: string
}

export function MovieCard({ id, title, price, cover }: MovieCardProps) {
  const {items, addItem} = useCart()
  const item = items.find(i => i.id === id)

  const isMovieInTheCart = useCallback(() => {
    return items.some(item => item.id === id)
  }, [id, items])

  return (
    <div className={styles.cardContainer}>
      <img src={cover} loading="lazy" />
      <strong>{title}</strong>
      <span>{formatPrice(price)}</span>

      <Button
        onClick={() => addItem({ id, title, price, image: cover })}
        className={isMovieInTheCart() ? clsx(styles.btnProductInCart, styles.btnAddToCart) : styles.btnAddToCart}
        type="button"
      >
        <span>
          <SmBag />
          {item?.quantity ?? 0}
        </span>

        Adicionar ao carrinho
      </Button>
    </div>
  )
}
