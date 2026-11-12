import { useState } from 'react'
import { Utensils, GlassWater, Waves, Moon, SunMedium, Sparkles, Flame, CheckCircle } from 'lucide-react'

interface ExperiencesSectionProps {
  lang: 'vi' | 'en'
}

interface Experience {
  id: string
  title: string
  subtitle: string
  time: string
  icon: any
  image: string
  description: string
  points: string[]
}

const experiencesData: Record<'vi' | 'en', Experience[]> = {
  vi: [
    {
      id: 'dining',
      title: 'Ẩm Thực Tinh Hoa Fine Dining',
      subtitle: 'Thực đơn 5 món Michelin kết hợp hải sản tươi sống vịnh biển',
      time: '18:30 – 21:00 Hàng Ngày',
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
      description: 'Được đích thân Bếp trưởng chuẩn sao chuẩn bị từ tôm hùm Hạ Long, bề bề tươi, bò Wagyu nướng than hoa kết hợp cùng rượu vang hảo hạng trong không gian lung linh ánh nến.',
      points: [
        'Tôm hùm Hạ Long hấp vang trắng & bơ tỏi',
        'Súp bào ngư vi cá phục vụ tại bàn',
        'Thực đơn chay & thực đơn trẻ em theo yêu cầu riêng',
        'Bộ sưu tập hơn 60 loại vang nhập khẩu từ Pháp, Ý, Chile'
      ]
    },
    {
      id: 'sunset',
      title: 'Tiệc Hoàng Hôn Sundeck Party',
      subtitle: 'Khoảnh khắc rực rỡ nhất khi mặt trời lặn sau dãy núi đá vôi',
      time: '17:00 – 18:30 Lúc Hoàng Hôn',
      icon: GlassWater,
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80',
      description: 'Thưởng thức âm nhạc Acoustic du dương, nhấp ngụm cocktail nhiệt đới do bartender pha chế và thưởng lãm vũ điệu màu sắc kỳ diệu của mây trời phản chiếu xuống mặt vịnh.',
      points: [
        'Cocktail & Mocktail pha chế trực tiếp tại quầy Bar vòm',
        'Khay canapé & trái cây tươi mùa hạ phục vụ miễn phí',
        'Góc check-in hoàng hôn triệu đô với lưới võng biển vô cực',
        'Âm nhạc Saxophone & Guitar hòa quyện cùng tiếng sóng'
      ]
    },
    {
      id: 'kayak',
      title: 'Chèo Thuyền Kayak & Thăm Hang Thần Bí',
      subtitle: 'Tự tay lướt mái chèo luồn lách qua các vòm hang thạch nhũ hàng triệu năm',
      time: '14:30 – 16:30 Buổi Chiều',
      icon: Waves,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      description: 'Trải nghiệm mạo hiểm nhẹ nhàng nhưng đầy phấn khích khi thuyền kayak đưa bạn vào những vũng biển kín gió, nơi làn nước trong vắt nhìn thấy cả đàn cá bơi lội.',
      points: [
        'Trang bị thuyền kayak đôi cao cấp & áo phao an toàn 100%',
        'Thợ lặn và huấn luyện viên chuyên nghiệp kèm sát',
        'Tham quan đầm nước kín biệt lập chỉ có thể vào khi thủy triều rút',
        'Cơ hội bắt gặp loài voọc Cát Bà quý hiếm trên vách đá'
      ]
    },
    {
      id: 'taichi',
      title: 'Thái Cực Quyền Đón Bình Minh',
      subtitle: 'Khởi đầu ngày mới thanh tịnh, nạp nguồn năng lượng tích cực từ thiên nhiên',
      time: '06:15 – 07:00 Bình Minh',
      icon: SunMedium,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      description: 'Hít hà bầu không khí trong lành đẫm sương sớm của vịnh biển, thực hiện các động tác Thái Cực Quyền uyển chuyển dưới sự hướng dẫn của võ sư chuyên nghiệp.',
      points: [
        'Lớp học mở miễn phí cho mọi lứa tuổi trên sundeck tầng thượng',
        'Thưởng thức trà thảo mộc hoa sen và cà phê sáng nóng hổi',
        'Khoảnh khắc ánh nắng đầu tiên xuyên qua sương mờ núi đá',
        'Thanh lọc cơ thể và tâm trí giữa không gian tĩnh mịch'
      ]
    },
    {
      id: 'jacuzzi',
      title: 'Bể Bơi Sục Jacuzzi Nước Ấm Bốn Mùa',
      subtitle: 'Ngâm mình giữa biển trời trong làn nước massage thủy lực sảng khoái',
      time: '07:00 – 22:00 Cả Ngày',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      description: 'Bể bơi mini ngoài trời với hệ thống điều nhiệt bốn mùa và vòi phun massage áp lực cao, giúp giải tỏa mọi căng thẳng mệt mỏi trong khi ngắm nhìn di sản.',
      points: [
        'Nhiệt độ nước luôn giữ ở mức 36°C - 38°C lý tưởng',
        'Hệ thống lọc nước ozone sinh học dịu nhẹ cho làn da',
        'Phục vụ rượu sủi tăm ngay tại thành bể bơi',
        'Tầm nhìn mở hoàn toàn về phía đường chân trời biển'
      ]
    },
    {
      id: 'squid',
      title: 'Câu Mực Đêm & Rạp Chiếu Phim Vịnh Biển',
      subtitle: 'Trải nghiệm đêm tĩnh lặng với những hoạt động giải trí độc đáo',
      time: '20:30 – 23:00 Đêm Khuya',
      icon: Moon,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
      description: 'Đêm trên vịnh huyền ảo với ánh đèn dụ mực sáng lấp lánh mạn tàu, thử tài làm ngư dân câu mực đêm hoặc ngả lưng xem phim điện ảnh dưới bầu trời sao.',
      points: [
        'Cung cấp đầy đủ cần câu và mồi giả dạ quang chuyên nghiệp',
        'Hải sản câu được sẽ được đầu bếp chế biến nóng hổi ngay tại chỗ',
        'Rạp chiếu phim ngoài trời với màn chiếu 150 inch độ nét cao',
        'Phòng hát Karaoke VIP cách âm tiêu chuẩn quốc tế'
      ]
    }
  ],
  en: [
    {
      id: 'dining',
      title: 'Michelin-Caliber Fine Dining',
      subtitle: '5-course gastronomic symphony featuring wild Ha Long bay seafood',
      time: '18:30 – 21:00 Daily',
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
      description: 'Prepared personally by our Master Chef, highlighting local ocean lobster, fresh mantis shrimp, charcoal-grilled Wagyu paired with international fine vintage wines.',
      points: [
        'Ha Long rock lobster poached in white wine and herb garlic butter',
        'Braised whole abalone soup served course by course',
        'Custom vegetarian & children degustation menus available on request',
        'Curated cellar of over 60 wine labels from France, Italy & Chile'
      ]
    },
    {
      id: 'sunset',
      title: 'Sunset Deck Cocktail Gala',
      subtitle: 'The golden hour as sunlight dissolves into limestone horizons',
      time: '17:00 – 18:30 Golden Hour',
      icon: GlassWater,
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80',
      description: 'Sip bespoke tropical cocktails concocted by our resident mixologist while acoustic rhythms blend seamlessly into the gentle splashing of oceanic waves.',
      points: [
        'Signature cocktails & mocktails crafted live at the upper circular bar',
        'Complimentary passed canapés and freshly sliced tropical fruits',
        'Iconic open-mesh catamaran sea-hammocks for panoramic photos',
        'Live saxophone & acoustic guitar melodies during sunset transitions'
      ]
    },
    {
      id: 'kayak',
      title: 'Cave Kayaking & Tidal Expeditions',
      subtitle: 'Glide smoothly through ancient limestone arches shaped over millions of years',
      time: '14:30 – 16:30 Afternoon',
      icon: Waves,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      description: 'A gentle yet exhilarating adventure guiding your kayak into enclosed emerald lagoons, so transparent you can observe coral formations below.',
      points: [
        'Premium tandem ocean kayaks & safety certified life vests',
        'Accompanied by professional marine safety guides and instructors',
        'Explore secret lagoons accessible only during brief tidal windows',
        'Rare chance to witness endangered golden-headed langurs on cliffs'
      ]
    },
    {
      id: 'taichi',
      title: 'Sunrise Tai Chi Wellness',
      subtitle: 'Awaken body & mind with harmonic martial arts as morning mist rises',
      time: '06:15 – 07:00 Dawn',
      icon: SunMedium,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      description: 'Breathe crisp sea air as morning sunlight breaks over the jagged peaks, practicing meditative slow movements alongside a certified Tai Chi master.',
      points: [
        'Open complimentary session for all guests on the topmost sundeck',
        'Serving steaming lotus blossom tea and artisan drip coffee',
        'Capture the first rays piercing through the morning bay mist',
        'Total mind rejuvenation in silent natural grandeur'
      ]
    },
    {
      id: 'jacuzzi',
      title: 'Four-Season Heated Hydro Jacuzzi',
      subtitle: 'Indulge in heated hydromassage bliss surrounded by seascape panoramas',
      time: '07:00 – 22:00 All Day',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      description: 'Outdoor thermoregulated whirlpool designed with high-pressure jets, washing away fatigue as you gaze across the legendary horizon.',
      points: [
        'Constant temperature maintained at an ideal 36°C - 38°C year-round',
        'Eco-friendly ozone filtration system gentle on skin',
        'Champagne & fruit service directly by the pool ledge',
        'Completely unobstructed view towards the open ocean'
      ]
    },
    {
      id: 'squid',
      title: 'Night Squid Fishing & Bay Cinema',
      subtitle: 'Mystical evening leisure with authentic fisherman encounters',
      time: '20:30 – 23:00 Night',
      icon: Moon,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
      description: 'Experience the silent allure of the bay at night with glowing attractor lamps, try your luck catching squid or recline for cinema under the stars.',
      points: [
        'Equipped with specialized luminescence rods & glowing jigs',
        'Your fresh catch prepared and served immediately by onboard chefs',
        'Open-air cinema with a 150-inch 4K screen and lounge beanbags',
        'Soundproof VIP private karaoke lounge with international song list'
      ]
    }
  ]
}

