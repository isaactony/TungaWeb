import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep = ({ number, title, description, delay }: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: delay * 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex gap-6 items-start group"
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full border-2 border-purple-500/30 flex items-center justify-center text-purple-400 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProcessStep;