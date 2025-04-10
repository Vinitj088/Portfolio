import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Forward } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { CustomCursor } from '@/app/components/CustomCursor';
import { ScrollIndicator } from '@/app/components/ScrollIndicator';

export default function DisplayrPage() {
  // Data for Displayr project based on user description
  const project = {
    title: "Displayr - Trending Movies Finder",
    description: "A visually engaging and responsive web application for discovering daily trending movies, similar to IMDb's popular lists. Features a dynamic UI where the background adapts based on the movie poster colors. Data is fetched and updated daily using the TMDB API.",
    tags: ["TMDB API", "Next.js", "React", "TailwindCSS", "Dynamic UI"],
    image: "/displayr.png",
    content: "Displayr provides a visually engaging way to keep up with the latest trending movies. Inspired by popular discovery lists, it offers a clean, responsive interface that dynamically changes its background color palette based on the featured movie's poster, creating a unique experience for each film. It leverages the TMDB API to ensure the movie data is always up-to-date.",
    year: "2024" // Assuming current year, adjust if needed
  };

  return (
    <>
      <CustomCursor />
      <ScrollIndicator />

      <div className="min-h-screen bg-[#141414] text-white">
        <div className="max-w-4xl mx-auto !px-6 sm:!px-8 lg:!px-12 py-20">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-16"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to projects
          </Link>

          {/* Project Header */}
          <div className="mb-16 !pr-6 sm:!pr-8 lg:!pr-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-300/30 text-gray-300 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-8">
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
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </section>

          {/* Link to Deployed Project (Optional - Placeholder) */}
          <div className="mb-8">
              <Link href="https://displayr-fc42c.web.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-300 hover:text-white text-semibold transition-colors mb-4 mt-4">
                <Forward className="w-4 h-4 mr-2" />
                  Link to Deployed Project 
                  <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
          </div>
          <div className='mb-8'>
            <p className='text-red-400'>Displayr currently doesn't open in INDIA due to TMDB API restrictions by Indian Government, Kindly use VPN to access the website</p>
          </div>
          {/* Project Content */}
          <div className="!pr-6 sm:!pr-8 lg:!pr-12">
            {/* Project Content starting paragraph */}
            <div className="mb-32">
              <p className="text-lg text-neutral-300 leading-relaxed">
                {project.content}
              </p>
            </div>

            {/* Context Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Introduction</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-lg text-white leading-relaxed">Displayr aims to be a go-to resource for discovering what movies are currently trending, presented in a visually appealing and modern interface. It fetches data daily from The Movie Database (TMDB) API to provide users with the latest popular films, similar to recommendation lists found on IMDb or Google.</p>
                </div>
                <div>
                  <h3 className="text-neutral-400 mb-2">Timeline:</h3>
                  <p className="text-white">{project.year}</p>
                </div>
              </div>
            </section>

            {/* Problem Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Challenge</h2>
              <p className="text-xl leading-relaxed">The key challenges included reliably fetching and processing daily data from the TMDB API, designing a responsive UI that works across devices, and implementing the dynamic background feature. Extracting dominant colors from movie posters and applying them smoothly to the UI background required careful consideration of performance and visual appeal.</p>
            </section>

            {/* Solution */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Solution</h2>
              <p className="text-xl leading-relaxed">Built with Next.js and React, Displayr leverages server-side or static rendering for performance. The TMDB API is used for fetching trending movie data. The dynamic background effect is achieved by extracting colors from movie posters (Using a client-side custom hook) and applying them via TailwindCSS, ensuring a seamless and visually adaptive experience.</p>
            </section>

            {/* Technical Details Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Technical Details:</h2>
              <div className="space-y-8">
                <p className="text-neutral-400 mb-6">The application utilizes the following technologies:</p>
                 <ul className="space-y-2 mb-8 list-disc list-inside text-neutral-300">
                  <li><strong>Frontend:</strong> Next.js, React, TypeScript</li>
                  <li><strong>Styling:</strong> TailwindCSS</li>
                  <li><strong>Data Source:</strong> TMDB API</li>
                  <li><strong>Core Feature:</strong> Dynamic background/UI based on movie poster colors</li>
                  <li><strong>Hosting:</strong> Firebase</li>
                 </ul>
              </div>
            </section>

            {/* Key Features Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Key Features:</h2>
              <div className="space-y-8">
                 <ul className="space-y-2 mb-8 list-disc list-inside text-orange-400">
                  <li>Displays daily trending movies</li>
                  <li>Data sourced from TMDB API (Updated Daily)</li>
                  <li>Visually engaging and responsive user interface</li>
                  <li>Dynamic UI/background colors adapting to movie posters</li>
                 </ul>
              </div>
            </section>

            {/* Outcome Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Outcome:</h2>
              <div className="space-y-8">
                <p className="text-lg text-neutral-400 mb-6">Displayr offers a unique and visually appealing way for users to discover trending movies. Its dynamic UI enhances the browsing experience, and the use of the TMDB API ensures the content remains fresh and relevant daily.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
} 