import { Calendar } from 'lucide-react'
import SectionEyebrow from './SectionEyebrow'
import { experiencesData } from '../data/experience'

export default function Experience() {
  return (
    <section id="resume" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SectionEyebrow text="Career History" variant="simple" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience &amp; <span className="text-gradient-cyan">Education</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A chronological timeline of my professional roles, engineering milestones, and educational background.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Cyan Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-5 bottom-8 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-sky-500 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12 relative">
            {experiencesData.map((exp, index) => {
              const Icon = exp.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={exp.id || index}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 border-2 border-sky-500 text-sky-400 shadow-lg shadow-sky-500/20">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="w-full sm:w-[calc(50%-2.5rem)] text-left">
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl glass-panel-hover border-slate-800 hover:border-sky-500/30 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-xs font-semibold text-sky-400 border border-sky-500/20">
                          <Calendar className="w-3.5 h-3.5 text-sky-400" />
                          {exp.period}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <div className="text-sm font-bold text-sky-400">
                        {exp.company}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="pt-2 space-y-1.5 text-xs text-slate-400">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
