import React from 'react';
import { CreditCard, CheckCircle, AlertCircle } from 'lucide-react';

const PaymentLoading = () => {

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
          <div className='relative flex items-center justify-center bg-amber-00 h-[170px] w-[170px]'>
              {/* Spinning loader */}
              <div className="inline-block animate-spin rounded-full h-35 w-35 border-b-2 border-blue-500">
                
              </div>
              {/* Animated Credit Card */}
              <div className="absolute top-[40%]  animate-bounce">
                  <CreditCard className="w-16 h-16 text-blue-500" />
              </div>
          </div>

      <div className="bg-whit max-w-lg w-full">
        {/* Main Loading Area */}
        <div className="relative mb-8">
            <div className="text-center">
              <div className="relative mb-6">
                {/* Floating dots animation */}
                <div className="flex justify-center space-x-1 mt-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0ms'}}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '150ms'}}></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '300ms'}}></div>
                </div>
              </div>

                  {/* Header */}
                <div className="text-center ">
                  <h2 className="text-2xl font-bold text-slate-600 mb-2">Processing Payment</h2>
                  {/* <p className="text-gray-600">Please wait while we process your transaction</p> */}
                </div>

            </div>

        
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PaymentLoading;