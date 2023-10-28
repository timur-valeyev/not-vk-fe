import cn from 'classnames'
import { useEffect } from 'react'
import {Theme, useTheme} from './providers/theme'
import {AppRouter} from './providers/router/AppRouter'
import styles from './styles/App.module.scss'

export const App = () => {
  const { theme } = useTheme()

  //testing ErrorBoundary
  // useEffect(() => {
  //   if(Math.random() < 0.5) {
  //     throw new Error()
  //   }
  // }, [])

  return (
    <div className={cn(styles.app, {
      [styles.light]: theme === Theme.LIGHT,
      [styles.dark]: theme === Theme.DARK
    })}>
      <AppRouter/>
    </div>
  )
}
