import cn from 'classnames'
import { AppRouter } from 'app/providers/router/AppRouter'
import { useTheme } from 'app/providers/theme'
import './styles/App.scss'
import { Suspense } from 'react'

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
      <Suspense fallback=''>
        <AppRouter />
      </Suspense>
    </div>
  )
}
