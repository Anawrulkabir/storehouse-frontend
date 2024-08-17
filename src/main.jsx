import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { MainLayout } from './components/layout/MainLayout'
import Hero from './components/Hero'
import { AllProducts } from './components/allProduct/AllProduct'
import { AllShirts } from './components/allProduct/AllShirts'
import { AllShoes } from './components/allProduct/AllShoes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      {
        path: '/all',
        element: <AllProducts />,
      },
      {
        path: 'shirts',
        element: <AllShirts />,
      },
      {
        path: 'shoes',
        element: <AllShoes />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
