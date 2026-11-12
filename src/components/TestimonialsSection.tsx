import { useState } from 'react'
import { Star, Quote, CheckCircle2, Award, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

interface TestimonialsSectionProps {
  lang: 'vi' | 'en'
}

interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  rating: number
  date: string
  cabin: string
  content: string
  tags: string[]
}

const testimonialsData: Record<'vi' | 'en', Testimonial[]> = {
  vi: [
    {
      id: 'rev-1',
      name: 'Vũ Minh Tuấn & Mai Lan',
      role: 'CEO & Founder TechCorp • Hà Nội',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
      rating: 5,
      date: 'Tháng 10, 2026',
      cabin: 'Presidential Suite (Hải Trình 3N2Đ)',
      tags: ['Kỷ Niệm Ngày Cưới', 'Khách VIP'],
      content: 'Chuyến đi kỷ niệm 5 năm ngày cưới vượt xa mong đợi của hai vợ chồng. Phòng Presidential có ban công góc cong 270 độ ngắm hoàng hôn vịnh Lan Hạ đẹp đến nín thở. Đồ ăn Fine Dining tôm hùm tươi ngọt và bạn quản gia riêng chăm sóc chu đáo từng chi tiết nhỏ nhất!'
    },
    {
      id: 'rev-2',
      name: 'Alexander & Sophia Dupont',
      role: 'Kiến Trúc Sư Cảnh Quan • Paris, Pháp',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
      date: 'Tháng 11, 2026',
      cabin: 'Senior Executive Ocean View',
      tags: ['Du Khách Châu Âu', '5 Sao Quốc Tế'],
      content: 'Là kiến trúc sư, tôi thực sự bị ấn tượng bởi ngôn ngữ thiết kế Indochine tinh tế trên du thuyền Aura Heritage. Sự kết hợp giữa gỗ tự nhiên, kim loại mạ vàng và ánh sáng tự nhiên qua kính tràn viền tạo nên trải nghiệm thư giãn đẳng cấp không thua kém các du thuyền sang trọng tại Monaco hay Địa Trung Hải.'
    },
    {
      id: 'rev-3',
      name: 'Bác Sĩ Nguyễn Hoàng Yến',
      role: 'Viện Trưởng Nha Khoa Thẩm Mỹ • TP. Hồ Chí Minh',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
      rating: 5,
      date: 'Tháng 9, 2026',
      cabin: 'Deluxe Balcony Suite',
      tags: ['Kỳ Nghỉ Gia Đình', 'Dịch Vụ Tuyệt Hảo'],
      content: 'Gia đình mình có cả bố mẹ lớn tuổi và hai bé nhỏ. Điều mình ưng ý nhất là tàu chạy cực kỳ êm ái, hoàn toàn không bị say sóng. Các hoạt động như chèo thuyền kayak và lớp Thái Cực Quyền bình minh được ban tổ chức sắp xếp rất khoa học và an toàn. Nhất định sẽ quay lại!'
    }
  ],
  en: [
    {
      id: 'rev-1',
      name: 'Tuan Vu & Mai Lan',
      role: 'TechCorp Founder • Hanoi, Vietnam',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
      rating: 5,
      date: 'October 2026',
      cabin: 'Presidential Suite (3D2N Odyssey)',
      tags: ['Anniversary Getaway', 'VIP Guest'],
      content: 'Our 5th wedding anniversary surpassed every expectation. The Presidential Suite curved 270-degree balcony framed Lan Ha Bay sunsets so breathtakingly it felt surreal. The fine dining lobster was pristine, and our private butler looked after our every whim!'
    },
    {
      id: 'rev-2',
      name: 'Alexander & Sophia Dupont',
      role: 'Landscape Architects • Paris, France',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
      date: 'November 2026',
      cabin: 'Senior Executive Ocean View',
      tags: ['European Travelers', 'World-Class Standard'],
      content: 'As architects, we were thoroughly charmed by the Indochine neo-classical aesthetic of Aura Heritage. The synthesis of authentic oak woodwork, brushed brass, and natural light matches the prestige of luxury mega-yachts in Monaco and the Mediterranean.'
    },
    {
      id: 'rev-3',
      name: 'Dr. Nguyen Hoang Yen',
      role: 'Dental Clinic Director • Ho Chi Minh City',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
      rating: 5,
      date: 'September 2026',
      cabin: 'Deluxe Balcony Suite',
      tags: ['Family Holiday', 'Impeccable Service'],
      content: 'We traveled with elderly parents and young children. What impressed us most was how smooth and silent the cruise navigated—zero seasickness. The cave kayaking and sunrise Tai Chi were seamlessly curated and remarkably safe.'
    }
  ]
}

