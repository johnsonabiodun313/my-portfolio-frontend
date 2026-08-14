import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ToastNotification from './components/ToastNotification'

export default function App() {
  const [toastState, setToastState] = useState(null)

  const showToast = ({ title, description, type = 'success' }) => {
    setToastState({ title, description, type })
  }

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans antialiased overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        <Hero onShowToast={showToast} />
        <About onShowToast={showToast} />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Toast Notification */}
      <ToastNotification
        toastState={toastState}
        onOpenChange={(open) => !open && setToastState(null)}
      />
    </div>
  )
}
