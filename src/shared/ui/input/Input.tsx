import cn from 'classnames'
import { FC } from 'react'
import { InputProps } from 'shared/ui/input/types'

import SearchLogo from '../../assets/icons/search.svg'

import styles from './Input.module.scss'

export const Input: FC<InputProps> = (props) => {
  const { searchIcon, placeholder, className, ...otherProps } = props

  return (
    <div className={styles.searchInput}>
      {searchIcon && <SearchLogo className={cn(styles.svg, className)} />}
      <input className={cn(className, styles.input)} placeholder={placeholder} {...otherProps} />
    </div>
  )
}