export default function TestimonialsSection({ lang }: TestimonialsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0)

  const reviews = testimonialsData[lang]
  const current = reviews[activeIdx]

  const t = {
    vi: {
      badge: 'CẢM NHẬN TỪ KHÁCH HÀNG',
      title: 'Được Yêu Thích Bởi Hơn 15.000+ Du Khách',
      subtitle: 'Tự hào đón nhận giải thưởng danh giá Travelers’ Choice Best of the Best 2026 từ cộng đồng du lịch quốc tế.',
      verified: 'Khách Đã Nghỉ Dưỡng Thực Tế',
      prev: 'Đánh giá trước',
      next: 'Đánh giá tiếp theo',
      statRating: '4.98 / 5.0',
      statCount: 'Hơn 1.250 đánh giá xuất sắc trên TripAdvisor & Google Reviews',
      awardTitle: 'TripAdvisor Travelers’ Choice 2026 Winner'
    },
    en: {
      badge: 'GUEST EXPERIENCES',
      title: 'Cherished by 15,000+ Discerning Travelers',
      subtitle: 'Proud recipient of TripAdvisor Travelers’ Choice Best of the Best 2026 award.',
      verified: 'Verified Resident Guest',
      prev: 'Previous Review',
      next: 'Next Review',
      statRating: '4.98 / 5.0',
      statCount: 'Over 1,250 excellent reviews on TripAdvisor & Google',
      awardTitle: 'TripAdvisor Travelers’ Choice 2026 Winner'
    }
  }[lang]

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" style={{ background: '#071022' }}>
      {/* Decorative Wave Divider Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-widest"
            style={{ background: 'rgba(201,168,76,0.12)', color: '#E8C96A', border: '1px solid rgba(201,168,76,0.3)' }}>
            <Award className="w-3.5 h-3.5" />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gold-gradient" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.title}
          </h2>
          <p className="text-base sm:text-lg" style={{ color: 'rgba(248,250,252,0.7)', fontFamily: 'var(--font-sans)' }}>
            {t.subtitle}
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-6 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-yellow-500/20">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-white text-sm">{t.statRating}</span>
            <span className="text-xs text-slate-400">({t.statCount})</span>
          </div>
        </div>

        {/* Testimonial Spotlight Showcase */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 border border-yellow-500/30 relative overflow-hidden shadow-2xl"
          style={{ background: 'linear-gradient(135deg, rgba(15,32,64,0.95) 0%, rgba(7,16,34,0.98) 100%)' }}>
          
          <div className="absolute top-6 right-8 opacity-10 pointer-events-none">
            <Quote className="w-28 h-28 text-yellow-400" />
          </div>

          <div className="relative z-10">
            {/* Stars & Cabin tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t.verified}
                </span>
              </div>
              <span className="text-xs text-yellow-400/90 font-medium bg-black/40 px-3 py-1 rounded-full border border-yellow-500/20">
                {current.cabin}
              </span>
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed italic mb-8 font-serif" style={{ fontFamily: 'var(--font-serif)' }}>
              “{current.content}”
            </p>

            {/* Author Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400/50 shadow-md"
                />
                <div>
                  <h4 className="font-bold text-white text-base">{current.name}</h4>
                  <p className="text-xs text-slate-400">{current.role}</p>
                  <p className="text-[11px] text-yellow-400/70">{current.date}</p>
                </div>
              </div>

              {/* Prev / Next buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveIdx((activeIdx - 1 + reviews.length) % reviews.length)}
                  className="p-3 rounded-full bg-white/5 hover:bg-yellow-500 hover:text-slate-950 text-slate-300 border border-white/10 transition-all"
                  aria-label={t.prev}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs text-slate-400 px-2 font-mono">
                  {activeIdx + 1} / {reviews.length}
                </div>
                <button
                  onClick={() => setActiveIdx((activeIdx + 1) % reviews.length)}
                  className="p-3 rounded-full bg-white/5 hover:bg-yellow-500 hover:text-slate-950 text-slate-300 border border-white/10 transition-all"
                  aria-label={t.next}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards Grid Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <div
              key={r.id}
              onClick={() => setActiveIdx(i)}
              className={`p-6 rounded-2xl cursor-pointer transition-all border ${
                activeIdx === i
                  ? 'bg-yellow-500/10 border-yellow-500/50 scale-[1.02]'
                  : 'bg-white/5 border-white/5 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-xs font-bold text-white">{r.name}</div>
                  <div className="text-[10px] text-slate-400">{r.cabin}</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 line-clamp-3 italic">
                "{r.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
