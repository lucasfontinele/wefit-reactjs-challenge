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
      <span>{price}</span>
    </div>
  )
}
