import React, { useState } from 'react'
import { NavLink ,useNavigate  } from 'react-router-dom';
import { MenuIcon ,ChevronUpIcon  } from 'lucide-react';
import SolidButton from './primary/Buttons/SolidButton';
import { BlurFade } from '@/components/magicui/blur-fade';

const linkStyle = "px-12 py-2 rounded-full text-green-900 font-medium hover:bg-green-200 active:text-white active:bg-green-700 md:px-5 md:px-1"
const Navbar =()=>{
    const [displayNav , setDisplayNav]= useState("hidden")
    const navigtor = useNavigate()
    return(
        <>
        <nav className={`w-full fixed top-0 backdrop-blur-[8px] flex items-center justify-between px-4 py-2 bg-green-50/30 z-50 `}>
            
            <div className='flex gap-2'>
                {
                    displayNav === "hidden" ?
                    <button className='md:hidden'
                    onClick={()=> setDisplayNav("flex")}
                    >
                        <MenuIcon className=' text-2xl' />
                    </button>
                    : <button className='mSd:hidden'
                        onClick={()=> setDisplayNav("hidden")}
                    >
                        <ChevronUpIcon className=' text-2xl' />
                    </button>
                }
                
                
                Logo
            </div>

          
        
            <ul className={`${displayNav} fixed bg-gray-100 w-full top-14 left-0 items-center flex-col py-1 gap-1 z-50 md:flex md:bg-transparent md:w-fit md:gap-2 md:top-0 md:relative md:flex-row md:p-0`}>
                <NavLink to={"/"} className={linkStyle} onClick={()=> setDisplayNav("hidden")} >
                    Home
                </NavLink>
                
            
                <a onClick={()=> {
                    navigtor("/")
                    setDisplayNav("hidden")
                    }} href='#About' className={linkStyle} >
                    About
                </a>
                
                <NavLink to={"#contact"} className={linkStyle} onClick={()=> setDisplayNav("hidden")} >
                    Contact
                </NavLink>

                
            </ul>
           

            <SolidButton
                title={"Book"}
                onClick={()=> {
                    navigtor("/book")
                     setDisplayNav("hidden")
                } }
             />
            
        </nav>
        {displayNav === "flex" && <div onClick={()=> setDisplayNav("hidden")} className='fixed top-0 left-0 h-[100vh] w-full bg-gray-600/30 backdrop-blur-[7px] md:hidden z-30'></div>}
        </>
    )
}

export default Navbar;