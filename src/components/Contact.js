import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError(false);
    try {
      const response = await fetch('https://formspree.io/f/xwvqgjnw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else { throw new Error('Error'); }
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally { setLoading(false); }
  };

  const contactMethods = [
    {
      icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>),
      title: 'Email', value: 'akthar0109@gmail.com', link: 'mailto:akthar0109@gmail.com',
    },
    {
      icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>),
      title: 'LinkedIn', value: 'akthar-hussain-s', link: 'https://www.linkedin.com/in/akthar-hussain-s-23592632a',
    },
    {
      icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>),
      title: 'GitHub', value: 'AKTHARHUSSAIN09', link: 'https://github.com/AKTHARHUSSAIN09',
    },
  ];

  const inputClass =
    'w-full px-4 py-3 bg-white border border-[#dde2f4] rounded-xl text-[#0e1530] placeholder-[#8b9eca] focus:outline-none transition-all duration-200 text-sm';

  return (
    <section
      id="contact"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(165deg, #eef0fc 0%, #f5f7ff 50%, #eaedff 100%)' }}
    >
      {/* Accent blobs */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 90%, #111827 0%, transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden="true" className="absolute top-0 right-0 w-[350px] h-[350px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 10%, #dce3ff 0%, transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="section-label">Get In Touch</div>
            <h2 className="text-4xl md:text-5xl font-black" style={{ color: '#0e1530' }}>
              Let's <span className="gradient-text">Work Together</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#5a6a8a' }}>
              Have a project in mind or just want to say hello? I'm always open to new opportunities and collaborations.
            </p>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0e1530' }}>Let's Connect</h3>
                <p className="leading-relaxed text-sm" style={{ color: '#5a6a8a' }}>
                  I'm passionate about creating innovative solutions and collaborating with talented individuals.
                  Feel free to reach out for discussions about projects, opportunities, or anything on your mind!
                </p>
              </div>

              {/* Contact method cards */}
              <div className="space-y-3">
                {contactMethods.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-method-card flex items-center gap-4 p-4 group no-underline"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: 'linear-gradient(135deg,#4f46e5,#0ea5e9)' }}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm" style={{ color: '#0e1530' }}>{method.title}</p>
                      <p className="text-xs truncate" style={{ color: '#5a6a8a' }}>{method.value}</p>
                    </div>
                    <svg className="w-4 h-4 flex-shrink-0 transition-all" style={{ color: '#bbc3e6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Response time */}
              <div className="response-badge flex items-center gap-3 p-4 rounded-xl" style={{ background: '#f0fdf6', border: '1px solid #bbf7d0' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <p className="text-sm font-medium" style={{ color: '#065f46' }}>Typically responds within 24–48 hours</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right" delay={200}>
            <div className="contact-form-card p-8">
              <h3 className="text-lg font-bold mb-6" style={{ color: '#0e1530' }}>Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#4a5680' }}>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#4a5680' }}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#4a5680' }}>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                    className={`${inputClass} resize-none`} placeholder="Tell me about your project or idea..." />
                </div>
                <button type="submit" disabled={loading} className="btn-primary btn-magnetic w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none">
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>

                {submitted && (
                  <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: '#f0fdf6', border: '1px solid #bbf7d0' }}>
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-medium text-emerald-700">Message sent! I'll get back to you soon.</p>
                  </div>
                )}
                {error && (
                  <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: '#fff5f5', border: '1px solid #fecaca' }}>
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-medium text-red-600">Failed to send. Please try again or email directly.</p>
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
