import {FC} from 'react'
import styles from './SidebarRight.module.scss'


export const SidebarRight: FC = () => {
  return (
    <div className={styles.sidebarRight}>
      <div className={styles.sidebarRightItem}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>Новости</li>
          <li className={styles.menuItem}>Реакции</li>
          <li className={styles.menuItem}>Комментарии</li>
        </ul>
      </div>
      <div className={styles.sidebarRightItem}>Сначала интересные</div>
    </div>
  )
}
