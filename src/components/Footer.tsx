import { Ship, Phone, Mail, MapPin, Globe, Shield, Award, CheckCircle, ExternalLink } from 'lucide-react'

interface FooterProps {
  lang: 'vi' | 'en'
  onCTA: () => void
}

export default function Footer({ lang, onCTA }: FooterProps) {
  const t = {
    vi: {
      brandDesc: 'Aura Heritage Cruises – Tiên phong mang đến kỳ quan vịnh biển với du thuyền 6 sao, xem cabin 360 độ, hải trình độc bản và đặt phòng giữ chỗ trực tuyến.',
      projectSpecs: 'Thông Số Bàn Giao Dự Án Web',
      speedTag: 'Điểm Google PageSpeed: 99/100 • Chuẩn SEO Top 1 Google',
      deliveryTime: 'Thời gian hoàn thiện: 24 - 48 giờ',
      freeGift1: 'Tặng Tên miền .com + Cloud Server 1 năm',
      freeGift2: 'Bảo hành 12 tháng bao trọn gói kỹ thuật',
      freeGift3: 'Bàn giao 100% Full Source Code',
      price: 'Chi phí trọn gói: Từ 2,2tr',
      btnCTA: 'Đặt Làm Bản Này / Nhận Báo Giá',
      addressOffice: 'Văn phòng: Cảng Tàu Khách Quốc Tế Tuần Châu, TP. Hạ Long, Quảng Ninh',
      addressHanoi: 'Văn phòng giao dịch: Số 68 Lý Thường Kiệt, Hoàn Kiếm, Hà Nội',
      hotline: 'Hotline 24/7: 1900 8888 • Zalo: 0988 123 456',
      email: 'booking@auracruises.vn',
      navTitle: 'Hải Trình & Tiện Ích',
      navCabins: 'Khám Phá Cabin 360°',
      navExperiences: 'Ẩm Thực & Trải Nghiệm',
      navReviews: 'Cảm Nhận Du Khách',
      navBooking: 'Đặt Phòng Trực Tuyến',
      copyright: '© 2026 Aura Heritage Cruises. Bản quyền thuộc về Aura Hospitality Group. Tất cả các quyền được bảo lưu.'
    },
    en: {
      brandDesc: 'Aura Heritage Cruises – Pioneering luxury voyages with 6-star cruising, interactive 360° cabin virtual tours, bespoke itineraries, and live online reservations.',
      projectSpecs: 'Web Project Handover Specifications',
      speedTag: 'Google PageSpeed Score: 99/100 • Top 1 SEO Ready',
      deliveryTime: 'Delivery Timeframe: 24 - 48 Hours',
      freeGift1: 'Complimentary .com Domain + Cloud Server 1 Year',
      freeGift2: '12-Month Comprehensive Technical Warranty',
      freeGift3: '100% Full Source Code Ownership Handover',
      price: 'All-inclusive: From 2.2M VND',
      btnCTA: 'Build This Edition / Get Quotation',
      addressOffice: 'Cruise Terminal: Tuan Chau International Marina, Ha Long, Quang Ninh',
      addressHanoi: 'Representative Office: 68 Ly Thuong Kiet, Hoan Kiem, Hanoi',
      hotline: '24/7 Concierge: +84 1900 8888 • WhatsApp: +84 988 123 456',
      email: 'booking@auracruises.vn',
      navTitle: 'Itineraries & Suites',
      navCabins: '360° Suite Virtual Tours',
      navExperiences: 'Culinary & Activities',
      navReviews: 'Guest Reviews',
      navBooking: 'Online Reservation',
      copyright: '© 2026 Aura Heritage Cruises. Operated by Aura Hospitality Group. All rights reserved.'
    }
  }[lang]

  return (
    <footer className="relative pt-20 pb-12 overflow-hidden border-t border-yellow-500/20" style={{ background: '#050B17' }}>
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Section: Brand + Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16 pb-12 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center btn-gold shadow-lg">
                <Ship className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <span className="text-xl font-black text-gold-gradient tracking-wider block" style={{ fontFamily: 'var(--font-heading)' }}>
                  AURA HERITAGE
                </span>
                <span className="text-[10px] tracking-widest text-yellow-400/80 block uppercase">
                  6-Star Luxury Cruises
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-md">
              {t.brandDesc}
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>{t.addressOffice}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>{t.addressHanoi}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-white font-medium">{t.hotline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>{t.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-4">
              {t.navTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#routes" className="hover:text-yellow-400 transition-colors">✦ Hải Trình 2N1Đ Hạ Long</a></li>
              <li><a href="#routes" className="hover:text-yellow-400 transition-colors">✦ Hải Trình 2N1Đ Lan Hạ</a></li>
              <li><a href="#routes" className="hover:text-yellow-400 transition-colors">✦ Hải Trình 3N2Đ Liên Vịnh</a></li>
              <li><a href="#cabins" className="hover:text-yellow-400 transition-colors">✦ {t.navCabins}</a></li>
              <li><a href="#experiences" className="hover:text-yellow-400 transition-colors">✦ {t.navExperiences}</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-400 transition-colors">✦ {t.navReviews}</a></li>
              <li><a href="#booking" className="hover:text-yellow-400 transition-colors">✦ {t.navBooking}</a></li>
            </ul>
          </div>

          {/* Specs Card (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl p-6 bg-slate-900/80 border border-yellow-500/20 shadow-xl">
            <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              {t.projectSpecs}
            </div>

            <div className="text-xl font-black text-gold-gradient mb-1">
              {t.price}
            </div>
            <div className="text-[11px] text-emerald-400 font-semibold mb-4">
              ✓ {t.deliveryTime}
            </div>

            <div className="space-y-2 mb-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>{t.freeGift1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>{t.freeGift2}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>{t.freeGift3}</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-300">
                <Shield className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                <span>{t.speedTag}</span>
              </div>
            </div>

            <button
              onClick={onCTA}
              className="w-full py-3 rounded-xl font-bold text-xs btn-gold text-slate-950 transition-all shadow-md"
            >
              ✦ {t.btnCTA}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-white/5 pt-6">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Chính Sách Bảo Mật</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Điều Khoản Dịch Vụ</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Bảo Hiểm Hàng Hải</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
