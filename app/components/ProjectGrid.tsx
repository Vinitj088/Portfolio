
import Link from 'next/link';
import React from 'react';

const ProjectGrid = () => {
  const projects = [
    {
      title: "Slack - Server-Rendered Blog with Enhanced Content Authoring",
      description: "A performant and flexible blog platform built with Next.js and MDX for seamless integration of code and content.",
      tags: ["Next.js", "Content Creation", "MDX"],
      image: "/slack gray.png"  // Replace with your actual image path
      , 
      slug: "slack"
    },
    {
      title: "ToastER - An AI-Powered Text to Slang Converter",
      description: "Launched a product, matching founders with potential cofounders",
      tags: ["OpenAI API", "React", "NextJS"],
      image: "/toaster green.png"  // Replace with your actual image path
      , 
      slug: "toaster"
    },
    // Add more projects as needed
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-[#141414] text-white xl:ml-20">
      {/* Section Title */} 
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Work</h2>
        <div className="w-full h-px bg-neutral-800" />
      </div>

      {/* Projects Grid */}
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div key={index} className="space-y-6">
            {/* Project Title */}
            <Link 
              href={`/projects/${project.slug}`}
              className="block group"
            >
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-4 py-1.5 bg-neutral-800 text-neutral-400 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Project Image */}
            <Link 
              href={`/projects/${project.slug}`}
              className="block relative w-full overflow-hidden rounded-2xl bg-purple-600 group"
            >
            <div className="relative w-full overflow-hidden rounded-2xl bg-purple-600">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
            </Link>

            {/* Project Description */}
            <p className="text-neutral-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;