import React, {createContext, useContext, useEffect, useState} from 'react'

const NaemsContext = createContext();

export const NaemsContextProvider=({children})=>{
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        location: '', // New state for main location (Accra/Legon UG)
        locationDetail: '', // New state for hall or city/town
        roomNumber: '',
        phoneNumber: '',
        basketSize: '',
        price: 0,
    });

    // State to manage form submission message or payment confirmation message
    const [message, setMessage] = useState('');

    const [loading , setLoading] = useState(false);

    function endLoading(){
        setTimeout(()=>{
            setLoading(false)
        } , 2000)
    }

    // Reset form to start a new order
    const resetForm = () => {
        setMessage('');
        setFormData({
            name: '',
            location: '',
            locationDetail: '',
            roomNumber: '',
            phoneNumber: '',
            basketSize: '',
            price: 0,
        })
    };



    useEffect(()=>{
        endLoading()
    },[loading])
    return(
        <NaemsContext.Provider value={{
            loading,
            formData,
            setFormData,
            message,
            setMessage,
            resetForm,
            endLoading,
            setLoading,
        }}>
            {children}
        </NaemsContext.Provider>
    )
}

export const useNaems =()=> useContext(NaemsContext);