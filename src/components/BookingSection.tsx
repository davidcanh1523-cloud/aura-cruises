import { useState } from 'react'
import { Calendar, Users, Ship, CheckCircle, ShieldCheck, Gift, PhoneCall, Sparkles, Send, ArrowRight } from 'lucide-react'

interface BookingSectionProps {
  lang: 'vi' | 'en'
  onBook: () => void
}

export default function BookingSection({ lang, onBook }: BookingSectionProps) {
  const [route, setRoute] = useState('halong-2n1d')
  const [cabin, setCabin] = useState('deluxe')
  const [departDate, setDepartDate] = useState('2026-11-20')
  const [guests, setGuests] = useState('2')
  const [transport, setTransport] = useState(true)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Pricing calculation logic
  const basePrices: Record<string, number> = {
    'deluxe': 2450000,
    'executive': 3290000,
    'presidential': 5600000
  }
  const baseMultiplier: Record<string, number> = {
    'halong-2n1d': 1.0,
    'lanha-2n1d': 1.1,
    'combo-3n2d': 1.85
  }

  const guestCount = parseInt(guests) || 2
  const cabinPrice = (basePrices[cabin] || 2450000) * (baseMultiplier[route] || 1)
  const transportPrice = transport ? 450000 * guestCount : 0
  const subtotal = cabinPrice * Math.ceil(guestCount / 2) + transportPrice
  const discount = Math.round(subtotal * 0.2) // 20% discount
  const finalTotal = subtotal - discount

  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(num) + '₫'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone) return
    setIsSubmitted(true)
  }

  const t = {
    vi: {
      badge: 'CÔNG CỤ ĐẶT PHÒNG GIỮ CHỖ TRỰC TUYẾN',
      title: 'Giữ Chỗ Hải Trình & Nhận Ưu Đãi 20%',
      subtitle: 'Kiểm tra ngày khởi hành còn trống theo thời gian thực và nhận báo giá ưu đãi trọn gói tức thì.',
      routeLabel: 'Chọn Hải Trình Nghỉ Dưỡng',
      route1: 'Hạ Long 2N1Đ (Sửng Sốt - Ti Tốp)',
      route2: 'Lan Hạ 2N1Đ (Ba Trái Đào - Hang Sáng Tối)',
      route3: 'Liên Vịnh 3N2Đ (Hạ Long + Lan Hạ + Việt Hải)',
      cabinLabel: 'Hạng Phòng Cabin Mong Muốn',
      cabin1: 'Deluxe Balcony Suite (38m²)',
      cabin2: 'Senior Executive Ocean View (48m²)',
      cabin3: 'Presidential Aura Heritage (85m² VIP)',
      dateLabel: 'Ngày Khởi Hành Dự Kiến',
      guestLabel: 'Số Lượng Khách',
      transportLabel: 'Xe Limousine Dcar đưa đón tận nơi (Hà Nội ↔ Hạ Long)',
      contactInfo: 'Thông Tin Liên Hệ Nhận Vé & Voucher',
      namePlaceholder: 'Họ và tên của bạn *',
      phonePlaceholder: 'Số điện thoại / Zalo nhận vé *',
      emailPlaceholder: 'Email nhận xác nhận đặt chỗ',
      notesPlaceholder: 'Yêu cầu đặc biệt (kỷ niệm ngày cưới, ăn chay, trang trí phòng...)',
      submitBtn: 'Xác Nhận Giữ Chỗ & Nhận Giảm 20%',
      successTitle: 'Đã Ghi Nhận Giữ Chỗ Thành Công!',
      successMsg: 'Chuyên viên tư vấn Aura Heritage Cruises sẽ liên hệ qua Zalo/Điện thoại trong vòng 5 phút để xác nhận chi tiết.',
      priceSummary: 'Tạm Tính Chi Phí Trọn Gói',
      discountTag: 'Đã áp dụng mã giảm giá độc quyền 20%',
      totalLabel: 'Tổng thanh toán ước tính:',
      giftsTitle: 'GÓI QUÀ TẶNG KÈM THEO DỰ ÁN (MIỄN PHÍ 100%)',
      gift1: 'Tặng Tên miền .com + Cloud Server 1 năm',
      gift2: 'Bảo hành 12 tháng bao trọn gói kỹ thuật',
      gift3: 'Bàn giao 100% Full Source Code mở rộng',
      gift4: 'Google PageSpeed 99/100, chuẩn SEO Top 1 Google'
    },
    en: {
      badge: 'ONLINE CABIN RESERVATION TOOL',
      title: 'Reserve Your Voyage & Save 20%',
      subtitle: 'Check real-time live cabin availability and receive immediate all-inclusive quotation.',
      routeLabel: 'Select Itinerary',
      route1: 'Ha Long Bay 2D1N (Sung Sot - Ti Top)',
      route2: 'Lan Ha Bay 2D1N (Ba Trai Dao - Bright Cave)',
      route3: 'Dual Bays 3D2N (Ha Long + Lan Ha + Viet Hai)',
      cabinLabel: 'Preferred Cabin Category',
      cabin1: 'Deluxe Balcony Suite (38m²)',
      cabin2: 'Senior Executive Ocean View (48m²)',
      cabin3: 'Presidential Aura Heritage (85m² VIP)',
      dateLabel: 'Departure Date',
      guestLabel: 'Number of Guests',
      transportLabel: 'Roundtrip Luxury Limousine Dcar Transfer (Hanoi ↔ Ha Long)',
      contactInfo: 'Contact Details for Voucher & Confirmation',
      namePlaceholder: 'Your Full Name *',
      phonePlaceholder: 'Phone number / WhatsApp *',
      emailPlaceholder: 'Email for e-ticket confirmation',
      notesPlaceholder: 'Special requests (anniversary, dietary requirements...)',
      submitBtn: 'Confirm Reservation & Claim 20% Off',
      successTitle: 'Reservation Successfully Submitted!',
      successMsg: 'Our Aura Heritage concierge team will contact you via WhatsApp/Phone within 5 minutes.',
      priceSummary: 'Cost Breakdown',
      discountTag: '20% Exclusive Promo Code Applied',
      totalLabel: 'Estimated Total:',
      giftsTitle: 'COMPLIMENTARY PROJECT INCLUSIONS (100% FREE)',
      gift1: 'Free .com Domain + Cloud High-Speed Server 1 Year',
      gift2: '12-Month Comprehensive Technical Warranty',
      gift3: '100% Full Source Code Transfer',
      gift4: 'Google PageSpeed 99/100, Top 1 SEO Structure'
    }
  }[lang]

  return (
    <section id="booking" className="py-24 relative overflow-hidden" style={{ background: '#0A1628' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-widest"
            style={{ background: 'rgba(201,168,76,0.12)', color: '#E8C96A', border: '1px solid rgba(201,168,76,0.3)' }}>
            <Ship className="w-3.5 h-3.5" />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gold-gradient" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.title}
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'rgba(248,250,252,0.7)', fontFamily: 'var(--font-sans)' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Main Grid: Form + Live Price Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Booking Form (8 cols) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-10 border border-yellow-500/20 shadow-2xl"
            style={{ background: 'rgba(15, 32, 64, 0.85)', backdropFilter: 'blur(20px)' }}>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.successTitle}</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">{t.successMsg}</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  {lang === 'vi' ? 'Đặt thêm phòng khác' : 'Make another reservation'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Route selection */}
                <div>
                  <label className="block text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2">
                    {t.routeLabel}
                  </label>
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

                {/* Cabin & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2">
                      {t.cabinLabel}
                    </label>
                    <select
                      value={cabin}
                      onChange={(e) => setCabin(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-yellow-400 focus:outline-none"
                    >
                      <option value="deluxe">{t.cabin1}</option>
                      <option value="executive">{t.cabin2}</option>
                      <option value="presidential">{t.cabin3}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2">
                      {t.guestLabel}
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-yellow-400 focus:outline-none"
                    >
                      <option value="1">1 Khách (Đi một mình)</option>
                      <option value="2">2 Khách (1 Phòng Đôi)</option>
                      <option value="4">4 Khách (2 Phòng Liền Kề)</option>
                      <option value="6">6+ Khách (Đoàn Gia Đình / VIP)</option>
                    </select>
                  </div>
                </div>

                {/* Date & Transfer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2">
                      {t.dateLabel}
                    </label>
                    <input
                      type="date"
                      value={departDate}
                      onChange={(e) => setDepartDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-yellow-400 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center pt-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={transport}
                        onChange={(e) => setTransport(e.target.checked)}
                        className="mt-1 rounded text-yellow-500 focus:ring-yellow-400"
                      />
                      <span className="text-xs text-slate-300 leading-tight">
                        {t.transportLabel} (+450.000₫/khách)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
                    {t.contactInfo}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder={t.namePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-yellow-400 focus:outline-none placeholder:text-slate-500"
                    />
                    <input
                      type="tel"
                      required
                      placeholder={t.phonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-yellow-400 focus:outline-none placeholder:text-slate-500"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-yellow-400 focus:outline-none placeholder:text-slate-500"
                  />

                  <textarea
                    rows={2}
                    placeholder={t.notesPlaceholder}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-yellow-400 focus:outline-none placeholder:text-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm btn-gold text-slate-950 transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01]"
                >
                  <Sparkles className="w-4 h-4" />
                  {t.submitBtn}
                </button>
              </form>
            )}
          </div>

          {/* Pricing & Guarantee Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Pricing Breakdown Card */}
            <div className="rounded-3xl p-6 sm:p-8 border border-yellow-500/30 shadow-xl"
              style={{ background: 'linear-gradient(135deg, rgba(7,16,34,0.95) 0%, rgba(15,32,64,0.95) 100%)' }}>
              
              <div className="text-xs uppercase font-bold text-yellow-400 tracking-wider mb-4 flex items-center justify-between">
                <span>{t.priceSummary}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                  Trọn Gói 6 Sao
                </span>
              </div>

              <div className="space-y-3 pb-6 border-b border-white/10 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Tiền phòng cabin ({guests} khách):</span>
                  <span className="font-semibold text-white">{formatVND(cabinPrice * Math.ceil(guestCount / 2))}</span>
                </div>
                {transport && (
                  <div className="flex justify-between">
                    <span>Xe Limousine VIP 2 chiều:</span>
                    <span className="font-semibold text-white">{formatVND(transportPrice)}</span>
                  </div>
                )}
                <div className="flex justify-between text-yellow-400">
                  <span>Ưu đãi đặt sớm (-20%):</span>
                  <span className="font-semibold">-{formatVND(discount)}</span>
                </div>
              </div>

              <div className="py-6 border-b border-white/10">
                <div className="text-xs text-slate-400 mb-1">{t.totalLabel}</div>
                <div className="text-3xl sm:text-4xl font-black text-gold-gradient leading-none">
                  {formatVND(finalTotal)}
                </div>
                <div className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {t.discountTag}
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>Miễn phí hủy/đổi lịch trước 7 ngày khởi hành</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>Bảo hiểm du lịch sông nước cao cấp 100%</span>
                </div>
              </div>
            </div>

            {/* Quick Call Action Card */}
            <div className="rounded-3xl p-6 bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-between">
              <div>
                <div className="text-xs text-yellow-300 font-semibold mb-1">Cần Tư Vấn Nhanh Hải Trình?</div>
                <div className="text-xl font-bold text-white">Hotline: 1900 8888</div>
                <div className="text-[11px] text-slate-400">Zalo tư vấn viên trực 24/7</div>
              </div>
              <a
                href="tel:19008888"
                className="p-3.5 rounded-full btn-gold text-slate-950 hover:scale-105 transition-all shadow-md"
              >
                <PhoneCall className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Gift Inclusions Banner (From user card screenshot) */}
        <div className="rounded-3xl p-8 border border-emerald-500/30 shadow-2xl relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(6,78,59,0.3) 0%, rgba(7,16,34,0.95) 100%)' }}>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Đặc Quyền Kèm Theo Dành Cho Khách Hàng</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{t.giftsTitle}</h3>
              </div>
            </div>

            <button
              onClick={onBook}
              className="px-6 py-3 rounded-full text-xs font-bold btn-gold text-slate-950 flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
            >
              <span>Nhận Trọn Bộ Quà Tặng</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[t.gift1, t.gift2, t.gift3, t.gift4].map((gift, i) => (
              <div key={i} className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-200 leading-snug">{gift}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
