import { Theme } from 'app/providers/theme'
import cn from 'classnames'
import { FC } from 'react'
import { ButtonProps, ButtonVariant } from 'shared/ui/button/types'

import styles from './Button.module.scss'


export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    variant = ButtonVariant.SECONDARY,
    theme = Theme.LIGHT,
    svg,
    ...otherProps
  } = props

  const buttonStyles = (btnVariant: ButtonVariant, btnTheme: Theme) => {
    return variant === btnVariant && theme === btnTheme
  }

  return (
    <button
      {...otherProps}
      className={cn(className, styles.button, {
        [styles.primaryLight]: buttonStyles(ButtonVariant.PRIMARY, Theme.LIGHT),
        [styles.secondaryLight]: buttonStyles(ButtonVariant.SECONDARY, Theme.LIGHT),
        [styles.primaryDark]: buttonStyles(ButtonVariant.PRIMARY, Theme.DARK),
        [styles.secondaryDark]: buttonStyles(ButtonVariant.SECONDARY, Theme.DARK)
      })}
    >
      {svg}
      {children}
    </button>
  )
}
