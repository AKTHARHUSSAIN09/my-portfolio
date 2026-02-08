import React, { useState } from 'react';

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const skills = [
    { category: 'Languages', items: ['C++', 'Python', 'Java', 'JavaScript'] },
    { category: 'Frontend', items: ['React', 'Tailwind CSS', 'HTML5', 'CSS3'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Databases', 'REST APIs'] },
    { category: 'Specializations', items: ['DSA', 'AIML', 'Web Dev', 'Problem Solving'] }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950 py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/15 to-pink-500/10 rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000"></div>

      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[18rem] sm:max-w-xs">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-50"></div>
              <img
                src="/profile.jpg"
                alt="AKTHAR HUSSAIN S"
                className="relative w-full h-auto aspect-[3/4] object-cover rounded-2xl border-2 border-cyan-400/50 shadow-2xl"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
                style={{ display: imageLoaded ? 'block' : 'none' }}
              />
              {!imageLoaded && (
                <div className="relative w-full h-auto aspect-[3/4] rounded-2xl border-2 border-cyan-400/50 shadow-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <p className="text-gray-400 text-center px-4 text-sm">
                    📸 Profile Picture<br />
                    <span className="text-xs text-gray-500">Place profile.jpg in public folder</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a Computer Science Undergraduate at <span className="text-cyan-400 font-semibold">RMK Engineering College</span> with a passion for building scalable web applications and solving complex problems through elegant code.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently mastering <span className="text-cyan-400 font-semibold">C++, Python, and Java</span> while developing strong foundations in DSA and AIML. I believe in continuous learning and creating projects that make a real impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, idx) => (
            <div key={idx} className="group p-8 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent border border-cyan-400/30 rounded-2xl backdrop-blur-md hover:border-cyan-300/80 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 hover:bg-gradient-to-br hover:from-cyan-500/25 hover:via-blue-500/15 hover:to-transparent">
              <h4 className="text-cyan-300 font-bold mb-4 text-center text-lg group-hover:text-cyan-200 transition-colors">{skill.category}</h4>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-center group-hover:text-gray-100 transition-colors">
                    <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-10 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-400/30 rounded-2xl text-center hover:border-cyan-300/80 hover:shadow-2xl hover:shadow-cyan-500/20 hover:transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <div className="text-5xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">3+</div>
            <p className="text-gray-200 font-bold text-lg group-hover:text-cyan-300 transition-colors">Languages</p>
          </div>
          <div className="group p-10 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-400/30 rounded-2xl text-center hover:border-cyan-300/80 hover:shadow-2xl hover:shadow-cyan-500/20 hover:transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <div className="text-5xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">15+</div>
            <p className="text-gray-200 font-bold text-lg group-hover:text-cyan-300 transition-colors">Projects Completed</p>
          </div>
          <div className="group p-10 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 border border-cyan-400/30 rounded-2xl text-center hover:border-cyan-300/80 hover:shadow-2xl hover:shadow-cyan-500/20 hover:transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <div className="text-5xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">RMK</div>
            <p className="text-gray-200 font-bold text-lg group-hover:text-cyan-300 transition-colors">Engineering College</p>
          </div>
        </div>
      </div>
    </section>
  );
}
