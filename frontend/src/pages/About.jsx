import React from 'react';
import AppSection from '@/components/primary/AppSection'
import AppHeader from '@/components/primary/text/AppHeader'
import { TextAnimate } from '@/components/magicui/text-animate';
import { BlurFade } from '@/components/magicui/blur-fade';
import Footer from '@/components/Footer'

const About =()=>{
    return(
        <>
            <AppSection className={"bg-green-50 mt-10"}>
                <AppHeader
                    title_1={"About"}
                    title_2={"Us"}
                 />

                 <TextAnimate once as='p' className={"mb-2 text-center"}>
                    At NAEM's Laundry Service, we understand that life gets busy. That's why we've created a 
                    convenient, reliable laundry service that comes to you. Simply place your order through 
                    our website, and we'll handle the rest – from pickup to professional washing and delivery 
                    right back to your doorstep.
                 </TextAnimate>
            </AppSection>

            <AppSection id={"Contact"} className={"bg-gray-50"}>
                <AppHeader
                    title_1={"Contact "}
                    title_2={"Us"}
                />
                <BlurFade inView delay={0.3}>
                    <div>
                        575iee5e5
                    </div>
                </BlurFade>

            </AppSection>

            <Footer />
        </>
        
    )
}

export default About