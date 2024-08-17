import { Outlet } from 'react-router-dom'

import Navbar from '../Navbar'

export function MainLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <Outlet />
    </div>
  )
}
