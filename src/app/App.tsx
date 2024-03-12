import { AppRouter } from 'app/providers/router/AppRouter'
import { Suspense } from 'react'
import './styles/index.scss'

export const App = () => {
  //testing ErrorBoundary
  // useEffect(() => {
  //   if(Math.random() < 0.5) {
  //     throw new Error()
  //   }
  // }, [])

  return (
    <div className='app'>
      <Suspense fallback=''>
        <AppRouter />
      </Suspense>
    </div>
  )
}
