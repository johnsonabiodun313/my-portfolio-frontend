import { Star, Quote, Sparkles, User } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-sky-400 uppercase tracking-widest border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Tech Leaders <span className="text-gradient-cyan">Say About Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((rev, index) => (
            <div
              key={rev.id || index}
              className="glass-panel p-6 rounded-3xl glass-panel-hover border-slate-800 hover:border-sky-500/30 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-sky-400/30 mb-3" />
                <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-slate-800 pt-4">
                {rev.avatar ? (
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover border border-sky-500/30"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold">
                    <User className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-bold text-white">{rev.author}</h3>
                  <p className="text-xs text-slate-400">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
