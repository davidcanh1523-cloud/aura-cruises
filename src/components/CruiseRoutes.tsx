import { useState } from 'react'
import { Calendar, Clock, MapPin, Compass, CheckCircle2, ChevronRight, Users, Sparkles } from 'lucide-react'

interface CruiseRoutesProps {
  lang: 'vi' | 'en'
  onBook: () => void
}

interface RouteItem {
  id: string
  title: string
  duration: string
  highlights: string[]
  price: string
  originalPrice: string
  rating: number
  reviews: number
  bay: string
  image: string
  tags: string[]
  included: string[]
}

const routesData: Record<'vi' | 'en', RouteItem[]> = {
  vi: [
    {
      id: 'hl-2n1d',
      title: 'Hải Trình Kỳ Quan: Vịnh Hạ Long – Hang Sửng Sốt – Đảo Ti Tốp',
      duration: '2 Ngày 1 Đêm',
      bay: 'Vịnh Hạ Long',
      price: '2.450.000₫',
      originalPrice: '3.200.000₫',
      rating: 4.95,
      reviews: 328,
      tags: ['Bán Chạy Nhất', 'Du Thuyền 6 Sao'],
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      highlights: [
        'Khám phá Hang Sửng Sốt – hang động thạch nhũ kỳ vĩ nhất',
        'Chèo thuyền Kayak xuyên Hang Luồn ngắm voọc Cát Bà',
        'Check-in đỉnh Ti Tốp toàn cảnh vịnh 360 độ lúc hoàng hôn',
        'Bữa tối Gala hải sản 5 sao & tiệc Sunset Party tầng thượng'
      ],
      included: ['Phòng Suite ban công riêng', '4 bữa ăn tiêu chuẩn Fine Dining', 'Vé tham quan & kayak miễn phí', 'Trà chiều & canape hoàng hôn']
    },
    {
      id: 'lh-2n1d',
      title: 'Hải Trình Nguyên Sơ: Vịnh Lan Hạ – Ba Trái Đào – Hang Sáng Tối',
      duration: '2 Ngày 1 Đêm',
      bay: 'Vịnh Lan Hạ & Cát Bà',
      price: '2.690.000₫',
      originalPrice: '3.600.000₫',
      rating: 4.98,
      reviews: 412,
      tags: ['Độc Bản Biển Xanh', 'Yên Bình Tuyệt Đối'],
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      highlights: [
        'Hải trình tĩnh lặng, không ồn ào giữa làn nước ngọc bích',
        'Tắm biển & kayak tại bãi tắm tự nhiên Ba Trái Đào hoang sơ',
        'Thuyền nan người bản địa chèo qua Hang Sáng Hang Tối bí ẩn',
        'Ngâm mình tại bể sục Jacuzzi bốn mùa trên boong tàu'
      ],
      included: ['Cabin Deluxe Ocean View', 'Setup rượu vang & hoa quả', 'Miễn phí Kayak & SUP', 'Lớp học nấu ăn & Tai Chi sáng']
    },
    {
      id: 'combo-3n2d',
      title: 'Hành Trình Tinh Tuyển: Liên Vịnh Hạ Long – Lan Hạ – Làng Chài Việt Hải',
      duration: '3 Ngày 2 Đêm',
      bay: 'Hạ Long & Lan Hạ',
      price: '4.850.000₫',
      originalPrice: '6.500.000₫',
      rating: 5.0,
      reviews: 184,
      tags: ['Trải Nghiệm Cao Cấp', 'Tour VIP'],
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80',
      highlights: [
        'Đạp xe xuyên rừng quốc gia Cát Bà vào làng cổ Việt Hải',
        'Trải nghiệm câu mực đêm & ngắm bầu trời sao giữa vịnh biển',
        'Thưởng thức BBQ hải sản tôm hùm ngay trên sundeck thoáng đãng',
        'Massage thư giãn trị liệu thảo mộc tại Lotus Spa'
      ],
      included: ['Presidential Suite view 270°', 'Xe Limousine Dcar đón trả Hà Nội', 'Tặng 1 liệu trình Spa 45 phút', 'Đặc quyền quản gia cá nhân']
    }
  ],
  en: [
    {
      id: 'hl-2n1d',
      title: 'Wonder Itinerary: Ha Long Bay – Sung Sot Cave – Ti Top Island',
      duration: '2 Days 1 Night',
      bay: 'Ha Long Bay',
      price: 'From $105/guest',
      originalPrice: '$140',
      rating: 4.95,
      reviews: 328,
      tags: ['Best Seller', '6-Star Cruise'],
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
      highlights: [
        'Marvel at Sung Sot – the most majestic limestone stalactite cave',
        'Kayak through Luon Cave to observe wild Cat Ba langurs',
        'Panoramic 360° sunset photography on Ti Top summit',
        '5-star Seafood Gala dinner & rooftop sunset cocktail party'
      ],
      included: ['Private balcony suite cabin', '4 Fine Dining gourmet meals', 'All tickets, kayaking & guide included', 'Sunset afternoon tea & treats']
    },
    {
      id: 'lh-2n1d',
      title: 'Pristine Journey: Lan Ha Bay – Ba Trai Dao Beach – Bright & Dark Cave',
      duration: '2 Days 1 Night',
      bay: 'Lan Ha Bay & Cat Ba',
      price: 'From $115/guest',
      originalPrice: '$155',
      rating: 4.98,
      reviews: 412,
      tags: ['Exclusive Route', 'Tranquil Serenity'],
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      highlights: [
        'Quiet cruising along emerald crystalline lagoons',
        'Swimming & kayaking at the secluded Ba Trai Dao islet beaches',
        'Sampan boat rowing through mystical tidal caves',
        'Four-season heated Jacuzzi pool on the upper sundeck'
      ],
      included: ['Deluxe Ocean View Cabin', 'Complimentary wine & fruits', 'Free Kayak & SUP boards', 'Vietnamese cooking & Tai Chi class']
    },
    {
      id: 'combo-3n2d',
      title: 'Signature Odyssey: Dual Bays Ha Long – Lan Ha – Viet Hai Ancient Village',
      duration: '3 Days 2 Nights',
      bay: 'Ha Long & Lan Ha',
      price: 'From $210/guest',
      originalPrice: '$280',
      rating: 5.0,
      reviews: 184,
      tags: ['VIP Luxury', 'All-Inclusive'],
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80',
      highlights: [
        'Bicycle excursion through Cat Ba National Park to Viet Hai',
        'Night squid fishing and star gazing under deep oceanic sky',
        'Premium lobster BBQ dinner served on open-air sundeck',
        'Herbal massage session at Lotus Wellness Sanctuary'
      ],
      included: ['270° Panoramic Presidential Suite', 'Roundtrip Dcar Limousine Hanoi', 'Complimentary 45-min Spa treatment', 'Dedicated personal butler']
    }
  ]
}

