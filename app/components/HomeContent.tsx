"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from './MainLayout';
import { FileText } from 'lucide-react';
import { GreetingText } from './GreetingText';
import SlidingBanner from './SlidingBanner';
import ProjectGrid from './ProjectGrid';
import InteractiveButtons from './InteractiveButtons';




const DinoLoadingAnimation = () => {
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingPercent(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-[#141414] px-4">
      <div className="w-full max-w-md relative h-52 md:h-64 mb-8">
        <div className="absolute bottom-12 w-full h-[2px] bg-zinc-600" />
        
        <div 
          className="absolute bottom-14 w-16 md:w-20 h-16 md:h-20 animate-dino-run"
          style={{ 
            left: `${loadingPercent}%`, 
            transform: `translateX(-50%)`,
            transition: 'left 0.3s linear'
          }}
        >
          <svg 
            viewBox="0 0 40 40" 
            className="w-full h-full fill-white"
          >
            <path d="M29,11.2v-0.9c0-0.3-0.2-0.5-0.5-0.5h-1.4c-0.3,0-0.5,0.2-0.5,0.5v0.9H29z"/>
            <path d="M34.5,15.2c0-0.3-0.2-0.5-0.5-0.5h-1.4c-0.3,0-0.5,0.2-0.5,0.5v0.9h2.4V15.2z"/>
            <path d="M23.7,19.6l-0.7-0.7c-0.2-0.2-0.5-0.2-0.7,0l-0.7,0.7c-0.2,0.2-0.2,0.5,0,0.7l0.7,0.7c0.2,0.2,0.5,0.2,0.7,0l0.7-0.7
              C23.9,20.1,23.9,19.8,23.7,19.6z"/>
            <path d="M35,25H15c-0.6,0-1-0.4-1-1V14c0-0.6,0.4-1,1-1h20c0.6,0,1,0.4,1,1v10C36,24.6,35.6,25,35,25z"/>
            <path className="animate-dino-leg" d="M19,25h-2c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1v-4C20,25.4,19.6,25,19,25z"/>
            <path className="animate-dino-leg-delay" d="M27,25h-2c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1v-4C28,25.4,27.6,25,27,25z"/>
          </svg>
        </div>
      </div>

      <div className="w-full max-w-md px-2">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-sm md:text-base font-semibold inline-block py-1 px-2 uppercase rounded-full text-zinc-200 bg-zinc-800">
                Loading
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm md:text-base font-semibold inline-block text-zinc-200">
                {loadingPercent}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 md:h-3 mb-4 text-xs flex rounded bg-zinc-800">
            <div 
              style={{ width: `${loadingPercent}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#ADFF00] transition-all duration-300 ease-out"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dinoRun {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-15px) translateX(-50%); }
        }
        
        @keyframes dinoLeg {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.7); }
        }

        .animate-dino-run {
          animation: dinoRun 0.5s infinite;
        }

        .animate-dino-leg {
          animation: dinoLeg 0.25s infinite;
          transform-origin: top;
        }

        .animate-dino-leg-delay {
          animation: dinoLeg 0.25s infinite 0.125s;
          transform-origin: top;
        }
      `}</style>
    </div>
  );
};

export default function HomeContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Start initial loading
    const loadTimer = setTimeout(() => {
      setLoadingComplete(true);
      // Add delay before hiding loading screen
      setTimeout(() => {
        setIsLoading(false);
      }, 300); // Fade out duration
    }, 2000); // Total loading duration

    return () => clearTimeout(loadTimer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DinoLoadingAnimation />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MainLayout>
            <div className="max-2-3xl mx-auto space-y-6 pt-12 xl:ml-20">
              <div>
                <GreetingText />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                Meet Vinit, a Web Developer who thrives on experimenting and trying new things
              </h1>
              
              <p className="text-lg text-zinc-400 leading-relaxed">
                When I'm not designing, you'll probably find me playing pickleball, cooking something new, editing videos, or stepping outside to capture everything I can see.
              </p>

              <div className="flex items-center gap-2 text-zinc-200 text-base">
                <span className="text-[#ADFF00]">✨</span>
                <span>Currently Studying</span>
                <span className="text-[#ADFF00]">@ Rajasthan Technical University</span>
              </div>

              <div className="flex gap-4 pt-2">
                <InteractiveButtons />

              </div>
              <SlidingBanner />
              </div>
              <ProjectGrid />


          </MainLayout>
        </motion.div>
      )}
    </AnimatePresence>
  );
}