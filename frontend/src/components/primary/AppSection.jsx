import React from 'react'

const AppSection =({children , id  , className})=>{
    return(
        <section id={id} className={`${className} w-full px-5 py-10 md:px-10 md:py-15 xl:px-10 xl:py:20 `}>
            {children}
        </section>
    )
}

export default AppSection; 