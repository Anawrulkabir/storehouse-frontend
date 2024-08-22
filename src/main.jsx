import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { MainLayout } from './components/layout/MainLayout'
import Hero from './components/Hero'
import { AllProducts } from './components/allProduct/AllProduct'
import { AllShirts } from './components/allProduct/AllShirts'
import { AllShoes } from './components/allProduct/AllShoes'
import AuthProvider from './provider/AuthProvider'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// import PrivateRoute from './routes/PrivateRoute'
// import { Join } from './pages/join/Join'

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
        element: (
          // <PrivateRoute>
          <AllProducts />
          // </PrivateRoute>
        ),
      },
      {
        path: '/apparel-accessories',
        element: (
          // <PrivateRoute>
          <AllShirts />
          // </PrivateRoute>
        ),
      },
      {
        path: '/lifestyle-gadgets',
        element: (
          // <PrivateRoute>
          <AllShoes />
          // </PrivateRoute>
        ),
      },
    ],
  },

  // { path: '/join', element: <Join /> },
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
)
