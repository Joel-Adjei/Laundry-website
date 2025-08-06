import React, {useState , useEffect} from 'react'
import { useNavigate} from 'react-router'
import { X} from "lucide-react"
import {useNaems} from "@/context/NaemsContext";
import mtn from "../../assets/images/mtn-logo.jpg"
import SolidButton from "@/components/primary/Buttons/SolidButton";
import OutlineButton from '../primary/Buttons/OutlineButton';

const Payment =()=>{
    const [display , setDisplay] = useState(false)
    const [transID , setTransID] = useState("")
    const [transIDError, setTransIDError] = useState("")
    const navigator = useNavigate()

    const { formData , setResetForm , setLoading , message , setMessage } = useNaems();

    // Validation function for transaction ID
    const validateTransactionID = (id) => {
        const cleanId = id.replace(/\s/g, '');

        if (!cleanId) {
            return "Transaction ID is required";
        }

        if (cleanId.length < 11) {
            return "Transaction ID must be at least 11 characters long";
        }

        if (cleanId.length > 15) {
            return "Transaction ID cannot exceed 15 characters";
        }

        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        if (!alphanumericRegex.test(cleanId)) {
            return "Transaction ID can only contain letters and numbers";
        }

        return "";
    };

    // Handle transaction ID input change
    const handleTransIDChange = (e) => {
        const value = e.target.value;
        setTransID(value);

        if (transIDError && value) {
            setTransIDError("");
        }
    };

    // Handle blur event for real-time validation
    const handleTransIDBlur = () => {
        const error = validateTransactionID(transID);
        setTransIDError(error);
    };

    // Check if transaction ID is valid
    const isTransIDValid = () => {
        return transID.replace(/\s/g, '').length >= 11 && !validateTransactionID(transID);
    };



    // Handle payment submission
    const handleSubmit = () => {
        const error = validateTransactionID(transID);
        if (error) {
            setTransIDError(error);
            return;
        }

        setLoading(true)
        const payload = {
            data: formData,
            transID : transID,
        }
        try{
            console.log(payload)
            navigator("/")
        }catch(error){
            console.log(error)
        }finally{
            setResetForm(true)
        }
    
    };


    return (
        <div className={"z-60 w-full h-[100dvh] fixed top-0 left-0 flex items-center justify-center bg-gray-300/70"}>

            <div className=" relative p-4 md:p-0 md:border border-green-500 rounded-xl">
                <button
                    className={"size-12 absolute top-2 right-2  flex items-center justify-center rounded-full cursor-pointer hover:bg-green-300/20"}
                    onClick={()=> navigator(-1)}
                >
                    <X className={"text-white text-lg"} />
                </button>

                <h2 className="text-2xl font-bold bg-green-800 p-4 rounded-t-xl text-green-100 text-center">Payment Details</h2>

            <div className="p-3 rounded-b-xl bg-white mx-auto">
                <p className="text-center text-lg mb-6 text-gray-700">
                    A 50% deposit of{' '}
                    <span className="font-extrabold text-3xl text-green-600">
                    GHS {(formData.price / 2).toFixed(2)} {/* Use price from the submitted form data */}
                  </span>{' '}
                    is required to confirm your order.
                </p>

                <div className="text-center text-lg mb-6 text-gray-700 leading-10" >
                    Please make payment to the number below <br />
                    <span className={"bg-blue-700 py-2 px-4 rounded text-blue-50 text-2xl font-bold"}>0531-547-562 <br /></span>
                    <div className={"mt-2 text-sm font-bold text-gray-500 "}>
                        <img src={mtn} className={"mx-auto rounded-lg w-20 object-contain"} />
                        MTN
                    </div>
                </div>

                { display && <div className='flex flex-col mb-6 px-9'>
                    <label className='text-center font-semibold text-blue-700'>
                        Enter Transcation ID
                    </label>

                    <input
                        placeholder='e.g. MP123456789 or 12345678'
                        type={"number"}
                        value={transID}
                        onChange={handleTransIDChange}
                        onBlur={handleTransIDBlur}
                        className={`text-md p-3 rounded bg-gray-100 border focus:shadow-lg transition-colors focus:outline-none ${
                            transIDError
                                ? 'border-red-400 focus:border-red-500'
                                : isTransIDValid()
                                ? 'border-green-400 focus:border-green-500'
                                : 'border-blue-400 focus:border-blue-500'
                        }`}
                    />
                    {transIDError && (
                        <span className="text-red-500 text-sm mt-1 text-center">
                                    {transIDError}
                                </span>
                    )}
                    {/*{!transIDError && transID && isTransIDValid() && (*/}
                    {/*    <span className="text-green-500 text-sm mt-1 text-center">*/}
                    {/*                ✓ Valid transaction ID*/}
                    {/*            </span>*/}
                    {/*)}*/}
                </div>}

                <div  className={"w-full flex justify-center items-center gap-2 text-lg"}>
                    <SolidButton
                        title={"Okay"}
                        className={`${!isTransIDValid() ? "hidden": "flex"}`}
                        onClick={handleSubmit}
                    />

                    <OutlineButton 
                        title={"Payment made"}
                        className={`${display && "hidden" } text-green-600`}
                        onClick={()=>{
                            setDisplay(true)
                        }}
                    />
                </div>
            </div>

        </div>
        </div>
    )
}

export default Payment