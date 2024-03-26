import SearchIcon from "../../../../shared/assets/icons/Search"
import styles from "./styles.module.scss"

export function Search() {
  return (
    <div className={styles.containerWrapper}>
      <input placeholder="Buscar filme pelo nome" className={styles.container} type="search" />
      <SearchIcon className="icon" />
    </div>
  )
}