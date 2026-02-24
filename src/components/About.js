import React, { useState, useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const [imageError, setImageError] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: 'Languages', icon: '⌨️',
      items: [
        { name: 'C++', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'JavaScript', level: 90 },
      ],
    },
    {
      category: 'Frontend', icon: '🎨',
      items: [
        { name: 'React', level: 88 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
      ],
    },
    {
      category: 'Backend', icon: '⚙️',
      items: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 72 },
        { name: 'Databases', level: 70 },
        { name: 'REST APIs', level: 80 },
      ],
    },
    {
      category: 'Specialisations', icon: '🧠',
      items: [
        { name: 'DSA', level: 82 },
        { name: 'AI/ML', level: 70 },
        { name: 'Web Dev', level: 88 },
        { name: 'Problem Solving', level: 85 },
      ],
    },
  ];

  const stats = [
    { value: '5+', label: 'Projects Completed' },
    { value: '4+', label: 'Languages Known' },
    { value: '1+', label: 'Years Experience' },
    { value: 'RMK', label: 'Engineering College' },
  ];

  const journey = [
    {
      period: '2023 — Present',
      title: 'B.E. Computer Science & Engineering',
      place: 'RMK Engineering College, Chennai',
      description:
        'Specializing in Data Structures, Algorithms, AI/ML, and Full Stack Web Development. Building real-world projects and solving complex computational problems.',
    },
    {
      period: '2021 — 2023',
      title: 'Higher Secondary Education',
      place: 'HSC — Mathematics & Computer Science',
      description:
        'Developed strong analytical and problem-solving skills with a focus on Mathematics, Physics, and Computer Science.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #f5f7ff 0%, #edf0fb 60%, #f0f4ff 100%)' }}
    >
      {/* Dark navy diagonal accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-80 h-80 pointer-events-none opacity-[0.07]"
        style={{ background: 'radial-gradient(circle at 10% 10%, #111827 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 20%, #dde6ff 0%, transparent 60%)', filter: 'blur(40px)' }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-label">About Me</div>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: '#0e1530' }}>
              Crafting Digital <span className="gradient-text">Experiences</span>
            </h2>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        {/* Bio + Photo */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-20">
          {/* Profile Photo */}
          <ScrollReveal direction="left">
            <div className="flex justify-center">
              <div className="profile-photo-wrap">
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt="Akthar Hussain S"
                    className="profile-img"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="profile-placeholder">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg"
                      style={{ background: 'linear-gradient(135deg,#4f46e5,#0ea5e9)' }}
                    >
                      AH
                    </div>
                    <p className="text-sm text-center px-4 mt-3" style={{ color: '#8b9eca' }}>
                      Place <code className="text-indigo-500 text-xs">profile.jpg</code> in{' '}
                      <code className="text-indigo-500 text-xs">/public</code>
                    </p>
                  </div>
                )}
                <div className="open-to-work-badge">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block flex-shrink-0" />
                  <span className="text-sm font-semibold" style={{ color: '#0e1530' }}>Open to Work</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio text */}
          <ScrollReveal direction="right" delay={200}>
            <div>
              <h3 className="text-2xl font-bold mb-5" style={{ color: '#0e1530' }}>
                Passionate about turning ideas into <span className="gradient-text">elegant code</span>
              </h3>
              <p className="leading-relaxed mb-4" style={{ color: '#4a5680' }}>
                I'm a Computer Science undergraduate at{' '}
                <span className="text-indigo-600 font-semibold">RMK Engineering College</span> with a passion for
                building scalable web applications and solving complex problems through clean, maintainable code.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: '#4a5680' }}>
                Currently mastering{' '}
                <span className="text-indigo-600 font-semibold">C++, Python, and Java</span> while building a
                strong foundation in Data Structures &amp; Algorithms and AI/ML.
              </p>

              {/* Stats mini-grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map(({ value, label }) => (
                  <div key={label} className="stat-card text-center">
                    <div className="text-2xl font-black gradient-text">{value}</div>
                    <div className="text-xs mt-1 font-medium leading-tight" style={{ color: '#5a6a8a' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Skills */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold" style={{ color: '#0e1530' }}>
              Technical <span className="gradient-text">Skills</span>
            </h3>
          </div>
        </ScrollReveal>

        <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className="h-full">
              <div className="skill-card h-full">
                <div className="skill-card-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <h4 className="font-bold text-sm" style={{ color: '#0e1530' }}>{skill.category}</h4>
                </div>
                <ul className="space-y-4">
                  {skill.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium" style={{ color: '#4a5680' }}>{item.name}</span>
                        <span className="text-xs font-semibold text-indigo-500">{item.level}%</span>
                      </div>
                      <div className="progress-track">
                        <div
                          className="progress-bar"
                          style={{
                            width: skillsVisible ? `${item.level}%` : '0%',
                            transition: 'width 1s cubic-bezier(.4,0,.2,1) 0.3s',
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Journey / Education */}
        <ScrollReveal>
          <div className="text-center mb-10 mt-20">
            <h3 className="text-2xl font-bold" style={{ color: '#0e1530' }}>
              My <span className="gradient-text">Journey</span>
            </h3>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <div className="max-w-2xl mx-auto">
            <div className="timeline">
              {journey.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--clr-accent)' }}>
                    {item.period}
                  </span>
                  <h4 className="text-lg font-bold mt-1" style={{ color: '#0e1530' }}>{item.title}</h4>
                  <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--clr-accent-mid)' }}>{item.place}</p>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: '#5a6a8a' }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
