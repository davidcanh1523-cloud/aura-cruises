import { useState } from 'react'
import { Eye, Maximize2, Sparkles, Check, ChevronLeft, ChevronRight, Bath, BedDouble, Compass, ShieldCheck } from 'lucide-react'

interface CabinShowcaseProps {
  lang: 'vi' | 'en'
  onBook: () => void
}

interface Cabin {
  id: string
  name: string
  deck: string
  area: string
  bed: string
  capacity: string
  tag: string
  image: string
  views360: string[]
  description: string
  amenities: string[]
  highlights: { title: string; desc: string }[]
}

const cabinsData: Record<'vi' | 'en', Cabin[]> = {
  vi: [
    {
      id: 'presidential',
      name: 'Presidential Aura Heritage Suite',
      deck: 'Tầng 3 – Mũi Tàu VIP',
      area: '85 m²',
      bed: '1 Giường Super King 2m2',
      capacity: '2 Người lớn + 2 Trẻ em',
      tag: 'Đẳng Cấp 6 Sao Hoàng Gia',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85',
      views360: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=85',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=85'
      ],
      description: 'Căn phòng cao cấp bậc nhất với góc nhìn cong panorama 270 độ bao trọn toàn cảnh Vịnh Hạ Long, ban công riêng biệt 25m² và bồn tắm Jacuzzi thủy lực dát viền đá tự nhiên.',
      amenities: [
        'Ban công riêng siêu rộng 25m²',
        'Bồn tắm ngâm sục Jacuzzi kính tràn viền',
        'Quản gia riêng phục vụ 24/7',
        'Champagne & đĩa hoa quả nhiệt đới tươi đón phòng',
        'Dàn âm thanh vòm Bang & Olufsen',
        'Miễn phí 1 chai rượu vang Chile hảo hạng'
      ],
      highlights: [
        { title: 'Tầm nhìn 270°', desc: 'Ngắm trọn vẹn bình minh & hoàng hôn trên vịnh không góc chết' },
        { title: 'Bồn tắm view biển', desc: 'Thư giãn ngâm mình cùng cánh hoa hồng & muối khoáng biển' },
        { title: 'Setup Hoàng Gia', desc: 'Ga trải giường lụa Ai Cập 600 TC & tinh dầu gỗ trầm hương' }
      ]
    },
    {
      id: 'executive',
      name: 'Senior Executive Ocean View',
      deck: 'Tầng 2 & Tầng 3',
      area: '48 m²',
      bed: '1 King Bed hoặc 2 Giường Đơn',
      capacity: '2 Người lớn + 1 Trẻ em',
      tag: 'Lựa Chọn Được Yêu Thích',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=85',
      views360: [
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=85',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=85'
      ],
      description: 'Thiết kế phong cách tân cổ điển Indochine sang trọng, sàn gỗ sồi tự nhiên ấm áp, cửa kính kịch trần mở ra ban công riêng để bạn nhâm nhi tách cà phê sáng giữa biển khơi.',
      amenities: [
        'Ban công riêng ngắm biển',
        'Phòng tắm lát đá hoa cương cao cấp',
        'Áo choàng lụa & dép dạo sundeck',
        'Máy pha cafe Nespresso viên nén',
        'Két an toàn điện tử & minibar',
        'Trà & cafe thượng hạng miễn phí hàng ngày'
      ],
      highlights: [
        { title: 'Ban công riêng tư', desc: 'Bàn ghế mây thư giãn ngắm biển êm đềm' },
        { title: 'Thiết kế Indochine', desc: 'Nét chấm phá văn hóa Đông Dương quyến rũ' },
        { title: 'Tiện nghi 5 sao+', desc: 'Mỹ phẩm phòng tắm hữu cơ L’Occitane Pháp' }
      ]
    },
    {
      id: 'deluxe',
      name: 'Deluxe Balcony Suite',
      deck: 'Tầng 1 & Tầng 2',
      area: '38 m²',
      bed: '1 Giường Queen hoặc 2 Twin',
      capacity: '2 Người lớn',
      tag: 'Tối Ưu Chi Phí & Trải Nghiệm',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=85',
      views360: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=85',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=85'
      ],
      description: 'Không gian mở thoáng đãng, kết nối tối đa với thiên nhiên vịnh biển. Lựa chọn hoàn hảo cho cặp đôi tìm kiếm kỳ nghỉ lãng mạn với mức giá trọn gói tiết kiệm nhất.',
      amenities: [
        'Cửa sổ kính Low-E cản nhiệt nhìn biển',
        'Hệ thống điều hòa lọc không khí ion âm',
        'Tủ quần áo gỗ sồi & bàn trang điểm',
        'Bình nước nóng & máy sấy tóc công suất lớn',
        'Đèn ngủ tạo ion thư giãn giấc ngủ',
        'Wifi vệ tinh tốc độ cao toàn tàu'
      ],
      highlights: [
        { title: 'Cách âm hoàn hảo', desc: 'Hệ tường kính cách âm kép mang lại giấc ngủ êm ái' },
        { title: 'Vị trí thuận tiện', desc: 'Gần khu vực nhà hàng Fine Dining & sảnh chờ' },
        { title: 'Check-in linh hoạt', desc: 'Hỗ trợ đón tiếp sớm & giữ hành lý miễn phí' }
      ]
    }
  ],
  en: [
    {
      id: 'presidential',
      name: 'Presidential Aura Heritage Suite',
      deck: 'Deck 3 – Bow VIP',
      area: '85 m²',
      bed: '1 Super King 2.2m',
      capacity: '2 Adults + 2 Kids',
      tag: '6-Star Royal Masterpiece',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85',
      views360: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=85',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=85'
      ],
      description: 'Our most prestigious residence with a 270° panoramic view of Ha Long Bay, a private 25m² outdoor sundeck terrace, and an oversized hydro-massage marble Jacuzzi tub.',
      amenities: [
        'Exclusive 25m² private balcony terrace',
        'Floor-to-ceiling ocean view Jacuzzi bathtub',
        '24/7 dedicated personal butler service',
        'Welcome chilled Champagne & tropical fruit basket',
        'Bang & Olufsen premium surround acoustics',
        'Complimentary bottle of curated vintage Chilean wine'
      ],
      highlights: [
        { title: '270° Panorama', desc: 'Unobstructed sunrise & sunset views over emerald bay' },
        { title: 'Ocean Jacuzzi', desc: 'Soak with organic sea salt crystals & fresh rose petals' },
        { title: 'Royal Bedding', desc: '600 TC Egyptian cotton linens & natural agarwood aromas' }
      ]
    },
    {
      id: 'executive',
      name: 'Senior Executive Ocean View',
      deck: 'Deck 2 & Deck 3',
      area: '48 m²',
      bed: '1 King Bed or 2 Twins',
      capacity: '2 Adults + 1 Kid',
      tag: 'Guest Favorite',
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=85',
      views360: [
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=85',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=85'
      ],
      description: 'Harmonious Indochine neo-classical architecture with warm natural oak wood flooring, floor-to-ceiling glass sliding doors opening to your own oceanfront balcony.',
      amenities: [
        'Private ocean-facing terrace',
        'Italian marble appointed bathroom',
        'Silk bathrobes & sundeck footwear',
        'Nespresso capsule coffee machine',
        'Digital safety deposit & minibar',
        'Daily premium loose leaf tea & artisanal coffee'
      ],
      highlights: [
        { title: 'Private Veranda', desc: 'Wicker lounge chairs facing soothing calm waters' },
        { title: 'Indochine Elegance', desc: 'Subtle historic French-Indochinese accents' },
        { title: '5-Star Bath', desc: 'Organic botanical toiletries by L’Occitane en Provence' }
      ]
    },
    {
      id: 'deluxe',
      name: 'Deluxe Balcony Suite',
      deck: 'Deck 1 & Deck 2',
      area: '38 m²',
      bed: '1 Queen Bed or 2 Twins',
      capacity: '2 Adults',
      tag: 'Best Value Experience',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=85',
      views360: [
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=85',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=85'
      ],
      description: 'Luminous sanctuary connecting you closely with UNESCO seascapes. Ideal for couples seeking a romantic getaway with maximum cost efficiency.',
      amenities: [
        'Low-E thermal insulated glass panels',
        'Negative-ion air purification system',
        'Solid oak wardrobe & vanity desk',
        'Instant hot water system & salon hair dryer',
        'Relaxing circadian circadian nightlights',
        'High-speed satellite Starlink Wi-Fi throughout'
      ],
      highlights: [
        { title: 'Acoustic Soundproofing', desc: 'Double glazed panes for undisturbed serene sleep' },
        { title: 'Prime Location', desc: 'Immediate access to Fine Dining restaurant & reception' },
        { title: 'Flexible Check-In', desc: 'Early boarding support & luggage storage included' }
      ]
    }
  ]
}

