import React from 'react'
import AppSection from '../primary/AppSection'
import { Shirt, Clock, Truck } from 'lucide-react'
import { colors } from '@/assets/assest'
import AppHeader from '../primary/text/AppHeader'
import { BlurFade } from '../magicui/blur-fade'

const StepCard = ({number , title , desc , logo , color})=>{
    return(
    <div className="text-center flex flex-col-reverse relative mb-7">
        <BlurFade direction='bottom' delay={0.2} inView>
            <div className={ " bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow z-0"}>
            <BlurFade delay={0.3} inView>
                {logo}
            </BlurFade>
            
            <BlurFade delay={0.3} inView>
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h3>
                <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                    {desc}
                </p>
            </BlurFade>
        </div>
        <BlurFade direction='top' inView>
            <div className={color + "  text-white w-20 h-20 border-white border-8 rounded-full flex items-center justify-center mx-auto mt-[-30px] text-2xl font-bold shadow-lg z-10"}>
                {number}
            </div>
        </BlurFade>
        </BlurFade>
       
    </div> 
    )
    
}

const HowItWork =()=>{
    return(
        <AppSection id={"HowItWorks"} className=" bg-blue-100">
            <AppHeader 
                title_1={"How It"} 
                title_2={"Works"} 
                desc={"Experience hassle-free laundry with our simple 3-step process."} 
            />

            <div className='pt-3 flex flex-col' >
               <StepCard
                number={"1"}
                title={"Order Online"}
                color={"bg-blue-600"}
                desc={`Visit our website and place your order. Choose your pickup time and we'll be there. 
                  Pay just 50% upfront to secure your booking.`}
                logo={<Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />}
                /> 
                
               <StepCard
                number={"2"}
                title={"We wash"}
                color={"bg-green-600"}
                desc={`Our team picks up your laundry and takes it to our professional facility. 
                  Every item is treated with care and attention to detail.`}
                logo={<Shirt className="h-12 w-12 text-green-600 mx-auto mb-4" />}
                />

                <StepCard
                number={"3"}
                title={"Fresh Delivery"}
                color={"bg-blue-600"}
                desc={`Your clean, fresh laundry is delivered back to you. Pay the remaining 50% 
                  when you receive your perfectly cleaned clothes.`}
                logo={<Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />}
                />

            </div>

        
        </AppSection>
    )

}

export default HowItWork