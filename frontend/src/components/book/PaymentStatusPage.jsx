import React, { useState, useEffect } from 'react';
import { Check, CreditCard, Download, ArrowRight, X, RefreshCw, AlertCircle, Home } from 'lucide-react';
import OutlineButton from '../primary/Buttons/OutlineButton';
import { useNavigate } from 'react-router';

const PaymentStatusPage = ({status , duration = 7000 ,onClose = () => {}}) => {
  const [showContent, setShowContent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 300);
    const timer2 = setTimeout(() => setShowDetails(true), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowContent(false)
          onClose() // Wait for animation to complete
        }, duration);
        return () => clearTimeout(timer);
    }, [ onClose]);

  useEffect(()=>{
    
    setShowContent(false);
    setShowDetails(false);

    setTimeout(() => {
      status === "error" ? setIsSuccess(false) : setIsSuccess(true)
      setShowContent(true);
      setTimeout(() => setShowDetails(true), 500);
    }, 300);
    
  },[status])

  const handleToggleState = () => {
    setShowContent(false);
    setShowDetails(false);
    
    setTimeout(() => {
      setIsSuccess(!isSuccess);
      setShowContent(true);
      setTimeout(() => setShowDetails(true), 500);
    }, 300);
  };

  const successConfig = {
    bgGradient: 'from-emerald-50 via-teal-50 to-cyan-50',
    iconBg: 'from-emerald-400 to-teal-500',
    rippleColor: 'bg-emerald-300',
    title: 'Payment Successful!',
    subtitle: 'Your transaction has been completed successfully',
    amountColor: 'text-emerald-600',
    icon: Check,
    primaryButton: {
      bg: 'from-blue-700 to-green-600 hover:from-emerald-600 hover:to-teal-700',
      text: 'Download Receipt',
      icon: Download
    },
    secondaryButton: {
      text: 'Go home',
      icon: Home,
      path: "/"
    },
    decorativeColors: 'from-emerald-300 to-teal-300',
    particleColors: ['bg-emerald-400', 'bg-teal-400', 'bg-cyan-300']
  };

  const errorConfig = {
    bgGradient: 'from-red-50 via-pink-50 to-rose-50',
    iconBg: 'from-red-400 to-rose-500',
    rippleColor: 'bg-red-300',
    title: 'Payment Failed!',
    subtitle: 'Unfortunately, your transaction could not be completed',
    amountColor: 'text-red-600',
    icon: X,
    primaryButton: {
      bg: 'from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700',
      text: 'Try Again',
      icon: RefreshCw
    },
    secondaryButton: {
      text: 'Contact Support',
      icon: AlertCircle,
      path: "/"
    },
    decorativeColors: 'from-red-300 to-rose-300',
    particleColors: ['bg-red-400', 'bg-rose-400', 'bg-pink-300']
  };

  const config = isSuccess ? successConfig : errorConfig;
  const IconComponent = config.icon;

  const errorDetails = {
    errorCode: 'ERR-4001',
    reason: 'Insufficient funds',
    attemptId: '#ATT-789456123',
    suggestions: [
      'Check your account balance',
      'Verify payment method details',
      'Try a different payment method'
    ]
  };

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br ${config.bgGradient} flex items-center justify-center p-4 transition-all duration-500`}>
      <div className="max-w-lg">

        {/* Status Icon Animation */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${config.iconBg} flex items-center justify-center shadow-2xl transform transition-all duration-700 ${showContent ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
              <IconComponent className={`w-12 h-12 text-white ${isSuccess ? 'animate-pulse' : 'animate-bounce'}`} strokeWidth={3} />
            </div>
            {/* Ripple effect */}
            <div className={`absolute inset-0 w-24 h-24 mx-auto rounded-full ${config.rippleColor} opacity-30 transform transition-all duration-1000 ${showContent ? 'scale-150 opacity-0' : 'scale-100'}`}></div>
            <div className={`absolute inset-0 w-24 h-24 mx-auto rounded-full ${config.rippleColor} opacity-20 transform transition-all duration-1000 delay-200 ${showContent ? 'scale-200 opacity-0' : 'scale-100'}`}></div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className={` p-8 transform transition-all duration-700 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-2">
            <h1 className={`text-3xl font-bold ${isSuccess ?"text-green-800" :"text-red-900"} mb-2`}>{config.title}</h1>
            <p className={`${isSuccess ?"text-green-800" :"text-red-900"}`}>{config.subtitle}</p>
          </div>

          {showContent && (
          <div className="mb-5 w-full bg-black/10 rounded-full h-2">
            <div 
              className={`
                h-2 rounded-full transition-all duration-100 ease-linear
                ${isSuccess ? 'bg-emerald-600' : 'bg-red-500'}
              `}
              style={{
                width: '100%',
                animation: `shrink ${duration}ms linear`
              }}
            />
          </div>
        )}

          {/* Payment/Error Details */}
          {isSuccess && (<div className={`w-full space-y-4 mb-8 transform transition-all duration-500 delay-300 ${showDetails ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 shadow-md">
              
                <>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600">Amount Paid</span>
                    <span className={`text-2xl font-bold ${config.amountColor}`}>$299.99</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Transaction ID</span>
                    <span className="text-gray-800 font-mono text-sm">#TXN-789456123</span>
                  </div>
                  
                  
                  {/* <div className="flex items-center justify-between">
                    <span className="text-gray-600">Date</span>
                    <span className="text-gray-800">{new Date().toLocaleDateString()}</span>
                  </div> */}
                </>
              
            </div>
          </div>
          ) }

          {/* Action Buttons */}
          <div className={`w-full flex flex-col md:flex-row items-center justify-center gap-3 transform transition-all duration-500 delay-500 ${showDetails ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            
            {isSuccess && 
            <button className={`w-fit cursor-pointer bg-gradient-to-r ${config.primaryButton.bg} text-white font-semibold py-2 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center space-x-2`}>
              <config.primaryButton.icon className="w-5 h-5" />
              <span>{config.primaryButton.text}</span>
            </button>
            }
            
            <OutlineButton className={`w-fit flex items-center justify-center gap-3 ${!isSuccess && "border-slate-600 hover:border-slate-300 hover:text-slate-600"}`}
              onClick={()=> navigate(config.secondaryButton.path)}
              title={<>
                {config.secondaryButton.text}
                <config.secondaryButton.icon className="w-5 h-5" />
                </>
              }
            />
          </div>

          {/* Decorative Elements */}
          <div className={`absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r ${config.decorativeColors} rounded-full opacity-20 animate-pulse`}></div>
          <div className={`absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r ${config.decorativeColors} rounded-full opacity-30 animate-bounce`}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-2 h-2 ${config.particleColors[0]} rounded-full opacity-40 animate-float`}></div>
          <div className={`absolute top-1/3 right-1/4 w-1 h-1 ${config.particleColors[1]} rounded-full opacity-60 animate-float-delayed`}></div>
          <div className={`absolute bottom-1/3 left-1/3 w-3 h-3 ${config.particleColors[2]} rounded-full opacity-30 animate-float`}></div>
        </div>
      </div>

      
      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
};

export default PaymentStatusPage;