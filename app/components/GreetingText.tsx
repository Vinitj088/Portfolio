'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const greetings = ['Hola 👋', 'Namaste 🙏', 'Hello 👋', 'Bonjour 👋', 'Ciao 👋']

export const GreetingText = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 2500) // Change greeting every 2.5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-xl font-light text-muted-foreground h-8 flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentGreeting}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {greetings[currentGreeting]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

