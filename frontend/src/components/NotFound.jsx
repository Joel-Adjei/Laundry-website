import React from "react";
import { useNavigate} from "react-router"
import { MessageCircleWarning } from 'lucide-react'
import OutlineButton from "@/components/primary/Buttons/OutlineButton";

const NotFound =()=>{
    const navigator = useNavigate()
    return(
        <div className={'h-[100vh] w-full flex flex-col items-center justify-center text-xl bold text-green-900 gap-3'}>
            <div className={"flex gap-1"}>
                <MessageCircleWarning className={"text-green-600 size-20" } />

            </div>
            <h3>Page Not Found</h3>
            <OutlineButton title={"Go Home"} onClick={()=> navigator("/")} />
        </div>

    )
}

export default NotFound;