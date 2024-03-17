import { Theme } from 'app/providers/theme'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  placeholder: string
  theme?: Theme
  searchIcon?: boolean
}
