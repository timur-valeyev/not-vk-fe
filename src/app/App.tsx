import { AppRouter } from 'app/providers/router/AppRouter'
import { Theme, useTheme } from 'app/providers/theme'
import cn from 'classnames'
import { useEffect } from 'react'

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
