import React, { useState } from 'react';
import { X } from 'lucide-react';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm text-white py-2 px-4 flex items-center justify-center relative">
      <div className="flex items-center gap-4 text-sm">
        <span className="text-gray-400">Only 9 coupon left</span>
        <span className="text-gray-400">Get 10% off your first order</span>
        <button className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20 hover:bg-purple-600/30 transition-colors">
          Get it now!!
        </button>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 text-gray-400 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PromoBanner;