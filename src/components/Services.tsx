import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Rocket, Zap, MessageSquare, Target, Clock } from 'lucide-react';

const services = [
  {
    icon: <Wand2 className="w-8 h-8 text-purple-500" />,
    title: 'Expertise in Figma-to-Webflow',
    description: 'We turn your Figma designs into fully functional and responsive Webflow websites.'
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-500" />,
    title: 'On-Page SEO Excellence',
    description: 'Optimize your website for search engines while maintaining design integrity.'
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-500" />,
    title: 'Interactive Magic',
    description: 'Add engaging animations and interactions that enhance user experience.'
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
    title: 'Dedicated Project Manager',
    description: 'Your single point of contact throughout the development process.'
  },
  {
    icon: <Target className="w-8 h-8 text-purple-500" />,
    title: 'Comprehensive Testing',
    description: 'Rigorous testing across devices and browsers for flawless performance.'
  },
  {
    icon: <Clock className="w-8 h-8 text-purple-500" />,
    title: 'Timely Delivery',
    description: 'We respect deadlines and deliver projects on time, every time.'
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm hover:bg-gray-800/70 transition-all group"
    >
      <div className="mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-gray-400">{service.description}</p>
      <div className="mt-4 flex items-center text-purple-500 group-hover:translate-x-2 transition-transform">
        Learn more
        <span className="ml-2">→</span>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Exceeding Expectations{' '}
            <span className="text-purple-500">✧</span>
          </h2>
          <p className="text-gray-400">
            We're not just another agency; we're your path to exceptional web projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;