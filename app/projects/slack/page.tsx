import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Forward } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { CustomCursor } from '@/app/components/CustomCursor';
import { ScrollIndicator } from '@/app/components/ScrollIndicator';



export default function ProjectPage() {
  // In a real app, you'd fetch this data based on the slug
  const project = {
    title: "Slack - Server-Rendered Blog with Enhanced Content Authoring",
    description: "A performant and flexible blog platform built with Next.js and MDX for seamless integration of code and content.",
    tags: ["Next.js", "Content Creation", "MDX"],
    image: "/slack gray.png",
    content: "A high-performance, server-rendered blog using Next.js and MDX to provide an enhanced content creation experience.",
    year: "2023"
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

          
          <div className="mb-8">
              <Link href="https://slate-blog.vercel.app/" className="inline-flex items-center text-cyan-300 hover:text-white text-semibold transition-colors mb-4 mt-4">
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
                  <p className="text-lg text-white leading-relaxed">This project aimed to create a performant and flexible blog platform that allowed for seamless integration of code and content. The goal was to move beyond traditional content management systems and provide a more developer-friendly approach to content creation and management.
                  </p>
                </div>

                

                <div>
                  <h3 className="text-neutral-400 mb-2">Timeline:</h3>
                  <p className="text-white">September 2023 - November 2023</p>
                </div>
              </div>
            </section>

            {/* Problem Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Challenge</h2>
              <p className="text-xl leading-relaxed">
              Traditional blogging platforms often lack the flexibility 😫 to easily embed code examples or create interactive content. This project sought to address this limitation by leveraging MDX ✨, which allows writing Markdown with embedded JSX components. 💻✍️</p>
            </section>
            
            {/* Solution */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Solution</h2>
              <p className="text-xl leading-relaxed">
                I developed a blog platform using Next.js, a React framework that enables server-side rendering for improved performance and SEO. The frontend was built with React, providing a dynamic and interactive user experience. MDX was integrated to allow authors to write content in Markdown and seamlessly embed React components, creating a more engaging and interactive reading experience. Node.js was used to build the backend API for content management and retrieval.
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
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Frontend: </span> 
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2"></span>
                    <span className="text-neutral-400 mb-6">React, Next.js (for server-side rendering, routing, and API routes)</span> 
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Content:</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2"></span>
                    <span className="text-neutral-400 mb-6">MDX (Markdown with JSX support)</span> 
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Backend:</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2"></span>
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
                    <span className="text-green-500 mr-2">•</span>
                    <span>Server-side rendering for improved performance and SEO. </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span>MDX integration for embedding code and components.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Dynamic routing based on blog post slugs.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Clean and responsive user interface.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Outcome:</h2>
              <div className="space-y-8">
                <p className="text-lg text-neutral-400 mb-6">
                The resulting blog platform provides a performant and flexible solution for content creation and management. The use of MDX allows authors to create richer and more interactive content, while the server-side rendering provided by Next.js ensures optimal performance and SEO.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