export default function ExperiencesSection({ lang }: ExperiencesSectionProps) {
  const [selectedExp, setSelectedExp] = useState(0)

  const experiences = experiencesData[lang]
  const current = experiences[selectedExp]

  const t = {
    vi: {
      badge: 'TRẢI NGHIỆM ĐỘC BẢN 6 SAO',
      title: 'Mỗi Giây Phút Đều Là Kiệt Tác',
      subtitle: 'Không đơn thuần là một chuyến đi, Aura Heritage mang đến chuỗi phong cách sống xa hoa và gắn kết sâu sắc cùng kỳ quan thiên nhiên.',
      learnMore: 'Xem chi tiết hoạt động',
      timeLabel: 'Thời gian:',
      allIncluded: 'Hoạt động đã bao gồm trọn gói trong vé'
    },
    en: {
      badge: 'EXCLUSIVE 6-STAR EXPERIENCES',
      title: 'Every Moment An Art Piece',
      subtitle: 'Beyond an ordinary journey, Aura Heritage offers an elevated luxury lifestyle intertwined deeply with world natural wonders.',
      learnMore: 'View experience details',
      timeLabel: 'Schedule:',
      allIncluded: 'Activity fully included in all cruise packages'
    }
  }[lang]

  return (
    <section id="experiences" className="py-24 relative overflow-hidden" style={{ background: '#0A1628' }}>
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-widest"
            style={{ background: 'rgba(201,168,76,0.12)', color: '#E8C96A', border: '1px solid rgba(201,168,76,0.3)' }}>
            <Sparkles className="w-3.5 h-3.5" />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gold-gradient" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.title}
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'rgba(248,250,252,0.7)', fontFamily: 'var(--font-sans)' }}>
            {t.subtitle}
          </p>
        </div>

        {/* 6 Experiences Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon
            const isSelected = selectedExp === idx
            return (
              <div
                key={exp.id}
                onClick={() => setSelectedExp(idx)}
                className={`group cursor-pointer rounded-3xl overflow-hidden transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'border-yellow-500 shadow-xl scale-[1.02] bg-slate-900/90'
                    : 'border-white/10 bg-slate-900/50 hover:border-yellow-500/40 hover:bg-slate-900/70'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-black/60 backdrop-blur-md border border-yellow-500/30 text-yellow-400">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-medium text-yellow-400 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md">
                      {exp.time}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {exp.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-yellow-400">
                    <span>{t.learnMore}</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Feature Spotlight Detail Box */}
        <div className="rounded-3xl p-6 sm:p-10 border border-yellow-500/30 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(7,16,34,0.95) 100%)' }}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative h-72 lg:h-96 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-2xl">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-slate-950 bg-yellow-400 inline-block mb-2">
                  {current.time}
                </span>
                <div className="text-white font-bold text-sm">{current.title}</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="text-xs uppercase font-semibold text-yellow-400 tracking-wider mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {t.allIncluded}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Highlights points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
