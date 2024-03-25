import { ReactNode } from "react"
import styles from "./styles.module.scss"

type GridProps = {
  children: ReactNode
}

export function Grid({ children }: GridProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
