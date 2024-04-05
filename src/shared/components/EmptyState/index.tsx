import styles from './styles.module.scss'

function EmptyState() {
  return (
    <div className={styles.container}>
      <strong className={styles.title}>Parece que não há nada por aqui :(</strong>
    </div>
  )
}

export default EmptyState
