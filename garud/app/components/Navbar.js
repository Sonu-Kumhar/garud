"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed w-full z-50 backdrop-blur-2xl bg-gradient-to-br from-slate-950/80 via-gray-900/90 to-indigo-950/80 border-b border-slate-700/20 shadow-2xl">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-20"
             style={{
               background: `
                 radial-gradient(ellipse 80% 30% at 50% 0%, rgba(139, 92, 246, 0.2), transparent),
                 radial-gradient(ellipse 60% 20% at 20% 0%, rgba(120, 119, 198, 0.15), transparent)
               `
             }}>
        </div>
        
        {/* Subtle floating orb */}
        <div className="absolute -top-10 left-1/4 w-32 h-32 bg-gradient-to-r from-violet-600/10 via-purple-600/15 to-indigo-600/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto flex justify-around items-center py-4 px-6">
        
        {/* Logo */}
        <div className="relative group">
          <Link href="/" className="block">
            <div className="relative">
              <span className="text-3xl font-black bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-wide hover:scale-105 transition-transform duration-300">
                Garud
              </span>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/40 via-purple-600/50 to-indigo-600/40 blur-xl scale-150 opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="group relative px-4 py-2 rounded-xl transition-all duration-300">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/0 via-purple-600/10 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Border effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-violet-500/20 transition-all duration-300"></div>
              
              <span className="relative text-slate-300 group-hover:text-white font-medium transition-colors duration-300">
                {item.label}
              </span>
              
              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-300"></div>
            </Link>
          ))}
          
          {/* CTA Button */}
          <div className="ml-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              
              <Link href="/contact" className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 text-white font-semibold px-6 py-2.5 rounded-xl backdrop-blur-md transition-all duration-300 transform group-hover:scale-105 shadow-xl block">
                <span className="bg-gradient-to-r from-white to-violet-100 bg-clip-text text-transparent font-bold">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative p-2 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/30 hover:border-violet-500/30 transition-all duration-300 group"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/0 via-violet-600/5 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block w-6 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full backdrop-blur-2xl bg-gradient-to-br from-slate-950/95 via-gray-900/95 to-indigo-950/95 border-b border-slate-700/20 shadow-2xl transform transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="relative">
          {/* Mobile background effects */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="relative py-6 px-6 space-y-2">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="group block p-4 rounded-xl bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-md border border-slate-700/20 hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/0 via-violet-600/5 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative text-slate-300 group-hover:text-white font-medium text-lg transition-colors duration-300 flex items-center">
                  <span className="w-0 group-hover:w-3 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300 mr-0 group-hover:mr-3 rounded-full"></span>
                  {item.label}
                </span>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="relative w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 text-white font-semibold p-4 rounded-xl backdrop-blur-md transition-all duration-300 transform group-hover:scale-[1.02] shadow-xl block text-center"
                >
                  <span className="bg-gradient-to-r from-white to-violet-100 bg-clip-text text-transparent font-bold text-lg">
                    Get Started
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles - very subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 1.5}px`,
              height: `${1 + Math.random() * 1.5}px`,
              background: `hsl(${240 + Math.random() * 60}, 70%, 60%)`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-4px) rotate(90deg); }
          50% { transform: translateY(-2px) rotate(180deg); }
          75% { transform: translateY(-3px) rotate(270deg); }
        }
      `}</style>
    </nav>
  )
}