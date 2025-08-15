"use client"
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'NotePilot',
    description: 'A revolutionary smart note-taking application engineered with Next.js and Express.js, featuring AI-powered organization and real-time collaboration for effective productivity and task management and prioritization.',
    link: 'https://github.com/Sonu-Kumhar/notepilot',
    image: '/note.jpeg',
    tech: ['Next.js', 'Express.js', 'AI/ML', 'Real-time'],
    category: 'Web Application',
    status: 'Production',
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    id: 2,
    title: 'Wellness App',
    description: 'An intelligent health & wellness tracking platform built with cutting-edge web technologies, featuring personalized insights and comprehensive health monitoring.',
    link: 'https://github.com/Sonu-Kumhar/wellness-app',
    image: '/yoga.jpeg',
    tech: ['React', 'Node.js', 'Health APIs', 'Analytics'],
    category: 'Health Tech',
    status: 'Beta',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    id: 3,
    title: 'Desktop Assistant',
    description: 'A sophisticated AI-powered desktop assistant developed with Python, featuring voice recognition, task automation, and intelligent system optimization.',
    link: 'https://github.com/Sonu-Kumhar/Desktop-Assistant',
    image: '/desktop.jpeg',
    tech: ['Python', 'AI/ML', 'Voice Recognition', 'Automation'],
    category: 'AI Assistant',
    status: 'Production',
    gradient: 'from-indigo-500 to-cyan-600'
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-indigo-950 relative overflow-hidden">
      {/* Ultra-premium animated background */}
      <div className="absolute inset-0">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-30"
             style={{
               background: `
                 radial-gradient(ellipse 70% 50% at 20% 30%, rgba(139, 92, 246, 0.3), transparent),
                 radial-gradient(ellipse 80% 60% at 80% 40%, rgba(99, 102, 241, 0.2), transparent),
                 radial-gradient(ellipse 60% 80% at 40% 80%, rgba(147, 51, 234, 0.25), transparent)
               `
             }}>
        </div>
        
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            animation: 'grid-drift 30s linear infinite'
          }}></div>
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-violet-600/20 via-purple-600/30 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-indigo-600/15 via-blue-600/25 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-2/3 w-72 h-72 bg-gradient-to-r from-purple-600/20 via-pink-600/25 to-violet-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `hsl(${240 + Math.random() * 60}, 70%, 60%)`,
              animation: `drift ${5 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>

      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          
          {/* Premium Header Section */}
          <div className="text-center mb-24">
            {/* Status badge */}
            <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-violet-900/30 via-purple-900/40 to-indigo-900/30 backdrop-blur-xl border border-violet-500/20 rounded-full shadow-2xl">
              <div className="relative mr-3">
                <span className="absolute w-3 h-3 bg-emerald-400 rounded-full animate-ping"></span>
                <span className="relative w-3 h-3 bg-emerald-500 rounded-full block shadow-lg shadow-emerald-500/50"></span>
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-violet-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                Featured Innovations
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-violet-100 to-indigo-100 bg-clip-text text-transparent drop-shadow-2xl mr-10">
                Our
              </span>
              <div className="relative inline-block mt-4">
                <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent relative z-10">
                  Projects
                </span>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/60 via-purple-600/70 to-indigo-600/60 blur-3xl scale-150 opacity-80 -z-10 animate-pulse"></div>
              </div>
            </h1>

            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-slate-300 leading-relaxed mb-8">
              Explore our portfolio of cutting-edge solutions that push the boundaries of technology and innovation.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Multi-layered glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/20 via-purple-600/25 to-indigo-600/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/25 via-purple-500/30 to-indigo-500/25 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block bg-gradient-to-br from-slate-900/80 via-slate-800/90 to-slate-900/80 backdrop-blur-xl border border-slate-700/30 rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-500 overflow-hidden group-hover:shadow-violet-500/25 group-hover:border-violet-500/30"
                >
                  {/* Status and Category Badge */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md border ${
                      project.status === 'Production' 
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
                        : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                    }`}>
                      {project.status}
                    </span>
                    <span className="px-3 py-1 text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Number */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Image section with enhanced effects */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div> */}
                  </div>

                  {/* Content section */}
                  <div className="p-8">
                    <h2 className={`text-3xl font-black mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {project.title}
                    </h2>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed text-lg group-hover:text-slate-200 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm font-medium bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600/30 backdrop-blur-sm group-hover:bg-violet-500/20 group-hover:text-violet-300 group-hover:border-violet-500/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Enhanced CTA */}
                    <div className="flex items-center justify-between">
                      <span className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent flex items-center group-hover:scale-105 transition-transform duration-300`}>
                        View Project
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>

                      {/* Interactive hover indicator */}
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 group-hover:animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {/* <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-border opacity-30"></div> */}
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-24 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-3 bg-gradient-to-r from-violet-600/20 via-purple-600/25 to-indigo-600/20 rounded-3xl blur-xl opacity-60"></div>
              
              <div className="relative bg-gradient-to-br from-slate-900/70 via-slate-800/80 to-slate-900/70 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-12 shadow-2xl">
                <h3 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-white via-violet-100 to-indigo-100 bg-clip-text text-transparent">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Let's collaborate and create revolutionary solutions that push the boundaries of what's possible.
                </p>
                
                <div className="relative inline-block group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
                  
                  <button className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold px-10 py-4 rounded-xl backdrop-blur-md transition-all duration-300 transform group-hover:scale-105 shadow-2xl">
                    <span className="flex items-center text-lg">
                      <span className="bg-gradient-to-r from-white to-violet-100 bg-clip-text text-transparent font-black">
                        Start a Project
                      </span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="flex justify-center mt-16">
            <div className="w-48 h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 rounded-full opacity-70 shadow-lg shadow-violet-500/50"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes grid-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
        
        @keyframes drift {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(-5px) rotate(180deg); }
          75% { transform: translateY(-15px) translateX(-10px) rotate(270deg); }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #8b5cf6, #a855f7, #6366f1);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #7c3aed, #9333ea, #4f46e5);
        }
      `}</style>
    </div>
  )
}