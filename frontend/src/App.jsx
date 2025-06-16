import React , { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={<Book />} />
        <Route path='/about' element={<About />} />
      </Routes>
      {/* <Footer /> */}
      
    </>
  )
}

export default App
