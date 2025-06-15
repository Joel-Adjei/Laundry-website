import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import AppSection from '@/components/primary/AppSection';

const Home =()=>{

    return(
        <>
            {/* Hero Section */}
            <HeroSection />
            <AppSection id={"About"} className={"bg-blue-100 h-100"}>
                About Section
            </AppSection>
        </>
    )
}

export default Home;