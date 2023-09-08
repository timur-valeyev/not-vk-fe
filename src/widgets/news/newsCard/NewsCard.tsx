import { FC } from 'react'
import { NewsProps } from 'widgets/news/news/types'

import styles from './NewsCard.module.scss'


export const NewsCard: FC<NewsProps> = ({ title, body }) => {
  return (
    <div className={styles.newsItem}>
      <p className={styles.title}>{title}</p>
      <p className={styles.body}>{body}</p>
    </div>
  )
}
