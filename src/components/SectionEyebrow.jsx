import { Sparkles } from 'lucide-react'

export default function SectionEyebrow({
  text,
  icon: Icon = Sparkles,
  variant = 'simple',
}) {
  if (variant === 'pill') {
    return (
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-sky-400 uppercase tracking-widest border border-sky-500/25 shadow-inner">
        <Icon className="w-3.5 h-3.5 text-sky-400" />
        <span>{text}</span>
      </div>
    )
  }

  return (
    <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest">
      <Icon className="w-3.5 h-3.5 text-sky-400" />
      <span>{text}</span>
    </div>
  )
}
