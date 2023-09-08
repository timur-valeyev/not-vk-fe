import {Suspense} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {HomePage, NotFoundPage} from 'pages'
import {Layout} from 'app/providers/router/Layout'


export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Navigate to="/feed" replace />}/>
          <Route path="/feed" element={<HomePage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}
