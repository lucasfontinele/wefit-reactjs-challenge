import { useCallback } from 'react'
import { useCart } from '../../../../data/store/cart'
import Button from '../../../../shared/components/Button'
import formatPrice from '../../../../shared/utils/format-price'
import styles from './styles.module.scss'

type MovieCardProps = {
  id: number
  price: number
  title: string
  cover: string
}

export function MovieCard({ id, title, price, cover }: MovieCardProps) {
  const {items, addItem} = useCart()

  const isMovieInTheCart = useCallback(() => {
    return items.some(item => item.id === id)
  }, [id, items])

  return (
    <div className={styles.cardContainer}>
      <img src={cover} loading="lazy" />
      <strong>{title}</strong>
      <span>{formatPrice(price)}</span>

      <Button onClick={() => addItem({ id, title, price, image: cover })} className={isMovieInTheCart() ? styles.btnProductInCart : undefined} type="button">
        Adicionar ao carrinho
      </Button>
    </div>
  )
}
