import { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from 'react'
import {Theme} from '../../../app/providers/theme'

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
