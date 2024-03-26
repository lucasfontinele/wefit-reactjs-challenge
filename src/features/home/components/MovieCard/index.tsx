import formatPrice from '../../../../shared/utils/format-price'
import styles from './styles.module.scss'

type MovieCardProps = {
  price: number
  title: string
  cover: string
}

export function MovieCard({ title, price, cover }: MovieCardProps) {
  return (
    <div className={styles.cardContainer}>
      <img src={cover} />
      <strong>{title}</strong>
      <span>{formatPrice(price)}</span>

      <button className={styles.btnAddToCart} type="button">Adicionar ao carrinho</button>
    </div>
  )
}
