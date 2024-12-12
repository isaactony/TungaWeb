import React from 'react';
import { useSpring, motion } from 'framer-motion';
import { Code, Palette, Laptop, Monitor, Rocket } from 'lucide-react';

const ProcessAnimation = () => {
  const rotation = useSpring(0, {
    stiffness: 50,
    damping: 10,
    restDelta: 0.001
  });

  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-96 h-96"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-8 right-8 text-purple-500 w-12 h-12"
        >
          <Code />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-16 left-8 text-purple-400 w-16 h-16"
        >
          <Palette />
        </motion.div>
        <motion.div
          animate={{ rotate: 180 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-24 left-24 text-purple-300 w-10 h-10"
        >
          <Laptop />
        </motion.div>
        <motion.div
          animate={{ rotate: -180 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-16 text-purple-400/80 w-14 h-14"
        >
          <Monitor />
        </motion.div>
        <motion.div
          animate={{ rotate: 270 }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-32 text-purple-500/70 w-12 h-12"
        >
          <Rocket />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProcessAnimation;