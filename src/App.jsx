import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './containers/LandingPage'
import Login from './containers/Login'
import Register from './containers/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
