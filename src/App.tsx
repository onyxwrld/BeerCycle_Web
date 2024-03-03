import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Fooldal } from './Pages/MainPage'

function App() {


 return (
 <>
  <Navbar/>
   <Outlet/>
   </>
  )
}

export default App
