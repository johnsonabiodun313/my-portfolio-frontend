import { ArrowUp } from 'lucide-react'
import ajLogo from '../assets/aj_logo.png'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-800">
          {/* Brand Logo with AJ Red Logo Image */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-950 border border-red-600/50 p-1 shadow-lg shadow-red-600/20 overflow-hidden flex items-center justify-center">
              <img src={ajLogo} alt="AJ Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-white font-extrabold text-xl tracking-tight">
              Abey<span className="text-red-500 font-extrabold">.dev</span>
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <a href="#home" className="hover:text-sky-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-sky-400 transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-sky-400 transition-colors">
              Services
            </a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">
              Skills
            </a>
            <a href="#resume" className="hover:text-sky-400 transition-colors">
              Resume
            </a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs font-semibold text-slate-300 hover:text-white hover:border-sky-500/40 transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1">
            Built with React, Vite &amp; Tailwind CSS.
          </p>

          <p>© {new Date().getFullYear()} Abey Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
