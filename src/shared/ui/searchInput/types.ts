import {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Theme} from 'app/providers/theme'

export interface SearchInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  placeholder: string
  theme?: Theme
}
