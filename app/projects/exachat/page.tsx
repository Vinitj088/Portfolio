import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Forward } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { CustomCursor } from '@/app/components/CustomCursor';
import { ScrollIndicator } from '@/app/components/ScrollIndicator';

export default function ExachatPage() {
  // Data for Exachat project from README
  const project = {
    title: "Exa Answer Chat App",
    description: "The FASTEST open source chat app showcasing Exa's Answer endpoint, leveraging Groq, Gemini, Openrouter and Exa Search for speed and access to cutting-edge LLMs and latest data.",
    tags: ["Exa API", "Groq", "Next.js", "Supabase", "Redis", "TailwindCSS", "TypeScript"],
    image: "/exachat.png",
    content: "Exa Chat is a custom-built AI chat application leveraging the power of Groq, Gemini, Cerebras, Openrouter and Exa Search for unparalleled speed and providing immediate access to cutting-edge Large Language Models (LLMs). It utilizes Exa's Answer endpoint for high-quality, real-time streaming responses with citations.",
    year: "2025" // Assuming current year, adjust if needed
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
              <Link href="https://exa-chat.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cyan-300 hover:text-white text-semibold transition-colors mb-4 mt-4">
                <Forward className="w-4 h-4 mr-2" />
                  Link to Live Demo
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
                  <p className="text-lg text-white leading-relaxed">This project is an open-source custom-built AI chat application designed to showcase the capabilities of Exa's Answer endpoint. It integrates with Groq and Cerebras for fast model inference and Exa Search to provide users with rapid, accurate, and context-aware Web search results.</p>
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
              <p className="text-xl leading-relaxed">The main challenge was to build a responsive and performant chat application that could seamlessly integrate multiple LLM APIs (Exa, Groq, Google Gemini, Cerebras, Openrouter) while managing user authentication, persistent chat history across sessions, and providing features like real-time streaming, math rendering, and code highlighting.</p>
            </section>

            {/* Solution */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Solution</h2>
              <p className="text-xl leading-relaxed">The application was built using Next.js with the App Router for the frontend. Supabase handles user authentication and PostgreSQL stores user data, while Upstash Redis manages persistent chat threads. TailwindCSS with shadcn/ui ensures a modern and responsive design. The core functionality relies on integrating various APIs like Exa (Answer endpoint), Groq, Google Gemini, Openrouter and Cerebras for multi-model support.</p>
            </section>

            {/* Technical Details Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Technical Details:</h2>
              <div className="space-y-8">
                <p className="text-neutral-400 mb-6">The application utilizes the following technologies:</p>
                 <ul className="space-y-2 mb-8 list-disc list-inside text-neutral-300">
                  <li><strong>Frontend:</strong> Next.js (App Router), React, TypeScript</li>
                  <li><strong>Styling:</strong> TailwindCSS, shadcn/ui, Custom Components</li>
                  <li><strong>Backend/APIs:</strong> Exa API (Answer), Groq API, Google Gemini API, Cerebras API, Openrouter API</li>
                  <li><strong>Authentication:</strong> Supabase Auth</li>
                  <li><strong>Database:</strong> Supabase PostgreSQL (User Data), Upstash Redis (Chat Threads)</li>
                  <li><strong>Hosting:</strong> Vercel</li>
                 </ul>
              </div>
            </section>

            {/* Key Features Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Key Features:</h2>
              <div className="space-y-8">
                 <ul className="space-y-2 mb-8 list-disc list-inside text-green-400">
                  <li>Multi-model support (Gemini, Groq, LLaMA 3 and 4, Mistral, Cerebras, Openrouter Models, etc.)</li>
                  <li>Real-time web search responses with citations (via Exa)</li>
                  <li>Near instant responses via optimized model inference and api calls</li>
                  <li>Persistent conversation history per user (via Redis)</li>
                  <li>Secure user authentication (via Supabase)</li>
                  <li>Mobile-responsive design</li>
                  <li>Math formula support (KaTeX)</li>
                  <li>Code syntax highlighting using highlight.js</li>
                  <li>Markdown rendering via markdown to jsx</li>
                 </ul>
              </div>
            </section>

            {/* Outcome Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-bold mb-8">Outcome:</h2>
              <div className="space-y-8">
                <p className="text-lg text-neutral-400 mb-6">The Exa Answer Chat App successfully demonstrates the power of combining Exa's search capabilities with fast LLM inference from providers like Groq. It serves as a functional example of building a modern AI chat application with robust features like authentication, persistent history, and support for multiple models, all deployable on Vercel.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
} 