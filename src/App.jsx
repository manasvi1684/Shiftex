import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import P_s from './pages/P_s'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productsandservices' element={<P_s/>}/>
        <Route path='/aboutus' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App