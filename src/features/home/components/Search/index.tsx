import { ComponentProps } from "react"
import SearchIcon from "../../../../shared/assets/icons/Search"
import styles from "./styles.module.scss"

interface SearchProps extends ComponentProps<'input'> {
  onSubmit: () => void;
}

export function Search({ onSubmit, ...props }: SearchProps) {
  return (
    <div className={styles.containerWrapper}>
      <input {...props} placeholder="Buscar filme pelo nome" className={styles.container} type="search" />

      <button onClick={onSubmit} className={styles.searchIcon}>
        <SearchIcon />
      </button>
    </div>
  )
}