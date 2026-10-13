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
    tag: 'SAREE SHOP • ASHWI BK, SANGAMNER',
    titleMarathi: 'पैठणी, सिल्क & साडी दालन',
    description:
      'Yeola Paithani weaves, pure silk, and everyday wholesale ethnic wear, chosen with family trust for generations in Ashwi Bk, Sangamner.',
    image: '/images/slider-bridal-paithani.jpg',
    imageAlt: 'Paithani and Silk Sarees',
    primaryText: 'Order on WhatsApp',
    primaryLink: 'https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection,%20I%20want%20to%20enquire%20about%20Paithani%20and%20Silk%20Sarees.',
    secondaryText: 'View Sarees',
    secondaryLink: '/collections?cat=Sarees'
  },
  {
    id: 2,
    tag: 'DRESS MATERIAL & READYMADE GARMENTS',
    titleMarathi: 'ड्रेस मटेरियल व रेडीमेड कुर्ती',
    description:
      'Unstitched Chanderi and pure cotton suit pieces with embroidered dupattas, plus ready-to-wear festive and daily wear kurtis.',
    image: '/images/slider-dress-material.jpg',
    imageAlt: 'Dress Material and Kurti Collection',
    primaryText: 'Order on WhatsApp',
    primaryLink: 'https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection,%20I%20want%20to%20enquire%20about%20Dress%20Materials.',
    secondaryText: 'View Suits',
    secondaryLink: '/collections?cat=Dress Material'
  },
  {
    id: 3,
    tag: 'KIDS ETHNIC & FAMILY CLOTHING',
    titleMarathi: 'मुलांचे कपडे व फॅमिली वेअर',
    description:
      'Traditional boys dhoti-kurtas, girls festive lehengas, everyday family ethnic wear, and matching bridal bangles.',
    image: '/images/slider-family-kids.jpg',
    imageAlt: 'Kids Wear and Family Garments',
    primaryText: 'Order on WhatsApp',
    primaryLink: 'https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection,%20I%20want%20to%20enquire%20about%20Kids%20Wear.',
    secondaryText: 'View Kids Wear',
    secondaryLink: '/collections?cat=Kids Wear'
  }
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused])

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
                  <span className="font-bold text-white">4.9</span>
                  <span>from 30 Google reviews</span>
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

                {/* Action Buttons: Side-by-side on Mobile */}
                <div className="flex flex-row items-center gap-2 sm:gap-3 pt-2 w-full sm:w-auto">
                  <a
                    href={slide.primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 xs:px-4 sm:px-6 py-2.5 sm:py-3 bg-[#FACC15] hover:bg-[#EAB308] text-stone-900 font-bold rounded-md transition-colors text-xs sm:text-sm text-center shadow-xs"
                  >
                    <WhatsappLogo size={18} weight="fill" className="text-[#15803D] shrink-0" />
                    <span className="truncate">{slide.primaryText}</span>
                  </a>
                  <Link
                    to={slide.secondaryLink}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 xs:px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border-2 border-white hover:bg-white hover:text-stone-900 text-white font-medium rounded-md transition-colors text-xs sm:text-sm text-center"
                  >
                    <span className="truncate">{slide.secondaryText}</span>
                    <ArrowRight size={14} weight="bold" className="shrink-0" />
                  </Link>
                </div>

                {/* Micro info line at bottom */}
                <div className="pt-1 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-amber-200/90 font-medium">
                  <span>• Open today • Closes 8:00 PM</span>
                  <span>• Pratappur Road, Ashwi Bk</span>
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

                  {/* Google review box overlapping bottom left */}
                  <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:-left-4 bg-[#FFFDF0] text-stone-900 px-3 sm:px-4 py-2 sm:py-2.5 rounded shadow-lg border border-amber-200 flex items-center gap-2.5 sm:gap-3">
                    <span className="text-lg sm:text-xl font-extrabold text-[#C2410C] leading-none">
                      30+
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-stone-700 uppercase tracking-wider leading-tight">
                      Happy Customers<br />On Google (4.9★)
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
