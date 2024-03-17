import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Fooldal } from './Pages/MainPage'
import { Footer } from './Components/Footer'
import { useEffect, useState } from 'react'
import { LoadingPage } from './Pages/LoadingPage'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

 return (
 <>
  <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
 }
export default App
