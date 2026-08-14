import {
  Code2,
  Server,
  Palette,
  Cloud,
  Zap,
  ShoppingCart,
} from 'lucide-react'
import SectionEyebrow from './SectionEyebrow'

export default function Services() {
  const servicesList = [
    {
      title: 'Full-Stack Web Apps',
      icon: Code2,
      desc: 'Building responsive, scalable web applications using React 19, Vite, and modern JavaScript standards.',
    },
    {
      title: 'REST API & Backend Architecture',
      icon: Server,
      desc: 'Designing Node.js microservices, secure authentication pipelines, and optimized relational/NoSQL databases.',
    },
    {
      title: 'UI/UX & Modern Styling',
      icon: Palette,
      desc: 'Crafting user interfaces with Tailwind CSS v4, glassmorphism aesthetics, and smooth animations.',
    },
    {
      title: 'Cloud Deployment & DevOps',
      icon: Cloud,
      desc: 'Automating hosting setups on Vercel, Render, and AWS with SSL, environment management, and CI/CD pipelines.',
    },
    {
      title: 'Performance & SEO Optimization',
      icon: Zap,
      desc: 'Auditing existing codebases to eliminate bottlenecks, minimize bundle sizes, and achieve high Lighthouse scores.',
    },
    {
      title: 'E-Commerce & Payment Integrations',
      icon: ShoppingCart,
      desc: 'Integrating secure checkout solutions like Stripe, multi-currency pricing, and responsive shopping carts.',
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SectionEyebrow text="My Offerings" variant="simple" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services &amp; <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-quality software engineering services tailored to help startups and businesses scale their digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="glass-panel p-8 rounded-3xl glass-panel-hover border-slate-800 text-left flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-3 text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-full h-full" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span>Professional Service</span>
                  <span>&rarr;</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
