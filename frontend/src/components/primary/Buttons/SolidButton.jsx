import React from "react";
import {colors} from '@/assets/assest.js'

const SolidButton = ({title , className , logo , onClick})=>{
    return(
        <button 
            onClick={onClick}
            className={`${colors.gradientColor} ${className} text-white px-8 cursor-pointer py-2 rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center group `}>
            {title}
            {logo}
        </button>
    )
}

export default SolidButton;