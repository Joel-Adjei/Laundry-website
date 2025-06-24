import React , {useEffect} from 'react';
import { Truck , Sparkles , Clock , CheckCircle , CreditCard} from 'lucide-react'
import HeroSection from '../components/homepage/HeroSection';
import AppSection from '@/components/primary/AppSection';
import AppHeader from '@/components/primary/text/AppHeader';
import { colors } from '@/assets/assest';
import {TextAnimate} from '@/components/magicui/text-animate';
import { BlurFade } from '@/components/magicui/blur-fade';
import HowItWork from '@/components/homepage/HowItWorks';
import SolidButton from '@/components/primary/Buttons/SolidButton';
import { useNavigate , useLocation } from 'react-router-dom';
import AppText from '@/components/primary/text/AppText';
import {useNaems} from "@/context/NaemsContext";

const InfoCard =({title , desc , logo})=>{
    return(
      <BlurFade inView duration={0.6}>
        <div className="bg-white/20 rounded-2xl p-6 text-center">
          {logo}
            <TextAnimate as='h3' once={true} delay={0.3} startOnView className="font-semibold mb-2 text-green-950 md:text-2xl">{title}</TextAnimate>
             <TextAnimate as='p' once={true} delay={0.4} className=" text-md md:text-xl text-blue-100">{desc}</TextAnimate>
        </div>
      </BlurFade>
    )
}

const Home =()=>{
  const location = useLocation()
  const navigator = useNavigate()

    const { setLoading } = useNaems()

  useEffect(()=>{
      // setLoading(true)
    window.scrollTo(0,0)
  },[])

    return(
        <>
            {/* Hero Section */}
            <HeroSection />
            <AppSection className={colors.gradientColor}>
                
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 md:p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <InfoCard 
                    title={"Free Pickup"}
                    desc={"We come to you"}
                    logo={<Truck className="h-12 w-12 text-green-100 mx-auto mb-3" />}
                  />
                  <InfoCard 
                    title={"Pro Cleaning"}
                    desc={"Expert care"}
                    logo={<Sparkles className="h-12 w-12 text-green-100 mx-auto mb-3" />}
                  />
                  <InfoCard 
                    title={"Fast Delivery"}
                    desc={"Back to you"}
                    logo={<Clock className="h-12 w-12 text-green-100 mx-auto mb-3" />}
                  />
                  <InfoCard 
                    title={"Easy Payment"}
                    desc={"50% now, 50% later"}
                    logo={<CreditCard className="h-12 w-12 text-green-100 mx-auto mb-3" />}
                  />
                </div>
              </div>
            </div>
            </AppSection>

            <HowItWork />

            <AppSection className={'bg-gray-50 py-10'}>
              <div className="max-w-4xl mx-auto px-4 text-center">
                <AppHeader
                  title_1={"Save"}
                  title_2={"Your Time"}
                 />
                <BlurFade inView delay={0.2}>
                  <AppText className={"mb-2"}>
                  Join hundreds of satisfied customers who trust us with their laundry. 
                   Experience the convenience today!
                 </AppText>
                </BlurFade>
                 
          
          <div className="flex flex-col gap-4 justify-center items-center">
                <BlurFade inView delay={0.4} direction='left'>
                  <SolidButton 
                    onClick={()=> navigator("/book") }
                    title={" Start Your Order"} 
                  />
                </BlurFade>
                

            <BlurFade inView delay={0.6} direction='right'>
              <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-1" />
                <span>Free Pickup</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-1" />
                <span>Professional Care</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-1" />
                <span>Fast Delivery</span>
              </div>
            </div>
            </BlurFade>
            

          </div>
        </div>
            </AppSection>
            
        </>
    )
}

export default Home;