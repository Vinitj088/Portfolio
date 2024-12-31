'use client'

import { useState, useEffect } from 'react'

const greetings = ['Hola 👋', 'Namaste 🙏', 'Hello 👋', 'Bonjour 👋', 'Ciao 👋']

export const GreetingText = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 2000) // Change greeting every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-xl font-bold">
      {greetings[currentGreeting]}
    </div>
  )
}

