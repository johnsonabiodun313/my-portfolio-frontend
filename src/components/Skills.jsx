import { useState } from 'react'
import SectionEyebrow from './SectionEyebrow'
import { skillsCategories, skillsData } from '../data/skills'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <SectionEyebrow text="Technical Proficiency" variant="pill" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-gradient-cyan">Skills</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive set of modern tools and frameworks I use to bring fast, scalable, and responsive digital products to life.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {skillsCategories.map((cat) => {
            const isSelected = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/25 scale-105 border border-sky-400 ring-2 ring-sky-500/20 font-bold'
                    : 'glass-panel text-slate-300 hover:text-sky-400 hover:bg-slate-800/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Skills Grid with Brand Authentic Icon Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={index}
                className="glass-panel p-6 rounded-3xl glass-panel-hover flex flex-col justify-between group text-left border-slate-800 hover:border-slate-700 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Distinct Brand Icon Box with Glow */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-slate-950 border ${skill.borderColor} ${skill.glowColor} ${skill.color} p-2.5 font-bold shadow-lg group-hover:scale-110 transition-all`}
                    >
                      <Icon className={`w-full h-full ${skill.color}`} />
                    </div>
                    
                    {/* Verifiable Proficiency & Experience Badges */}
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${skill.badgeColor}`}>
                        {skill.proficiency}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 px-2 py-1 rounded-md bg-slate-900 border border-slate-800">
                        {skill.years}
                      </span>
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3 className={`text-lg font-bold ${skill.color} mb-2 transition-colors`}>
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
