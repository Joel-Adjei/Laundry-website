import React, { useState } from 'react'
import { NavLink ,useNavigate  } from 'react-router-dom';
import { MenuIcon , X  } from 'lucide-react';
import SolidButton from './primary/Buttons/SolidButton';
import { images } from '@/assets/assest';
import {useNaems} from "@/context/NaemsContext";

const linkStyle = "px-12 py-2 rounded-full text-green-900 font-medium hover:bg-green-200 active:text-white active:bg-green-700 md:px-5 md:px-1"
const Navbar =()=>{
    const [displayNav , setDisplayNav]= useState("hidden")
    const navigator = useNavigate()

    const { setLoading } = useNaems()
    return(
        <>
        <nav className={`w-full fixed top-0 backdrop-blur-[8px] flex items-center justify-between px-4 py-2 bg-green-50/30 z-50 `}>
            <div className='flex gap-2'>
                {
                    displayNav === "hidden" ?
                    <button className='md:hidden p-1 rounded-sm bg-gray-300'
                    onClick={()=> {

                        setDisplayNav("flex")
                    }}
                    >
                        <MenuIcon className='text-gray-600 text-2xl' />
                    </button>
                    : <button className='md:hidden p-1 rounded-sm bg-gray-100'
                        onClick={()=> setDisplayNav("hidden")}
                    >
                        <X className=' text-green-950 text-2xl' />
                    </button>
                }
                
                
                <div className='flex items-center gap-2'>
                    <img src={images.mainLogo} alt="logo" className='h-10 w-10 md:h-8 md:w-8'  />
                    <h5 className={`text-green-950 text-md font-bold leading-4.5`}>Naem's <span className='font-light'>Laundry Service</span> </h5>
                </div>
            </div>

          
        
            <ul className={`${displayNav} fixed bg-gray-100 w-full top-14 left-0 items-center flex-col py-1 gap-1 z-50 md:flex md:bg-transparent md:w-fit md:gap-2 md:top-0 md:relative md:flex-row md:p-0`}>
                <NavLink to={"/"}   className={linkStyle} onClick={()=> {
                    setDisplayNav("hidden")
                    setLoading(true)
                }} >
                    Home
                </NavLink>
                
            
                <NavLink to={"/about"} onClick={()=> {
                    setDisplayNav("hidden")
                    setLoading(true)
                }} className={linkStyle} >
                    About
                </NavLink>

                <NavLink to={"/cost-emulator"} onClick={()=> {
                    setDisplayNav("hidden")
                    setLoading(true)
                }} className={linkStyle} >
                    Cost Emulator
                </NavLink>

                <NavLink to={"/terms-and-conditions"} onClick={()=> {
                    setDisplayNav("hidden")
                    setLoading(true)
                }} className={linkStyle} >
                    Terms and Conditions
                </NavLink>
                
                <a onClick={()=> {
                    navigator("/about")
                    setDisplayNav("hidden")
                    }} href="#Contact" className={linkStyle}  >
                    Contact
                </a>

                
            </ul>

            <SolidButton
                title={"Book"}
                onClick={()=> {
                    navigator("/book")
                    setLoading(true)
                     setDisplayNav("hidden")
                } }
             />
            
        </nav>
        {displayNav === "flex" && <div onClick={()=> setDisplayNav("hidden")} className='fixed top-0 left-0 h-[100vh] w-full bg-gray-600/30 backdrop-blur-[7px] md:hidden z-30'></div>}
        </>
    )
}

export default Navbar;