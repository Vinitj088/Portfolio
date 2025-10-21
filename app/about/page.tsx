'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import MainLayout from '../components/MainLayout'
import { ShuffleText } from '../components/ShuffleText'
import { FadeIn } from '../components/FadeIn'
import { Card, CardContent } from '@/components/ui/card'
import ImageReveal from '../components/ImageReveal'

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
    <div className="max-w-4xl mx-auto py-12 px-6 md:pt-24 space-y-24">
      {/* Hero Section */}
      <FadeIn delay={0.1}>
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight">
            Hello, I'm <span className="italic font-extralight text-6xl md:text-7xl lg:text-8xl">Vinit :)</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-geist font-light leading-relaxed max-w-3xl">
            A web developer from India, currently in the beautiful city of Udaipur, Rajasthan – the "City of Lakes."
          </p>
          <div className="flex gap-2 items-center text-sm text-muted-foreground font-light">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Available for freelance work</span>
          </div>
        </div>
      </FadeIn>

      {/* Photo Gallery */}
      <FadeIn delay={0.2}>
        <div className="relative h-[300px] md:h-[450px] flex items-center justify-center">
          {isMobile ? (
            <div className="h-full w-full overflow-hidden rounded-xl bg-white p-3 shadow-sm">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          ) : (
            <ImageReveal
              leftImage={images[0].src}
              middleImage={images[1].src}
              rightImage={images[2].src}
            />
          )}
        </div>
      </FadeIn>

      {/* About Content Grid */}
      <div className="grid md:grid-cols-2 gap-16">
        <FadeIn delay={0.1}>
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-foreground">My Journey</h2>
            <div className="space-y-4 text-muted-foreground font-geist font-light leading-relaxed text-lg">
              <p>
                My journey into web development has been a fascinating blend of exploration and learning. I've always been drawn to the creative and problem-solving aspects of building digital experiences.
              </p>
              <p>
                From managing WordPress sites to diving into modern full-stack technologies, I've steadily built expertise in crafting user-friendly and performant web applications.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-foreground">Beyond Code</h2>
            <div className="space-y-4 text-muted-foreground font-geist font-light leading-relaxed text-lg">
              <p>
                Outside of coding, I enjoy a variety of activities that help me recharge and stay inspired. I'm a big fan of movies and documentaries 🎬, always eager to explore new stories and perspectives.
              </p>
              <p>
                I have a strong curiosity for trying new things, whether it's exploring a new cuisine, learning a new skill, or venturing out to discover new places.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Skills Section */}
      <FadeIn delay={0.1}>
        <div className="space-y-8">
          <h2 className="text-3xl font-light text-foreground">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Frontend Development', 'Backend Architecture', 'UI/UX Design', 'Database Design', 'API Integration', 'Performance Optimization'].map((skill, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <p className="font-light text-foreground">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Passion Section */}
      <FadeIn delay={0.1}>
        <div className="overflow-hidden rounded-xl bg-white p-3 shadow-sm">
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/badminton.avif"
              alt="badminton close-up shot"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-light text-white">When I'm Not Coding...</h2>
                <p className="text-xl text-white/90 font-geist font-light">
                  You'll find me on the badminton court
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Footer */}
      <FadeIn delay={0.1}>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col justify-between items-center text-sm text-muted-foreground font-light sm:flex-row gap-4">
              <span>2024 © Fueled by coffee and curiosity</span>
              <ShuffleText
                texts={footerShuffleTexts}
                colors={footerShuffleColors}
                className="text-foreground font-normal py-1"
              />
            </div>
          </CardContent>
        </Card>
      </FadeIn>
  

      
    </div>
  )

  return <MainLayout>{content}</MainLayout>
}

