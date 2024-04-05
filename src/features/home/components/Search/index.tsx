import { ComponentProps, forwardRef } from "react"
import SearchIcon from "../../../../shared/assets/icons/Search"
import styles from "./styles.module.scss"

interface SearchProps extends ComponentProps<'input'> {
  onSubmit: () => void;
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(({ onSubmit, ...props }, ref) => (
  <div className={styles.containerWrapper}>
    <input {...props} ref={ref} placeholder="Buscar filme pelo nome" className={styles.container} type="search" />

    <button onClick={onSubmit} className={styles.searchIcon}>
      <SearchIcon />
    </button>
  </div>
))