export default function CabinShowcase({ lang, onBook }: CabinShowcaseProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [viewIndex, setViewIndex] = useState(0)
  const [is360Active, setIs360Active] = useState(false)

  const cabins = cabinsData[lang]
  const currentCabin = cabins[activeTab]

  const t = {
    vi: {
      badge: 'TRẢI NGHIỆM PHÒNG 360° THỰC TẾ ẢO',
      title: 'Không Gian Nghỉ Dưỡng Thượng Lưu',
      subtitle: 'Tất cả các phòng trên du thuyền Aura Heritage đều sở hữu 100% ban công view biển riêng biệt và trang bị nội thất chuẩn 6 sao thế giới.',
      switch360: 'Bật Chế Độ Trải Nghiệm 360°',
      exit360: 'Đóng Chế Độ 360°',
      angleTip: 'Góc nhìn chân thực: Kéo hoặc nhấn góc nhìn để đổi vị trí camera trong phòng',
      specDeck: 'Vị trí:',
      specArea: 'Diện tích:',
      specBed: 'Loại giường:',
      specCap: 'Tiêu chuẩn:',
      bookRoom: 'Đặt Giữ Chỗ Phòng Này',
      amenitiesTitle: 'Tiện Nghi Tiêu Chuẩn Đi Kèm'
    },
    en: {
      badge: '360° VIRTUAL CABIN EXPERIENCE',
      title: 'Ultra-Luxury Cruise Suites',
      subtitle: 'Every cabin aboard Aura Heritage features 100% private ocean-facing balconies and international 6-star residential appointments.',
      switch360: 'Enable 360° Cabin View',
      exit360: 'Exit 360° Mode',
      angleTip: 'Interactive camera: Click view angles to navigate perspective inside suite',
      specDeck: 'Deck:',
      specArea: 'Area:',
      specBed: 'Bed type:',
      specCap: 'Capacity:',
      bookRoom: 'Reserve This Suite',
      amenitiesTitle: 'Complimentary Suite Amenities'
    }
  }[lang]

  return (
    <section id="cabins" className="py-24 relative overflow-hidden" style={{ background: '#071022' }}>
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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

        {/* Suite Tabs Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {cabins.map((cabin, idx) => (
            <button
              key={cabin.id}
              onClick={() => {
                setActiveTab(idx)
                setViewIndex(0)
              }}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === idx
                  ? 'btn-gold text-slate-950 shadow-lg scale-105'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <span>{cabin.name}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                activeTab === idx ? 'bg-slate-950/20 text-slate-950' : 'bg-yellow-400/10 text-yellow-400'
              }`}>
                {cabin.area}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Main Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 360 Photo Stage */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="relative rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl group h-[400px] sm:h-[500px] bg-slate-950">
              {/* Photo Display */}
              <img
                src={currentCabin.views360[viewIndex] || currentCabin.image}
                alt={currentCabin.name}
                className={`w-full h-full object-cover transition-all duration-700 ${is360Active ? 'scale-110 filter contrast-105' : 'group-hover:scale-105'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />

              {/* 360 Overlay Badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-slate-950 flex items-center gap-1.5"
                  style={{ background: '#E8C96A' }}>
                  <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
                  {currentCabin.tag}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium text-slate-200 bg-black/60 backdrop-blur-md border border-white/10">
                  {currentCabin.area} • {currentCabin.deck}
                </span>
              </div>

              {/* 360 Mode Trigger Button */}
              <div className="absolute top-5 right-5">
                <button
                  onClick={() => setIs360Active(!is360Active)}
                  className="px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 backdrop-blur-md border transition-all hover:scale-105"
                  style={{
                    background: is360Active ? 'rgba(201,168,76,0.9)' : 'rgba(0,0,0,0.6)',
                    color: is360Active ? '#071022' : '#E8C96A',
                    borderColor: 'rgba(201,168,76,0.4)'
                  }}
                >
                  <Eye className="w-4 h-4" />
                  {is360Active ? t.exit360 : t.switch360}
                </button>
              </div>

              {/* Angle Switcher Controls */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div className="flex gap-2">
                  {currentCabin.views360.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setViewIndex(i)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-md border transition-all ${
                        viewIndex === i
                          ? 'bg-yellow-500 text-slate-950 border-yellow-400 font-bold'
                          : 'bg-black/60 text-slate-300 border-white/10 hover:bg-black/80'
                      }`}
                    >
                      {lang === 'vi' ? `Góc nhìn ${i + 1}` : `Angle ${i + 1}`}
                    </button>
                  ))}
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] text-yellow-300/80 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {lang === 'vi' ? 'Hình ảnh thực tế 100%' : '100% Real suite photography'}
                </div>
              </div>
            </div>

            {/* Hotspot highlights row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentCabin.highlights.map((hl, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-xs font-bold text-yellow-400 mb-1">{hl.title}</div>
                  <div className="text-[12px] text-slate-400 leading-snug">{hl.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Suite Specification Card */}
          <div className="lg:col-span-4 rounded-3xl p-6 sm:p-8 border border-yellow-500/20 flex flex-col justify-between"
            style={{ background: 'linear-gradient(180deg, rgba(15,32,64,0.9) 0%, rgba(10,22,40,0.9) 100%)', backdropFilter: 'blur(20px)' }}>
            
            <div>
              <div className="text-xs uppercase font-semibold text-yellow-400 tracking-wider mb-2">
                {currentCabin.tag}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {currentCabin.name}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {currentCabin.description}
              </p>

              {/* Specs Grid */}
              <div className="space-y-3 py-4 border-y border-white/10 mb-6 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5"><Compass className="w-3.5 h-3.5 text-yellow-400" /> {t.specDeck}</span>
                  <span className="font-semibold text-white">{currentCabin.deck}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5"><Maximize2 className="w-3.5 h-3.5 text-yellow-400" /> {t.specArea}</span>
                  <span className="font-semibold text-white">{currentCabin.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5"><BedDouble className="w-3.5 h-3.5 text-yellow-400" /> {t.specBed}</span>
                  <span className="font-semibold text-white">{currentCabin.bed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5"><Bath className="w-3.5 h-3.5 text-yellow-400" /> {t.specCap}</span>
                  <span className="font-semibold text-white">{currentCabin.capacity}</span>
                </div>
              </div>

              {/* Amenities list */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-3">
                  {t.amenitiesTitle}
                </h4>
                <div className="space-y-2">
                  {currentCabin.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={onBook}
                className="w-full py-4 rounded-xl font-bold text-sm btn-gold text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                ✦ {t.bookRoom}
              </button>
              <div className="text-[11px] text-center text-slate-400 mt-3 flex items-center justify-center gap-1">
                <span>🛡️</span> {lang === 'vi' ? 'Cam kết giữ cabin view đẹp nhất khi đặt sớm' : 'Best view guarantee with early reservation'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
