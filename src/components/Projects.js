import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'My Portfolio',
      description: 'Personal portfolio website built with React and Tailwind CSS showcasing projects, skills, and contact methods.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      link: '#',
      repo: 'https://github.com/yourusername/my-portfolio',
      site: 'https://your-portfolio-url.com',
      icon: '💼'
    },
    {
      id: 2,
      title: 'Policy Ledger',
      description: 'A secure ledger for managing insurance policies, claims, and transaction history with a clear audit trail and role-based access.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      link: '#',
      repo: 'https://github.com/yourusername/policy-ledger',
      site: 'https://policy-ledger-url.com',
      icon: '🧾'
    }
  ];


  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950 py-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/20 to-pink-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000"></div>

      <div className="container">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-full backdrop-blur-sm">
            <span className="text-cyan-300 text-sm font-bold tracking-widest">MY WORK</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-28">
            <p className="text-gray-300 text-xl mb-6">No projects to display yet.</p>
            <a href="#contact" className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300">
              Get in touch to collaborate
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-transparent border border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-300/80 transition-all duration-300 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 backdrop-blur-md"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 origin-left">{project.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors tracking-tight">{project.title}</h3>
                  <p className="text-gray-300 mb-5 text-base leading-relaxed line-clamp-3 group-hover:text-gray-100 transition-colors">{project.description}</p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 px-4 py-2 rounded-full text-xs font-bold border border-cyan-400/40 hover:border-cyan-300/80 hover:from-cyan-500/50 hover:to-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="GitHub">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.325.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.757-1.332-1.757-1.088-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.762-1.605-2.665-.304-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23A11.5 11.5 0 0112 6.844c1.02.004 2.045.138 3.003.405 2.29-1.553 3.296-1.23 3.296-1.23.654 1.653.243 2.874.119 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.814 1.103.814 2.222 0 1.604-.015 2.897-.015 3.293 0 .322.216.701.825.582C20.565 22.246 24 17.78 24 12.5 24 5.87 18.627.5 12 .5z" />
                        </svg>
                      </a>
                    )}

                    {project.site && (
                      <a href={project.site} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Website">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <path d="M15 3h6v6" />
                          <path d="M10 14L21 3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
