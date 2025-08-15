"use client"
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-indigo-950 relative overflow-hidden">
      {/* Ultra-premium animated background */}
      <div className="absolute inset-0">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-30"
             style={{
               background: `
                 radial-gradient(ellipse 80% 60% at 30% 20%, rgba(120, 119, 198, 0.4), transparent),
                 radial-gradient(ellipse 70% 50% at 70% 60%, rgba(139, 92, 246, 0.3), transparent),
                 radial-gradient(ellipse 60% 80% at 50% 90%, rgba(99, 102, 241, 0.2), transparent)
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
            backgroundSize: '80px 80px',
            animation: 'grid-flow 25s linear infinite'
          }}></div>
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-violet-600/20 via-purple-600/30 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-600/15 via-blue-600/25 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-600/20 via-pink-600/25 to-violet-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: `hsl(${240 + Math.random() * 60}, 70%, 60%)`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          
          {/* Premium Header Section */}
          <div className="text-center mb-20">
            {/* Status badge */}
            <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-violet-900/30 via-purple-900/40 to-indigo-900/30 backdrop-blur-xl border border-violet-500/20 rounded-full shadow-2xl">
              <div className="relative mr-3">
                <span className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-ping"></span>
                <span className="relative w-3 h-3 bg-cyan-500 rounded-full block shadow-lg shadow-cyan-500/50"></span>
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-violet-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                Discover Our Story
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-violet-100 to-indigo-100 bg-clip-text text-transparent drop-shadow-2xl mr-10">
                About
              </span>
              <div className="relative inline-block mt-4">
                <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent relative z-10">
                  Garud
                </span>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/60 via-purple-600/70 to-indigo-600/60 blur-3xl scale-150 opacity-80 -z-10 animate-pulse"></div>
              </div>
            </h1>
          </div>

          {/* Main Content Card */}
          <div className="relative mb-20">
            {/* Multi-layered glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-violet-600/15 via-purple-600/20 to-indigo-600/15 rounded-3xl blur-2xl opacity-60"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 via-purple-500/25 to-indigo-500/20 rounded-3xl blur-lg opacity-80"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900/80 via-slate-800/90 to-slate-900/80 backdrop-blur-2xl border border-slate-700/30 rounded-3xl p-12 md:p-16 shadow-2xl">
              <p className="text-slate-200 text-2xl md:text-3xl leading-relaxed text-center mb-8 font-light">
                Garud is a rapidly evolving tech company that thrives on building revolutionary AI-powered innovations and optimizing complex real-world ecosystems.
              </p>
              <p className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-2xl md:text-3xl font-bold text-center mb-8">
                Our mission is to make technology more intelligent, accessible, and transformative.
              </p>
              <p className="text-slate-300 text-xl md:text-2xl leading-relaxed text-center font-light">
                We champion open-source principles, creative problem-solving methodologies, and cultivate a culture of relentless curiosity and innovation.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: "🚀",
                title: "Innovation First",
                description: "Pioneering breakthrough solutions that reshape industries and redefine possibilities",
                gradient: "from-violet-500 to-purple-600",
                bgGradient: "from-violet-900/20 to-purple-900/30"
              },
              {
                icon: "🌐",
                title: "Open Source",
                description: "Believing in collaborative development and transparent technology for global impact",
                gradient: "from-purple-500 to-indigo-600",
                bgGradient: "from-purple-900/20 to-indigo-900/30"
              },
              {
                icon: "🧠",
                title: "Curiosity Driven",
                description: "Fostering a culture of continuous learning and experimental thinking",
                gradient: "from-indigo-500 to-cyan-600",
                bgGradient: "from-indigo-900/20 to-cyan-900/30"
              }
            ].map((value, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-500">
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${value.bgGradient} backdrop-blur-xl border border-slate-700/30 shadow-2xl group-hover:shadow-violet-500/25 group-hover:border-violet-500/30 transition-all duration-500 h-full`}>
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">
                    {value.icon}
                  </div>
                  <h3 className={`text-2xl font-black mb-4 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent text-center`}>
                    {value.title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed text-center group-hover:text-slate-200 transition-colors">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="relative mb-20">
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/10 via-purple-600/15 to-indigo-600/10 rounded-3xl blur-xl opacity-60"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900/60 via-slate-800/70 to-slate-900/60 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-white via-violet-100 to-indigo-100 bg-clip-text text-transparent">
                Our Impact
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "500+", label: "Projects Delivered", icon: "📊" },
                  { number: "99.9%", label: "System Uptime", icon: "⚡" },
                  { number: "50+", label: "AI Models Deployed", icon: "🤖" },
                  { number: "24/7", label: "Innovation Cycle", icon: "🔄" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group hover:scale-110 transition-all duration-500">
                    <div className="text-4xl mb-3 group-hover:animate-bounce">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-400 text-sm md:text-base font-semibold group-hover:text-slate-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/15 via-violet-600/20 to-purple-600/15 rounded-3xl blur-xl opacity-60"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900/70 via-slate-800/80 to-slate-900/70 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-12 md:p-16 shadow-2xl text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-8 bg-gradient-to-r from-white via-violet-100 to-indigo-100 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed mb-6 font-light">
                To become the global leader in AI-driven transformation,
              </p>
              <p className="text-2xl md:text-3xl bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                empowering organizations worldwide to achieve unprecedented efficiency and innovation.
              </p>
              
              {/* Call to action */}
              <div className="mt-12">
                <div className="relative inline-block group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
                  
                  <button className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold px-10 py-4 rounded-xl backdrop-blur-md transition-all duration-300 transform group-hover:scale-105 shadow-2xl">
                    <span className="flex items-center text-lg">
                      <span className="bg-gradient-to-r from-white to-violet-100 bg-clip-text text-transparent font-black">
                        Join Our Journey
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
        @keyframes grid-flow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(90deg); }
          50% { transform: translateY(-5px) rotate(180deg); }
          75% { transform: translateY(-10px) rotate(270deg); }
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