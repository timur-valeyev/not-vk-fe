import { AppRouter } from 'app/providers/router/AppRouter'
import { useTheme } from 'app/providers/theme'
import './styles/App.scss'
import cn from 'classnames'

export const App = () => {
  const { theme } = useTheme()

  //testing ErrorBoundary
  // useEffect(() => {
  //   if(Math.random() < 0.5) {
  //     throw new Error()
  //   }
  // }, [])

  return (
    <div className={cn('app', theme)}>
      <AppRouter />
    </div>
  )
}
