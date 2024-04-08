import { ComponentProps } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface ButtonProps extends ComponentProps<'button'> {}

function Button(props: ButtonProps) {
  return (
    <button {...props} className={clsx(styles.container, props?.className)} />
  )
}

export default Button
