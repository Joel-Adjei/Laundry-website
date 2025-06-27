import React , { useState } from 'react'
import { Routes, Route, NavLink, createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
import About from './pages/About'
import RootLayout from './layout/RootLayout'
import {NaemsContextProvider} from "@/context/NaemsContext";
import Payment from "@/components/book/Payment";
import BookLayout from "@/layout/BookLayout";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='book' element={<BookLayout />} >
            <Route path={"payment"} element={<Payment />} />
        </Route>

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
