"use client"
export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-gray-900 to-indigo-950 backdrop-blur-md border-t border-slate-700/30 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-20"
             style={{
               background: `
                 radial-gradient(ellipse 60% 40% at 20% 80%, rgba(120, 119, 198, 0.3), transparent),
                 radial-gradient(ellipse 50% 30% at 80% 100%, rgba(139, 92, 246, 0.2), transparent)
               `
             }}>
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-violet-600/10 via-purple-600/15 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-r from-indigo-600/8 via-blue-600/12 to-cyan-600/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          
          {/* Main footer content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            
            {/* Company section */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-black bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
                  Garud
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Building revolutionary AI-powered innovations and optimizing complex real-world ecosystems.
                </p>
              </div>
              
              {/* Social links */}
              <div className="flex space-x-4">
                {[
                  { icon: "🐙", label: "GitHub", href: "#" },
                  { icon: "💼", label: "LinkedIn", href: "#" },
                  { icon: "🐦", label: "Twitter", href: "#" },
                  { icon: "📧", label: "Email", href: "#" }
                ].map((social, index) => (
                  <div key={index} className="group">
                    <div className="relative p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/30 hover:border-violet-500/30 transition-all duration-300 group-hover:scale-110">
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300 block">
                        {social.icon}
                      </span>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/0 via-violet-600/5 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-violet-200 to-indigo-200 bg-clip-text text-transparent mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['About', 'Services', 'Projects', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors duration-300 group flex items-center">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300 mr-0 group-hover:mr-3 rounded-full"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-violet-200 to-indigo-200 bg-clip-text text-transparent mb-6">
                Technologies
              </h4>
              <ul className="space-y-3">
                {['Next.js', 'React', 'Express.js', 'AI/ML'].map((tech, index) => (
                  <li key={index}>
                    <span className="text-slate-400 hover:text-indigo-400 transition-colors duration-300 group flex items-center  ">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-300 mr-0 group-hover:mr-3 rounded-full"></span>
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Separator line */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-32 h-0.5 bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-400">
                &copy; {new Date().getFullYear()} 
                <span className="mx-2 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  Garud
                </span>
                All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-slate-500 text-sm">Built with</span>
              <div className="flex items-center space-x-2">
                <div className="px-3 py-1 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/30 rounded-full">
                  <span className="text-xs font-semibold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                    Next.js
                  </span>
                </div>
                <span className="text-slate-600">&</span>
                <div className="px-3 py-1 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/30 rounded-full">
                  <span className="text-xs font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Express.js
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating particles - subtle */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${1 + Math.random() * 2}px`,
                  height: `${1 + Math.random() * 2}px`,
                  background: `hsl(${240 + Math.random() * 60}, 70%, 60%)`,
                  animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(90deg); }
          50% { transform: translateY(-3px) rotate(180deg); }
          75% { transform: translateY(-5px) rotate(270deg); }
        }
      `}</style>
    </footer>
  )
}