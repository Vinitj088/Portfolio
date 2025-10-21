import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Forward, ArrowUpRight } from 'lucide-react';
import { ProjectPageWrapper, ProjectSection } from '@/app/components/ProjectPageWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function DataWipePage() {
  const project = {
    title: "DataWipe-Core - NIST-Compliant Disk Sanitization",
    description: "NIST 800-88 compliant disk sanitization system implementing cryptographic erase for SSDs and comprehensive wiping methods. Built for Smart India Hackathon 2025.",
    tags: ["Python", "OS-Level Architecture", "Security", "Cryptography", "NIST 800-88"],
    image: "/datawipe.png",
    content: "DataWipe-Core is a comprehensive disk sanitization solution that implements NIST 800-88 compliant wiping methods. The system provides dual wipe approaches with 'clear' for standard sanitization and 'purge' for comprehensive hidden sector wiping, along with cryptographic erase for SSDs, post-wipe verification, and certificate generation for compliance documentation.",
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

            {/* SIH Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-500 rounded-lg mb-4">
              <span className="font-normal">Smart India Hackathon 2025</span>
            </div>
          </div>
        </ProjectSection>

        {/* Main Image
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
        </ProjectSection> */}

        {/* Link to Deployed Project */}
        <ProjectSection delay={0.4}>
          <div className="mb-12">
            <Link href="https://github.com/SIH-2025-HackThem/datawipe-core" target="_blank" rel="noopener noreferrer">
              <Button variant="link" className="font-light p-0 inline-flex items-center text-cyan-300 hover:text-white text-semibold transition-colors mb-4 mt-4">
                <Forward className="w-4 h-4 mr-2" />
                Link to GitHub Repository
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
                  <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">This project was developed for Smart India Hackathon 2025 to provide a robust, NIST 800-88 compliant solution for secure data wiping. DataWipe-Core was my first project working on OS-level architecture and functions, providing deep insights into low-level system operations, disk management, and cryptographic techniques for data destruction. The system is designed to be distributed as a bootable ISO image for USB drives.</p>
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
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">The main challenges included implementing NIST 800-88 compliant wiping standards at the OS level, developing dual wipe methods ('clear' for standard wiping with OS preservation and 'purge' for comprehensive hidden sector sanitization), implementing cryptographic erase using AES-based encryption removal for SSDs, creating reliable post-wipe verification systems, generating compliance certificates, detecting disk partitions and storage types accurately, and packaging the entire system as a bootable ISO image for USB deployment.</p>
            </section>
          </ProjectSection>

          {/* Solution */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Solution</h2>
              <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">The system was built using Python (50%) for the core wiping logic, with HTML (45.5%) and CSS (4.4%) for the user interface, and Batch scripting (0.1%) for automation. The architecture includes five core modules: disk_search for partition and storage detection, disk_wipe for implementing the actual wiping algorithms, verification for post-wipe validation, certificates for generating compliance documentation, and app for the main application logic. The 'clear' method provides standard sanitization with optional OS preservation, while the 'purge' method handles hidden storage sectors (HPA/DCO) for comprehensive data destruction. For SSDs, the system implements cryptographic erase using AES-based encryption removal, which is more efficient than traditional overwriting methods.</p>
            </section>
          </ProjectSection>

          {/* Technical Details Section */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Technical Details:</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground font-geist font-light mb-4">The application utilizes the following technologies:</p>
                 <ul className="space-y-2 list-disc list-inside text-muted-foreground font-geist font-light">
                  <li><span className="font-normal">Languages:</span> Python (50%), HTML (45.5%), CSS (4.4%), Batch scripting (0.1%)</li>
                  <li><span className="font-normal">Core Modules:</span> disk_search, disk_wipe, verification, certificates, app</li>
                  <li><span className="font-normal">Standards:</span> NIST 800-88 compliance</li>
                  <li><span className="font-normal">Cryptography:</span> AES-based encryption removal for SSDs</li>
                  <li><span className="font-normal">Deployment:</span> Bootable ISO image for USB drives</li>
                  <li><span className="font-normal">Competition:</span> Smart India Hackathon 2025</li>
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
                  <li>NIST 800-88 compliant wiping standards</li>
                  <li>Dual wipe methods: 'clear' (standard) and 'purge' (comprehensive)</li>
                  <li>OS preservation option in clear mode</li>
                  <li>Hidden sector handling (HPA/DCO) in purge mode</li>
                  <li>Cryptographic erase for SSDs using AES-based encryption removal</li>
                  <li>System disk detection and partition identification</li>
                  <li>Post-wipe verification and validation</li>
                  <li>Compliance certificate generation</li>
                  <li>Bootable ISO deployment for USB drives</li>
                  <li>OS-level architecture and low-level disk operations</li>
                 </ul>
              </div>
            </section>
          </ProjectSection>

          {/* Outcome Section */}
          <ProjectSection delay={0.1}>
            <section className="mb-24">
              <h2 className="text-2xl font-normal mb-6 text-foreground">Outcome:</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground font-geist font-light leading-relaxed">DataWipe-Core successfully implements NIST 800-88 compliant disk sanitization with both standard and comprehensive wiping methods. The project was a significant learning experience as my first work on OS-level architecture and functions, providing deep insights into low-level system operations, disk management, and cryptographic data destruction techniques. Built for Smart India Hackathon 2025, the system demonstrates the practical application of security standards in creating reliable data sanitization tools. The dual wipe methods, cryptographic erase for SSDs, and certificate generation make it a comprehensive solution for secure data wiping, deployable as a bootable ISO for ease of use.</p>
              </div>
            </section>
          </ProjectSection>

        </div>
      </div>
    </ProjectPageWrapper>
  );
}
