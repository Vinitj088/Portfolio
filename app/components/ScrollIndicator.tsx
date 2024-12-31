'use client';

import { useScroll } from '@/app/hooks/usescroll';
import { useState, useEffect } from 'react';

export const ScrollIndicator = () => {
  const scrollPercentage = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="font-bold fixed bottom-4 right-4 bg-white text-black px-3 py-2 rounded-md text-2xl backdrop-blur-sm z-50 hover:bg-white/50 transition-colors"
    >
      {scrollPercentage}%
    </button>
  );
};
