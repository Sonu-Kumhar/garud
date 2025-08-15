'use client'

import { useState, useEffect } from 'react'
import axios from '../utils/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [particles, setParticles] = useState([])
  const [showToast, setShowToast] = useState(false) // toast control

  // Generate floating particles for background effect
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          animationDuration: Math.random() * 20 + 10
        })
      }
      setParticles(newParticles)
    }
    generateParticles()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/contact', form)
      setStatus('Message sent successfully!')
      setForm({ name: '', email: '', message: '' })
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000) // auto hide after 3s
    } catch (err) {
      setStatus('Failed to send message.')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-28 px-6 min-h-screen overflow-hidden">
      {/* ✨ Toast */}
      {showToast && status && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg border animate-slide-in
            ${status.includes('successfully')
              ? 'bg-green-500/95 border-green-300 text-white'
              : 'bg-red-500/95 border-red-300 text-white'
            }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {status.includes('successfully') ? (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
          <span className="text-sm font-medium">{status}</span>
        </div>
      )}

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `float ${particle.animationDuration}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto max-w-2xl mb-2">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Let's craft something extraordinary together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="space-y-6 bg-gray-900/60 backdrop-blur-xl border border-purple-500/10 p-8 md:p-10 rounded-3xl shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/3 to-blue-600/3 rounded-3xl"></div>
          
          <form onSubmit={handleSubmit} className="relative space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  className="w-full p-4 rounded-xl bg-gray-800/70 text-white border border-gray-700/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-300 placeholder-gray-400"
                  value={form.name} 
                  onChange={handleChange} 
                  required
                />
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 rounded-xl bg-gray-800/70 text-white border border-gray-700/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none transition-all duration-300 placeholder-gray-400"
                  value={form.email} 
                  onChange={handleChange} 
                  required
                />
              </div>
            </div>
            
            <div className="relative">
              <textarea 
                name="message" 
                placeholder="Tell us about your project..." 
                className="w-full p-4 rounded-xl bg-gray-800/70 text-white border border-gray-700/50 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none h-32 resize-none transition-all duration-300 placeholder-gray-400"
                value={form.message} 
                onChange={handleChange} 
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-purple-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </button>
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800/20 border border-gray-700/30 rounded-2xl p-6 backdrop-blur-sm hover:bg-gray-800/30 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 text-sm">hello@garud.ai</p>
          </div>
          
          <div className="bg-gray-800/20 border border-gray-700/30 rounded-2xl p-6 backdrop-blur-sm hover:bg-gray-800/30 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-400 text-sm">Pune, Maharashtra</p>
          </div>
          
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
            <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-white mb-2">Response Time</h3>
            <p className="text-gray-400 text-sm">Within 24 hours</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.25s ease-out;
        }
      `}</style>
    </section>
  )
}
