import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Forward } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectPageWrapper, ProjectSection } from '@/app/components/ProjectPageWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function WhisperwallsPage() {
  const project = {
    title: "Whisperwalls - Public Pin Sharing Platform",
    description: "A Next.js application for sharing public pins with AI-powered content moderation to ensure community safety and appropriate discourse.",
    tags: ["Next.js", "Google Gemini API", "Supabase", "TypeScript", "AI Moderation"],
    image: "/whisperwalls.png",
    content: "Whisperwalls is a web application built with Next.js that allows users to create and share pins publicly with the community. The platform includes AI-powered content moderation using Google Gemini API to ensure community safety, with multi-language support for English and Hindi and comprehensive content classification.",
    year: "2024"
  };

  return (
    <ProjectPageWrapper>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Back Button */}
        <ProjectSection delay={0.1}>
          <Link href="/">
            <Button variant="ghost" className="mb-16 font-light -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to projects
            </Button>
          </Link>
        </ProjectSection>

        {/* Project Header */}
        <ProjectSection delay={0.2}>
          <div className="mb-16">
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
            <h1 className="text-4xl md:text-5xl font-light mb-8 text-foreground">
              {project.title}
            </h1>
          </div>
        </ProjectSection>

        {/* Main Image */}
        <ProjectSection delay={0.3}>
          <section className="mb-8">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-sm" style={{ paddingTop: '56.25%' }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
              />
            </div>
          </section>
        </ProjectSection>

        {/* Link to Deployed Project */}
        <ProjectSection delay={0.4}>
          <div className="mb-12">
            <Link href="https://whisperwalls-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button variant="link" className="font-light p-0">
                <Forward className="w-4 h-4 mr-2" />
                Link to Live Demo
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </ProjectSection>

        {/* Project Content */}
        <div>
          {/* Project Content starting paragraph */}
          <ProjectSection delay={0.5}>
            <div className="mb-24">
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">
                {project.content}
              </p>
            </div>
          </ProjectSection>

          {/* Context Section */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Introduction</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">This project was built for the Thrizll hackathon to create a platform where users can share pins publicly while maintaining community safety. The platform implements AI-powered content moderation to detect and prevent abusive content, hate speech, sexual material, self-harm references, violence, illegal content, spam, and gibberish before pins are published.</p>
                </div>
                <div>
                  <h3 className="text-muted-foreground font-light mb-2">Timeline:</h3>
                  <p className="text-foreground font-normal">{project.year}</p>
                </div>
              </div>
            </section>
          </ProjectSection>

          {/* Problem Section */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Challenge</h2>
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">The main challenges included implementing real-time AI-powered content moderation that could accurately classify multiple types of inappropriate content, supporting multi-language moderation for both English and Hindi, ensuring fast moderation responses to maintain good UX, implementing fallback client-side moderation in case the API fails, and integrating Supabase for database management while maintaining security and data integrity.</p>
            </section>
          </ProjectSection>

          {/* Solution */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Solution</h2>
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">The application was built using Next.js with TypeScript for a robust type-safe frontend. Google Gemini API powers the AI moderation system through a dedicated API endpoint (POST /api/moderate) that classifies content across multiple categories including abusive content, hate speech, sexual material, self-harm, violence, illegal content, spam, and gibberish. The system includes multi-language support with hints for English and Hindi. Supabase handles the database schema for storing pins and user data. A lightweight client-side moderation system serves as a fallback if the API fails, ensuring content safety is maintained even during service disruptions.</p>
            </section>
          </ProjectSection>

          {/* Technical Details Section */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Technical Details:</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground font-geist font-light mb-4">The application utilizes the following technologies:</p>
                 <ul className="space-y-2 list-disc list-inside text-muted-foreground font-geist font-light">
                  <li><span className="font-normal">Frontend:</span> Next.js (React framework), TypeScript (93.1%)</li>
                  <li><span className="font-normal">Styling:</span> CSS (6.3%), PostCSS</li>
                  <li><span className="font-normal">Backend:</span> Next.js API routes</li>
                  <li><span className="font-normal">Database:</span> Supabase (PostgreSQL)</li>
                  <li><span className="font-normal">AI/Moderation:</span> Google Gemini API</li>
                  <li><span className="font-normal">Linting:</span> ESLint</li>
                  <li><span className="font-normal">Hosting:</span> Vercel</li>
                 </ul>
              </div>
            </section>
          </ProjectSection>

          {/* Key Features Section */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Key Features:</h2>
              <div className="space-y-4">
                 <ul className="space-y-2 list-disc list-inside text-muted-foreground font-geist font-light">
                  <li>Public pin sharing with community features</li>
                  <li>AI-powered content moderation before publishing</li>
                  <li>Multi-language support (English and Hindi)</li>
                  <li>Comprehensive content classification (8 categories)</li>
                  <li>API moderation endpoint with POST /api/moderate</li>
                  <li>Fallback client-side lightweight moderation</li>
                  <li>Supabase database integration</li>
                  <li>Real-time moderation responses</li>
                  <li>Content safety enforcement</li>
                 </ul>
              </div>
            </section>
          </ProjectSection>

          {/* Outcome Section */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Outcome:</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">Whisperwalls successfully demonstrates the integration of AI-powered content moderation in a social sharing platform. The use of Google Gemini API for comprehensive content classification ensures community safety while maintaining a smooth user experience. The multi-language support for English and Hindi makes the platform accessible to a wider audience. The fallback moderation system ensures content safety is never compromised, even during API disruptions. Built for the Thrizll hackathon, the project showcases the practical application of AI in creating safer online communities.</p>
              </div>
            </section>
          </ProjectSection>

        </div>
      </div>
    </ProjectPageWrapper>
  );
}
