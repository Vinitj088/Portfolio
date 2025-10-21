import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const InteractiveButtons = () => {
  const [copied, setCopied] = useState(false);
  const email = "vinitjain088@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex gap-3 pt-2">
      <Link href={'/about'}>
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button variant="outline" className="rounded-full font-light">
            About
          </Button>
        </motion.div>
      </Link>

      <motion.div
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          onClick={handleCopy}
          variant={copied ? "default" : "outline"}
          className={`rounded-full font-light transition-all flex items-center gap-2`}
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
        </Button>
      </motion.div>
    </div>
  );
};

export default InteractiveButtons;