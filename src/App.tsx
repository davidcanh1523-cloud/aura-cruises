import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CruiseRoutes from './components/CruiseRoutes'
import CabinShowcase from './components/CabinShowcase'
import ExperiencesSection from './components/ExperiencesSection'
import TestimonialsSection from './components/TestimonialsSection'
import BookingSection from './components/BookingSection'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'
import PromoBar from './components/PromoBar'

export default function App() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi')
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<'quote' | 'discount'>('quote')

  const openModal = (type: 'quote' | 'discount' = 'quote') => {
    setModalType(type)
    setShowModal(true)
  }

  useEffect(() => {
    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('animate-fade-up')
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative overflow-x-hidden" style={{ background: '#071022' }}>
      <PromoBar lang={lang} />
      <Navbar lang={lang} setLang={setLang} onCTA={() => openModal('quote')} />
      <Hero lang={lang} onCTA={() => openModal('quote')} onDiscount={() => openModal('discount')} />
      <CruiseRoutes lang={lang} onBook={() => openModal('quote')} />
      <CabinShowcase lang={lang} onBook={() => openModal('quote')} />
      <ExperiencesSection lang={lang} />
      <TestimonialsSection lang={lang} />
      <BookingSection lang={lang} onBook={() => openModal('quote')} />
      <Footer lang={lang} onCTA={() => openModal('quote')} />

      {showModal && (
        <QuoteModal
          lang={lang}
          type={modalType}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}
