import React from 'react';
import { Mail , Phone , MapPin } from 'lucide-react';
import AppSection from './primary/AppSection';
import { useNavigate } from 'react-router-dom';
import { images } from '@/assets/assest'

const Footer =()=>{
    const navigator = useNavigate()

    return(
        <div className="bg-blue-950  text-white w-full px-5 pt-10 pb-2 md:px-10 md:pt-15 xl:px-10 xl:pt-20  ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
                <div className='flex items-center gap-2'>
                    <img src={images.mainLogo} alt="logo" className='h-10 w-10 md:h-8 md:w-8'  />
                    <h5 className={`text-green-50 text-md font-bold leading-4.5`}>Neam's <span className='font-light'>Laundry Service</span> </h5>
                </div>
              
              <p className="text-gray-400 mb-4">
                Professional laundry pickup and delivery service. Making your life easier, one load at a time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a onClick={()=> navigator("/")} className="hover:text-white cursor-pointer">Home</a></li>
                <li><a onClick={()=> navigator("/about")} className="hover:text-white cursor-pointer">About Us</a></li>
                <li><a onClick={()=> navigator("/")} href="#HowItWorks" className="hover:text-white cursor-pointer">How It Works</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+233 XX XXX XXXX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@naemslaundry.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Medina Estates, Accra</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NAEM's Laundry Service. All rights reserved.</p>
          </div>
        </div>
      </div>
    )
}

export default Footer;