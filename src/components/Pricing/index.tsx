import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

const PRICING_PLANS = [
  {
    name: 'Basic',
    price: '$2,999',
    description: 'Perfect for small business websites',
    features: [
      { text: 'Up to 5 Pages', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'Basic SEO Setup', included: true },
      { text: 'Contact Form', included: true },
      { text: 'CMS Integration', included: false },
      { text: 'E-commerce Features', included: false },
      { text: 'Custom Animations', included: false },
    ],
  },
  {
    name: 'Professional',
    price: '$5,999',
    description: 'Ideal for growing businesses',
    features: [
      { text: 'Up to 10 Pages', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'Advanced SEO Setup', included: true },
      { text: 'Contact Form', included: true },
      { text: 'CMS Integration', included: true },
      { text: 'E-commerce Features', included: true },
      { text: 'Custom Animations', included: false },
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale projects',
    features: [
      { text: 'Unlimited Pages', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'Advanced SEO Setup', included: true },
      { text: 'Contact Form', included: true },
      { text: 'CMS Integration', included: true },
      { text: 'E-commerce Features', included: true },
      { text: 'Custom Animations', included: true },
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing{' '}
            <span className="text-purple-500">✧</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include our award-winning
            development process and dedicated support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={plan.name} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;