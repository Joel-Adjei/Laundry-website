import React , { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={<Book />} />
      </Routes>
      
    </>
  )
}

export default App
