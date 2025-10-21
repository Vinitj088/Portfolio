import Link from 'next/link';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from './FadeIn';

const ProjectGrid = () => {
  const projects = [
    // 1. AyleChat
    {
      title: "AyleChat - Multi-Provider AI Chat App",
      description: "An open-source AI chat application providing unparalleled speed and immediate access to cutting-edge LLMs through multi-provider support including Google Gemini, Groq, OpenRouter, Cerebras, and Exa.",
      tags: ["Next.js 15", "InstantDB", "Gemini", "Groq", "TypeScript", "shadcn/ui"],
      image: "/aylechat.png",
      slug: "aylechat"
    },
    // 2. LumenFX
    {
      title: "LumenFX - Cross-Border FX Payments [Hackathon Winner]",
      description: "Smart route optimization platform for transparent, cost-effective international payments on Stellar blockchain. Won 0xGenIgnite hackathon at NIT Goa (Oct 2025).",
      tags: ["Stellar", "Soroban", "Next.js 15", "Rust", "TypeScript"],
      image: "/lumenfx.png",
      slug: "lumenfx"
    },
    // 3. TranslatR
    {
      title: "TranslatR - Text to Internet Slang Converter",
      description: "A modern web application that transforms regular text into various internet slang intensities with AI-powered conversions, smooth GSAP animations, and five intensity levels from Mild to Crazy.",
      tags: ["Google Gemini API", "Next.js 15", "GSAP", "TypeScript", "TailwindCSS"],
      image: "/translatr_purple.png",
      slug: "toaster"
    },
    // 4. Sahayak
    {
      title: "Sahayak - AI Mental Wellness Assistant",
      description: "A culturally-sensitive AI companion for Indian youth (16-25) providing confidential, empathetic mental health support with crisis detection, mood tracking, and culturally adapted responses. Selected for Google Hackathon.",
      tags: ["Next.js 14", "Google AI", "Vercel AI SDK", "TypeScript", "Framer Motion"],
      image: "/sahayak.png",
      slug: "sahayak"
    },
    // 5. Displayr
    {
      title: "Displayr - Movie & TV Show Discovery",
      description: "A modern recommendation engine and search interface leveraging TMDB API data with genre-based filtering, GSAP animations, and comprehensive details including cast, crew, and trailers.",
      tags: ["TMDB API", "Next.js", "TypeScript", "GSAP", "TailwindCSS"],
      image: "/displayr.png",
      slug: "displayr"
    },
    // 6. Whisperwalls
    {
      title: "Whisperwalls - Public Pin Sharing",
      description: "Public pin sharing platform with AI-powered content moderation using Google Gemini API. Built for Thrizll hackathon with multi-language support for English and Hindi.",
      tags: ["Next.js", "Gemini API", "Supabase", "TypeScript"],
      slug: "whisperwalls"
    },
    // 7. DataWipe-Core
    {
      title: "DataWipe-Core - Disk Sanitization",
      description: "NIST 800-88 compliant disk sanitization system for SIH 2025. First project working on OS-level architecture with cryptographic erase support for SSDs.",
      tags: ["Python", "OS-Level", "Security", "NIST 800-88"],
      slug: "datawipe"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 xl:ml-20">
      {/* Section Title */}
      <div className="mb-16">
        <h2 className="text-3xl font-light text-foreground mb-6">Selected Work</h2>
        <div className="w-full h-px bg-border" />
      </div>

      {/* Projects Grid */}
      <div className="space-y-20">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="space-y-6">
              {/* Project Title */}
              <Link
                href={`/projects/${project.slug}`}
                className="block group"
              >
                <h3 className="text-2xl font-normal text-foreground group-hover:text-foreground/60 transition-colors">
                  {project.title}
                </h3>
              </Link>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="outline"
                    className="font-light"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Project Image Card */}
              {project.image && (
                <Link
                  href={`/projects/${project.slug}`}
                  className="block group"
                >
                  <div className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="relative w-full overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </Link>
              )}

              {/* Project Description */}
              <p className="text-muted-foreground font-geist font-light leading-relaxed">
                {project.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;