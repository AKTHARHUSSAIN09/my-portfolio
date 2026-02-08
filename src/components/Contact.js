import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://formspree.io/f/xwvqgjnw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    { icon: '📧', title: 'Email', value: 'akthar0109@gmail.com', link: 'mailto:akthar0109@gmail.com' },
    { icon: '💼', title: 'LinkedIn', value: 'Professional Network', link: 'https://www.linkedin.com/in/akthar-hussain-s-23592632a' },
    { icon: '🐙', title: 'GitHub', value: 'Check my projects', link: 'https://github.com/yourusername' }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950 py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000"></div>

      <div className="container">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 rounded-full backdrop-blur-sm">
            <span className="text-cyan-300 text-sm font-bold tracking-widest">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
            Contact Me
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-6 hover:text-gray-100 transition-colors">
            Have a project in mind or just want to say hello? I'm always open to new opportunities and collaborations.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm passionate about creating innovative solutions and collaborating with talented individuals. Feel free to reach out for discussions about projects, opportunities, or anything else on your mind!
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl hover:border-cyan-400/60 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105 hover:-translate-y-1"
                  style={{ animation: `fadeUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.1}s both` }}
                >
                  <div className="text-4xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">{method.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold group-hover:text-cyan-400 transition-colors">{method.title}</h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{method.value}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-4 font-bold">RESPONSE TIME</p>
              <p className="text-gray-300">I typically respond within 24-48 hours. Looking forward to connecting with you!</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-3">FULL NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/60 text-white rounded-lg border border-cyan-500/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 placeholder-gray-500 hover:border-cyan-500/50"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-3">EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/60 text-white rounded-lg border border-cyan-500/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 placeholder-gray-500 hover:border-cyan-500/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-8">
                <label className="block text-white text-sm font-bold mb-3">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-black/60 text-white rounded-lg border border-cyan-500/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 placeholder-gray-500 resize-none hover:border-cyan-500/50"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 hover:shadow-2xl hover:shadow-cyan-500/50 border border-cyan-400/50"
              >
                <span className="inline-flex items-center justify-center">
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm text-center animate-pulse">
                  <span className="inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              )}

              {error && (
                <div className="mt-4 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm text-center animate-pulse">
                  <span className="inline-flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Failed to send. Please try again or email directly.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
