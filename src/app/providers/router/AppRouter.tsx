import {Suspense} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {HomePage, NotFoundPage} from 'pages'
import {Header, SidebarLeft} from 'widgets'

const Layout = () => {
  return (
    <>
      <Header />
      <div className='page-content'>
        <SidebarLeft />
        <Outlet />
      </div>
    </>
  )
}

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/feed" element={<HomePage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}
