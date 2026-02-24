import React from 'react';
import useTypewriter from '../hooks/useTypewriter';

export default function Home() {
  const roles = ['Full Stack Developer', 'AI/ML Enthusiast', 'Problem Solver', 'CS Undergraduate'];
  const typedRole = useTypewriter(roles);

  const floatingBadges = [
    { icon: '⚛️', label: 'React',   style: { top: '20%', left: '6%' },  delay: '0s' },
    { icon: '🐍', label: 'Python',  style: { top: '32%', right: '5%' }, delay: '1.8s' },
    { icon: '☕', label: 'Java',    style: { bottom: '36%', left: '4%' }, delay: '3.2s' },
    { icon: '🎨', label: 'CSS',     style: { bottom: '24%', right: '7%' }, delay: '2.4s' },
    { icon: '🧠', label: 'AI/ML',   style: { top: '16%', right: '16%' }, delay: '4s' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(155deg, #eef0fc 0%, #f5f7ff 40%, #e8eeff 100%)' }}
    >
      {/* Dot grid pattern */}
      <div className="hero-dot-grid" aria-hidden="true" />

      {/* Soft accent blobs */}
      <div aria-hidden="true" className="absolute top-20 right-8 w-[500px] h-[500px] rounded-full pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(circle at 60% 40%, #c7d2fe 0%, transparent 65%)', filter: 'blur(64px)' }} />
      <div aria-hidden="true" className="absolute bottom-20 left-0 w-[380px] h-[380px] rounded-full pointer-events-none opacity-35"
        style={{ background: 'radial-gradient(circle at 40% 60%, #bae6fd 0%, transparent 65%)', filter: 'blur(56px)' }} />

      {/* Floating tech badges — desktop only */}
      {floatingBadges.map((badge, i) => (
        <div
          key={i}
          className="floating-badge hidden lg:flex float"
          style={{ ...badge.style, animationDelay: badge.delay }}
        >
          <span>{badge.icon}</span>
          <span>{badge.label}</span>
        </div>
      ))}

      {/* Dark navy accent strip */}
      <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent" />

      <div className="relative z-10 container py-20">
        <div className="flex flex-col items-center text-center w-full">

          {/* Badge */}
          <div className="hero-badge hero-badge-hover fade-up delay-0">
            <span className="hero-badge-dot" />
            Welcome to my Portfolio
          </div>

          {/* Heading */}
          <h1 className="hero-heading fade-up delay-1">
            <span style={{ color: '#3d4a6b' }} className="font-medium">Hi, I'm&nbsp;</span>
            <span className="gradient-text name-glow">Akthar Hussain S</span>
          </h1>

          {/* Role — Typewriter */}
          <p className="text-xl sm:text-2xl font-light mb-3 fade-up delay-2" style={{ color: '#4a5680', minHeight: '2em' }}>
            {typedRole}<span className="typewriter-cursor" />
          </p>

          {/* Sub-description */}
          <p className="text-base sm:text-lg mb-10 max-w-xl leading-relaxed fade-up delay-3" style={{ color: '#5a6a8a' }}>
            Computer Science Undergraduate at&nbsp;
            <span className="text-indigo-600 font-semibold">RMK Engineering College</span>,
            passionate about building scalable web applications and solving complex problems.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-up delay-4">
            <a href="#projects" className="btn-primary btn-magnetic">
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#about" className="btn-outline btn-shine">About Me</a>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-6 justify-center fade-up delay-5">
            {[
              { value: '5+', label: 'Projects Built' },
              { value: '4+', label: 'Languages' },
              { value: 'RMK', label: 'Engineering College' },
            ].map(({ value, label }) => (
              <div key={label} className="stat-card text-center">
                <div className="text-3xl font-black gradient-text">{value}</div>
                <div className="text-sm mt-1 font-medium" style={{ color: '#5a6a8a' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in delay-6">
        <a href="#about" aria-label="Scroll down" className="scroll-cue flex flex-col items-center gap-1" style={{ color: '#8b9eca' }}>
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
