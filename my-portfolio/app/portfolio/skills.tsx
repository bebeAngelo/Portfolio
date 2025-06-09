import React from 'react';

type Skill = {
  name: string;
  level: number;
  color: string;
};

const skills: Skill[] = [
  { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'Next.js', level: 90, color: 'from-gray-700 to-gray-900' },
  { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-800' },
  { name: 'Tailwind CSS', level: 92, color: 'from-teal-500 to-cyan-500' },
  { name: 'JavaScript', level: 93, color: 'from-yellow-500 to-orange-500' },
  { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-500' },
  { name: 'Git', level: 88, color: 'from-red-500 to-pink-500' },
  { name: 'Responsive Design', level: 95, color: 'from-purple-500 to-pink-500' },
];

const technologies: string[] = [
  'React', 'Next.js', 'TypeScript', 'JavaScript ES6+',
  'TailwindCSS', 'Styled Components', 'Material-UI',
  'Redux', 'Context API', 'React Query', 'Framer Motion',
  'Node.js', 'Express', 'MongoDB', 'Git', 'GitHub', 'Vercel'
];

const SkillBar: React.FC<Skill> = ({ name, level, color }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-300 font-medium">{name}</span>
      <span className="text-purple-400 font-semibold">{level}%</span>
    </div>
    <div className="w-full bg-slate-700 rounded-full h-3">
      <div
        className={`h-3 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Proficiency Levels</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Technologies & Tools</h3>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="cursor-pointer px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-gray-300 text-sm hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
