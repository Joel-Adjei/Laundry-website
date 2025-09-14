import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

const PaymentNotification = ({ 
  type = 'success', 
  message = '', 
  isVisible = false, 
  onClose = () => {},
  autoHide = true,
  duration = 5000 
}) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    setShow(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (show && autoHide) {
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onClose, 300); // Wait for animation to complete
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, autoHide, duration, onClose]);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300);
  };

  const getNotificationConfig = () => {
    switch (type) {
      case 'success':
        return {
          icon: CheckCircle,
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          iconColor: 'text-green-500',
          textColor: 'text-green-800',
          defaultMessage: 'Payment successful! Your transaction has been processed.'
        };
      case 'error':
        return {
          icon: XCircle,
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          iconColor: 'text-red-500',
          textColor: 'text-red-800',
          defaultMessage: 'Payment failed. Please check your information and try again.'
        };
      default:
        return {
          icon: CheckCircle,
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          iconColor: 'text-blue-500',
          textColor: 'text-blue-800',
          defaultMessage: 'Payment notification'
        };
    }
  };

  const config = getNotificationConfig();
  const Icon = config.icon;
  const displayMessage = message || config.defaultMessage;

  if (!show) return null;

  return (
    <div className="w-full max-w-md ">
      <div 
        className={`
          transform transition-all duration-300 ease-in-out
          ${show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          $ ${config.borderColor} ${config.textColor}
          borde rounded-lg shadow-l p-4
          backdrop-blur-sm mx-4
        `}
      >
        <div className="flex flex-col items-center space-y-4">
          <Icon className={`w-35 h-35 ${config.iconColor} flex-shrink-0 mt-0.5`} />
          
          <div className="flex-1 min-w-0">
            <p className="text-lg font-medium leading-5">
              {displayMessage}
            </p>
          </div>
          
          {/* <button
            onClick={handleClose}
            className={`
              flex-shrink-0 rounded-md p-1.5 
              hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-2
              ${type === 'success' ? 'focus:ring-green-500' : 'focus:ring-red-500'}
              transition-colors duration-200
            `}
          >
            <X className="w-4 h-4" />
          </button> */}
        </div>
        
        {/* Progress bar for auto-hide */}
        {autoHide && (
          <div className="mt-3 w-full bg-black/10 rounded-full h-1">
            <div 
              className={`
                h-1 rounded-full transition-all duration-100 ease-linear
                ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}
              `}
              style={{
                width: '100%',
                animation: `shrink ${duration}ms linear`
              }}
            />
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default PaymentNotification;