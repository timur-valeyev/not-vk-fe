import cn from 'classnames'
import { FC } from 'react'

import styles from './Button.module.scss'
import { ButtonProps, ButtonVariant } from './types'

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, variant = ButtonVariant.SECONDARY, theme, svg, ...otherProps } = props

  const buttonStyles = (btnVariant: ButtonVariant) => {
    return variant === btnVariant && theme === theme
  }

  return (
    <button
      {...otherProps}
      className={cn(className, styles.button, {
        [styles.primary]: buttonStyles(ButtonVariant.PRIMARY),
        [styles.secondary]: buttonStyles(ButtonVariant.SECONDARY)
      })}
    >
      {svg}
      {children}
    </button>
  )
}
