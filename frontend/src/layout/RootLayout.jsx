import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import { useLocation } from 'react-router-dom'
import {useNaems} from "@/context/NaemsContext";
import Loading from "@/components/Loading";

const RootLayout = () => {
    const { loading, setLoading } = useNaems()

    const location = useLocation()

    // useEffect(()=>{
    //     setLoading(true)
    // },[location])

  return (
    <div>
        <Navbar />
        {
            loading ? <Loading /> :
                <>
                <Outlet />
                <Footer />
                </>
        }

    </div>
  )
}

export default RootLayout