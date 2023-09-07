import {Theme, useTheme} from 'app/providers/theme'
import {AppRouter} from 'app/providers/router/AppRouter'
import cn from 'classnames'
import styles from './styles/App.module.scss'


export const App = () => {
  const {theme} = useTheme()

  return (
    <div className={cn(styles.app, {
      [styles.light]: theme === Theme.LIGHT,
      [styles.dark]: theme === Theme.DARK
    })}>
      <AppRouter/>
    </div>
  )
}
