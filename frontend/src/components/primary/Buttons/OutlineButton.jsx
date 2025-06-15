import React from "react";
import {colors} from '@/assets/assest.js'

const OutlineButton = ({title , className , logo , onClick})=>{
    return(
        <button 
            onClick={onClick}
            className={`border-2 cursor-pointer border-gray-300 text-gray-700 px-8 py-2 rounded-full font-semibold hover:border-green-600 hover:text-green-600 transition-all duration-300 ${className}`}>
            {title}
            {logo}
        </button>
    )
}

export default OutlineButton;