import React from 'react';
import { HomeIcon, ArrowLeft } from 'lucide-react';
import image from '../assets/NotFound.svg';


const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E6EEFF] via-[#EFE6FF] to-[#F5E6FF] p-4">
      <div className="text-center relative">
        {/* SVG Illustration */}
        <div className="w-full max-w-xl mx-auto mb-8 absolute top-0 animate-moving">
          <img src={image} alt="svg image" className=''/>
        </div>

        {/* Text content */}
        <h1 className="text-[120px] sm:text-[18vw] font-bold text-[#1A365D] mb-4">
          4<span className="text-[#B794F4]">0</span>4
        </h1>
        <h2 className="text-2xl font-semibold text-[#1A365D] mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Looks like you've wandered into uncharted territory. 
          Don't worry though, it happens to the best of us!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#1A365D] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
          <button 
            onClick={() => window.location.href = '/'} 
            className="inline-flex items-center justify-center px-6 py-3 bg-[#1A365D] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
          >
            <HomeIcon size={20} />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;