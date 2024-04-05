import { ComponentProps } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface ButtonProps extends ComponentProps<'button'> {}

function Button(props: ButtonProps) {
  return (
    <button className={clsx(styles.container, props?.className)} {...props} />
  )
}

export default Button
