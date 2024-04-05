import Button from '../../../../shared/components/Button'
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
      <img src={cover} loading="lazy" />
      <strong>{title}</strong>
      <span>{formatPrice(price)}</span>

      <Button type="button">Adicionar ao carrinho</Button>
    </div>
  )
}
