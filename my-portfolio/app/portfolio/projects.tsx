import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "JobsQ",
    description: "A modern job board platform built with React, Next.js, and TypeScript.",
    image: "/img/jaypee1.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Rental Management System (RMS)",
    description: "A comprehensive rental management system built with React, Next.js, and Firebase.",
    image: "/img/jaypee1.png",
    technologies: ["React", "Material-UI", "Node.js", "Firebase"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with location-based forecasts.",
    image: "/img/jaypee1.png",
    technologies: ["React", "OpenWeather API", "Styled Components"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing my work and skills.",
    image: "/img/jaypee1.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden border border-slate-700 bg-slate-800/40 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-purple-800/40"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="contain"
                  className="object-contain transition-transform duration-300 group-hover:scale-110 group-hover:brightness-90"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-purple-300 border border-purple-500/30 bg-purple-500/10 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
