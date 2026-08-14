import { X, ExternalLink, CheckCircle, Zap, Shield, Layers } from 'lucide-react'
import { GithubIcon } from './SocialIcons'


export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border-slate-700/80 shadow-2xl p-6 sm:p-8 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
            {project.categoryLabel}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Project Image Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-8 border border-slate-800 shadow-xl group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-96 object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                Project Architecture &amp; Solution
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                Key Features Delivered
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                {project.keyFeatures?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6 glass-panel p-5 rounded-2xl border-slate-800">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                Tech Stack Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800 pt-4 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Uptime/Performance
                </span>
                <span className="text-emerald-400 font-mono font-bold">
                  {project.metrics || '99.9%'}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-indigo-400" /> Role
                </span>
                <span className="text-slate-200 font-medium">Lead Developer</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-slate-800 pt-4 space-y-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md shadow-indigo-600/20 hover:opacity-90 transition-all text-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-medium text-slate-300 glass-panel glass-panel-hover text-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
