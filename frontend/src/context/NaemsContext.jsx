import React, {createContext, useContext, useEffect, useState} from 'react'

const NaemsContext = createContext();

export const NaemsContextProvider=({children})=>{
    const [loading , setLoading] = useState(false);

    function endLoading(){
        setTimeout(()=>{
            setLoading(false)
        } , 2000)
    }



    useEffect(()=>{
        endLoading()
    },[loading])
    return(
        <NaemsContext.Provider value={{
            loading,
            endLoading,
            setLoading,
        }}>
            {children}
        </NaemsContext.Provider>
    )
}

export const useNaems =()=> useContext(NaemsContext);