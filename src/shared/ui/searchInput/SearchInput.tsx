import cn from 'classnames'
import { FC } from 'react'
import SearchLogo from '../../assets/icons/search.svg'
import {SearchInputProps} from './types'
import {Theme} from '../../../app/providers/theme'
import styles from './SearchInput.module.scss'


export const SearchInput: FC<SearchInputProps> = (props) => {
  const { placeholder, className, theme = Theme.LIGHT, ...otherProps } = props

  return (
    <div className={styles.searchInput}>
      <img  className={cn(styles.svg, className)} src={SearchLogo} alt=""/>
      <input
        className={cn(className, styles.input, {
          [styles.light]: theme === Theme.LIGHT,
          [styles.dark]: theme === Theme.DARK
        })}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  )
}
