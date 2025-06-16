import React from 'react';
import { Truck , Sparkles , Clock , CreditCard} from 'lucide-react'
import HeroSection from '../components/homepage/HeroSection';
import AppSection from '@/components/primary/AppSection';
import { colors } from '@/assets/assest';
import {TextAnimate} from '@/components/magicui/text-animate';

const infoCard =()=>{
    
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
                  <div className="bg-white/20 rounded-2xl p-6 text-center">
                    <Truck className="h-12 w-12 text-yellow-300 mx-auto mb-3" />
                    <TextAnimate as='h3' startOnView className="font-semibold mb-2 md:text-2xl">Free Pickup</TextAnimate>
                    <TextAnimate as='p' delay={0.3} className="text-sm text-blue-100">We come to you</TextAnimate>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 text-center">
                    <Sparkles className="h-12 w-12 text-yellow-300 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Pro Cleaning</h3>
                    <p className="text-sm text-blue-100">Expert care</p>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 text-center">
                    <Clock className="h-12 w-12 text-yellow-300 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Fast Delivery</h3>
                    <p className="text-sm text-blue-100">Back to you</p>
                  </div>
                  <div className="bg-white/20 rounded-2xl p-6 text-center">
                    <CreditCard className="h-12 w-12 text-yellow-300 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Easy Payment</h3>
                    <p className="text-sm text-blue-100">50% now, 50% later</p>
                  </div>
                </div>
              </div>
            </div>
            </AppSection>
        </>
    )
}

export default Home;