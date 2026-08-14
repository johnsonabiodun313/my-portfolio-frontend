import { useState } from 'react'
import {
  Mail,
  MapPin,
  Send,
  Clock,
  Copy,
  Check,
  MessageSquare,
  Loader2,
} from 'lucide-react'
import SectionEyebrow from './SectionEyebrow'

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abeyjohnsona@gmail.com')
    setCopied(true)
    onShowToast?.({
      title: 'Email Copied!',
      description: 'abeyjohnsona@gmail.com is copied to clipboard.',
      type: 'success',
    })
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast?.({
        title: 'Missing Required Fields',
        description: 'Please fill in your name, email, and message before sending.',
        type: 'error',
      })
      return
    }

    setIsSubmitting(true)

    // Simulate sending message with loading state
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      onShowToast?.({
        title: 'Message Sent Successfully! 🚀',
        description: 'Thank you for contacting Abey Johnson! I will get back to you shortly.',
        type: 'success',
      })
    }, 1200)
  }

  return (
    <section id="contact" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SectionEyebrow text="Get In Touch" variant="pill" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project idea, contract proposal, or job opportunity? Send a message and let's bring it to reality!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Contact Details Panel */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="glass-panel p-8 rounded-3xl border-slate-800 space-y-6 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-sky-400" />
                  Direct Contact
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Feel free to reach out via email or submit the contact form. I am available for full-time roles, contracts, and software consultancies.
                </p>

                <div className="space-y-4 pt-2">
                  {/* Email Row */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <div className="flex items-center gap-3 truncate">
                      <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 shrink-0 border border-sky-500/20">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="truncate">
                        <div className="text-xs text-slate-400 font-medium">Email Address</div>
                        <a
                          href="mailto:abeyjohnsona@gmail.com"
                          className="text-xs sm:text-sm font-bold text-white hover:text-sky-400 transition-colors block truncate"
                        >
                          abeyjohnsona@gmail.com
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                      title="Copy Email"
                      aria-label="Copy email address"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Location Row */}
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Location</div>
                      <div className="text-xs sm:text-sm font-bold text-white">Remote / Worldwide</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-sky-400 font-medium">
                  <Clock className="w-4 h-4" />
                  Response Time
                </span>
                <span className="text-emerald-400 font-medium">Under 2 hours</span>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-8 rounded-3xl border-slate-800 text-left space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl glass-panel border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/40 transition-all placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Email <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl glass-panel border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/40 transition-all placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Project Inquiry / Job Opportunity"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl glass-panel border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/40 transition-all placeholder:text-slate-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2"
                >
                  Message <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  placeholder="Hello Abey, I'd like to discuss..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl glass-panel border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/40 transition-all placeholder:text-slate-500 resize-none"
                ></textarea>
              </div>

              {/* Sharp Crimson Red Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white bg-red-600 hover:bg-red-500 border border-red-500 shadow-lg shadow-red-600/30 transition-all disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
