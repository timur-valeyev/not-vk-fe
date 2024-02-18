import cn from 'classnames'
import { FC } from 'react'
import { SearchInputProps } from 'shared/ui/searchInput/types'

import SearchLogo from '../../assets/icons/search.svg'

import styles from './SearchInput.module.scss'

export const SearchInput: FC<SearchInputProps> = (props) => {
  const { placeholder, className, ...otherProps } = props

  return (
    <div className={styles.searchInput}>
      <SearchLogo className={cn(styles.svg, className)} />
      <input className={cn(className, styles.input)} placeholder={placeholder} {...otherProps} />
    </div>
  )
}
