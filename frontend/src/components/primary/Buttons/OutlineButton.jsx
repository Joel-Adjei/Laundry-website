import React from "react";
import {colors} from '@/assets/assest.js'

const OutlineButton = ({title , type, className , logo , onClick})=>{
    return(
        <button
            type={type}
            onClick={onClick}
            className={` ${className} border-2 cursor-pointer border-green-300 px-8 py-2 rounded-full font-semibold hover:border-green-300 hover:text-green-600 transition-all duration-300`}>
            {title}
            {logo}
        </button>
    )
}

export default OutlineButton;