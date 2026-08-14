import {
  User,
  Mail,
  MapPin,
  Briefcase,
  Globe,
  Award,
  FileText,
  CheckCircle,
  Code,
} from 'lucide-react'
import SectionEyebrow from './SectionEyebrow'
import abeyPhoto from '../assets/abey_johnson.jpg'

export default function About({ onShowToast }) {
  const handleDownloadCV = () => {
    onShowToast?.({
      title: 'Resume Downloaded',
      description: 'Abey_Johnson_resumeCV.pdf has been downloaded.',
      type: 'success',
    })
  }

  const personalInfo = [
    { label: 'Full Name', value: 'Abey Johnson', icon: User },
    { label: 'Email', value: 'abeyjohnsona@gmail.com', icon: Mail, isEmail: true },
    { label: 'Role', value: 'Full-Stack Developer', icon: Briefcase },
    { label: 'Experience', value: '3+ Years Active', icon: Award },
    { label: 'Location', value: 'Remote / Global', icon: MapPin },
    { label: 'Status', value: 'Available for Hire', icon: Globe },
  ]

  const highlights = [
    {
      title: 'Responsive & Fast UI',
      desc: 'Building responsive single-page interfaces using React, Vite, and Tailwind CSS.',
    },
    {
      title: 'Robust Backend APIs',
      desc: 'Architecting secure RESTful APIs and database schemas with Node.js and PostgreSQL.',
    },
    {
      title: 'Clean Architecture',
      desc: 'Writing scalable, maintainable code following industry best practices.',
    },
    {
      title: 'Agile Delivery',
      desc: 'Delivering end-to-end web applications with rapid iteration and automated deployment.',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Simple Variant Eyebrow */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SectionEyebrow text="Discover My Story" variant="simple" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-gold">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A quick insight into who I am, what drives my passion for web development, and how I deliver high-impact digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Real Photo Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-md w-full">
              {/* Outer Amber Glow Border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500 via-rose-500 to-amber-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity"></div>

              <div className="relative glass-panel rounded-3xl overflow-hidden border-slate-800 shadow-2xl p-3 bg-slate-950/80">
                <img
                  src={abeyPhoto}
                  alt="Abey Johnson"
                  className="w-full h-auto rounded-2xl object-cover shadow-lg group-hover:scale-102 transition-transform duration-500"
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between text-left">
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Specialization</div>
                    <div className="text-sm font-bold text-white">Full-Stack Software Engineer</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    <Code className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Detailed Bio & Personal Details */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Hi, I'm <span className="text-amber-400">Abey Johnson</span>
            </h3>

            <p className="text-slate-300 text-base leading-relaxed">
              I am a results-driven Full-Stack Software Engineer with over 3 years of experience crafting modern, scalable web applications. My core expertise lies in designing interactive frontend interfaces with <strong className="text-white">React &amp; Vite</strong>, paired with robust backend services using <strong className="text-white">Node.js, Express, and SQL/NoSQL databases</strong>.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              Whether building an e-commerce platform, a real-time analytics dashboard, or an AI-powered developer tool, I focus on clean code structure, fast loading speeds, and an intuitive user experience.
            </p>

            {/* Personal Details Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {personalInfo.map((info, idx) => {
                const Icon = info.icon
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl glass-panel border-slate-800 flex items-center gap-3"
                  >
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs text-slate-400 font-medium">{info.label}</div>
                      {info.isEmail ? (
                        <a
                          href={`mailto:${info.value}`}
                          className="text-xs sm:text-sm font-bold text-amber-400 hover:underline truncate block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-xs sm:text-sm font-bold text-white truncate">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{h.title}</h4>
                    <p className="text-xs text-slate-400 leading-normal">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions: One Primary CV Button + Clean Text Link */}
            <div className="pt-4 flex items-center gap-6">
              <a
                href="https://drive.google.com/drive/folders/1-SzSob7AqxFPeadCwuLCCJxSGaPX-Tf-?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  onShowToast?.({
                    title: 'Opening Resume Document 🚀',
                    description: 'Redirecting to Google Drive resume folder...',
                    type: 'success',
                  })
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg shadow-amber-500/20 hover:opacity-95 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="text-sm font-bold text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1 transition-colors"
              >
                <span>Get in Touch &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
