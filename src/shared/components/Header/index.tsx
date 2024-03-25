import { BagIcon } from "../../assets/icons/Bag"
import styles from "./styles.module.scss"

export function Header() {
  return (
    <header className={styles.container}>
      <strong>WeMovies</strong>

      <div className={styles.cartContainer} data-testid="cart-testid">
        <div className={styles.cartTitleContainer}>
          <span>Meu Carrinho</span>
          <small>0 itens</small>
        </div>

        <BagIcon />
      </div>
    </header>
  )
}