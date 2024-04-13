import { Link, Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Fooldal } from './Pages/MainPage'
import { Footer } from './Components/Footer'
import { useEffect, useState } from 'react'
import { LoadingPage } from './Pages/LoadingPage'
import { Button } from '@mui/material'


function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);

  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isMobile) {
    return (
      <><a href='https://github.com/Bluver11/BeerCycleMobilApp' target='blank' className='z-20 absolute mt-96 ml-2 mr-2'>
        <Button id='loginButton'>
          Töltsd le a mobil alkalmozáunkat!
        </Button>
      </a>
        <img src="/Images/mobilPage.png" alt="Mobil Nézet" className='bg-cover bg-center relative z-10 w-screen h-screen flex items-center justify-center text-white' />

      </>
    );
  }
  return (
    <>

      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
export default App
