import { Theme } from 'app/providers/theme'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'


export interface SearchInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  placeholder: string
  theme?: Theme
}
