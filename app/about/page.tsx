'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import MainLayout from '../components/MainLayout'
import { ShuffleText } from '../components/ShuffleText'

const footerShuffleTexts = [
  "maker",
  "creator",
  "designer",
  "innovator"
]
const footerShuffleColors = [
  "#c488dc", // Purple
  "#a4e0ea", // Blue
  "#a4eaaa", // Green
  "#eae3a4", // Yellow
]
const images = [
  { src: '/vinit profile pic.jpg?height=300&width=300', alt: 'Photo 1' },
  { src: '/vinit profile picture.png?height=300&width=300', alt: 'Photo 2' },
  { src: '/Profile.jpg?height=300&width=300', alt: 'Photo 3' },
  { src: '/p4.avif?height=300&width=300', alt: 'Photo 4' },
  { src: '/p5.avif?height=300&width=300', alt: 'Photo 5' },
]

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1020)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isMobile])

  const content = (
    <div className="max-w-4xl mx-auto py-12 px-4 md:pt-24">
      {/* Hero Section */}
      <div className="space-y-6 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hello, I'm <span className="font-caveat italic">Vinit :)</span> 
        </h1>
        <p className="text-xl text-zinc-300">
          A little about me ~ I'm Vinit, a web developer originally from India, currently embracing the beautiful city of Udaipur, Rajasthan – often called the "City of Lakes." 🌊
        </p>
      </div>

      {/* Photo Gallery */}
      <div className="relative h-[300px] md:h-[400px] mb-16">
        {isMobile ? (
          <div className="mx-auto w-full h-full rounded-2xl overflow-hidden shadow-xl ">
            <Image className=' border-white border-4 rounded-2xl'
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ) : (
          images.map((image, index) => (
            <div
              key={index}
              className={` border-white border-8 absolute w-[250px] h-[250px] transition-all duration-300 rounded-2xl overflow-hidden shadow-xl hover:z-10`}
              style={{
                left: `${index * 20}%`,
                transform: `rotate(${(index - 2) * 4}deg)`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))
        )}
      </div>

      {/* Notes Section */}
      <div className="w-full max-w-3xl mx-auto p-8 bg-[#1f1f1f] text-white xl:ml-20">

        <h2 className="text-2xl font-semibold mb-8">Notes ( My Story )</h2>
        <div className="space-y-6 text-zinc-300">
          <p>
          My journey into web development has been a fascinating blend of exploration and learning. I've always been drawn to the creative and problem-solving aspects of building digital experiences. From managing WordPress sites and diving into front-end development, I've steadily built a solid foundation in full-stack technologies. 
          </p>
          <p>
          My passion lies in crafting user-friendly and performant web applications that not only look great but also provide seamless functionality.
          </p>
          <p>
          Outside of coding, I enjoy a variety of activities that help me recharge and stay inspired. I'm a big fan of movies and documentaries 🎬, always eager to explore new stories and perspectives. I also have a strong curiosity for trying new things, whether it's exploring a new cuisine, learning a new skill, or simply venturing out to discover new places.
          </p>
        </div>

        
      </div>
       {/* When I am not designing Section */}
       <div className="w-full max-w-3xl mx-auto p-8 space-y-6 mb-16 mt-16">
        <h2 className="text-3xl font-bold">When I am not designing...</h2>
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/badminton.avif"
            alt="badminton close-up shot"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>
        <p className="text-2xl text-center font-bold">
          <span className="text-red-500">EAT</span>,{' '}
          <span className="text-yellow-400">SLEEP</span>,{' '}
          <span className="text-green-400">BADMINTON</span>,{' '}
          <span className="text-blue-400">REPEAT</span>
        </p>
      </div>

      {/* Footer */}  
      <div className="mt-20 py-6 px-0 bg-[#1f1f1f] rounded-lg sm:!px-8">
        <div className="flex flex-col justify-between items-center text-sm text-zinc-400 sm:flex-row">
          <span>2024 @ Caffine hits hard</span>
          <ShuffleText 
          texts={footerShuffleTexts} 
          colors={footerShuffleColors}
          className="text-purple-400 font-bold py-1" />
        </div>
      </div>
  

      
    </div>
  )

  return <MainLayout>{content}</MainLayout>
}

