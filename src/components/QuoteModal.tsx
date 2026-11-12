import { useState } from 'react'
import { X, Sparkles, CheckCircle, ShieldCheck, Gift, Phone, Send, Copy, Check } from 'lucide-react'
import confetti from 'canvas-confetti'

interface QuoteModalProps {
  lang: 'vi' | 'en'
  type: 'quote' | 'discount'
  onClose: () => void
}

export default function QuoteModal({ lang, type, onClose }: QuoteModalProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [route, setRoute] = useState('halong-2n1d')
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleCopyCode = () => {
    navigator.clipboard.writeText('AURA20')
    setCopied(true)
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } })
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone) return
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } })
    setSubmitted(true)
  }

  const t = {
    vi: {
      quoteTitle: 'Nhận Báo Giá & Đặt Làm Bản Này',
      quoteSubtitle: 'Đội ngũ chuyên viên du thuyền Aura Heritage sẽ phản hồi và gửi bản kế hoạch chi tiết trong 15 phút.',
      discountTitle: 'Mã Giảm Giá Độc Quyền -20%',
      discountSubtitle: 'Áp dụng cho mọi hải trình và hạng cabin khi đặt trong tuần này.',
      codeLabel: 'Mã voucher ưu đãi của bạn:',
      copiedText: 'Đã sao chép mã!',
      copyBtn: 'Sao chép',
      priceTag: 'Chi phí trọn gói: Từ 2,2tr (Bao gồm Domain + Server 1 năm)',
      namePlaceholder: 'Họ và tên quý khách *',
      phonePlaceholder: 'Số điện thoại / Zalo nhận vé *',
      routeLabel: 'Chọn hải trình quan tâm:',
      route1: 'Vịnh Hạ Long 2N1Đ (Hang Sửng Sốt)',
      route2: 'Vịnh Lan Hạ 2N1Đ (Ba Trái Đào)',
      route3: 'Liên Vịnh 3N2Đ VIP (Việt Hải)',
      submitQuote: 'Gửi Yêu Cầu Tư Vấn Ngay',
      submitDiscount: 'Áp Dụng Mã & Nhận Ưu Đãi 20%',
      successTitle: 'Gửi Yêu Cầu Thành Công!',
      successMsg: 'Cảm ơn quý khách. Chuyên viên sẽ liên hệ ngay qua Zalo để gửi bảng giá và video phòng 360° thực tế.',
      closeBtn: 'Đóng cửa sổ',
      benefits: [
        'Tặng tên miền .com + Cloud Server 1 năm',
        'Bảo hành 12 tháng trọn gói',
        'Bàn giao 100% Full Source Code',
        'Google PageSpeed đạt 99/100 chuẩn SEO'
      ]
    },
    en: {
      quoteTitle: 'Request Quote / Build This Edition',
      quoteSubtitle: 'Our Aura Heritage cruise architects will provide full proposal and schedule within 15 minutes.',
      discountTitle: 'Exclusive 20% Privilege Voucher',
      discountSubtitle: 'Valid for all itineraries and suites booked during this promotional week.',
      codeLabel: 'Your privilege promo voucher:',
      copiedText: 'Code Copied!',
      copyBtn: 'Copy',
      priceTag: 'All-inclusive package: From 2.2M VND (Free Domain + Server 1 Year)',
      namePlaceholder: 'Your Full Name *',
      phonePlaceholder: 'Phone number / WhatsApp *',
      routeLabel: 'Interested Voyage:',
      route1: 'Ha Long Bay 2D1N (Sung Sot Cave)',
      route2: 'Lan Ha Bay 2D1N (Ba Trai Dao Islets)',
      route3: 'Dual Bays 3D2N VIP (Viet Hai Village)',
      submitQuote: 'Submit Inquiries Now',
      submitDiscount: 'Apply Code & Claim 20% Off',
      successTitle: 'Request Submitted Successfully!',
      successMsg: 'Thank you. Our private travel concierge will reach out on WhatsApp promptly with full quotation and 360° videos.',
      closeBtn: 'Close Window',
      benefits: [
        'Free .com Domain + Cloud Server 1 Year',
        '12-Month Comprehensive Warranty',
        '100% Full Source Code Delivery',
        'Google PageSpeed 99/100 SEO optimized'
      ]
    }
  }[lang]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl rounded-3xl p-6 sm:p-10 border border-yellow-500/30 shadow-2xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #071022 100%)' }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{t.successTitle}</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">{t.successMsg}</p>
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl font-bold text-sm btn-gold text-slate-950"
            >
              {t.closeBtn}
            </button>
          </div>
        ) : (
          <div>
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-widest"
              style={{ background: 'rgba(201,168,76,0.15)', color: '#E8C96A', border: '1px solid rgba(201,168,76,0.3)' }}>
              <Sparkles className="w-3.5 h-3.5" />
              {type === 'discount' ? 'ƯU ĐÃI ĐẶC BIỆT' : 'BÁO GIÁ DỰ ÁN'}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {type === 'discount' ? t.discountTitle : t.quoteTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              {type === 'discount' ? t.discountSubtitle : t.quoteSubtitle}
            </p>

            {/* Voucher Box if Discount mode */}
            {type === 'discount' && (
              <div className="mb-6 p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-yellow-300 font-semibold">{t.codeLabel}</div>
                  <div className="text-2xl font-black text-gold-gradient tracking-widest font-mono">AURA20</div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="px-4 py-2 rounded-xl text-xs font-bold btn-gold text-slate-950 flex items-center gap-1.5 shadow"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? t.copiedText : t.copyBtn}
                </button>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-yellow-400 focus:outline-none placeholder:text-slate-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder={t.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-yellow-400 focus:outline-none placeholder:text-slate-500"
                />
              </div>

              <div>
                <select
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-yellow-400 focus:outline-none"
                >
                  <option value="halong-2n1d">{t.route1}</option>
                  <option value="lanha-2n1d">{t.route2}</option>
                  <option value="combo-3n2d">{t.route3}</option>
                </select>
              </div>

              {/* Price badge line */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-yellow-300 font-medium flex items-center gap-2">
                <Gift className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>{t.priceTag}</span>
              </div>

              {/* Inclusions checklist */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                {t.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span className="truncate">{b}</span>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm btn-gold text-slate-950 transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] mt-4"
              >
                <Sparkles className="w-4 h-4" />
                {type === 'discount' ? t.submitDiscount : t.submitQuote}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
