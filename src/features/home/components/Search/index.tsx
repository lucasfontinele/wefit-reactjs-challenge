import { InputHTMLAttributes } from "react"
import SearchIcon from "../../../../shared/assets/icons/Search"
import styles from "./styles.module.scss"

export function Search({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.containerWrapper}>
      <input {...props} placeholder="Buscar filme pelo nome" className={styles.container} type="search" />
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  )
}