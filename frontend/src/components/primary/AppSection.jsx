import React from 'react'

const AppSection =({children , id  , className})=>{
    return(
        <section id={id} className={`w-full px-5 py-3 md:px-10 md:py-5 xl:px-10 xl:py:7 ${className}`}>
            {children}
        </section>
    )
}

export default AppSection; 