export default function CruiseRoutes({ lang, onBook }: CruiseRoutesProps) {
  const [activeBay, setActiveBay] = useState<'all' | 'halong' | 'lanha'>('all')
  const [selectedRoute, setSelectedRoute] = useState(routesData[lang][0].id)

  const routes = routesData[lang]
  const currentItem = routes.find(r => r.id === selectedRoute) || routes[0]

  const t = {
    vi: {
      badge: 'HẢI TRÌNH ĐỘC BẢN 2026',
      title: 'Lựa Chọn Lộ Trình Nghỉ Dưỡng',
      subtitle: 'Tất cả các hải trình được thiết kế chậm rãi để quý khách chiêm ngưỡng trọn vẹn cảnh sắc kỳ quan và thư giãn tối đa.',
      filterAll: 'Tất Cả Tuyến',
      filterHalong: 'Vịnh Hạ Long',
      filterLanha: 'Vịnh Lan Hạ',
      departCheck: 'Kiểm tra ngày trống',
      detailsTitle: 'Điểm Nhấn Hải Trình Chi Tiết',
      includedTitle: 'Đặc Quyền Bao Gồm',
      bookThis: 'Giữ Chỗ Lộ Trình Này',
      hotlineHint: 'Tư vấn trực tiếp 24/7 qua Zalo & Hotline'
    },
    en: {
      badge: 'EXCLUSIVE ITINERARIES 2026',
      title: 'Select Your Voyage Experience',
      subtitle: 'Every route is curated with an unhurried pace, allowing guests to immerse in UNESCO heritage wonders and supreme relaxation.',
      filterAll: 'All Routes',
      filterHalong: 'Ha Long Bay',
      filterLanha: 'Lan Ha Bay',
      departCheck: 'Check Available Dates',
      detailsTitle: 'Voyage Highlights',
      includedTitle: 'Privileges Included',
      bookThis: 'Book This Voyage',
      hotlineHint: 'Instant 24/7 consultation via WhatsApp & Hotline'
    }
  }[lang]

  return (
    <section id="routes" className="py-24 relative overflow-hidden" style={{ background: '#0A1628' }}>
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-widest"
            style={{ background: 'rgba(201,168,76,0.12)', color: '#E8C96A', border: '1px solid rgba(201,168,76,0.3)' }}>
            <Compass className="w-3.5 h-3.5" />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gold-gradient" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.title}
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'rgba(248,250,252,0.7)', fontFamily: 'var(--font-sans)' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Route Select Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {routes.map((route) => {
            const isSelected = route.id === selectedRoute
            return (
              <div
                key={route.id}
                onClick={() => setSelectedRoute(route.id)}
                className={`group cursor-pointer rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'ring-2 ring-yellow-500 shadow-2xl scale-[1.02]'
                    : 'hover:border-yellow-600/40 border border-white/5 opacity-85 hover:opacity-100'
                }`}
                style={{
                  background: isSelected ? 'rgba(15, 32, 64, 0.9)' : 'rgba(10, 22, 40, 0.7)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: isSelected ? '0 10px 40px rgba(201,168,76,0.2)' : 'none'
                }}
              >
                {/* Image & Badges */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  {/* Badges on image */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {route.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-900"
                        style={{ background: '#E8C96A' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md bg-black/50 text-slate-200">
                      <Clock className="w-3.5 h-3.5 text-yellow-400" />
                      {route.duration}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-400 font-semibold">
                      ★ {route.rating} <span className="text-slate-400">({route.reviews})</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      {route.bay}
                    </div>
                    <h3 className="font-bold text-lg text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                      {route.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-4">
                    <div>
                      <div className="text-[11px] text-slate-400 line-through">{route.originalPrice}</div>
                      <div className="text-xl font-black text-gold-gradient">{route.price}</div>
                    </div>
                    <span className={`p-2.5 rounded-full transition-all ${
                      isSelected ? 'bg-yellow-500 text-slate-950' : 'bg-white/10 text-slate-300 group-hover:bg-yellow-500 group-hover:text-slate-950'
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Selected Route Spotlight Banner */}
        <div className="rounded-3xl p-6 sm:p-10 border border-yellow-500/30 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(15,32,64,0.95) 0%, rgba(7,16,34,0.95) 100%)' }}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Description */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-yellow-400 mb-2">
                <Sparkles className="w-4 h-4" />
                {t.detailsTitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
                {currentItem.title}
              </h3>

              <div className="space-y-3 mb-8">
                {currentItem.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span className="text-sm text-slate-300 leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-3">
                  {t.includedTitle}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentItem.included.map((inc, i) => (
                    <div key={i} className="text-xs text-slate-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                      {inc}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Booking Card */}
            <div className="lg:col-span-5 bg-slate-900/80 rounded-2xl p-6 border border-yellow-500/20 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-xs text-slate-400 uppercase">{lang === 'vi' ? 'Giá ưu đãi độc quyền' : 'Special offer price'}</span>
                  <div className="text-3xl font-black text-gold-gradient">{currentItem.price}</div>
                  <span className="text-[11px] text-emerald-400">✓ Đã bao gồm vé & thuế phí</span>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-semibold border border-yellow-500/30">
                    {currentItem.duration}
                  </span>
                </div>
              </div>

              {/* Date & Guest Mock Selector */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-300 text-xs">
                    <Calendar className="w-4 h-4 text-yellow-400" />
                    <span>{lang === 'vi' ? 'Khởi hành:' : 'Departure:'}</span>
                  </div>
                  <span className="text-xs font-semibold text-white">Thứ 7 tuần này & Hàng ngày</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-300 text-xs">
                    <Users className="w-4 h-4 text-yellow-400" />
                    <span>{lang === 'vi' ? 'Sức chứa:' : 'Capacity:'}</span>
                  </div>
                  <span className="text-xs font-semibold text-white">2 Người lớn + 1 Trẻ em</span>
                </div>
              </div>

              <button
                onClick={onBook}
                className="w-full py-4 rounded-xl font-bold text-sm btn-gold text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                ✦ {t.bookThis}
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-3">
                {t.hotlineHint}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
