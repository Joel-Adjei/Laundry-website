import React from "react";
import {colors} from '@/assets/assest.js'

const OutlineButton = ({title , className , logo , onClick})=>{
    return(
        <button 
            onClick={onClick}
            className={`border-2 text-white cursor-pointer border-gray-300 px-8 py-2 rounded-full font-semibold hover:border-green-300 hover:text-green-600 transition-all duration-300 ${className}`}>
            {title}
            {logo}
        </button>
    )
}

export default OutlineButton;