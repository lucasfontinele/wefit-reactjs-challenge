import { useCallback } from "react"
import { BagIcon } from "../../assets/icons/Bag"
import styles from "./styles.module.scss"
import { useCart } from "../../../data/store/cart"
import { Link } from "react-router-dom"

export function Header() {
  const {items} = useCart()

  const handleRenderQuantity = useCallback(() => {
    if (items.length === 0 || items.length > 1)
      return `${items.length} itens`

    return `1 item`
  }, [items.length])

  return (
    <header className={styles.container}>
      <strong>WeMovies</strong>

      <div className={styles.cartContainer} data-testid="cart-testid">
        <Link to="/cart" className={styles.cartTitleContainer}>
          <span>Meu Carrinho</span>
          <small>{handleRenderQuantity()}</small>
        </Link>

        <BagIcon />
      </div>
    </header>
  )
}