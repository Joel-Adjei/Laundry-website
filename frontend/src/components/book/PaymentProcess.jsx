import React, { useEffect, useState } from "react"
import PaymentNotification from "./payment-notification"
import { useNavigate } from "react-router"
import { useNaems } from "@/context/NaemsContext"
import PaymentStatusPage from "./PaymentStatusPage"
import PaymentLoading from "./PaymentLoading"

const PayementProcess=({data})=>{
  const [isVisible , setIsVisible] = useState(false)
    const {message , setMessage } = useNaems();

  const navigate = useNavigate()

  useEffect(()=>{
    setTimeout(()=>{
        setMessage({status:"success" ,text:"Payment successful!"});
        setIsVisible(true)
    },4000)
  }, [])

    return(
        <div className="z-70 fixed top-0 h-[100vh] w-full bg-white flex flex-col items-center justify-center">
            {!isVisible && 
            <PaymentLoading />
            }

            {/* <PaymentNotification
                type={`${message.status}`}
                message={message.text}
                onClose={()=>{navigate("/")}}
                isVisible={isVisible}
            /> */}

            {isVisible && <PaymentStatusPage status={message.status} onClose={()=>{navigate("/")}} />}

        </div>
    )
}

export default PayementProcess