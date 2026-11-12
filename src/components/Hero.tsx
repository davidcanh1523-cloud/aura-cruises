import { useState, useEffect } from 'react'
import { Star, Shield, Zap, Globe } from 'lucide-react'

interface HeroProps {
  lang: 'vi' | 'en'
  onCTA: () => void
  onDiscount: () => void
}

const HERO_PHOTOS = [
  'https://images.unsplash.com/photo-1573790387438-4da905039392?w=1920&q=85',
  'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1920&q=85',
  'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1920&q=85',
]

const stats = {
  vi: [
    { val: '500+', label: 'Hải Trình Thành Công' },
    { val: '6★', label: 'Tiêu Chuẩn Dịch Vụ' },
    { val: '99/100', label: 'Google PageSpeed' },
    { val: '24/7', label: 'Tư Vấn Zalo/WA' },
  ],
  en: [
    { val: '500+', label: 'Successful Cruises' },
    { val: '6★', label: 'Service Standard' },
    { val: '99/100', label: 'Google PageSpeed' },
    { val: '24/7', label: 'Zalo/WA Support' },
  ]
}

export default function Hero({ lang, onCTA, onDiscount }: HeroProps) {
  const [photoIdx, setPhotoIdx] = useState(0)
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    setLoaded(true)
    const interval = setInterval(() => {
      setPhotoIdx(i => (i + 1) % HERO_PHOTOS.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const t = {
    vi: {
      badge: 'DU THUYỀN 6 SAO • VỊNH HẠ LONG & LAN HẠ',
      headline1: 'Kỳ Quan Vịnh Biển',
      headline2: 'Aura Heritage Cruises',
      sub: 'Hải trình độc bản với cabin 360°, dịch vụ 6 sao chuẩn quốc tế và trải nghiệm điện ảnh giữa lòng di sản thiên nhiên thế giới.',
      cta1: '✦ Đặt Làm Bản Này / Nhận Báo Giá',
      cta2: '🏷 Lấy Giá Rẻ (Giảm thêm 20%)',
      price: 'Từ 2,2tr',
      priceLabel: 'Trọn gói · Tặng Domain + Server',
      cabin360: 'Cabin 360°',
      scrollHint: 'Khám phá hải trình',
    },
    en: {
      badge: '6-STAR CRUISE • HA LONG & LAN HA BAY',
      headline1: 'World Heritage Wonder',
      headline2: 'Aura Heritage Cruises',
      sub: 'Exclusive itineraries with 360° cabin views, international 6-star service, and cinematic experiences in a UNESCO World Heritage site.',
      cta1: '✦ Build This / Get a Quote',
      cta2: '🏷 Get Cheap Price (Extra 20% off)',
      price: 'From 2.2M VND',
      priceLabel: 'All-inclusive · Free Domain + Server',
      cabin360: 'Cabin 360°',
      scrollHint: 'Explore itineraries',
    }
  }[lang]

  const statList = stats[lang]

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden" style={{ paddingTop: '96px' }}>
      {/* Background photos */}
      {HERO_PHOTOS.map((photo, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-2000"
          style={{ opacity: i === photoIdx ? 1 : 0, transitionDuration: '1500ms' }}>
          <img src={photo} alt="Ha Long Bay" className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.65) saturate(1.1)' }} />
        </div>
      ))}

      {/* Cinematic overlay */}
      <div className="absolute inset-0 cinematic-overlay" />

      {/* Left side gradient */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(90deg, rgba(7,16,34,0.85) 0%, rgba(7,16,34,0.4) 60%, transparent 100%)'
      }} />

      {/* Wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 wave-separator">
        <svg viewBox="0 0 1440 128" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,96 C240,32 480,128 720,80 C960,32 1200,112 1440,64 L1440,128 L0,128 Z" fill="#071022"/>
        </svg>
      </div>

      {/* Photo nav dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
        {HERO_PHOTOS.map((_, i) => (
          <button key={i} onClick={() => setPhotoIdx(i)}
            className="w-1.5 rounded-full transition-all duration-300"
            style={{
              height: i === photoIdx ? '32px' : '8px',
              background: i === photoIdx ? '#C9A84C' : 'rgba(201,168,76,0.3)',
            }} />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest"
              style={{ background: 'rgba(201,168,76,0.15)', color: '#E8C96A', border: '1px solid rgba(201,168,76,0.4)' }}>
              {[...Array(6)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-current" />)}
              <span className="ml-1">{t.badge}</span>
            </div>
          </div>

          {/* Headline */}
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '250ms' }}>
            <p className="text-lg md:text-xl font-light mb-2" style={{ color: 'rgba(248,250,252,0.7)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
              {t.headline1}
            </p>
            <h1 className="font-black leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontFamily: 'var(--font-heading)' }}>
              <span className="text-gold-gradient">{t.headline2}</span>
            </h1>
          </div>

          {/* Sub */}
          <p className={`text-base md:text-lg leading-relaxed mb-10 max-w-xl transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ color: 'rgba(248,250,252,0.75)', transitionDelay: '400ms', fontFamily: 'var(--font-sans)' }}>
            {t.sub}
          </p>

          {/* Price + CTAs */}
          <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '550ms' }}>
            {/* Price badge */}
            <div className="glass-card rounded-2xl px-6 py-4 gold-glow">
              <div className="text-xs font-medium mb-1" style={{ color: 'rgba(201,168,76,0.7)', letterSpacing: '0.08em' }}>CHI PHÍ TRỌN GÓI</div>
              <div className="font-black text-3xl text-gold-gradient leading-none" style={{ fontFamily: 'var(--font-heading)' }}>{t.price}</div>
              <div className="text-xs mt-1" style={{ color: 'rgba(248,250,252,0.5)' }}>{t.priceLabel}</div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <button onClick={onCTA}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm btn-gold transition-all"
                style={{ color: '#071022', fontFamily: 'var(--font-sans)', boxShadow: '0 8px 30px rgba(201,168,76,0.35)' }}>
                {t.cta1}
              </button>
              <button onClick={onDiscount}
                className="flex items-center gap-2 px-8 py-3 rounded-2xl font-semibold text-sm transition-all hover:scale-105"
                style={{ background: 'rgba(201,168,76,0.08)', color: '#E8C96A', border: '1px solid rgba(201,168,76,0.3)' }}>
                {t.cta2}
              </button>
            </div>
          </div>

          {/* Features pills */}
          <div className={`flex flex-wrap gap-3 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '700ms' }}>
            {[
              { icon: <Zap className="w-3.5 h-3.5" />, label: 'Cinematic UI' },
              { icon: <Globe className="w-3.5 h-3.5" />, label: lang === 'vi' ? 'Song ngữ VI/EN' : 'Bilingual VI/EN' },
              { icon: <Shield className="w-3.5 h-3.5" />, label: 'PageSpeed 99/100' },
              { icon: <Star className="w-3.5 h-3.5" />, label: lang === 'vi' ? 'SEO Top 1' : 'SEO Top 1' },
            ].map(f => (
              <span key={f.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: 'rgba(248,250,252,0.08)', color: 'rgba(248,250,252,0.7)', border: '1px solid rgba(248,250,252,0.1)' }}>
                {f.icon} {f.label}
              </span>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
          {statList.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-black text-2xl md:text-3xl text-gold-gradient" style={{ fontFamily: 'var(--font-heading)' }}>
                {s.val}
              </div>
              <div className="text-xs mt-1" style={{ color: 'rgba(248,250,252,0.5)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs tracking-widest" style={{ color: 'rgba(201,168,76,0.6)' }}>{t.scrollHint}</span>
        <div className="w-px h-10 mx-auto" style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)' }} />
      </div>
    </section>
  )
}
