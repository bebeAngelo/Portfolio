import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate about creating exceptional user experiences with cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Im a passionate React Front-end Developer with expertise in building modern, 
              scalable web applications. I love turning complex problems into simple, 
              beautiful designs that provide great user experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in React, Next.js, and Tailwind CSS, I create 
              applications that are not only visually appealing but also performant 
              and maintainable.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-semibold text-purple-400 mb-2">Experience</h4>
              <p className="text-gray-300">Built 3 web applications and 5 responsive websites using React, Next.js, and Angular with 3 years of front-end experience.</p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-semibold text-purple-400 mb-2">Projects</h4>
              <p className="text-gray-300">Developed and launched 5 modern websites for various clients and internal projects.
                Focused on mobile-first responsive design, accessibility, and performance optimization.
                All websites built using React, Next.js, and Tailwind CSS.
              </p>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-semibold text-purple-400 mb-2">Focus</h4>
              <p className="text-gray-300">User experience & performance optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

