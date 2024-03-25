import { Outlet } from "react-router-dom"
import { Header } from "../../../../shared/components/Header"
import styles from "./styles.module.scss"

export function Layout() {
  return (
    <div className={styles.container}>
      <Header />

      <Outlet />
    </div>
  )
}
