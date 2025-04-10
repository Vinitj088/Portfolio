import Link from 'next/link';
import React from 'react';

const ProjectGrid = () => {
  const projects = [
    // 1. Exachat
    {
      title: "Exa Answer Chat App", // From README
      description: "The FASTEST open source chat app showcasing Exa's Answer endpoint, leveraging Groq, Gemini, Openrouter and Exa Search for speed and access to cutting-edge LLMs and latest data.", // From README
      tags: ["Exa API", "Groq", "Next.js", "Supabase", "Redis", "TailwindCSS", "TypeScript"], // From README Tech Stack
      image: "/exachat.png", // Keep existing image
      slug: "exachat" // Keep existing slug
    },
    // 2. Displayr
    {
      title: "Displayr - Trending Movies Finder", // Based on description
      description: "A visually engaging and responsive app to discover daily trending movies, similar to IMDb popular lists, featuring a dynamic UI and background that adapts to movie colors. Uses the TMDB API.", // Replaced 'aesthetic' with 'visually engaging'
      tags: ["TMDB API", "Next.js", "React", "TailwindCSS", "Dynamic UI"], // Based on description & assumptions
      image: "/displayr.png", // Keep existing image
      slug: "displayr" // Keep existing slug
    },
    // 3. Slack
    {
      title: "Slack - Server-Rendered Blog with Enhanced Content Authoring",
      description: "A performant and flexible blog platform built with Next.js and MDX for seamless integration of code and content.",
      tags: ["Next.js", "Content Creation", "MDX"],
      image: "/slack gray.png",  // Replace with your actual image path
      slug: "slack"
    },
    // 4. Toaster
    {
      title: "ToastER - An AI-Powered Text to Slang Converter",
      description: "Created a web application using Next.js and React to convert text into Gen Z slang. Integrated the OpenAI API to generate creative and humorous translations, enhancing user interaction and engagement.",
      tags: ["OpenAI API", "React", "NextJS"],
      image: "/translatr_purple.png",  // Replace with your actual image path
      slug: "toaster"
    }
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