import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Forward } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectPageWrapper, ProjectSection } from '@/app/components/ProjectPageWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function AyleChatPage() {
  // Data for AyleChat project from GitHub README
  const project = {
    title: "AyleChat - Multi-Provider AI Chat App",
    description: "An open-source AI chat application integrating multiple LLM providers for unparalleled speed and providing immediate access to cutting-edge models including Google Gemini, Groq, OpenRouter, Cerebras, and Exa.",
    tags: ["Next.js 15", "InstantDB", "Gemini", "Groq", "OpenRouter", "Cerebras", "TypeScript", "shadcn/ui"],
    image: "/aylechat.png",
    content: "AyleChat is an open-source AI chat application that integrates multiple LLM providers to deliver unparalleled speed and immediate access to cutting-edge language models. With support for Google Gemini, Groq, OpenRouter, Cerebras, and Exa, it provides real-time streaming responses, conversation history, and a mobile-responsive design.",
    year: "2025"
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
            <Link href="https://ayle.chat/" target="_blank" rel="noopener noreferrer">
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
                  <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">This project is an open-source AI chat application designed to provide users with access to multiple cutting-edge language models through a single interface. By integrating various LLM providers, it offers flexibility in model selection while maintaining fast response times and a seamless user experience.</p>
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
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">The main challenge was to build a responsive and performant chat application that could seamlessly integrate multiple LLM APIs (Google Gemini, Groq, OpenRouter, Cerebras, Exa) while managing user authentication with InstantDB, persistent chat history across sessions, and providing features like real-time streaming, math rendering, code highlighting, and web search integration.</p>
            </section>
          </ProjectSection>

          {/* Solution */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Solution</h2>
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">The application was built using Next.js 15 with the App Router and Turbopack for optimal performance. InstantDB handles both user authentication and real-time database operations, eliminating the need for separate services. Supabase is used for image storage. TailwindCSS with shadcn/ui ensures a modern and responsive design. The core functionality relies on integrating various APIs including Google Gemini, Groq, OpenRouter, Cerebras, and Exa for comprehensive multi-model support.</p>
            </section>
          </ProjectSection>

          {/* Technical Details Section */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Technical Details:</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground font-geist font-light mb-4">The application utilizes the following technologies:</p>
                 <ul className="space-y-2 list-disc list-inside text-muted-foreground font-geist font-light">
                  <li><span className="font-normal">Frontend:</span> Next.js 15 with App Router and Turbopack, React 18, TypeScript</li>
                  <li><span className="font-normal">Styling:</span> TailwindCSS, shadcn/ui with Radix UI, Framer Motion</li>
                  <li><span className="font-normal">Backend/APIs:</span> Google Gemini API, Groq API, OpenRouter API, Cerebras API, Exa API</li>
                  <li><span className="font-normal">Authentication & Database:</span> InstantDB (primary), Supabase (image storage)</li>
                  <li><span className="font-normal">Additional Libraries:</span> KaTeX (math rendering), highlight.js (code highlighting), markdown-to-jsx</li>
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
                  <li>Multi-model support (Google Gemini 2.0/2.5, Groq LLaMA 3.x, OpenRouter Mistral/DeepSeek, Cerebras LLaMA 3.1/3.3)</li>
                  <li>Real-time streaming responses with citations</li>
                  <li>Web search integration for up-to-date information</li>
                  <li>User conversation history with InstantDB</li>
                  <li>Attachment support in chat input</li>
                  <li>Quote and follow-up functionality</li>
                  <li>Mobile-responsive design with optimized UX</li>
                  <li>Math formula support via KaTeX</li>
                  <li>Code syntax highlighting with highlight.js</li>
                  <li>Markdown rendering with markdown-to-jsx</li>
                 </ul>
              </div>
            </section>
          </ProjectSection>

          {/* Outcome Section */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Outcome:</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">AyleChat successfully demonstrates the power of combining multiple LLM providers in a single, cohesive interface. By leveraging InstantDB for real-time data operations and integrating providers like Google Gemini, Groq, OpenRouter, Cerebras, and Exa, it provides users with flexibility and cutting-edge AI capabilities. The application serves as a robust example of building modern AI chat applications with authentication, persistent history, and multi-model support, all deployed seamlessly on Vercel.</p>
              </div>
            </section>
          </ProjectSection>

        </div>
      </div>
    </ProjectPageWrapper>
  );
} 