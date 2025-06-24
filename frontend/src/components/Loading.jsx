import React from "react";

const Loading =()=>{
    return(
        <div className={'h-[100vh] w-full flex flex-col items-center justify-center text-xl bold text-green-900 gap-3'}>
            <div className={"flex gap-1"}>
                <div className={"size-4 bg-blue-600 rounded-full animate-bounce"} ></div>
                <div className={"size-4 bg-green-600 rounded-full animate-bounce"} style={{animationDelay : '0.2s'}}></div>
                <div className={"size-4 bg-blue-600 rounded-full animate-bounce"} style={{animationDelay : '0.4s'}}></div>
            </div>
        </div>

    )
}

export default Loading;