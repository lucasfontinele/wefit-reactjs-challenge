import { useCart } from '../../data/store/cart'
import formatPrice from '../../shared/utils/format-price'
import styles from './styles.module.scss'

export function Cart() {
  const {items} = useCart()

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>
                <div className={styles.productCard}>
                  <img className={styles.productImage} src={item.image} alt="Movie cover" />

                  <div className={styles.productInfo}>
                    <strong>{item.title}</strong>
                    <strong>{formatPrice(item.price)}</strong>
                  </div>
                </div>
              </td>
              <td>{item.quantity}</td>
              <td>{formatPrice(item.price)}</td>
              <td>excluir</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}