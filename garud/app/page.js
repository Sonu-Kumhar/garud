"use client"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-indigo-950 relative overflow-hidden">
      {/* Ultra-premium animated background */}
      <div className="absolute inset-0">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-30"
             style={{
               background: `
                 radial-gradient(ellipse 80% 50% at 20% 40%, rgba(120, 119, 198, 0.3), transparent),
                 radial-gradient(ellipse 60% 50% at 80% 50%, rgba(255, 118, 117, 0.2), transparent),
                 radial-gradient(ellipse 60% 80% at 40% 80%, rgba(139, 92, 246, 0.3), transparent)
               `
             }}>
        </div>
        
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Floating orbs with improved gradients */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-violet-600/20 via-purple-600/30 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-pink-600/15 via-rose-600/25 to-orange-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-2/3 w-72 h-72 bg-gradient-to-r from-cyan-600/20 via-blue-600/25 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-600/15 via-teal-600/20 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4.5s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900/50 via-gray-900/70 to-violet-950/50 text-white py-32 text-center backdrop-blur-md border-b border-white/5">
        {/* Enhanced particles */}
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
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto relative z-10 px-6">
          {/* Premium status badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-violet-900/30 via-purple-900/40 to-indigo-900/30 backdrop-blur-xl border border-violet-500/20 rounded-full shadow-2xl">
            <div className="relative mr-3">
              <span className="absolute w-3 h-3 bg-emerald-400 rounded-full animate-ping"></span>
              <span className="relative w-3 h-3 bg-emerald-500 rounded-full block shadow-lg shadow-emerald-500/50"></span>
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-violet-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              Next-Generation AI Innovation
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight tracking-tight">
            <div className="inline-block bg-gradient-to-r from-white via-violet-100 to-indigo-100 bg-clip-text text-transparent animate-pulse mb-4 mr-8">
              Welcome to
            </div>
            {/* <br /> */}
            <div className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent relative z-10 drop-shadow-2xl">
                Garud
              </span>
              {/* Multi-layered glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/60 via-purple-600/70 to-indigo-600/60 blur-3xl scale-75 opacity-80 -z-10 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400/40 via-purple-400/50 to-indigo-400/40 blur-xl scale-10 opacity-90 -z-10"></div>
            </div>
          </h1>

          <p className="text-xl md:text-3xl max-w-4xl mx-auto mb-16 leading-relaxed">
            <span className="text-slate-300 font-light">
              Crafting revolutionary AI-powered solutions that redefine the boundaries of possibility.
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text font-bold text-2xl md:text-4xl mt-4 block">
              Transform • Innovate • Dominate
            </span>
          </p>

          {/* Ultra-premium CTA Button */}
          <div className="relative inline-block group mb-20">
            {/* Multiple glow layers */}
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-90 transition duration-500 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300"></div>
            
            <a 
              href="/contact" 
              className="relative inline-block bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold px-12 py-5 rounded-xl backdrop-blur-md transition-all duration-300 transform group-hover:scale-105 shadow-2xl border border-white/10"
            >
              <span className="flex items-center text-lg">
                <span className="bg-gradient-to-r from-white to-violet-100 bg-clip-text text-transparent font-black">
                  Get in Touch
                </span>
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "500+", label: "Projects", gradient: "from-violet-400 to-purple-500" },
              { number: "99.9%", label: "Uptime", gradient: "from-purple-400 to-indigo-500" },
              { number: "10x", label: "Faster", gradient: "from-indigo-400 to-cyan-500" },
              { number: "24/7", label: "Support", gradient: "from-cyan-400 to-violet-500" }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-all duration-500">
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/50 backdrop-blur-xl border border-white/5 shadow-2xl group-hover:shadow-violet-500/25 group-hover:border-violet-500/20 transition-all duration-500">
                  <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3 drop-shadow-lg`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm md:text-base font-semibold group-hover:text-slate-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium animated border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-purple-500 via-indigo-500 to-violet-600 opacity-70">
          <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto my-16 px-6 relative">
        {/* Advanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-950/10 to-transparent blur-3xl"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-violet-600/5 via-purple-600/10 to-indigo-600/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          {/* Ultra-premium section header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-slate-800/40 via-slate-700/50 to-slate-800/40 backdrop-blur-xl border border-slate-600/20 rounded-full shadow-2xl">
              <div className="relative mr-3">
                <span className="absolute w-2 h-2 bg-violet-400 rounded-full animate-ping"></span>
                <span className="relative w-2 h-2 bg-violet-500 rounded-full block"></span>
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
                Our Core Purpose
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-center mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-violet-100 bg-clip-text text-transparent drop-shadow-2xl">
                Our Mission
              </span>
            </h2>
          </div>

          {/* Premium mission content card */}
          <div className="relative max-w-6xl mx-auto">
            {/* Multi-layered card glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-violet-600/15 via-purple-600/20 to-indigo-600/15 rounded-3xl blur-2xl opacity-60"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 via-purple-500/25 to-indigo-500/20 rounded-3xl blur-lg opacity-80"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900/70 via-slate-800/80 to-slate-900/70 backdrop-blur-2xl border border-slate-700/30 rounded-3xl p-16 shadow-2xl">
              <p className="text-2xl md:text-3xl text-center max-w-4xl mx-auto leading-relaxed mb-12">
                <span className="text-slate-200 font-light">
                  Garud is passionate about building revolutionary AI-powered innovations that reshape industries and optimize complex real-world ecosystems.
                </span>
                <br /><br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-bold text-3xl md:text-4xl">
                  We make technology more intelligent, accessible, and transformative.
                </span>
              </p>

              {/* Premium feature highlights */}
              <div className="grid md:grid-cols-3 gap-10 mt-20">
                {[
                  { 
                    icon: "🧠", 
                    title: "Neural Intelligence", 
                    desc: "Advanced deep learning and neural networks",
                    gradient: "from-violet-500 to-purple-600"
                  },
                  { 
                    icon: "⚡", 
                    title: "Quantum Speed", 
                    desc: "Lightning-fast processing with quantum optimization",
                    gradient: "from-purple-500 to-indigo-600"
                  },
                  { 
                    icon: "🎯", 
                    title: "Precision AI", 
                    desc: "Surgical accuracy for mission-critical solutions",
                    gradient: "from-indigo-500 to-cyan-600"
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center group hover:scale-105 transition-all duration-500">
                    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-slate-700/30 shadow-2xl group-hover:shadow-violet-500/25 group-hover:border-violet-500/30 transition-all duration-500">
                      <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className={`text-2xl font-black mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 text-lg group-hover:text-slate-300 transition-colors leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Premium bottom accent */}
          <div className="flex justify-center mt-16">
            <div className="w-48 h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 rounded-full opacity-70 shadow-lg shadow-violet-500/50"></div>
          </div>
        </div>
      </section>

      {/* Enhanced footer accent */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-950/30 via-slate-900/20 to-transparent h-40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        
        .animate-tilt {
          animation: tilt 4s infinite linear;
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