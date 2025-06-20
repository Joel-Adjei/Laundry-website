import React, {useState , useEffect} from 'react';
import AppSection from '@/components/primary/AppSection'
import AppHeader from '@/components/primary/text/AppHeader'
import {Sparkles , Clock , Shield ,Heart, Users} from 'lucide-react'
import { TextAnimate } from '@/components/magicui/text-animate';
import { BlurFade } from '@/components/magicui/blur-fade';
import Footer from '@/components/Footer'
import { colors } from '@/assets/assest';
import AppText from '@/components/primary/text/AppText';
import OutlineButton from '@/components/primary/Buttons/OutlineButton';

const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '1M+', label: 'Clothes Cleaned' },
    { number: '15', label: 'Years Experience' },
    { number: '24/7', label: 'Service Available' }
  ];

  const values = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-500" />,
      title: 'Quality First',
      description: 'We use premium detergents and advanced cleaning techniques to ensure your clothes look and feel their best.'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Fast & Reliable',
      description: 'Quick turnaround times without compromising quality. We respect your time and keep our promises.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Eco-Friendly',
      description: 'Environmentally conscious cleaning solutions that are safe for you, your family, and the planet.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Care & Attention',
      description: 'Every garment receives personal attention. We treat your clothes like they\'re our own.'
    }
  ];

const About =()=>{
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 1500)
        window.scrollTo(0,0)
    },[])

    return(
        <>{ loading ? <div className={'h-[100vh] w-full flex items-center justify-center'}> isloading</div> : <>
            <AppSection className={"bg-green-50 mt-10"}>
                <AppHeader
                    title_1={"About"}
                    title_2={"Us"}
                 />

                 <TextAnimate once as='p' className={"mb-2 text-center"}>
                    At Naem's Laundry Service, we understand that life gets busy. That's why we've created a 
                    convenient, reliable laundry service that comes to you. Simply place your order through 
                    our website, and we'll handle the rest – from pickup to professional washing and delivery 
                    right back to your doorstep.
                 </TextAnimate>
            </AppSection>

            <BlurFade direction='right' inView>
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


            <BlurFade direction='left' inView>
            <AppSection className={'bg-blue-50'}>
                <AppHeader title_1={"Our"} title_2={"Journey"} />

                <main className="container mx-auto flex-grow">
        
                <div className="flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-16">
                {/* Image for Our Journey */}
                    <div className="md:w-1/2 flex justify-center items-center">
                        <img
                            src="https://placehold.co/600x400/93c5fd/ffffff?text=Quality+Laundry+Service"
                            alt="Professional laundry service in action"
                            className="rounded-2xl shadow-lg w-full max-w-md md:max-w-none h-auto object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/cccccc/000000?text=Image+Loading+Failed"; }}
                        />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <AppText className="text-lg leading-relaxed text-gray-700 mb-4">
                            Born out of a simple idea – to make laundry effortless and exceptional for everyone – <span className="font-semibold text-blue-600">Naem's Laundry Service</span> began its journey years ago. We observed the daily grind, the overflowing hampers, and the precious time lost to laundry chores. That's when we decided to create a service that stands for unparalleled cleanliness, convenience, and care.
                        </AppText>
                        <AppText className="text-lg leading-relaxed text-gray-700">
                            From our humble beginnings, we've grown into a trusted name, serving our community with a passion for pristine garments and delighted customers. Every fold, every wash, every delivery is handled with the dedication you deserve.
                        </AppText>
                    </div>
                </div>
                </main>
            </AppSection>
            </BlurFade>


            <BlurFade direction='down' inView>
            <AppSection>
                <AppHeader title_1={"Our"} title_2={"Values"} />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="p-4 group">
                            <div className="mb-4 h-45 rounded shadow bg-gray-400 group-hover:scale-110 transition-transform duration-300">
                                {/* {value.icon}  */}
                            </div>
                            
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </AppSection>
            </BlurFade>


            <BlurFade direction='right' inView>
            <AppSection className={`${colors.gradientColor} `}>
                <div className="max-w-4xl mx-auto text-center">
          
                <h2 className="text-4xl font-bold text-white mb-6">
                    Ready to Experience the CleanCare Difference?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Join thousands of satisfied customers who trust us with their laundry. 
                    Experience quality, convenience, and care like never before.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <OutlineButton 
                        title={"Book Now"} 
                        className=" transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
                    />
                     
                    <button className=" bg-green-50 font-bold text-green-900 px-7 py-3 rounded-full transition-all duration-300 hover:transform hover:scale-105">
                        Estimate Cost
                    </button>
                </div>
                </div>
            </AppSection>
            </BlurFade>

            <AppSection id={"Contact"} className={"bg-gray-50"}>
                <AppHeader
                    title_1={"Contact "}
                    title_2={"Us"}
                />
                

            </AppSection>

        </>} 
        </>
        
    )
}

export default About