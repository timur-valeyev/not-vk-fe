import { Layout } from 'app/providers/router/Layout'
import { HomePage, NotFoundPage } from 'pages'
import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets'


export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Navigate to='/feed' replace/>}/>
        <Route path='/feed' element={<Suspense fallback={<PageLoader/>}><HomePage/></Suspense>}/>
        <Route path='*' element={<Suspense fallback={<PageLoader/>}><NotFoundPage/></Suspense>}/>
      </Route>
    </Routes>
  )
}
