import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'My Portfolio',
      description:
        'Personal portfolio website built with React and Tailwind CSS, showcasing projects, skills, and contact information with a professional design.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      repo: 'https://github.com/AKTHARHUSSAIN09/my-portfolio',
      site: '#',
      category: 'Web App',
      gradient: 'from-indigo-500 to-sky-500',
    },
    {
      id: 2,
      title: 'Policy Ledger',
      description:
        'A secure ledger for managing insurance policies, claims, and transaction history with a clear audit trail and role-based access control.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      repo: 'https://github.com/AKTHARHUSSAIN09',
      site: '#',
      category: 'Full Stack',
      gradient: 'from-violet-500 to-indigo-500',
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #111827 0%, #1a2540 50%, #0f1e38 100%)' }}
    >
      {/* Glow blobs */}
      <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 10%, #6366f1 0%, transparent 60%)', filter: 'blur(60px)' }} />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 90%, #0ea5e9 0%, transparent 60%)', filter: 'blur(60px)' }} />

      <div className="container relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-label section-label-dark">My Work</div>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: '#e2e8f8' }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#8b9ec7' }}>
              A selection of projects I've built, ranging from full-stack web applications to personal tools.
            </p>
            <div className="section-divider-dark" />
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        {projects.length === 0 ? (
          <ScrollReveal>
            <div className="text-center py-24 card-dark max-w-md mx-auto p-10">
              <div className="text-4xl mb-4">🚀</div>
              <p className="text-lg mb-6 font-medium" style={{ color: '#e2e8f8' }}>Projects coming soon.</p>
              <a href="#contact" className="btn-primary btn-magnetic">Let's Collaborate</a>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 150} className="h-full">
                <article className="project-card card-dark flex flex-col h-full overflow-hidden group">
                  {/* Gradient top strip */}
                  <div className={`project-strip h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Category + icon buttons */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="section-label-dark-sm project-category-badge">
                        {project.category}
                      </span>
                      <div className="flex gap-2">
                        {project.repo && (
                          <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="icon-btn icon-btn-dark">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.325.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.757-1.332-1.757-1.088-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.762-1.605-2.665-.304-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23A11.5 11.5 0 0112 6.844c1.02.004 2.045.138 3.003.405 2.29-1.553 3.296-1.23 3.296-1.23.654 1.653.243 2.874.119 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.814 1.103.814 2.222 0 1.604-.015 2.897-.015 3.293 0 .322.216.701.825.582C20.565 22.246 24 17.78 24 12.5 24 5.87 18.627.5 12 .5z" />
                            </svg>
                          </a>
                        )}
                        {project.site && project.site !== '#' && (
                          <a href={project.site} target="_blank" rel="noopener noreferrer" aria-label="Live site" className="icon-btn icon-btn-dark">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                              <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <path d="M15 3h6v6" /><path d="M10 14L21 3" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="project-title text-xl font-bold mb-3" style={{ color: '#e2e8f8' }}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-6 line-clamp-3 flex-1" style={{ color: '#8b9ec7' }}>
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag-dark">{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}

            {/* CTA card */}
            <ScrollReveal delay={projects.length * 150} className="h-full">
              <div
                className="cta-card card-dark flex flex-col items-center justify-center p-8 text-center h-full min-h-[260px]"
                style={{ borderStyle: 'dashed' }}
              >
                <div className="cta-icon w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg,#2e3f65,#1e3a6e)' }}>
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <p className="font-semibold mb-1" style={{ color: '#e2e8f8' }}>More projects on the way</p>
                <p className="text-sm mb-4" style={{ color: '#8b9ec7' }}>Check my GitHub for the latest work</p>
                <a
                  href="https://github.com/AKTHARHUSSAIN09"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-outline-dark btn-shine"
                  style={{ padding: '.5rem 1.25rem', fontSize: '.875rem' }}
                >
                  View GitHub
                </a>
              </div>
            </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  );
}
