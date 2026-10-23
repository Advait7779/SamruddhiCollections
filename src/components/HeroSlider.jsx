import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  WhatsappLogo,
  ArrowRight,
  CaretLeft,
  CaretRight,
  Star
} from '@phosphor-icons/react'

const SLIDES = [
  {
    id: 1,
    tag: 'ROYAL YEOLA PAITHANI & WEDDING SILK',
    titleMarathi: 'राजेशाही येवला पैठणी व अस्सल सिल्क साड्या',
    description:
      'Handwoven peacock zari pallu, rich golden borders, and pure bridal silk. Special wholesale rates for wedding shopping with complimentary Saree Fall & Pico services.',
    image: '/images/slider-bridal-paithani.jpg',
    imageAlt: 'Authentic Yeola Paithani and Silk Sarees',
    badgeValue: '100%',
    badgeLabel: 'Pure Silk Weaves',
    badgeSub: 'Yeola Paithani & Zari',
    primaryText: 'Enquire on WhatsApp',
    primaryLink: 'https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection,%20I%20want%20to%20enquire%20about%20Paithani%20and%20Silk%20Sarees.',
    secondaryText: 'Explore Silk Sarees',
    secondaryLink: '/collections',
    microInfo: ['Wedding Bulk Discounts', 'Free Saree Fall & Pico', 'Pratappur Road, Ashwi Bk']
  },
  {
    id: 2,
    tag: 'TRENDING DRESS MATERIAL & READYMADE SUITS',
    titleMarathi: 'डिझायनर ड्रेस मटेरियल व रेडीमेड कुर्ती सेट्स',
    description:
      'Pure cotton, Chanderi, and party-wear suit pieces with matching dupattas, plus ready-to-wear flared kurtis and festive suits tailored for every occasion.',
    image: '/images/slider-dress-material.jpg',
    imageAlt: 'Designer Dress Material and Kurti Collection',
    badgeValue: 'Direct',
    badgeLabel: 'Wholesale Rates',
    badgeSub: 'Suits & Kurtis',
    primaryText: 'Order on WhatsApp',
    primaryLink: 'https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection,%20I%20want%20to%20enquire%20about%20Dress%20Materials.',
    secondaryText: 'View Suit Catalog',
    secondaryLink: '/collections',
    microInfo: ['Fresh Daily Arrivals', 'Direct Wholesale Rates', 'Sizing from M to 3XL']
  },
  {
    id: 3,
    tag: 'BOYS ETHNIC KURTAS & KIDS FESTIVE WEAR',
    titleMarathi: 'मुलांचे स्टायलिश कुर्ते व सणासुदीचे देखणे कपडे',
    description:
      'Comfortable cotton-silk dhoti kurtas, festive Nehru jackets, and bright traditional wear crafted gently for delicate skin across all children age groups.',
    image: '/images/kids-ethnic.jpg',
    imageAlt: 'Kids Ethnic Wear Collection',
    badgeValue: 'Festive',
    badgeLabel: 'Kids Ethnic Special',
    badgeSub: 'Dhoti Kurta & Sets',
    primaryText: 'Order on WhatsApp',
    primaryLink: 'https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection,%20I%20want%20to%20enquire%20about%20Kids%20Wear.',
    secondaryText: 'Explore Kids Wear',
    secondaryLink: '/collections',
    microInfo: ['Ages 1 to 15 Years', 'Soft Breathable Fabrics', 'Open Daily till 8:00 PM']
  }
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused, current])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)

  return (
    <div
      className="relative overflow-hidden bg-[#C2410C] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Sliding Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 bg-[#C2410C] text-white py-10 sm:py-14 md:py-20 lg:py-24 px-6 xs:px-8 sm:px-10 lg:px-8 min-h-[500px] sm:min-h-[580px] md:min-h-[640px] flex items-center"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
              {/* Left Column: Minimum, Clean Info (Matching Hariom style) */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                {/* Rating badge */}
                <div className="inline-flex items-center gap-1.5 bg-[#9A3412] text-amber-200 border border-amber-400/30 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium">
                  <Star size={14} weight="fill" className="text-amber-400" />
                  <span className="font-bold text-white">4.9 ★</span>
                  <span>Google Rating</span>
                </div>

                {/* Overline tag */}
                <p className="text-amber-200 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                  {slide.tag}
                </p>

                {/* Main Marathi Heading */}
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  {slide.titleMarathi}
                </h1>

                {/* Short Description */}
                <p className="text-amber-100 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal">
                  {slide.description}
                </p>

                {/* Action Buttons: Compact & Sleek */}
                <div className="flex flex-row items-center gap-2 sm:gap-2.5 pt-1.5 w-full sm:w-auto">
                  <a
                    href={slide.primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FACC15] hover:bg-[#EAB308] active:scale-95 text-stone-900 font-semibold rounded-md transition-all text-xs text-center shadow-xs"
                  >
                    <WhatsappLogo size={16} weight="fill" className="text-[#15803D] shrink-0" />
                    <span className="truncate">{slide.primaryText}</span>
                  </a>
                  <Link
                    to={slide.secondaryLink}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-transparent border border-white hover:bg-white hover:text-stone-900 active:scale-95 text-white font-medium rounded-md transition-all text-xs text-center"
                  >
                    <span className="truncate">{slide.secondaryText}</span>
                    <ArrowRight size={13} weight="bold" className="shrink-0" />
                  </Link>
                </div>

                {/* Micro info line at bottom */}
                <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-amber-200/90 font-medium">
                  {slide.microInfo.map((info, idx) => (
                    <span key={idx}>• {info}</span>
                  ))}
                </div>
              </div>

              {/* Right Column: Clean, Accurate Framed Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[460px]">
                  {/* Clean accurate frame with thin gold border - exactly like Hariom */}
                  <div className="rounded-lg overflow-hidden border-2 border-amber-300/60 shadow-2xl bg-[#9A3412]">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="w-full h-[280px] xs:h-[340px] sm:h-[420px] lg:h-[520px] object-cover object-top"
                    />
                  </div>

                  {/* Slide-specific highlight badge */}
                  <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:-left-4 bg-[#FFFDF0] text-stone-900 px-3 sm:px-4 py-2 sm:py-2.5 rounded shadow-lg border border-amber-200 flex items-center gap-2.5 sm:gap-3">
                    <span className="text-base sm:text-xl font-extrabold text-[#C2410C] leading-none whitespace-nowrap">
                      {slide.badgeValue}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-stone-700 uppercase tracking-wider leading-tight">
                      {slide.badgeLabel}<br />{slide.badgeSub}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Manual Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-1.5 sm:p-2.5 rounded-full transition-colors z-20 cursor-pointer"
        aria-label="Previous Slide"
      >
        <CaretLeft size={20} weight="bold" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-1.5 sm:p-2.5 rounded-full transition-colors z-20 cursor-pointer"
        aria-label="Next Slide"
      >
        <CaretRight size={20} weight="bold" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-20 bg-black/40 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
        {SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              current === idx
                ? 'w-5 sm:w-6 h-1.5 sm:h-2 bg-[#FACC15]'
                : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
