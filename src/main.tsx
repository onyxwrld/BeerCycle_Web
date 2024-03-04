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
const theme = createTheme({
  palette: {
      primary: {
          main: '#F2C879',
          light: '#FF9518',
          dark: '#8A2A23'
      }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <ApiProvider>
      <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      </ThemeProvider>
    </ApiProvider>
  </React.StrictMode>
)
