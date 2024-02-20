import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './componentes/navbar/Navbar'
import Footer from './componentes/footter/Footer'

function App() {

  return (
    <>
     <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
