import React from 'react'
import {Settings , LayoutGridIcon , ArrowBigUpDash} from "lucide-react";

const OnDevelopment =()=>{
    return(
        <div className={"w-full h-[100dvh] bg-gray-50 flex flex-col items-center gap-2 justify-center px-5"}>
            <div className={"mx-auto flex items-center"}>
                <ArrowBigUpDash className={"size-20 text-green-500 "} />
                <Settings className={"size-25 text-green-500 "} />
                <ArrowBigUpDash className={"size-20 text-green-500 "} />
            </div>
            <h4 className={"text-center text-xl md:text-3xl text-gray-600 font-semibold "}>Please the app is undergoing an update</h4>
        </div>
    )
}

export default OnDevelopment