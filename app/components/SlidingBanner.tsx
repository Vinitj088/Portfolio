import React from 'react';
import { motion } from 'framer-motion';

const SlidingBanner = () => {
  const words = ['Problem Solving 🧩', 'Code Architecture 🏗️', 'Front-End Development 🖥️', 'User Testing 🧪', 'UX Research 🔍','Interaction Design 🤝'

];
  
  return (
    <div className="relative w-full overflow-hidden bg-background py-10 border-y border-border">
      {/* Gradient overlay - left side */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />

      {/* Gradient overlay - right side */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

      {/* Sliding container */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [-1000, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Repeat the words twice to ensure continuous flow */}
        {[...words, ...words].map((word, index) => (
          <div
            key={index}
            className="mx-8 text-lg font-light text-muted-foreground"
          >
            {word}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SlidingBanner;