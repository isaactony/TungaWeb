import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  index: number;
}

const PricingCard = ({ name, price, description, features, popular, index }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-2xl ${
        popular
          ? 'bg-purple-600/20 border-2 border-purple-500/50'
          : 'bg-gray-800/50 border border-gray-700/50'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-white">{price}</span>
          {price !== 'Custom' && <span className="text-gray-400 ml-2">/project</span>}
        </div>
      </div>

      <div className="space-y-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 ${
              feature.included ? 'text-white' : 'text-gray-500 line-through'
            }`}
          >
            <Check className={`w-5 h-5 ${feature.included ? 'text-purple-500' : 'text-gray-700'}`} />
            <span>{feature.text}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full mt-8 py-3 px-6 rounded-full font-medium transition-all ${
          popular
            ? 'bg-purple-500 text-white hover:bg-purple-600'
            : 'bg-gray-700/50 text-white hover:bg-gray-700'
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
};

export default PricingCard;