"use client";

import React from 'react';
import MainLayout from './MainLayout';
import { GreetingText } from './GreetingText';
import SlidingBanner from './SlidingBanner';
import ProjectGrid from './ProjectGrid';
import InteractiveButtons from './InteractiveButtons';
import { FadeIn } from './FadeIn';
import { Card, CardContent } from '@/components/ui/card';

export default function HomeContent() {
  return (
    <div>
      <MainLayout>
        <div className="max-w-4xl mx-auto space-y-8 pt-16 xl:ml-20 px-6">
          <FadeIn delay={0.1}>
            <GreetingText />
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight tracking-tight">
              Meet Vinit, a FullStack & AI Developer who thrives on experimenting and trying new things
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-geist font-light max-w-2xl">
              When I'm not designing, you'll probably find me playing pickleball, cooking something new, editing videos, or stepping outside to capture everything I can see.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex items-center gap-2 text-foreground text-base font-light">
              <span>Currently Working</span>
              <span className="font-normal">@ Vegacap Consultants</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex gap-4 pt-4">
              <InteractiveButtons />
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <SlidingBanner />
          </FadeIn>
        </div>

        {/* Skills Section */}
        <div className="w-full max-w-4xl mx-auto px-6 py-8 xl:ml-20">
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <h3 className="text-lg font-light text-muted-foreground">Technologies & Tools</h3>

              {/* Frontend */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-geist uppercase tracking-wider">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Vue', 'Astro', 'React Native', 'Expo', 'shadcn'].map((skill, index) => (
                    <span key={index} className="text-xs px-3 py-1.5 bg-muted text-foreground rounded-full font-geist font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-geist uppercase tracking-wider">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'JavaScript', 'Python'].map((skill, index) => (
                    <span key={index} className="text-xs px-3 py-1.5 bg-muted text-foreground rounded-full font-geist font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & Databases */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-geist uppercase tracking-wider">Backend & Databases</p>
                <div className="flex flex-wrap gap-2">
                  {['Supabase', 'InstantDB', 'PostgreSQL', 'PlanetScale', 'Redis', 'Redux'].map((skill, index) => (
                    <span key={index} className="text-xs px-3 py-1.5 bg-muted text-foreground rounded-full font-geist font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* DevOps & Tools */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-geist uppercase tracking-wider">DevOps & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'GitHub Actions', 'Vite', 'Postman', 'Bruno'].map((skill, index) => (
                    <span key={index} className="text-xs px-3 py-1.5 bg-muted text-foreground rounded-full font-geist font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud & AI */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-geist uppercase tracking-wider">Cloud & AI</p>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Vercel AI SDK'].map((skill, index) => (
                    <span key={index} className="text-xs px-3 py-1.5 bg-muted text-foreground rounded-full font-geist font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blockchain & Web3 */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-geist uppercase tracking-wider">Blockchain & Web3</p>
                <div className="flex flex-wrap gap-2">
                  {['Stellar', 'ICP', 'Metamask'].map((skill, index) => (
                    <span key={index} className="text-xs px-3 py-1.5 bg-muted text-foreground rounded-full font-geist font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <ProjectGrid />
        </FadeIn>

        {/* Additional Projects Section */}
        <div className="w-full max-w-4xl mx-auto px-6 py-16 xl:ml-20">
          <FadeIn delay={0.1}>
            <div className="mb-12">
              <h2 className="text-3xl font-light text-foreground mb-6">Additional Projects</h2>
              <div className="w-full h-px bg-border" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Zephyr */}
            <FadeIn delay={0.1}>
              <div className="space-y-4 p-6 rounded-xl bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-normal text-foreground">Zephyr</h3>
                <p className="text-sm text-muted-foreground font-geist font-light leading-relaxed">
                  Secure note-taking app built with Ruby on Rails 8 featuring Google OAuth, markdown support, and PWA functionality. Emphasizes security and organization with Docker deployment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-muted rounded font-geist">Ruby on Rails</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded font-geist">PostgreSQL</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded font-geist">OAuth</span>
                  <span className="text-xs px-2 py-1 bg-muted rounded font-geist">Docker</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}