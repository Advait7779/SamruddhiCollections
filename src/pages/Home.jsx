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
  NavigationArrow
} from '@phosphor-icons/react'
import SareeBorder from '../components/SareeBorder'
import HeroSlider from '../components/HeroSlider'

export default function Home() {
  const categories = [
    {
      title: 'Paithani & Silk Sarees',
      marathi: 'पैठणी व सिल्क साड्या',
      desc: 'Authentic Yeola Paithani, pure silk, Kanjivaram and festive bridal sarees with rich golden zari borders.',
      image: '/images/card-paithani.jpg',
      link: '/collections?cat=Sarees'
    },
    {
      title: 'Dress Material',
      marathi: 'ड्रेस मटेरियल',
      desc: 'Unstitched pure cotton, Chanderi and party-wear suit pieces with matching designer dupattas.',
      image: '/images/card-dress-material.jpg',
      link: '/collections?cat=Dress Material'
    },
    {
      title: 'Readymade Garments',
      marathi: 'रेडीमेड कपडे',
      desc: 'Ready-to-wear kurtis, festive gown sets, casual daily wear and office ethnic tops.',
      image: '/images/readymade-suit.jpg',
      link: '/collections?cat=Readymade'
    },
    {
      title: 'Kids Wear',
      marathi: 'लहान मुलांचे कपडे',
      desc: 'Traditional boys dhoti kurta sets, girls festive lehengas, and soft daily wear for children.',
      image: '/images/kids-ethnic.jpg',
      link: '/collections?cat=Kids Wear'
    },
    {
      title: 'Cutlery & Bangles',
      marathi: 'कटलरी व सौंदर्य प्रसाधने',
      desc: 'Bridal glass bangles, matching cosmetics, hair accessories, bindis and vanity items.',
      image: '/images/accessories-bangles.jpg',
      link: '/collections?cat=Cutlery'
    },
    {
      title: 'Visit Our Shop',
      marathi: 'आमचे दुकान',
      desc: 'आश्वी बुद्रुक येथील नामांकित कापड दालन — साड्या, ड्रेस मटेरियल, लहान मुलांचे कपडे व कटलरीचे संपूर्ण फॅमिली दालन.',
      image: '/images/store-front-card.jpg',
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
      desc: 'Proudly rated 4.9★ by over 30 happy verified customers on Google.'
    }
  ]

  const reviews = [
    {
      name: 'Sunita Tambe',
      location: 'Ashwi Bk',
      text: 'Best shop for wedding sarees in Ashwi Bk! I purchased Paithani sarees for my daughter’s wedding. The zari work and quality of silk are excellent, and the rates are very honest.'
    },
    {
      name: 'Rajesh Dighe',
      location: 'Sangamner Rural',
      text: 'Very warm hospitality and genuine guidance. We bought dress materials and kids clothes for Diwali. You do not need to go to Sangamner city when you have Samruddhi Collection right here.'
    },
    {
      name: 'Vaishali Shinde',
      location: 'Ashwi Khurd',
      text: 'Great collection of readymade kurtis, kids wear, and matching bangles. Truly "नाविन्याचे माहेरघर". Deserves the 4.9 Google rating.'
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
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
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
          </div>

          {/* 6 Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white border border-stone-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#EA580C]/40 transition-colors shadow-sm"
              >
                <div>
                  <div className="h-52 sm:h-60 overflow-hidden bg-stone-100">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <span className="text-[11px] sm:text-xs font-semibold text-[#EA580C] uppercase tracking-wider">
                      {cat.marathi}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-0.5">{cat.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <Link
                    to={cat.link}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#EA580C] hover:text-[#C2410C]"
                  >
                    <span>View items</span>
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PAITHANI & SILK SPOTLIGHT - Solid Light Yellow (#FFFBEB)
         ========================================================================= */}
      <section className="bg-[#FFFBEB] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Product image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="border-4 border-white bg-white p-2 rounded-lg shadow-md max-w-md w-full">
              <img
                src="/images/saree-paithani.jpg"
                alt="Authentic Paithani Saree"
                className="w-full h-[280px] xs:h-[340px] sm:h-[420px] object-cover rounded"
              />
            </div>
          </div>

          {/* Right: Text & Details */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
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
                to="/collections?cat=Sarees"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 xs:px-4 sm:px-5 py-2.5 sm:py-3 bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 font-semibold rounded-md text-xs sm:text-sm transition-colors text-center shadow-xs"
              >
                <span className="truncate">View Saree Catalog</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY CHOOSE US - Solid Soft Ivory (#FDFBF7)
         ========================================================================= */}
      <section className="bg-[#FDFBF7] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              आमचे वैशिष्ट्ये • Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Quality &amp; Trust in Every Thread
            </h2>
            <div className="w-16 h-1 bg-[#EA580C] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white border border-stone-200 p-5 sm:p-6 rounded-lg text-center shadow-xs"
                >
                  <div className="w-12 h-12 bg-[#FFF7ED] text-[#EA580C] mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <Icon size={24} weight="bold" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1.5">{item.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
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
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#7C2D12] bg-[#FDE047] px-3 py-1 rounded">
              <Star size={14} weight="fill" className="text-amber-500" />
              <span>4.9 Star Google Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              What Our Customers Say
            </h2>
            <div className="w-16 h-1 bg-[#EA580C] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.name}
                className="bg-white border border-amber-200 p-5 sm:p-6 rounded-lg shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} weight="fill" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 mt-4">
                  <p className="text-sm font-bold text-stone-900">{rev.name}</p>
                  <p className="text-xs text-stone-500">{rev.location} • Verified Customer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: VISIT OUR STORE BANNER - Solid Saffron Orange (#EA580C)
         ========================================================================= */}
      <section className="bg-[#EA580C] text-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-5">
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
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-white text-stone-900 font-bold rounded-md text-sm hover:bg-stone-100 transition-colors w-full sm:w-auto"
            >
              <Phone size={18} weight="bold" className="text-[#EA580C]" />
              <span>Call: 098812 25553</span>
            </a>
            <a
              href="https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection,%20I%20want%20to%20visit%20your%20store."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-md text-sm transition-colors w-full sm:w-auto"
            >
              <WhatsappLogo size={20} weight="fill" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md text-sm hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              <NavigationArrow size={18} weight="bold" />
              <span>Get Directions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
