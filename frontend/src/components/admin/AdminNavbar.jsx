import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useNaems} from "@/context/NaemsContext";
import {Menu, ListTodo, Users , LucideLayoutDashboard} from 'lucide-react'
import SolidButton from "@/components/primary/Buttons/SolidButton";

const AdminNavbar = ()=>{
    const [display , setDisplay] = useState("block")
    const { activeTab , setActiveTab} = useNaems();
    const navigator = useNavigate()

    const toggleNav=()=>{
        setDisplay(display=> display == "hidden" ? "block" : "hidden")
    }

    const setView =(view)=>{
        if(view === "dashboard"){
            navigator(`/admin/dashboard`);
        }else {
            navigator(`/admin/dashboard/${view}`);
        }
        setActiveTab(view);
        toggleNav()
    }


    return (
        <>
            {/* Navigation */}
            <button
                className={`fixed top-2 z-20 left-5 block md:hidden bg-white text-green-600 p-2 rounded-lg`}
                onClick={toggleNav}
            >
                <Menu className={"size-8"} />
            </button>
            <nav className={`absolute top-13 z-20 md:block md:fixed md:h-[100vh] md:top-0  md:bg-gray-100 p-4 w-[190px]`}>
                <div className={`${display} h-75 flex flex-col justify-between md:flex pb-4 left-2 bg-white shadow-xl rounded-lg`}>
                    <div className="flex flex-col ">
                        <button
                            onClick={()=>{ setView("dashboard");}}
                            className={`py-4 px-2 border-b-2 font-medium text-sm flex gap-2 ${
                                activeTab === 'dashboard'
                                    ? 'border-green-500 text-green-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <LucideLayoutDashboard />
                            Overview
                        </button>
                        <button
                            onClick={()=>{ setView("bookings");}}
                            className={`py-4 px-2 border-b-2 font-medium text-sm flex gap-2 ${
                                activeTab === 'bookings'
                                    ? 'border-green-500 text-green-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <ListTodo />
                            Bookings
                        </button>
                        <button
                            onClick={()=>{ setView("customers");}}
                            className={`py-4 px-2 border-b-2 font-medium text-sm flex gap-2 ${
                                activeTab === 'customers'
                                    ? 'border-green-500 text-green-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <Users />
                            Customers
                        </button>
                    </div>

                    <SolidButton
                        title={"Logout"}
                        className={"mx-auto"}
                    />
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar