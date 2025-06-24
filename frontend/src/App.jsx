import React , { useState } from 'react'
import { Routes, Route, NavLink, createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
import About from './pages/About'
import RootLayout from './layout/RootLayout'
import {NaemsContextProvider} from "@/context/NaemsContext";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/book' element={<Book />} />
        <Route path='/about' element={<About />} />
      </Route>
    )
  )
  return (
    <>
        <NaemsContextProvider>
            <RouterProvider router={router} />
        </NaemsContextProvider>
    </>
  )
}

export default App
