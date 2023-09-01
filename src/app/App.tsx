import {Theme, useTheme} from 'app/providers/theme'
import {Button, Header} from 'shared'
import {ButtonVariant} from 'shared/ui/button/types'
import cn from 'classnames'
import styles from './styles/App.module.scss'
import PencilSvg from '../shared/assets/icons/pencil.svg'


export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={cn(styles.app, {
      [styles.light]: theme === Theme.LIGHT,
      [styles.dark]: theme === Theme.DARK
    })}>
      <Header />
      <Button variant={ButtonVariant.PRIMARY} theme={theme} svg={<PencilSvg />} onClick={toggleTheme}>primary</Button>
      <Button variant={ButtonVariant.SECONDARY} theme={theme} onClick={toggleTheme}>secondary</Button>
      <h2 className={styles.font}>Hello, World!</h2>
    </div>
  )
}
