import React from 'react';
import { User, FileText, Linkedin, Github } from 'lucide-react';

const ProjectDetailPage = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 p-6 bg-zinc-900/50">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-zinc-800"></div>
            <div>
              <h3 className="font-medium">Vinit Jain</h3>
              <p className="text-sm text-zinc-400">Developer</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white transition-colors">
            <User size={20} /> Explore
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white transition-colors">
            <User size={20} /> About me
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white transition-colors">
            <FileText size={20} /> Resume
          </a>
          <div className="pt-4 mt-4 border-t border-zinc-800">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white transition-colors">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white transition-colors">
              <Github size={20} /> Github
            </a>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl">
          {/* Tags */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full mr-2">Design System</span>
            <span className="inline-block px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full mr-2">Product Design</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-medium mb-4">
            Scaling with Purpose: How a Design System Powered SafetyConnect's Mission to Reduce Field Force Incidents and Drive Adoption
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-zinc-400 mb-8">
            50% drop in accidents and 90% increase in user adoption in 6 months.
          </p>

          {/* Project Meta */}
          <div className="grid grid-cols-4 gap-8 mb-12 text-sm">
            <div>
              <p className="text-zinc-500 mb-1">Client</p>
              <p className="text-white">SafetyConnect</p>
            </div>
            <div>
              <p className="text-zinc-500 mb-1">Industry</p>
              <p className="text-white">IoT & Industrial Safety</p>
            </div>
            <div>
              <p className="text-zinc-500 mb-1">Published Date</p>
              <p className="text-white">01 March 2024</p>
            </div>
            <div>
              <p className="text-zinc-500 mb-1">Model</p>
              <p className="text-white">B2C, D2C</p>
            </div>
          </div>

          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden bg-zinc-800/50 mb-16">
            <img 
              src="/api/placeholder/1200/600" 
              alt="Project Hero"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overview Section */}
          <div className="grid grid-cols-4 gap-12">
            <div className="col-span-1">
              <nav className="space-y-2 sticky top-8">
                <p className="text-zinc-400 px-4 py-2">Overview</p>
                <a href="#" className="block px-4 py-2 text-purple-400 bg-purple-500/10 rounded-lg">About SafetyConnect</a>
                <a href="#" className="block px-4 py-2 text-zinc-400 hover:text-white">Challenges</a>
                <a href="#" className="block px-4 py-2 text-zinc-400 hover:text-white">Role & Objectives</a>
                <a href="#" className="block px-4 py-2 text-zinc-400 hover:text-white">Process</a>
                <a href="#" className="block px-4 py-2 text-zinc-400 hover:text-white">Solution</a>
                <a href="#" className="block px-4 py-2 text-zinc-400 hover:text-white">Results & Impact</a>
              </nav>
            </div>
            
            <div className="col-span-3">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl mb-2">Role: <span className="text-zinc-400">Lead Designer</span></h3>
                  <h3 className="text-xl mb-2">When: <span className="text-zinc-400">October 2022 - July 2023</span></h3>
                  <h3 className="text-xl mb-4">Platform: <span className="text-zinc-400">B2B - SaaS Website and Mobile App</span></h3>
                  
                  <h3 className="text-xl mb-2">Responsibilities:</h3>
                  <p className="text-zinc-400">UX Research, UI Audit, User Testing, Prototyping, Documentation</p>
                  
                  <h3 className="text-xl mt-4 mb-2">Key Deliverables:</h3>
                  <ul className="list-disc list-inside text-zinc-400 space-y-1">
                    <li>UX Audit</li>
                    <li>User Flows</li>
                    <li>Wireframes & Prototypes</li>
                    <li>Style guide and brand system</li>
                    <li>Component Library</li>
                    <li>Design System Documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;