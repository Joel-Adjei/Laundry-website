import React from 'react'
import { Sparkles } from 'lucide-react'
import { colors } from '@/assets/assest'
import { TextAnimate } from '@/components/magicui/text-animate'
import { BlurFade } from '@/components/magicui/blur-fade'

const AppHeader=({title_1 , title_2 , desc , flexType })=>{
    return(
        <div className="flex flex-col items-center text-center mb-5">
            <div className='flex gap-2 items-center'>
                <BlurFade inView direction='down'>
                    <Sparkles className=' text-2xl  text-blue-700 ' />
                </BlurFade>

                <BlurFade inView direction='top'>
                    <h2 className={`flex ${flexType} gap-2 text-3xl md:text-4xl font-bold text-center text-gray-600 mb-3`}>
                        {title_1} <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600'>{title_2}</span>
                    </h2>
                </BlurFade>
            </div>

            <BlurFade inView delay={0.2} direction='right'>
                <div className={`${colors.gradientColor} h-1 w-10 mb-3`}></div>
            </BlurFade>
             
            {desc && <TextAnimate once startOnView delay={0.4} as='p' className="text-center text-gray-500">
                {desc}
            </TextAnimate>}
        </div>
    )
}

export default AppHeader;