import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { NewsCard } from 'widgets'
import { NewsProps } from 'widgets/news/news/types'

import styles from './News.module.scss'


export const News: FC = () => {
  const [news, setNews] = useState<NewsProps[]>()

  const getNews = async () => {
    const res = await axios.get<NewsProps[]>('https://jsonplaceholder.typicode.com/posts')
    setNews(res.data)
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className={styles.newsBlock}>
      {news?.map(newsItem => (
        <NewsCard key={newsItem.id} title={newsItem.title} body={newsItem.body}/>
      ))}
    </div>
  )
}
