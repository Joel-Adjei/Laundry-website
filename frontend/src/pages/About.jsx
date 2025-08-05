import React, {useState , useEffect} from 'react';
import { useNavigate} from 'react-router'
import AppSection from '@/components/primary/AppSection'
import AppHeader from '@/components/primary/text/AppHeader'
import {Dot, Clock, Shield, Heart, Users, Droplet, ShirtIcon, Sparkle, CheckCircle} from 'lucide-react'
import { TextAnimate } from '@/components/magicui/text-animate';
import { BlurFade } from '@/components/magicui/blur-fade';
import {colors, images , services} from '@/assets/assest';
import AppText from '@/components/primary/text/AppText';
import OutlineButton from '@/components/primary/Buttons/OutlineButton';
import Contact from "@/components/contact/Contact";



const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '1M+', label: 'Clothes Cleaned' },
    { number: '15', label: 'Years Experience' },
    { number: '24/7', label: 'Service Available' }
  ];

  const values = [
    {
      icon: <Sparkle size={40} />,
      title: 'Convenience',
      description: 'Our door-to-door service ensures that your laundry is collected from and returned to your doorstep, providing unparalleled convenience.'
    },
    {
      icon:  <Shield size={40} />,
      title: 'Operational Efficiency',
      description: 'Our team will collect your laundry, wash, iron, and package it with utmost care, and return it to you within 24 hours.'
    },
    {
      icon: <Clock size={40} />,
      title: 'Timely Delivery',
      description: 'We guarantee prompt delivery of your laundry, returning it to your doorstep within 24 hours of collection.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Care & Attention',
      description: 'Every garment receives personal attention. We treat your clothes like they\'re our own.'
    }
  ];


const About =()=>{
    const navigator = useNavigate()

    return(
        <>
            <AppSection className={"relative bg-green-50 mt-10"}>
                <AppHeader
                    title_1={"About"}
                    title_2={"Us"}
                 />

                 <TextAnimate once as='p' className={"z-10 text-md md:text-lg text-gray-600 mb-2 text-center "}>
                    At Naem's Laundry Service, we understand that life gets busy. That's why we've created a 
                    convenient, reliable laundry service that comes to you. Simply place your order through 
                    our website, and we'll handle the rest, from pickup to professional washing and delivery
                    right back to your doorstep.
                 </TextAnimate>
            </AppSection>

            <BlurFade direction='right' duration={0.7} delay={0.6} inView>
            <AppSection className={`${colors.gradientColor} py-16 px-4`} >
                <section>
                <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                    <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                        <div className={` bg-green-700/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl`}>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-blue-100 font-medium">{stat.label}</div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
                </section>
            </AppSection>
            </BlurFade>


            <BlurFade direction='down' duration={0.7} delay={0.5} inView>
            <AppSection className={"relative"}>
                <img src={images.washingMachines} className={"z-0 left-0 top-0 opacity-8 absolute size-full object-cover"} />

                <AppHeader title_1={"Our"} title_2={"Values"} />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="bg-gradient-to-tr from-green-950 to-green-800 z-10 rounded-md flex gap-4 items-center p-4 group hover:scale-110 transition-transform duration-300">
                            <div className=" p-2 text-3xl text-green-500 rounded-md  shadow bg-gray-50 ">
                                {value.icon}
                            </div>

                            <div className={"h-[80px] w-[4px] rounded-full bg-white"}></div>
                            
                            <div>
                                <h3 className="text-xl font-bold text-green-200 mb-2">{value.title}</h3>
                                <AppText className="text-white leading-relaxed">{value.description}</AppText>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </AppSection>
            </BlurFade>

            <BlurFade direction='right' duration={0.7} inViewMargin={"-120px"} offset={10} delay={0.5} inView>
                <AppSection className={'bg-blue-50'}>
                    <AppHeader
                        title_1={"Comprehensive "}
                        title_2={"Services"}
                        flexType={"flex-col sm:flex-row"}
                        desc={"Our services include"}
                    />

                    <div className={"grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-3 gap-3"}>
                        {
                            services.map((value, index)=>(
                                <div key={index} className={ "flex flex-col items-center gap-2 bg-white rounded-2xl border-4 border-blue-600 p-4 shadow-lg z-0"}>
                                    <div className={"h-40 w-full bg-gray-100 rounded-md"} >
                                        <img src={value.image} className={"size-full rounded-md object-cover"} />
                                    </div>

                                    <div >
                                        <h3 className="text-2xl bold text-blue-800 leading-relaxed">
                                            {value.title}
                                        </h3>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </AppSection>
            </BlurFade>

            <AppSection className={"flex flex-col gap-3 md:flex-row md:gap-0"}>
                <div className={"h-60 md:h-full md:w-1/2"}>
                    <img src={images.delivery} className={"size-full shadow-md border-4 border-green-200 object-cover rounded-lg"} />
                </div>
                <div className={"m-auto"}>
                    <AppHeader title_1={'Benefit'} />
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className={"w-[10px] h-[10px] rounded-full bg-green-400"}></div>
                            <AppText>No need to leave your hall or hostel </AppText>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className={"w-[10px] h-[10px] rounded-full bg-green-400"}></div>
                            <AppText>Hassle-free laundry experience</AppText>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className={"w-[10px] h-[10px] rounded-full bg-green-400"}></div>
                            <AppText className={"px-0 mx-0"}>Quality service guaranteed</AppText>
                        </div>
                    </div>

                </div>


            </AppSection>


            <BlurFade direction='right' duration={0.7} delay={0.5} inView>
            <AppSection className={`${colors.gradientColor} `}>
                <div className="max-w-4xl mx-auto text-center">
          
                <h2 className="text-4xl font-bold text-white mb-6">
                    Ready to Experience the CleanCare Difference?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Join hundreds of satisfied customers who trust us with their laundry.
                    Experience quality, convenience, and care like never before.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <OutlineButton 
                        title={"Book Now"}
                        onClick={()=> navigator("/book")}
                        className="text-white transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
                    />
                     
                    {/*<button onClick={()=> navigator("/")} className=" bg-green-50 font-bold text-green-900 px-7 py-3 rounded-full transition-all duration-300 hover:transform hover:scale-105">*/}
                    {/*    Estimate Cost*/}
                    {/*</button>*/}
                </div>
                </div>
            </AppSection>
            </BlurFade>


            <Contact />
        </>
        
    )
}

export default About