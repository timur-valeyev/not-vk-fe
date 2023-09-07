import {Suspense} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {HomePage, NotFoundPage} from 'pages'
import {Header} from 'widgets'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}
