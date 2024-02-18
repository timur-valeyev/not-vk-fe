import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {Layout} from './Layout'
import {PageLoader} from '../../../widgets'
import {HomePage, NotFoundPage} from '../../../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Navigate to='/feed' replace />} />
        <Route
          path='/feed'
          element={
            <Suspense fallback={<PageLoader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
