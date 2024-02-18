import cn from 'classnames'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuProps } from 'widgets/header/types'

import FriendsIcon from '../../../shared/assets/icons/friends-icon.svg'
import MessagesIcon from '../../../shared/assets/icons/messages-icon.svg'
import NewsIcon from '../../../shared/assets/icons/news-icon.svg'
import ProfileIcon from '../../../shared/assets/icons/profile-icon.svg'

import styles from './SidebarLeft.module.scss'
import { Button } from 'shared'
import { useTheme } from 'app/providers/theme'

const menu: MenuProps[] = [
  { icon: <ProfileIcon />, path: '/profile', title: 'Моя страница' },
  { icon: <NewsIcon />, path: '/feed', title: 'Новости' },
  { icon: <MessagesIcon />, path: '/im', title: 'Мессенджер' },
  { icon: <FriendsIcon />, path: '/friends', title: 'Друзья' }
]

export const SidebarLeft: FC = () => {
  const { toggleTheme } = useTheme()
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
            {!collapsed && <Link to={menuItem.path}>{menuItem.title}</Link>}
          </li>
        ))}
      </ul>
      <Button onClick={toggleTheme}>T</Button>
      <Button onClick={handleCollapseSidebar}>C</Button>
    </div>
  )
}
