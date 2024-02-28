import cn from 'classnames'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from 'shared'
import { ButtonVariant } from 'shared/ui/button/types'
import { LangSwitcher, ThemeSwitcher } from 'widgets'
import { MenuProps } from 'widgets/header/types'

import FriendsIcon from '../../../shared/assets/icons/friends-icon.svg'
import MessagesIcon from '../../../shared/assets/icons/messages-icon.svg'
import NewsIcon from '../../../shared/assets/icons/news-icon.svg'
import ProfileIcon from '../../../shared/assets/icons/profile-icon.svg'

import styles from './SidebarLeft.module.scss'

const menu: MenuProps[] = [
  { icon: <ProfileIcon />, path: '/profile', title: 'profile' },
  { icon: <NewsIcon />, path: '/feed', title: 'news' },
  { icon: <MessagesIcon />, path: '/im', title: 'messenger' },
  { icon: <FriendsIcon />, path: '/friends', title: 'friends' }
]

export const SidebarLeft: FC = () => {
  const { t } = useTranslation('sidebarLeft')
  const [collapsed, setCollapsed] = useState(false)

  const handleCollapseSidebar = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={cn(styles.sidebarLeft, 'container', {
        [styles.collapsed]: collapsed
      })}
    >
      <ul className={cn(styles.list)}>
        {menu.map((menuItem) => (
          <li key={menuItem.path} className={cn(styles.item)}>
            {menuItem.icon}
            {!collapsed && <Link to={menuItem.path}>{t(menuItem.title)}</Link>}
          </li>
        ))}
      </ul>
      <Button variant={ButtonVariant.PRIMARY} onClick={handleCollapseSidebar}>
        C
      </Button>
      <Button variant={ButtonVariant.SECONDARY} onClick={handleCollapseSidebar}>
        C
      </Button>
      <LangSwitcher />
      <ThemeSwitcher />
    </div>
  )
}
