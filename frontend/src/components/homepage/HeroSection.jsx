import React from 'react'
import { ChevronRight, Sparkles, } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import washingM from '../../assets/images/washing-m-1.png'
import AppSection from '../primary/AppSection';
import SolidButton from '../primary/Buttons/SolidButton';
import AppText from '../primary/text/AppText';
import { BlurFade } from '@/components/magicui/blur-fade';

const HeroSection =()=>{
    const navgator = useNavigate()
    return(
        <AppSection className={"flex relative items-center justify-center flex-col pt-14 md:pt-5 md:flex-row"}>
            <div>
                <div className="space-y-4">
                  <BlurFade delay={0.2} inView>
                      <h1 className="text-5xl text-center font-bold text-gray-900 leading-tight md:text-left lg:text-7xl">
                  Fresh & Clean
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600">
                    Every Time
                  </span>
                </h1>
                  </BlurFade>
                
                <BlurFade delay={0.3} direction='left'>
                  <AppText className=" text-center max-w-lg md:text-left">
                    Experience premium laundry services with eco-friendly care. We pick up, clean, and deliver your clothes with exceptional attention to detail.
                  </AppText>
                </BlurFade>
                
              </div>

              <div className="flex justify-center mt-4 gap-4 md:justify-start">
                <BlurFade delay={0.3} blur='0px' direction='left'>
                    <SolidButton 
                    onClick={()=> navgator("/book")}
                    title='Book'
                    className={"px-17"}
                    logo={<ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />} 
                  />
                </BlurFade>
                
              </div>
            </div>
            <div>

                <div className="relative">
                  <BlurFade direction='right' delay={0.5}>
                    <div className='absolute h-35 w-35 top-7 md:top-20 right-10 rounded-full bg-green-400'></div>
                  </BlurFade>

                  <BlurFade direction='left' delay={0.5}>
                    <div className='absolute h-50 w-50 top-20 sm:top-40 lg:top-60 left-0 rounded-full bg-blue-200'></div>
                  </BlurFade>

                  <BlurFade delay={0.2} direction='bottom' inView>
                    <div className="relative z-10">
                        <img 
                            src={washingM}
                            alt="Clean laundry"
                            className="rounded-3xl w-full max-w-lg mx-auto"
                        />
                    </div>
                  </BlurFade>
                    

                    <Sparkles  className="absolute right-3 bottom-1.5 left-0 w-12 h-30 text-green-600" />
                    <Sparkles className="absolute right-3 top-1.5 w-12 h-12 text-green-600" />
                </div>
            </div>

            

        </AppSection>
    )
}

export default HeroSection;