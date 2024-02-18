import cn from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import SiteLogo from '../../shared/assets/icons/site-logo.svg'
import UserLogo from '../../shared/assets/icons/user-logo.png'
import { Theme, useTheme } from 'app/providers/theme'
import { SearchInput } from 'shared'
import styles from './Header.module.scss'

export const Header: FC = () => {
  const { theme } = useTheme()

  return (
    <header
      className={cn(styles.header, {
        [styles.dark]: theme === Theme.DARK
      })}
    >
      <div className={styles.logo}>
        <Link to='/'>
          <SiteLogo />
        </Link>
        <SearchInput placeholder='Поиск...' theme={theme} />
      </div>
      <div>
        <Link to='/profile'>
          <img src={UserLogo} alt='user-logo' />
        </Link>
      </div>
    </header>
  )
}
