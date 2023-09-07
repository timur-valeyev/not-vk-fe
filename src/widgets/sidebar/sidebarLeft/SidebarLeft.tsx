import {FC} from 'react'
import {MenuProps} from 'widgets/header/types'
import {Link} from 'react-router-dom'

import ProfileIcon from '../../../shared/assets/icons/profile-icon.svg'
import NewsIcon from '../../../shared/assets/icons/news-icon.svg'
import MessagesIcon from '../../../shared/assets/icons/messages-icon.svg'
import FriendsIcon from '../../../shared/assets/icons/friends-icon.svg'

import styles from './SidebarLeft.module.scss'
import cn from 'classnames'

const menu: MenuProps[] = [
  {icon: <ProfileIcon/>, path: '/profile', title: 'Моя страница'},
  {icon: <NewsIcon/>, path: '/feed', title: 'Новости'},
  {icon: <MessagesIcon/>,path: '/im', title: 'Мессенджер'},
  {icon: <FriendsIcon/>,path: '/friends', title: 'Друзья'}
]


export const SidebarLeft: FC = () => {
  return (
    <div className={cn(styles.sidebarLeft, 'container')}>
      <ul className={cn(styles.list)}>
        {menu.map(menuItem => (
          <li key={menuItem.path} className={cn(styles.item)}>
            {menuItem.icon}
            <Link to={menuItem.path}>{menuItem.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
