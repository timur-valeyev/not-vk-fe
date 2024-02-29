import cn from 'classnames'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, SearchInput, Modal } from 'shared'

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
        <SearchInput placeholder='Поиск...' />
      </div>
      <div className={styles.headerProfile}>
        <Button onClick={() => isOpened(true)}>Modal</Button>
        <Link to='/profile'>
          <img src={UserLogo} alt='user-logo' />
        </Link>
      </div>
      <Modal opened={opened} closeModal={() => isOpened(false)}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis excepturi facilis hic illo, ipsa minus mollitia
          neque nostrum odio officia pariatur provident quaerat ratione rem suscipit tempore unde vitae?
        </p>
        <Button onClick={handleCloseModal}>Войти</Button>
      </Modal>
    </header>
  )
}
