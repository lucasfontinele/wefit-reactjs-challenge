import { Outlet } from "react-router-dom"
import { Header } from "../../../../shared/components/Header"
import styles from "./styles.module.scss"
import { Grid } from "../../../../shared/components/Grid"

export function Layout() {
  return (
    <Grid>
      <main className={styles.container}>
        <Header />

        <Outlet />
      </main>
    </Grid>
  )
}
