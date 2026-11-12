interface PromoBarProps { lang: 'vi' | 'en' }

export default function PromoBar({ lang }: PromoBarProps) {
  const t = {
    vi: {
      msg: '🎁 Tặng kèm Domain .com + Cloud Server 1 năm cho mọi đơn hàng',
      badge1: '24–48h Bàn Giao',
      badge2: 'Bảo Hành 12 Tháng',
      badge3: 'Full Source Code',
      cta: 'Giảm thêm 20% →',
    },
    en: {
      msg: '🎁 Free Domain .com + Cloud Server 1 year with every order',
      badge1: '24–48h Delivery',
      badge2: '12-Month Warranty',
      badge3: 'Full Source Code',
      cta: 'Extra 20% off →',
    }
  }[lang]

  return (
    <div className="relative overflow-hidden z-50" style={{ background: 'linear-gradient(90deg, #071022 0%, #0A1628 50%, #071022 100%)', borderBottom: '1px solid rgba(201,168,76,0.25)' }}>
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-6 overflow-x-auto">
          <span style={{ color: '#E8C96A', fontFamily: 'var(--font-sans)', whiteSpace: 'nowrap' }}>{t.msg}</span>
          <div className="hidden md:flex items-center gap-3">
            {[t.badge1, t.badge2, t.badge3].map(b => (
              <span key={b} className="px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap"
                style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}>
                ✓ {b}
              </span>
            ))}
          </div>
        </div>
        <button className="whitespace-nowrap text-xs font-semibold px-3 py-1 rounded-full transition-all hover:scale-105"
          style={{ background: 'rgba(201,168,76,0.15)', color: '#E8C96A', border: '1px solid rgba(201,168,76,0.4)' }}>
          {t.cta}
        </button>
      </div>
    </div>
  )
}
