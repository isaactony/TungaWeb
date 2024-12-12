import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  index: number;
}

const TestimonialCard = ({
  name,
  role,
  company,
  image,
  content,
  rating,
  index,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 relative group"
    >
      <div className="absolute -top-4 -right-4 bg-purple-500/10 w-12 h-12 rounded-full flex items-center justify-center">
        <Quote className="w-6 h-6 text-purple-500" />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">
            {role} at {company}
          </p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-purple-500 text-purple-500"
          />
        ))}
      </div>

      <p className="text-gray-300 leading-relaxed">{content}</p>
    </motion.div>
  );
};

export default TestimonialCard;