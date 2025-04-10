import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CustomCursor } from '@/app/components/CustomCursor';
import { ScrollIndicator } from '@/app/components/ScrollIndicator';
import { Forward } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';


export default function ProjectPage() {
  const project = {
    title: "Translatr - An AI-Powered Text to Slang Converter",
    description: "Created a web application using Next.js and React to convert text into Gen Z slang. Integrated the OpenAI API to generate creative and humorous translations, enhancing user interaction and engagement.",
    tags: ["OpenAI API", "React", "NextJS"],
    image: "/translatr_purple.png",
    content: "Created a web application using Next.js and React to convert text into Gen Z slang. Integrated the OpenAI API to generate creative and humorous translations, enhancing user interaction and engagement.",
    year: "2024 - Current"
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

          {/* {link to the project} */}
          <div className="mb-8">
              <Link href="https://translatr.vercel.app/" className="inline-flex items-center text-cyan-300 hover:text-white text-semibold transition-colors mb-4 mt-4">
                <Forward className="w-4 h-4 mr-2" />
                  Link to Deployed Project 
                  <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
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
                  <p className="text-lg text-white leading-relaxed">This project was inspired by the ever-evolving nature of language, particularly the unique slang used by Gen Z. The goal was to create a fun and engaging web application that could translate standard text into Gen Z slang, providing a humorous and insightful look into contemporary language trends.
                  </p>
                </div>

                

                <div>
                  <h3 className="text-neutral-400 mb-2">Timeline:</h3>
                  <p className="text-white">March 2024</p>
                </div>
              </div>
            </section>

            {/* Problem Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Challenge</h2>
              <p className="text-xl leading-relaxed">
              The rapidly evolving nature of Gen Z slang 🗣️ presented a significant challenge. Capturing the nuances, context, and constant updates to this informal language required a dynamic solution. Integrating a third-party API, specifically the OpenAI API 🤖, and ensuring seamless communication between the frontend and backend ↔️ also posed technical challenges.
              </p>
            </section>
            {/* Solution */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Solution</h2>
              <p className="text-xl leading-relaxed">
              I developed a web application using Next.js and React for the frontend and integrated the OpenAI API to generate the slang translations. The OpenAI API's powerful language models were able to analyze the input text and generate creative and contextually relevant Gen Z slang equivalents.
              </p>
            </section>

            {/* Stakeholder Analysis Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Technical Details:</h2>
              
              <div className="space-y-8">
                <p className="text-neutral-400 mb-6">
                  The technologies used in this project are categorized as follows:
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Frontend: </span> 
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-500 mr-2"></span>
                    <span className="text-neutral-400 mb-6">React, Next.js</span> 
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>API:</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-500 mr-2"></span>
                    <span className="text-neutral-400 mb-6">OpenAI API (for text generation)</span> 
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-500 mr-2">•</span>
                    <span>Backend and Server:</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-500 mr-2"></span>
                    <span className="text-neutral-400 mb-6">Node.js (for API endpoints)</span> 
                  </li>
                </ul>
                
                {/* <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio 
                  <Image
                    src="/stakeholder-analysis.png"
                    alt="Stakeholder Analysis Diagram"
                    fill
                    className="absolute top-0 left-0 w-full h-full object-contain"
                  />
                </div> */}
              </div>
            </section>

            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Key Features:</h2>  
              <div className="space-y-8">
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Real-time text conversion.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Humorous and contextually relevant translations.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>User-friendly Responsive interface.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Outcome:</h2>
              <div className="space-y-8">
                <p className="text-lg text-neutral-400 mb-6">
                The resulting application provides a fun and engaging way to explore the world of Gen Z slang. The integration of the OpenAI API allows for creative and dynamic translations, providing users with a unique and entertaining experience.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

