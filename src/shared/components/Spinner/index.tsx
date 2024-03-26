import { RiLoader4Fill } from "react-icons/ri"
import styles from "./styles.module.scss"

export function Spinner() {
  return <RiLoader4Fill className={styles.iconContainer} size={80} color="#FFFFFF" />
}
