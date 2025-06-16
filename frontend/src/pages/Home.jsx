import React from 'react';
import { Truck , Sparkles , Clock , CreditCard} from 'lucide-react'
import HeroSection from '../components/homepage/HeroSection';
import AppSection from '@/components/primary/AppSection';
import { colors } from '@/assets/assest';
import {TextAnimate} from '@/components/magicui/text-animate';
import { BlurFade } from '@/components/magicui/blur-fade';

const InfoCard =({title , desc , logo})=>{
    return(
      <BlurFade inView duration={0.6}>
        <div className="bg-white/20 rounded-2xl p-6 text-center">
          {logo}
            <TextAnimate as='h3' once={true} delay={0.3} startOnView className="font-semibold mb-2 text-green-950 md:text-2xl">{title}</TextAnimate>
             <TextAnimate as='p' once={true} delay={0.4} className="text-sm text-blue-100">{desc}</TextAnimate>
        </div>
      </BlurFade>
    )
}

const Home =()=>{

    return(
        <>
            {/* Hero Section */}
            <HeroSection />
            <AppSection id={"About"} className={colors.gradientColor}>
                
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
        </>
    )
}

export default Home;