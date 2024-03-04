import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Fooldal } from './Pages/MainPage.tsx'
import { Menu } from './Pages/Menu.tsx'
import { GalleryPage } from './Pages/GalleryPage.tsx'
import { RulesPage } from './Pages/RulesPage.tsx'
import SignIn from './Pages/Login.tsx'
import { ApiProvider } from './Components/Auth/ApiProvider.tsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
    {
      path:'',
      element: <Fooldal/>
    },
      {
        path: 'menu',
        element: <Menu/>
      },
      {
        path: 'gallery',
        element: <GalleryPage/>
      },
      {
        path: 'rules',
        element: <RulesPage/>
      }
    ],
  },
  {
    path: 'login',
    element: <SignIn/>
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <ApiProvider>
      <RouterProvider router={router}/>
    </ApiProvider>
  </React.StrictMode>
)
