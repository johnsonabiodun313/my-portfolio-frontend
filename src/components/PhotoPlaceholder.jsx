import { User, Camera } from 'lucide-react'

export default function PhotoPlaceholder() {
  return (
    <div className="relative group max-w-md w-full">
      {/* Ambient Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/30 via-indigo-500/20 to-amber-400/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

      <div className="relative glass-panel rounded-3xl overflow-hidden border-slate-800 shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center aspect-square bg-slate-900/90">
        {/* Circle Avatar Icon Container */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-slate-800 border-2 border-dashed border-amber-500/40 flex items-center justify-center text-slate-400 mb-4 group-hover:border-amber-400 transition-colors">
          <User className="w-16 h-16 sm:w-20 sm:h-20 text-slate-400 group-hover:text-amber-400 transition-colors" />
        </div>

        {/* Clear Label */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-xs font-mono font-semibold text-amber-400 border border-amber-500/20">
            <Camera className="w-3.5 h-3.5" />
            <span>[ YOUR PHOTO HERE ]</span>
          </div>
          <p className="text-xs text-slate-400 pt-1">
            Replace with your official headshot / portrait photo
          </p>
        </div>
      </div>
    </div>
  )
}
