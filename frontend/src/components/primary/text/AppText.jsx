import React from 'react'
import { TextAnimate } from '@/components/magicui/text-animate'

const AppText=({children , className})=>{
    return(
        <p className={`${className} text-md md:text-lg text-gray-700`}>
            {children}
        </p>
    )
}

export default AppText;