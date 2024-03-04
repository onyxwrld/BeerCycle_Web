import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Fooldal } from './Pages/MainPage'
import { Footer } from './Components/Footer'

function App() {


 return (
 <>
  <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default App
