import cn from 'classnames'
import { LoginModal } from 'featured/Auth'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from 'shared'

import SiteLogo from '../../shared/assets/icons/site-logo.svg'
import UserLogo from '../../shared/assets/icons/user-logo.png'

import styles from './Header.module.scss'

export const Header: FC = () => {
  const [opened, isOpened] = useState(false)

  const handleCloseModal = () => {
    isOpened(false)
  }

  return (
    <header className={cn(styles.header)}>
      <div className={styles.logo}>
        <Link to='/'>
          <SiteLogo />
        </Link>
        <Input searchIcon placeholder='Поиск...' />
      </div>
      <div className={styles.headerProfile}>
        <Button onClick={() => isOpened(true)}>Войти</Button>
        <Link to='/profile'>
          <img src={UserLogo} alt='user-logo' />
        </Link>
      </div>
      <LoginModal opened={opened} closeModal={handleCloseModal} />
    </header>
  )
}
