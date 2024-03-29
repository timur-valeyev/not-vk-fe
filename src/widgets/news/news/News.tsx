import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import { NewsCard } from 'widgets'

import { SkeletonNewsCard } from '../../skeletons'

import styles from './News.module.scss'
import { NewsProps } from './types'

export const News: FC = () => {
  const [news, setNews] = useState<NewsProps[]>()
  const [loading, setLoading] = useState(true)

  const getNews = async () => {
    try {
      const res = await axios.get<NewsProps[]>(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      setNews(res.data)
      setLoading((prevState) => !prevState)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <div className={styles.newsBlock}>
      {loading &&
        Array(10)
          .fill(0)
          .map((_, index) => <SkeletonNewsCard key={index} />)}
      {news?.map((newsItem) => <NewsCard key={newsItem.id} title={newsItem.title} body={newsItem.body} />)}
    </div>
  )
}
