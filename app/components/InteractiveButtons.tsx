import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Check } from 'lucide-react';
import Link from 'next/link';

const InteractiveButtons = () => {
  const [copied, setCopied] = useState(false);
  const email = "vinitjain088@gmail.com"; // Replace with your actual email

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex gap-4 pt-2">
      <motion.button
        whileHover={{ rotate: -3, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="px-5 py-2 bg-zinc-800/50 text-white rounded-full hover:bg-[#ADFF00]/60 transition-colors text-sm"
      >
        <Link href={'/about'}>
        About
        </Link>
        
      </motion.button>

      <motion.button
        whileHover={{ rotate: 3, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={handleCopy}
        className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 text-sm
          ${copied 
            ? 'bg-[#ADFF00] text-black' 
            : 'bg-zinc-800/50 text-white hover:bg-zinc-700/50'
          }`}
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied
          </>
        ) : (
          <>
            <FileText size={16} />
            Copy email
          </>
        )}
      </motion.button>
    </div>
  );
};

export default InteractiveButtons;