import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Fooldal } from './Pages/MainPage.tsx'

import { GalleryPage } from './Pages/GalleryPage.tsx'
import { RulesPage } from './Pages/RulesPage.tsx'
import SignIn from './Pages/Login.tsx'
import { ApiProvider } from './Components/Auth/ApiProvider.tsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import SignUp from './Pages/Register.tsx'
import Menu from './Pages/Menu.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { History, MyReviews, ProfilePage, User_data } from './Pages/ProfilePage.tsx'
import { MenuProvider } from './Components/Auth/MenuProvider.tsx'

import { ErrorPage } from './Pages/ErrorPage.tsx'
import ReservationForm from './Pages/Foglaljform.tsx'
import { StyledEngineProvider } from '@mui/styled-engine-sc'
import { TestPage } from './Pages/testSnack.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Fooldal />
      },
      {
        path: 'menu',
        element: <Menu />
      },
      {
        path: 'gallery',
        element: <GalleryPage />
      },
      {
        path: 'rules',
        element:
          <RulesPage />

      }
    ],
  },
  {
    path: 'login',
    element: <SignIn />
  },
  {
    path: 'register',
    element: <SignUp />
  },
  {
    path: 'reservation',
    element: <ReservationForm/>
  },
  {
    path: 'test',
    element: <TestPage/>
  },
  {
    path: 'profile',
    element: <ProfilePage />,
    children: [
      {
        path: 'user_data',
        element: <User_data />
      },
      {
        path: 'history',
        element: <History />
      },
      {
        path: 'my_reviews',
        element: <MyReviews />
      }
    ]
  }, {
    path: '*',
    element: <ErrorPage />
  }
])
const theme = createTheme({
  palette: {
    primary: {
      main: '#F2C879',
    },
    secondary: {
      main: '#840000'
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
              <ApiProvider>
                <MenuProvider>
                  <RouterProvider router={router} />
                </MenuProvider>
              </ApiProvider>
            </ThemeProvider>
          </StyledEngineProvider>
        </React.StrictMode>
        )
