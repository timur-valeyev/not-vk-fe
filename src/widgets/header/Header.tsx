import {FC} from 'react'
import {Theme, useTheme} from 'app/providers/theme'
import {SearchInput} from 'shared'
import SiteLogo from '../../shared/assets/icons/site-logo.svg'
import UserLogo from '../../shared/assets/icons/user-logo.png'
import {Link} from 'react-router-dom'
import cn from 'classnames'
import styles from './Header.module.scss'


export const Header: FC = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <header className={cn(styles.header, {
      [styles.dark]: theme === Theme.DARK
    })}>
      <div className={styles.logo}>
        <Link to='/'>
          <SiteLogo />
        </Link>
        <SearchInput placeholder='Поиск...' theme={theme}/>
      </div>
      <div>
        <Link to='/profile'>
          <img src={UserLogo} alt="user-logo"/>
        </Link>
        <button onClick={toggleTheme}>theme</button>
      </div>
    </header>
  )
}
