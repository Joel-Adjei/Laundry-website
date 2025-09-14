import React, { useState, useEffect } from 'react';
import { CreditCard, Shirt, Droplets, Timer, Sparkles } from 'lucide-react';

const LaundryPaymentLoading = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [bubbleKey, setBubbleKey] = useState(0);

  const steps = [
    { icon: CreditCard, text: "Processing payment...", color: "text-blue-500" },
    { icon: Shirt, text: "Reserving washing machine...", color: "text-green-500" },
    { icon: Droplets, text: "Preparing detergent mix...", color: "text-cyan-500" },
    { icon: Timer, text: "Scheduling your wash...", color: "text-orange-500" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = (prev + 0.7) % 101;
        
        // Update current step based on progress
        const stepIndex = Math.floor((newProgress / 100) * steps.length);
        setCurrentStep(Math.min(stepIndex, steps.length - 1));
        
        // Trigger bubble animation
        if (Math.random() > 0.9) {
          setBubbleKey(prev => prev + 1);
        }
        
        return newProgress;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  const resetDemo = () => {
    setProgress(0);
    setCurrentStep(0);
    setBubbleKey(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm border border-blue-200 rounded-3xl shadow-xl p-8 max-w-lg w-full relative overflow-hidden">
        
        {/* Floating soap bubbles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(15)].map((_, i) => (
            <div
              key={`bubble-${i}-${bubbleKey}`}
              className="absolute rounded-full bg-gradient-to-br from-white/60 to-cyan-200/40 border border-white/30 animate-bounce"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/80 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Processing Your Order</h2>
          <p className="text-gray-600">Setting up your laundry service</p>
        </div>

        {/* Main Creative Loading Area */}
        <div className="relative mb-8 z-10">
          
          {/* Washing Machine Animation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Washing machine drum */}
              <div className="w-28 h-28 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full border-4 border-gray-400 relative overflow-hidden">
                {/* Inner drum with rotating clothes */}
                <div className="absolute inset-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full animate-spin border-2 border-blue-200" style={{ animationDuration: '3s' }}>
                  {/* Clothes items rotating inside */}
                  <div className="absolute top-2 left-4 w-3 h-3 bg-red-400 rounded transform rotate-45"></div>
                  <div className="absolute bottom-3 right-2 w-2 h-4 bg-blue-500 rounded"></div>
                  <div className="absolute top-1/2 left-1 w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="absolute bottom-1 left-1/2 w-4 h-2 bg-yellow-400 rounded"></div>
                </div>
                
                {/* Water level indicator */}
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-400/60 to-transparent transition-all duration-500"
                  style={{ height: `${(progress / 100) * 80}%` }}
                >
                  {/* Water ripple effect */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-300/80 animate-pulse"></div>
                </div>

                {/* Soap suds */}
                <div className="absolute top-1 left-1 right-1 flex justify-center space-x-1">
                  <div className="w-1 h-1 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-1 h-1 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>

              {/* Sparkles around washing machine */}
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
              <Sparkles className="absolute -bottom-1 -left-2 w-4 h-4 text-blue-400 animate-pulse" style={{ animationDelay: '1s' }} />
              <Sparkles className="absolute top-1/2 -right-4 w-5 h-5 text-green-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Animated Progress Bar with Bubbles */}
          <div className="relative w-full h-4 bg-blue-100 rounded-full mb-6 overflow-hidden border border-blue-200">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            >
              {/* Bubble trail in progress bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse rounded-full"></div>
              {/* Moving bubbles */}
              <div className="absolute top-1 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
              <div className="absolute bottom-1 right-1/3 w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>

          {/* Current Step Display */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200 shadow-sm">
              {React.createElement(steps[currentStep].icon, {
                className: `w-5 h-5 ${steps[currentStep].color} animate-pulse`
              })}
              <span className="text-gray-700 font-medium">
                {steps[currentStep].text}
              </span>
            </div>
          </div>



          {/* Water drops falling */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <Droplets 
                key={i}
                className="absolute w-4 h-4 text-cyan-400/60 animate-bounce" 
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 2) * 20}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        </div>



        {/* Demo Control */}
        <div className="flex justify-center relative z-10">
          <button
            onClick={resetDemo}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Restart Process
          </button>
        </div>

        {/* Service Notice */}
        <div className="mt-6 text-center relative z-10">
          <p className="text-xs text-gray-500">
            🧺 Eco-friendly detergents • Professional care • SMS notifications
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaundryPaymentLoading;