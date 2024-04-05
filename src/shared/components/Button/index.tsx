import { ComponentProps } from 'react'
import styles from './styles.module.scss'

interface ButtonProps extends ComponentProps<'button'> {}

function Button(props: ButtonProps) {
  return (
    <button className={styles.container} {...props} />
  )
}

export default Button
