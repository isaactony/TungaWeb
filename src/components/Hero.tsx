import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import LogoCloud from './LogoCloud';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
            We develop{' '}
            <span className="relative">
              <span className="text-purple-500">amazing</span>
              <motion.span
                className="absolute -right-12 top-0 text-purple-500 text-5xl"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✧
              </motion.span>
            </span>
            {' '}websites
            <br />
            for your business
            <span className="text-purple-500">.</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            Discover our seamless workflow as we transform Figma designs into stunning Webflow websites. 
            Explore the synergy between design and development for a pixel-perfect online experience.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-purple-600/20 text-purple-400 px-8 py-3 rounded-full border border-purple-500/20 hover:bg-purple-600/30 transition-colors flex items-center gap-2 group">
              View work
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-800 border-2 border-purple-500 flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-500" />
                  </div>
                ))}
              </div>
              <span className="text-gray-400">1000+ satisfied clients</span>
            </div>
          </div>

          <LogoCloud />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;