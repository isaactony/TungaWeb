import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { TRUSTED_COMPANIES } from './constants';

const LogoCloud = () => {
  return (
    <div className="mt-24 py-10">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-500 mb-12"
      >
        Trusted by 30+ businesses
      </motion.p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-7xl mx-auto px-6">
        {TRUSTED_COMPANIES.map((company, index) => (
          <Logo
            key={company.name}
            name={company.name}
            logo={company.logo}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCloud;