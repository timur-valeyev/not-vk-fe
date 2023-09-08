import { Outlet } from 'react-router-dom'
import { Header, SidebarLeft, SidebarRight } from 'widgets'

export const Layout = () => {
  return (
    <>
      <Header/>
      <div className='page-content'>
        <SidebarLeft/>
        <div className='main-content'>
          <Outlet/>
        </div>
        <SidebarRight/>
      </div>
    </>
  )
}
