import { Theme } from 'app/providers/theme'
import { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from 'react'

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  theme?: Theme
  svg?: ReactElement
}
