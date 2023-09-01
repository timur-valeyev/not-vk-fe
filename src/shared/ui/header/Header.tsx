import {FC} from 'react'
import {Theme, useTheme} from 'app/providers/theme'
import {SearchInput} from 'shared'
import SiteLogo from '../../assets/icons/site-logo.svg'
import UserLogo from '../../assets/icons/user-logo.png'
import cn from 'classnames'
import styles from './Header.module.scss'


export const Header: FC = () => {
  const {theme} = useTheme()

  return (
    <header className={cn(styles.header, {
      [styles.dark]: theme === Theme.DARK
    })}>
      <div className={styles.logo}>
        <SiteLogo />
        <SearchInput placeholder='Поиск...' theme={theme}/>
      </div>
      <div>
        <img src={UserLogo} alt="user-logo"/>
      </div>
    </header>
  )
}
