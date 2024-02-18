import cn from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { SearchInput } from 'shared'

import SiteLogo from '../../shared/assets/icons/site-logo.svg'
import UserLogo from '../../shared/assets/icons/user-logo.png'

import styles from './Header.module.scss'

export const Header: FC = () => {
  return (
    <header className={cn(styles.header)}>
      <div className={styles.logo}>
        <Link to='/'>
          <SiteLogo />
        </Link>
        <SearchInput placeholder='Поиск...' />
      </div>
      <div>
        <Link to='/profile'>
          <img src={UserLogo} alt='user-logo' />
        </Link>
      </div>
    </header>
  )
}
