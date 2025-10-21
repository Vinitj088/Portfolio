import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Forward } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { CustomCursor } from '@/app/components/CustomCursor';
import { ScrollIndicator } from '@/app/components/ScrollIndicator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function DisplayrPage() {
  // Data for Displayr project from GitHub README
  const project = {
    title: "Displayr - Movie & TV Show Discovery",
    description: "A modern movie and TV show recommendation engine and search interface leveraging TMDB API data with genre-based filtering, GSAP animations, and comprehensive details including cast, crew, and trailers.",
    tags: ["TMDB API", "Next.js", "TypeScript", "GSAP", "TailwindCSS"],
    image: "/displayr.png",
    content: "Displayr is a modern recommendation engine built with Next.js, React, and TypeScript that provides trending content discovery, cross-platform search for movies and TV shows, genre-based sorting, and comprehensive details with smooth GSAP animations. The platform offers a polished, mobile-responsive experience with dual deployment options.",
    year: "2024"
  };

  return (
    <>
      <CustomCursor />
      <ScrollIndicator />

      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-4xl mx-auto !px-6 sm:!px-8 lg:!px-12 py-20">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground font-light hover:text-foreground transition-colors mb-16"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to projects
          </Link>

          {/* Project Header */}
          <div className="mb-16 !pr-6 sm:!pr-8 lg:!pr-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="font-light"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-normal mb-6 text-foreground">
              {project.title}
            </h1>
          </div>

          {/* Main Image */}
          <section className="mb-8">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl ring-1 ring-border shadow-sm"
              />
            </div>
          </section>

          {/* Link to Deployed Project (Optional - Placeholder) */}
          <div className="mb-8">
              <Link href="https://displayr-fc42c.web.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-semibold transition-colors mb-4 mt-4">
                <Forward className="w-4 h-4 mr-2" />
                  Link to Deployed Project 
                  <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
          </div>
          <div className="mb-8">
              <Link href="https://displayr.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-semibold transition-colors mb-4 mt-4">
                <Forward className="w-4 h-4 mr-2" />
                  Link to Newer Redesign 
                  <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
          </div>
          <div className='mb-8'>
            <p className='text-red-400 font-geist'>Displayr currently doesn't open in INDIA due to TMDB API restrictions by Indian Government, Kindly use VPN to access the website</p>
          </div>
          {/* Project Content */}
          <div className="!pr-6 sm:!pr-8 lg:!pr-12">
            {/* Project Content starting paragraph */}
            <div className="mb-32">
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">
                {project.content}
              </p>
            </div>

            {/* Context Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Introduction</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">Displayr aims to be a comprehensive resource for discovering trending movies and TV shows, presented in a visually appealing and modern interface. It fetches data from The Movie Database (TMDB) API to provide users with trending content, cross-platform search capabilities, genre-based filtering, and comprehensive details including cast, crew, and trailer links.</p>
                </div>
                <div>
                  <h3 className="text-muted-foreground font-light mb-2">Timeline:</h3>
                  <p className="text-foreground">{project.year}</p>
                </div>
              </div>
            </section>

            {/* Problem Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Challenge</h2>
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">The key challenges included reliably fetching and processing data from the TMDB API for both movies and TV shows, implementing dynamic routing through Next.js for individual content pages, creating a responsive UI that works across devices with smooth GSAP animations, and developing genre-based sorting and filtering systems. Additionally, integrating comprehensive details like cast, crew, and trailer links while maintaining performance required careful architecture planning.</p>
            </section>

            {/* Solution */}
            <section className="mb-32">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Solution</h2>
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">Built with Next.js, React, and TypeScript, Displayr leverages server-side rendering and dynamic routing for optimal performance. The TMDB API provides comprehensive data for movies and TV shows. GSAP powers smooth animations and transitions throughout the interface. The codebase organizes routing through dynamic Next.js paths for individual content pages, with major UI components including an animated gallery for content display and slide-out navigation for user interaction, all styled with Tailwind CSS.</p>
            </section>

            {/* Technical Details Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Technical Details:</h2>
              <div className="space-y-8">
                <p className="text-muted-foreground font-geist font-light mb-6">The application utilizes the following technologies:</p>
                 <ul className="space-y-2 mb-8 list-disc list-inside text-muted-foreground font-geist font-light">
                  <li><span className="font-normal">Frontend:</span> Next.js (React framework), TypeScript</li>
                  <li><span className="font-normal">Styling:</span> Tailwind CSS</li>
                  <li><span className="font-normal">Animations:</span> GSAP (GreenSock Animation Platform)</li>
                  <li><span className="font-normal">Data Source:</span> The Movie Database (TMDB) API</li>
                  <li><span className="font-normal">Hosting:</span> Vercel (primary) and Firebase (legacy)</li>
                 </ul>
              </div>
            </section>

            {/* Key Features Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Key Features:</h2>
              <div className="space-y-8">
                 <ul className="space-y-2 mb-8 list-disc list-inside text-muted-foreground font-geist font-light">
                  <li>Trending content discovery from TMDB</li>
                  <li>Cross-platform search for movies and TV shows</li>
                  <li>Genre-based sorting and filtering</li>
                  <li>Comprehensive details including cast, crew, and trailer links</li>
                  <li>GSAP-powered smooth animations and transitions</li>
                  <li>Mobile-responsive design optimized for all devices</li>
                  <li>Dynamic routing for individual content pages</li>
                  <li>Animated gallery for content display</li>
                 </ul>
              </div>
            </section>

            {/* Outcome Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Outcome:</h2>
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground font-geist font-light mb-6">Displayr offers a comprehensive and visually appealing platform for discovering trending movies and TV shows. With cross-platform search capabilities, genre-based filtering, and smooth GSAP animations, it provides users with an engaging browsing experience. The integration of comprehensive details including cast, crew, and trailers, combined with a mobile-responsive design and dual deployment options, makes it a robust solution for content discovery. The use of the TMDB API ensures the content remains fresh and up-to-date.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
} 