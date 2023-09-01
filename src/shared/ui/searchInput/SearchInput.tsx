import {FC} from 'react'
import {SearchInputProps} from 'shared/ui/searchInput/types'
import {Theme} from 'app/providers/theme'
import SearchLogo from '../../assets/icons/search.svg'
import cn from 'classnames'
import styles from './SearchInput.module.scss'


export const SearchInput: FC<SearchInputProps> = (props) => {
  const {placeholder, className, theme = Theme.LIGHT, ...otherProps} = props

  return (
    <div className={styles.searchInput}>
      <SearchLogo className={cn(styles.svg, className)}/>
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
