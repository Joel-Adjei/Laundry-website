import React, {useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router'
import AdminNavbar from "@/components/admin/AdminNavbar";
import {useAuth} from "@/context/AuthContext";
import {images} from "@/assets/assest";

const AdminLayout = () => {
    const navigator = useNavigate()
    const {isLogin}= useAuth()

    useEffect(()=>{
        !isLogin && navigator("/admin/auth/login", {replace : true})
    },[])

    if(!isLogin){
        return null
    }

  return (
    <div className={"min-h-[100vh] bg-gray-100"}>

        <div className={""}>
            <AdminNavbar />

            <div className={"md:pl-[200px] px-6 md:px-8"}>
                {/* Header */}
                <header className="w-full pl-17 md:pl-0 sticky top-0 z-30">
                    <div className="py-2">
                        <div className="flex items-center justify-end sm:justify-between">
                            <div className={"hidden sm:flex gap-2 rounded-lg bg-white shadow-lg px-4 py-2"}>
                                <img src={images.mainLogo}  className={"w-7"}/>
                                <h1 className="hidden lg:block text-xl font-bold text-green-800">
                                    Neam's Laundry Service
                                </h1>
                            </div>

                            <div className=" bg-white rounded-lg shadow-lg flex items-center gap-4 px-4 py-2">
                                <span className="text-sm text-gray-600">Welcome, Admin</span>
                                <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center text-white font-medium">
                                    A
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div >
                    <Outlet />
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default AdminLayout