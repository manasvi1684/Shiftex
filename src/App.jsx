import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/BookOnline'
import About from './pages/Shop'
import Blog from './pages/Blog'



const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bookonline' element={<BookOnline/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App