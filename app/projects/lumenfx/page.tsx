import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Forward } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectPageWrapper, ProjectSection } from '@/app/components/ProjectPageWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function LumenFXPage() {
  const project = {
    title: "LumenFX - Intelligent Cross-Border FX Payments",
    description: "Smart route optimization platform for transparent, cost-effective international payments on Stellar blockchain. Won 0xGenIgnite hackathon at NIT Goa (Oct 2025), sponsored by Stellar blockchain.",
    tags: ["Stellar Network", "Soroban", "Next.js 15", "Rust", "TypeScript", "Freighter Wallet"],
    image: "/lumenfx.png",
    content: "LumenFX is a next-generation cross-border payment platform that aggregates multiple liquidity sources to find the most cost-effective routes for international money transfers. By comparing Stellar DEX paths against traditional FX providers, users can save 5-15% on cross-border payments with full transparency and immutable audit trails via Soroban smart contracts.",
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

            {/* Hackathon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 rounded-lg mb-4">
              <span className="text-2xl">🏆</span>
              <span className="font-normal">Winner - 0xGenIgnite Hackathon, NIT Goa (Oct 2025)</span>
            </div>
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
            <Link href="https://lumenfx.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button variant="link" className="font-light p-0">
                <Forward className="w-4 h-4 mr-2" />
                Link to Deployed Project
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
                  <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">LumenFX is a revolutionary cross-border payment platform built on the Stellar blockchain that aggregates multiple liquidity sources to provide users with the most cost-effective routes for international money transfers. By comparing Stellar DEX paths with traditional FX providers, the platform delivers 5-15% savings with complete transparency through Soroban smart contracts for immutable audit trails.</p>
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
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">The main challenges included integrating the Stellar Horizon API for path discovery, implementing Soroban smart contracts in Rust for route attestation and verification, building a multi-source route comparison system that aggregates both on-chain and off-chain liquidity providers, integrating Freighter Wallet for secure transaction signing, and creating a transparent fee structure that shows all costs upfront while maintaining real-time rate discovery across multiple sources.</p>
            </section>
          </ProjectSection>

          {/* Solution */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Solution</h2>
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">The platform was built using Next.js 15 with React 19 and TypeScript for the frontend. Soroban smart contracts written in Rust handle route attestation and create immutable audit trails on the Stellar blockchain. The Freighter Wallet API provides secure transaction signing. The system queries the Stellar Horizon API for on-chain DEX paths and integrates with mock FX provider endpoints to compare routes. All routes are ranked by net receive amount, with complete transparency of fees, spreads, and execution steps. The Wormhole bridge enables cross-chain payments for multi-chain support.</p>
            </section>
          </ProjectSection>

          {/* Technical Details Section */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Technical Details:</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground font-geist font-light mb-4">The application utilizes the following technologies:</p>
                 <ul className="space-y-2 list-disc list-inside text-muted-foreground font-geist font-light">
                  <li><span className="font-normal">Frontend:</span> Next.js 15, React 19, TypeScript</li>
                  <li><span className="font-normal">Styling:</span> Tailwind CSS</li>
                  <li><span className="font-normal">Blockchain:</span> Stellar Network (Testnet), Soroban Smart Contracts</li>
                  <li><span className="font-normal">Smart Contracts:</span> Rust-based Soroban contracts for route attestation</li>
                  <li><span className="font-normal">Wallet Integration:</span> Freighter API</li>
                  <li><span className="font-normal">APIs:</span> Stellar Horizon API, Mock FX Provider endpoints</li>
                  <li><span className="font-normal">Cross-Chain:</span> Wormhole bridge integration</li>
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
                  <li>Multi-source route comparison (Stellar DEX + FX providers)</li>
                  <li>Transparent fee structure showing all costs upfront</li>
                  <li>Smart contract attestation for immutable audit trails</li>
                  <li>Freighter Wallet integration for secure signing</li>
                  <li>Real-time rate discovery across liquidity sources</li>
                  <li>Cross-chain bridge support via Wormhole</li>
                  <li>Route ranking by net receive amount</li>
                  <li>Soroban smart contracts for route verification</li>
                  <li>5-15% savings on cross-border payments</li>
                 </ul>
              </div>
            </section>
          </ProjectSection>

          {/* Outcome Section */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Outcome:</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">LumenFX won the 0xGenIgnite hackathon at NIT Goa in October 2025, sponsored by Stellar blockchain. The platform successfully demonstrates the power of combining on-chain and off-chain liquidity sources for optimal cross-border payments. By leveraging Soroban smart contracts for transparent route attestation and the Stellar network for fast, low-cost transactions, LumenFX provides users with significant savings while maintaining complete transparency. The project serves as a comprehensive example of building production-ready blockchain applications with real-world utility in the fintech space.</p>
              </div>
            </section>
          </ProjectSection>

        </div>
      </div>
    </ProjectPageWrapper>
  );
}
