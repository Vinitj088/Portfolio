import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Forward } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { CustomCursor } from '@/app/components/CustomCursor';
import { ScrollIndicator } from '@/app/components/ScrollIndicator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';



export default function ProjectPage() {
  // Data for Sahayak mental health project
  const project = {
    title: "Sahayak - AI Mental Wellness Assistant",
    description: "A culturally-sensitive AI companion targeting Indian youth aged 16-25, providing confidential, empathetic mental health support with crisis detection, mood tracking, and culturally adapted responses.",
    tags: ["Next.js 14", "Google AI", "Vercel AI SDK", "TypeScript", "Framer Motion"],
    image: "/sahayak.png",
    content: "Sahayak is a culturally-sensitive AI mental wellness assistant designed specifically for Indian youth aged 16-25. It provides confidential, empathetic support through AI-powered conversations with Indian cultural context awareness, real-time crisis detection, daily mood tracking, and curated mental health resources.",
    year: "2025"
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

          
          <div className="mb-8">
              <Link href="https://sahayak-mentalhealth.vercel.app/" className="inline-flex items-center text-cyan-300 hover:text-white text-semibold transition-colors mb-4 mt-4">
                <Forward className="w-4 h-4 mr-2" />
                  Link to Deployed Project
                  <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
              <p className="text-sm text-muted-foreground font-geist font-light mt-2">Selected for Google Hackathon</p>
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
                  <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">This project was created to address the mental health crisis among Indian youth and the stigma around mental wellness conversations. Sahayak provides a safe, confidential space for young people aged 16-25 to discuss their mental health concerns with an AI companion that understands Indian cultural context, family dynamics, and societal pressures. The project was selected for the Google Hackathon.
                  </p>
                </div>

                

                <div>
                  <h3 className="text-muted-foreground font-light mb-2">Timeline:</h3>
                  <p className="text-foreground font-normal">{project.year}</p>
                </div>
              </div>
            </section>

            {/* Problem Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Challenge</h2>
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">
              The main challenges included creating an AI that understands Indian cultural nuances and family dynamics, implementing real-time crisis detection with appropriate escalation protocols, ensuring user privacy and confidentiality, providing culturally adapted responses that resonate with Indian youth, and integrating mental health resources specific to India including crisis helplines like AASRA, Vandrevala Foundation, and Sneha.</p>
            </section>
            
            {/* Solution */}
            <section className="mb-32">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Solution</h2>
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">
                I developed Sahayak using Next.js 14, React 18, and TypeScript for a robust frontend. The Vercel AI SDK with Google Generative AI powers the culturally-aware conversations. The application features real-time crisis detection that escalates to professional resources when needed, daily mood tracking with visualization using Recharts, conversation management with folders and search capabilities, and a responsive design with dark/light theme support. React Hook Form with Zod validation ensures data integrity, while Framer Motion provides smooth animations. All data is stored locally for complete privacy.
              </p>
            </section>



            {/* Stakeholder Analysis Section */}
            <section className="mb-32">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Technical Details:</h2>
              
              <div className="space-y-8">
                <p className="text-muted-foreground font-geist font-light mb-6">
                  The technologies used in this project are categorized as follows:
                </p>
                <ul className="space-y-2 mb-8 list-disc list-inside text-muted-foreground font-geist font-light">
                  <li><span className="font-normal">Frontend:</span> Next.js 14, React 18, TypeScript</li>
                  <li><span className="font-normal">Styling:</span> Tailwind CSS, Radix UI components</li>
                  <li><span className="font-normal">AI:</span> Vercel AI SDK with Google Generative AI</li>
                  <li><span className="font-normal">State Management:</span> React hooks and localStorage</li>
                  <li><span className="font-normal">Forms:</span> React Hook Form with Zod validation</li>
                  <li><span className="font-normal">Visualization:</span> Recharts for mood analytics</li>
                  <li><span className="font-normal">Animations:</span> Framer Motion</li>
                  <li><span className="font-normal">Package Manager:</span> pnpm</li>
                  <li><span className="font-normal">Hosting:</span> Vercel</li>
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
              <h2 className="text-2xl font-normal mb-6 text-foreground">Key Features:</h2>
              <div className="space-y-8">
                <ul className="space-y-2 mb-8 list-disc list-inside text-muted-foreground font-geist font-light">
                  <li>AI-powered conversations with Indian cultural context awareness</li>
                  <li>Real-time crisis detection with escalation protocols</li>
                  <li>Daily mood tracking and wellness factor monitoring</li>
                  <li>Culturally adapted responses addressing family dynamics</li>
                  <li>Curated mental health resources and crisis helplines (AASRA, Vandrevala Foundation, Sneha)</li>
                  <li>Responsive design with dark/light theme support</li>
                  <li>Conversation management with folders and search</li>
                  <li>Complete privacy with local data storage</li>
                  <li>Mood analytics visualization with Recharts</li>
                </ul>
              </div>
            </section>

            <section className="mb-32">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Outcome:</h2>
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground font-geist font-light mb-6">
                Sahayak successfully provides a culturally-sensitive, confidential space for Indian youth to address their mental health concerns. The integration of Google Generative AI with cultural context awareness, combined with crisis detection and mood tracking features, creates a comprehensive support system. The project was selected for the Google Hackathon, validating its approach to addressing mental health stigma in India. The application includes important disclaimers that it is not a replacement for professional mental health care, ensuring responsible use while providing valuable support to users.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

