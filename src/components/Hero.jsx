import { useState } from 'react'
import {
  FileText,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Zap,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons'
import SectionEyebrow from './SectionEyebrow'
import { heroStats } from '../data/stats'

export default function Hero({ onShowToast }) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abeyjohnsona@gmail.com')
    setCopied(true)
    onShowToast?.({
      title: 'Email Copied!',
      description: 'abeyjohnsona@gmail.com is copied to your clipboard.',
      type: 'success',
    })
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Background Cyan & Midnight Glows */}
      <div className="glow-cyan w-96 h-96 bg-sky-500 top-10 left-1/4 -z-10 blur-3xl opacity-15"></div>
      <div className="glow-cyan w-80 h-80 bg-blue-600 top-40 right-10 -z-10 blur-3xl opacity-15"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: Hero Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Pill */}
            <SectionEyebrow text="Welcome to My Portfolio" variant="pill" icon={Sparkles} />

            {/* Headline with exact specifications */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 block">
                HEY THERE! I'M
              </span>
              <h1 className="text-3xl sm:text-6xl font-black tracking-tight leading-[1.1]">
                <span className="text-white">Abey</span>{' '}
                <span className="text-sky-100">Johnson</span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold pt-1">
                <span className="text-gradient-cyan">Full-Stack Software Engineer</span>{' '}
                <span className="text-slate-300">&amp; Web Architect</span>
              </p>
            </div>

            {/* Paragraph Bio */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              I specialize in crafting high-performance web applications with{' '}
              <strong className="text-white">React, Vite, Node.js</strong>, and{' '}
              <strong className="text-sky-400">Tailwind CSS</strong>. Focused on elegant design, clean architecture, and rapid deployment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {/* Sharp Crimson Red Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-white bg-red-600 hover:bg-red-500 border border-red-500 shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-98 text-sm"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Dark slate button with subtle cyan border */}
              <a
                href="https://drive.google.com/drive/folders/1-SzSob7AqxFPeadCwuLCCJxSGaPX-Tf-?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  onShowToast?.({
                    title: 'Opening Resume Document 🚀',
                    description: 'Redirecting to Google Drive resume folder...',
                    type: 'success',
                  })
                }}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl font-semibold text-slate-200 glass-panel glass-panel-hover text-sm cursor-pointer border-slate-800 hover:border-sky-500/40"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>My Resume</span>
              </a>

              {/* Dark slate button with subtle cyan border */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 sm:py-3.5 rounded-xl font-medium text-slate-300 glass-panel glass-panel-hover text-xs sm:text-sm cursor-pointer border-slate-800 hover:border-sky-500/40"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                {[
                  { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
                  { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
                  { icon: Mail, href: 'mailto:abeyjohnsona@gmail.com', label: 'Email' },
                ].map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-sky-400 hover:bg-slate-800 hover:border-sky-500/40 transition-all hover:scale-110"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal Card (Standard IDE Dark Slate & Multi-Color Syntax) */}
          <div className="lg:col-span-5 w-full overflow-hidden">
            <div className="relative w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400 rounded-2xl blur-lg opacity-25"></div>

              <div className="relative bg-slate-950/90 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-2xl text-left w-full overflow-hidden">
                <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>engineer.config.ts</span>
                  </div>
                </div>

                {/* Multi-color IDE Syntax Highlighting */}
                <div className="space-y-1.5 sm:space-y-2 font-mono text-[11px] sm:text-xs text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap break-words">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-sky-400">engineer</span> = &#123;
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-rose-400">name:</span>{' '}
                    <span className="text-emerald-400">'Abey Johnson'</span>,
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-rose-400">email:</span>{' '}
                    <span className="text-amber-400">'abeyjohnsona@gmail.com'</span>,
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-rose-400">role:</span>{' '}
                    <span className="text-emerald-400">'Full-Stack Engineer'</span>,
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-rose-400">skills:</span> [
                  </div>
                  <div className="pl-6 sm:pl-8 text-sky-300">
                    'React', 'Vite', 'Node.js', 'Tailwind', 'PostgreSQL'
                  </div>
                  <div className="pl-3 sm:pl-4">],</div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-rose-400">status:</span>{' '}
                    <span className="text-emerald-400">'🟢 Open for Projects'</span>
                  </div>
                  <div>&#125;</div>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Clean Architecture
                  </span>
                  <span className="flex items-center gap-1 text-sky-400 font-medium">
                    <Zap className="w-3.5 h-3.5 fill-current" /> Fast Performance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Stats Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {heroStats.map((stat, index) => (
            <div
              key={index}
              className="glass-panel p-4 sm:p-5 rounded-2xl border-slate-800 hover:border-sky-500/30 transition-all text-center group"
            >
              <div className="text-2xl sm:text-4xl font-black text-white group-hover:text-sky-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
