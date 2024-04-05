import emptyStateImg from '../../assets/images/empty-state.png';
import Button from '../Button';
import styles from './styles.module.scss'

function EmptyState() {
  return (
    <div className={styles.container}>
      <strong className={styles.title}>Parece que não há nada por aqui :(</strong>

      <img className={styles.emptyImage} src={emptyStateImg} alt="Empty list" />

      <Button className={styles.btnReloadPage}>Recarregar página</Button>
    </div>
  )
}

export default EmptyState
