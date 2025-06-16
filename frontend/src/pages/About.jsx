import React from 'react';
import AppSection from '@/components/primary/AppSection'
import AppHeader from '@/components/primary/text/AppHeader'
import { TextAnimate } from '@/components/magicui/text-animate';

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
        </>
        
    )
}

export default About