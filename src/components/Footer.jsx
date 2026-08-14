import { Code2, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-indigo-600 p-0.5 shadow-lg">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center p-2">
                <Code2 className="w-full h-full text-amber-400" />
              </div>
            </div>
            <span className="text-white font-extrabold text-xl tracking-tight">
              Abey<span className="text-amber-400">.dev</span>
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <a href="#home" className="hover:text-amber-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-amber-400 transition-colors">
              Services
            </a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">
              Skills
            </a>
            <a href="#resume" className="hover:text-amber-400 transition-colors">
              Resume
            </a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs font-semibold text-slate-300 hover:text-white hover:border-amber-500/40 transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1">
            Designed with Rezume aesthetics. Built with React &amp; Tailwind CSS.
          </p>

          <p>© {new Date().getFullYear()} Abey Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
