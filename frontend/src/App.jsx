import React , { useState } from 'react'
import { Routes, Route, NavLink, ScrollRestoration, createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Book from './pages/Book'
import About from './pages/About'
import RootLayout from './layout/RootLayout'
import {NaemsContextProvider} from "@/context/NaemsContext";
import Payment from "@/components/book/Payment";
import BookLayout from "@/layout/BookLayout";
import NotFound from "@/components/NotFound";
import LaundryAdminDashboard from "@/components/admin/LaundryAdminDashboard";
import AdminLayout from "@/layout/AdminLayout";
import Customers from "@/components/admin/Customers";
import LoginRegister from "@/components/admin/auth/LoginRegister";
import {AuthContextProvider} from "@/context/AuthContext";
import Bookings from "@/components/admin/Bookings";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/'
                   element={<>
                       <ScrollRestoration />
                       <RootLayout />
                   </>}
            >
                <Route index element={<Home />} />
                <Route path='book' element={<BookLayout />} >
                    <Route path={"payment"} element={<Payment />} />
                </Route>
                <Route path='/about' element={<About />} />
            </Route>
            <Route path='/admin/dashboard' element={<AdminLayout />} >
                <Route index element={<LaundryAdminDashboard />} />
                <Route path={"customers"} element={<Customers />} />
                <Route path={"bookings"} element={<Bookings />} />
            </Route>
            
            <Route path={"admin/auth/login"} element={<LoginRegister />} />
            {/*<Route path={"admin/auth/register"} element={<LoginRegister />} />*/}
            <Route path={"*"} element={<NotFound />} />
        </>
    )
  )
  return (
    <>
        <NaemsContextProvider>
            <AuthContextProvider>
                <RouterProvider router={router} />
            </AuthContextProvider>
        </NaemsContextProvider>
    </>
  )
}

export default App
