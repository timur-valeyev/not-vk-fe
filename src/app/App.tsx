import {useTheme} from 'app/providers/theme'
import {Theme} from 'app/providers/theme/lib/ThemeContext'
import cn from 'classnames'
import styles from './styles/App.module.scss'


export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={cn(styles.app, {
      [styles.light]: theme === Theme.LIGHT,
      [styles.dark]: theme === Theme.DARK
    })}>
      <button onClick={toggleTheme}>click</button>
      <h2 className={styles.font}>Hello, World!</h2>
    </div>
  )
}
