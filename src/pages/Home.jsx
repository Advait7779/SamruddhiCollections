import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone,
  WhatsappLogo,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Storefront,
  Tag,
  Trophy,
  HandHeart,
  NavigationArrow,
  CaretLeft,
  CaretRight
} from '@phosphor-icons/react'
import SareeBorder from '../components/SareeBorder'
import HeroSlider from '../components/HeroSlider'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  const reviewsRef = useRef(null)
  const [isReviewsPaused, setIsReviewsPaused] = useState(false)
  const [reviewTimerTrigger, setReviewTimerTrigger] = useState(0)

  const scrollReviews = (direction) => {
    setReviewTimerTrigger((prev) => prev + 1)
    if (reviewsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = reviewsRef.current
      const cardWidth =
        clientWidth >= 1024
          ? clientWidth / 3
          : clientWidth >= 640
          ? clientWidth / 2
          : clientWidth * 0.85

      if (direction === 'next') {
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          reviewsRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          reviewsRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
        }
      } else {
        if (scrollLeft <= 15) {
          reviewsRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' })
        } else {
          reviewsRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
        }
      }
    }
  }

  // Auto-slide reviews every 6 seconds with wrap-around
  useEffect(() => {
    if (isReviewsPaused) return
    const timer = setInterval(() => {
      scrollReviews('next')
    }, 6000)
    return () => clearInterval(timer)
  }, [isReviewsPaused, reviewTimerTrigger])

  const categories = [
    {
      title: 'Paithani & Silk Sarees',
      marathi: 'पैठणी व सिल्क साड्या',
      desc: 'Authentic Yeola Paithani, pure silk, Kanjivaram and festive bridal sarees with rich golden zari borders.',
      image: '/images/card-paithani.jpg',
      link: '/collections'
    },
    {
      title: 'Dress Material',
      marathi: 'ड्रेस मटेरियल',
      desc: 'Unstitched pure cotton, Chanderi and party-wear suit pieces with matching designer dupattas.',
      image: '/images/card-dress-material.jpg',
      link: '/collections'
    },
    {
      title: 'Readymade Garments',
      marathi: 'रेडीमेड कपडे',
      desc: 'Ready-to-wear kurtis, festive gown sets, casual daily wear and office ethnic tops.',
      image: '/images/readymade-suit.jpg',
      position: 'object-top',
      link: '/collections'
    },
    {
      title: 'Kids Wear',
      marathi: 'लहान मुलांचे कपडे',
      desc: 'Traditional boys dhoti kurta sets, girls festive lehengas, and soft daily wear for children.',
      image: '/images/kids-ethnic.jpg',
      position: 'object-top',
      link: '/collections'
    },
    {
      title: 'Cutlery & Bangles',
      marathi: 'कटलरी व सौंदर्य प्रसाधने',
      desc: 'Bridal glass bangles, matching cosmetics, hair accessories, bindis and vanity items.',
      image: '/images/accessories-bangles.jpg',
      link: '/collections'
    },
    {
      title: 'Visit Our Shop',
      marathi: 'आमचे दुकान',
      desc: 'आश्वी बुद्रुक येथील नामांकित कापड दालन — साड्या, ड्रेस मटेरियल, लहान मुलांचे कपडे व कटलरीचे संपूर्ण फॅमिली दालन.',
      image: '/images/logo.png',
      fit: 'contain',
      link: '/about'
    }
  ]

  const highlights = [
    {
      icon: Trophy,
      title: 'Authentic Quality',
      desc: 'Durable fabrics, authentic silk threads, and tested colorfast dyes.'
    },
    {
      icon: Tag,
      title: 'Wholesale & Direct Rates',
      desc: 'Competitive wholesale pricing for family weddings and festive shopping.'
    },
    {
      icon: Storefront,
      title: 'Complete Family Store',
      desc: 'Sarees, dress materials, kids wear, and cosmetics under one roof.'
    },
    {
      icon: HandHeart,
      title: 'Trusted in Sangamner',
      desc: 'Proudly rated 4.9★ by our happy verified customers on Google.'
    }
  ]

  const reviews = [
    {
      id: 1,
      name: 'Sandip Bidgar',
      rating: 5,
      time: 'a year ago',
      location: 'Ashwi Bk',
      text: 'Very Nice and New Collection in Samruddhi Collection. Shop is also good with AC. Rates are very reasonable. Must Visit. Wish You all the best for your future endeavours.'
    },
    {
      id: 2,
      name: 'Sunil Ilag',
      rating: 5,
      time: '10 months ago',
      location: 'Ashwi Bk',
      text: 'We like the sarees from here very much . quality of clothes is very good. Service also very good must visit'
    },
    {
      id: 3,
      name: 'Kapil Bidgar',
      rating: 5,
      time: 'a year ago',
      location: 'Ashwi Bk',
      text: 'Very Good & Latest Collection for every type of wears..Must Visit..👍'
    },
    {
      id: 4,
      name: 'Madhuri Thorat',
      rating: 5,
      time: 'a year ago',
      location: 'Ashwi Bk',
      text: 'Great experience.....Collection was amazing. Highly recommend for quality clothing and excellent customer service.'
    },
    {
      id: 5,
      name: 'Pratibha Sul',
      rating: 5,
      time: 'a year ago',
      location: 'Ashwi Bk',
      text: 'Quality of cloths is superb .must visit at shop.'
    },
    {
      id: 6,
      name: 'Vandana Rajpurohit',
      rating: 5,
      time: 'a year ago',
      location: 'Ashwi Bk',
      text: 'Very good Shop,very good quality..🥰🥰🥰'
    },
    {
      id: 7,
      name: 'Nitin Bramhne',
      rating: 5,
      time: '2 months ago',
      location: 'Ashwi Bk',
      text: 'Best quality and good survise'
    },
    {
      id: 8,
      name: 'Ashwini Puri',
      rating: 5,
      time: '10 months ago',
      location: 'Ashwi Bk',
      text: 'Very good quality'
    },
    {
      id: 9,
      name: 'Charu Dharmadhikari',
      rating: 5,
      time: 'a year ago',
      location: 'Ashwi Bk',
      text: 'The sarees are very nice and have a lot of variety and the rate is also medium 👍 👍 👍'
    }
  ]

  return (
    <div className="font-sans text-stone-800">
      {/* =========================================================================
          TRADITIONAL SAREE BORDER STRIP (Top & Bottom of Banner)
         ========================================================================= */}
      <SareeBorder />

      {/* =========================================================================
          SLIDING HERO BANNER (3 Banners with unique info, distinct frames & images)
         ========================================================================= */}
      <HeroSlider />

      {/* Bottom Saree Border Strip */}
      <SareeBorder />

      {/* =========================================================================
          SECTION 2: OUR COLLECTIONS - Solid White Background
         ========================================================================= */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fade-up" duration={650} className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              आमचे दालन • Catalog
            </p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
              Explore Our Collections
            </h2>
            <div className="w-16 h-1 bg-[#EA580C] mx-auto mt-3" />
            <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
              Browse through our traditional handloom sarees, unstitched suit sets, ready-to-wear kurtis, and kids apparel.
            </p>
          </ScrollReveal>

          {/* 6 Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {categories.map((cat, idx) => (
              <ScrollReveal
                key={cat.title}
                variant="fade-up"
                delay={idx * 85}
                duration={650}
                className="h-full"
              >
                <div className="group bg-white border border-stone-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#EA580C]/50 transition-colors shadow-xs card-hover-lift h-full">
                  <div>
                    <div className="h-52 sm:h-60 overflow-hidden bg-stone-100 flex items-center justify-center">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className={cat.fit === 'contain'
                          ? "w-full h-full object-contain p-6 bg-white card-img-zoom"
                          : `w-full h-full object-cover card-img-zoom ${cat.position || 'object-center'}`}
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <span className="text-[11px] sm:text-xs font-semibold text-[#EA580C] uppercase tracking-wider">
                        {cat.marathi}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-0.5 group-hover:text-[#EA580C] transition-colors">{cat.title}</h3>
                      <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 pt-0">
                    <Link
                      to={cat.link}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#EA580C] group-hover:text-[#C2410C] group-hover:translate-x-1 transition-all"
                    >
                      <span>View items</span>
                      <ArrowRight size={14} weight="bold" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PAITHANI & SILK SPOTLIGHT - Solid Light Yellow (#FFFBEB)
         ========================================================================= */}
      <section className="bg-[#FFFBEB] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Product image with Traditional Saree Border Frame */}
          <ScrollReveal variant="fade-right" duration={650} className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-md w-full">
              <div className="rounded-lg overflow-hidden border-2 border-amber-300/80 shadow-2xl bg-[#7C2D12]">
                <SareeBorder />
                <img
                  src="/images/saree-paithani.jpg"
                  alt="Authentic Paithani Saree"
                  className="w-full h-[280px] xs:h-[340px] sm:h-[400px] object-cover"
                />
                <SareeBorder />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Text & Details */}
          <ScrollReveal variant="fade-left" duration={650} delay={80} className="lg:col-span-7 space-y-4 sm:space-y-5">
            <span className="inline-block bg-[#FDE047] text-[#7C2D12] text-xs font-bold px-3 py-1 rounded">
              Bridal &amp; Festive Special
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
              Authentic Yeola Paithani &amp; Silk Weaves
            </h2>
            <div className="w-16 h-1 bg-[#EA580C]" />
            <p className="text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed">
              Every Maharashtrian celebration is complete with a royal Paithani. At Samruddhi Collection, we source directly to bring you genuine peacock and lotus pallu designs, pure zari borders, and durable handloom silks at honest local shop rates.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-stone-800 pt-1 sm:pt-2">
              <li className="flex items-start gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#15803D] shrink-0 mt-0.5" />
                <span>Rich traditional motifs: Mor (Peacock), Hans (Swan), and Asavali</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#15803D] shrink-0 mt-0.5" />
                <span>Available in single and double pallu weaves in all festive colors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#15803D] shrink-0 mt-0.5" />
                <span>Special wholesale discounts on bulk wedding purchases</span>
              </li>
            </ul>

            <div className="pt-2 sm:pt-4 flex flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/919881225553?text=Hello,%20I%20am%20interested%20in%20your%20Paithani%20and%20Silk%20Saree%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 xs:px-4 sm:px-5 py-2.5 sm:py-3 bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold rounded-md text-xs sm:text-sm transition-colors text-center shadow-xs"
              >
                <WhatsappLogo size={18} weight="fill" className="shrink-0" />
                <span className="hidden xs:inline">Enquire Paithani on WhatsApp</span>
                <span className="xs:hidden">Enquire WhatsApp</span>
              </a>
              <Link
                to="/collections"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 xs:px-4 sm:px-5 py-2.5 sm:py-3 bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 font-semibold rounded-md text-xs sm:text-sm transition-colors text-center shadow-xs"
              >
                <span className="truncate">View Saree Catalog</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY CHOOSE US - Solid Soft Ivory (#FDFBF7)
         ========================================================================= */}
      <section className="bg-[#FDFBF7] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fade-up" duration={650} className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              आमचे वैशिष्ट्ये • Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Quality &amp; Trust in Every Thread
            </h2>
            <div className="w-16 h-1 bg-[#EA580C] mx-auto mt-3" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <ScrollReveal
                  key={item.title}
                  variant="fade-up"
                  delay={idx * 85}
                  duration={650}
                  className="h-full"
                >
                  <div className="bg-white border border-stone-200 p-5 sm:p-6 rounded-lg text-center shadow-xs card-hover-lift h-full flex flex-col items-center justify-between">
                    <div>
                      <div className="w-12 h-12 bg-[#FFF7ED] text-[#EA580C] mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4">
                        <Icon size={24} weight="bold" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1.5">{item.title}</h3>
                      <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CUSTOMER REVIEWS - Solid Light Yellow (#FEF9C3)
         ========================================================================= */}
      <section className="bg-[#FEF9C3] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-300">
        <div className="max-w-7xl mx-auto">
          {/* Header Row: Title */}
          <ScrollReveal variant="fade-up" duration={650} className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#7C2D12] bg-[#FDE047] px-3 py-1 rounded">
              <Star size={14} weight="fill" className="text-amber-500" />
              <span>4.9 Star Customer Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              What Our Customers Say
            </h2>
            <div className="w-16 h-1 bg-[#EA580C] mt-2.5" />
          </ScrollReveal>

          {/* Sliding Reviews Carousel Track with Left & Right Side Arrows */}
          <ScrollReveal variant="fade-up" delay={80} duration={650}>
            <div
              className="relative px-2 xs:px-4 sm:px-6"
              onMouseEnter={() => setIsReviewsPaused(true)}
              onMouseLeave={() => setIsReviewsPaused(false)}
              onTouchStart={() => setIsReviewsPaused(true)}
              onTouchEnd={() => setIsReviewsPaused(false)}
            >
              {/* Left Side Arrow Button */}
              <button
                type="button"
                onClick={() => scrollReviews('prev')}
                aria-label="Previous reviews"
                className="absolute -left-1 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-stone-800 border border-amber-300 shadow-md hover:bg-[#EA580C] hover:text-white hover:border-[#EA580C] flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <CaretLeft size={20} weight="bold" />
              </button>

              {/* Right Side Arrow Button */}
              <button
                type="button"
                onClick={() => scrollReviews('next')}
                aria-label="Next reviews"
                className="absolute -right-1 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-stone-800 border border-amber-300 shadow-md hover:bg-[#EA580C] hover:text-white hover:border-[#EA580C] flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <CaretRight size={20} weight="bold" />
              </button>

              {/* Carousel Track */}
              <div
                ref={reviewsRef}
                className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="w-[85%] xs:w-[75%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start bg-white border border-amber-200/90 p-5 sm:p-6 rounded-lg shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between card-hover-lift"
                  >
                    <div className="flex flex-col grow">
                      {/* Star Rating */}
                      <div className="flex text-amber-500 gap-1 mb-3">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={15} weight="fill" />
                        ))}
                      </div>

                      {/* Verbatim Review text */}
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic grow">
                        "{rev.text}"
                      </p>
                    </div>

                    {/* Card Footer: Matching Site Theme */}
                    <div className="pt-3.5 border-t border-amber-100/90 mt-5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-full bg-[#FFF7ED] text-[#EA580C] font-bold text-xs flex items-center justify-center border border-orange-200/70 shrink-0">
                          {rev.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                            {rev.name}
                          </p>
                          <p className="text-[11px] text-stone-500 truncate">
                            {rev.location} • {rev.time}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-[#EA580C] bg-[#FFF7ED] px-2 py-0.5 rounded border border-orange-200/60 shrink-0">
                        Verified
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: VISIT OUR STORE BANNER - Solid Saffron Orange (#EA580C)
         ========================================================================= */}
      <section className="bg-[#EA580C] text-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="scale-up" duration={650} className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-5">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-200">
            आपले स्वागत आहे • Visit Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Visit Samruddhi Collection in Ashwi Bk Today
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Swaroopchand Gandhi Market, Pratappur Road, Ashwi Bk, Tal Sangamner. Open every day from morning until 8:00 PM.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="tel:+919881225553"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white text-stone-900 font-bold rounded-md text-sm hover:bg-stone-100 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-md"
            >
              <Phone size={18} weight="bold" className="text-[#EA580C]" />
              <span>Call: +91 98812 25553</span>
            </a>
            <a
              href="https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection,%20I%20want%20to%20visit%20your%20store."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-md text-sm transition-all hover:scale-105 active:scale-95 w-full sm:w-auto shadow-md"
            >
              <WhatsappLogo size={20} weight="fill" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md text-sm hover:bg-white/15 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <NavigationArrow size={18} weight="bold" />
              <span>Get Directions</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
