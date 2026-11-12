import { useState, useEffect } from 'react'
import { Phone, Menu, X, Globe, ChevronDown } from 'lucide-react'

interface NavbarProps {
  lang: 'vi' | 'en'
  setLang: (l: 'vi' | 'en') => void
  onCTA: () => void
}

const navLinks = {
  vi: [
    { label: 'Hải Trình', href: '#routes' },
    { label: 'Cabin 360°', href: '#cabins' },
    { label: 'Trải Nghiệm', href: '#experiences' },
    { label: 'Đánh Giá', href: '#testimonials' },
    { label: 'Đặt Phòng', href: '#booking' },
  ],
  en: [
    { label: 'Itineraries', href: '#routes' },
    { label: 'Cabins 360°', href: '#cabins' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Book Now', href: '#booking' },
  ]
}

export default function Navbar({ lang, setLang, onCTA }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = navLinks[lang]
  const phone = '1900 8888'

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          top: 'var(--promo-height, 32px)',
          background: scrolled
            ? 'rgba(7,16,34,0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C96A)', boxShadow: '0 0 20px rgba(201,168,76,0.4)' }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path d="M3 18L7 10L12 14L17 7L21 18H3Z" fill="#071022" stroke="#071022" strokeWidth="0.5"/>
                  <path d="M12 2C12 2 10 5 8 6C6 7 3 6.5 3 6.5" stroke="#071022" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="5" r="1.5" fill="#071022"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm leading-tight text-gold-gradient" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.05em' }}>
                  AURA HERITAGE
                </div>
                <div className="text-xs leading-tight" style={{ color: 'rgba(201,168,76,0.6)', letterSpacing: '0.15em' }}>
                  CRUISES
                </div>
              </div>
            </div>

            {/* Nav links desktop */}
            <div className="hidden lg:flex items-center gap-6">
              {links.map(l => (
                <a key={l.href} href={l.href}
                  className="text-sm font-medium transition-colors duration-200 hover:text-yellow-400"
                  style={{ color: 'rgba(248,250,252,0.8)', fontFamily: 'var(--font-sans)', letterSpacing: '0.03em' }}>
                  {l.label}
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <a href={`tel:${phone.replace(/\s/g, '')}`}
                className="hidden md:flex items-center gap-2 text-sm font-semibold"
                style={{ color: '#C9A84C' }}>
                <Phone className="w-4 h-4" />
                {phone}
              </a>

              {/* Lang toggle */}
              <button
                onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
                className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all hover:scale-105"
                style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}>
                <Globe className="w-3 h-3" />
                {lang.toUpperCase()}
                <ChevronDown className="w-3 h-3" />
              </button>

              <button onClick={onCTA}
                className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-navy-900 btn-gold transition-all"
                style={{ color: '#071022', fontFamily: 'var(--font-sans)' }}>
                {lang === 'vi' ? '✦ Đặt Chỗ Ngay' : '✦ Book Now'}
              </button>

              <button onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg"
                style={{ color: '#C9A84C', background: 'rgba(201,168,76,0.1)' }}>
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden" style={{ background: 'rgba(7,16,34,0.98)', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
            <div className="px-4 py-4 space-y-3">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium py-2 border-b"
                  style={{ color: 'rgba(248,250,252,0.8)', borderColor: 'rgba(201,168,76,0.1)' }}>
                  {l.label}
                </a>
              ))}
              <button onClick={() => { onCTA(); setMobileOpen(false) }}
                className="w-full py-3 rounded-full font-semibold btn-gold mt-3"
                style={{ color: '#071022' }}>
                {lang === 'vi' ? '✦ Đặt Chỗ Ngay' : '✦ Book Now'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Sticky bottom CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3"
        style={{ background: 'rgba(7,16,34,0.95)', borderTop: '1px solid rgba(201,168,76,0.2)' }}>
        <div className="flex gap-2">
          <a href="tel:19008888" className="flex-1 py-3 rounded-full text-sm font-semibold text-center"
            style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}>
            📞 Gọi Ngay
          </a>
          <button onClick={onCTA} className="flex-1 py-3 rounded-full text-sm font-semibold btn-gold"
            style={{ color: '#071022' }}>
            ✦ Đặt Chỗ
          </button>
        </div>
      </div>
    </>
  )
}
