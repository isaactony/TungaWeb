import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  name: string;
  logo: string;
  delay: number;
}

const Logo = ({ name, logo, delay }: LogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-purple-500/10 blur-xl rounded-full transition-opacity opacity-0 group-hover:opacity-100" />
      <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-4 transition-all duration-300 group-hover:border-purple-500/50 group-hover:bg-gray-800/80">
        <img
          src={logo}
          alt={name}
          className="h-8 w-auto object-contain filter grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        />
      </div>
    </motion.div>
  );
};

export default Logo;