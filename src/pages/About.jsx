import { Link } from 'react-router-dom'
import {
  Trophy,
  Tag,
  Storefront,
  HandHeart,
  Phone,
  WhatsappLogo,
  MapPin,
  Clock,
  ArrowRight,
  Star,
  CheckCircle,
  NavigationArrow
} from '@phosphor-icons/react'
import SareeBorder from '../components/SareeBorder'

export default function About() {
  const values = [
    {
      icon: Trophy,
      title: 'Handpicked Quality',
      desc: 'Carefully chosen silk weaves, colorfast pure cotton fabrics, and durable stitching from trusted textile weavers.'
    },
    {
      icon: Tag,
      title: 'Honest Wholesale Rates',
      desc: 'Direct sourcing allows us to offer genuine wholesale rates so local families don’t have to travel to distant cities for weddings.'
    },
    {
      icon: Storefront,
      title: 'Complete Range for All',
      desc: 'From traditional 9-yard Nauvari sarees and bridal Paithanis to festive kids wear and matching bangles.'
    },
    {
      icon: HandHeart,
      title: 'Customer Trust',
      desc: 'Proudly rated 4.9★ by our local community in Sangamner with over 30 verified Google reviews.'
    }
  ]

  const categoriesList = [
    { name: 'Paithani & Silk Sarees', marathi: 'पैठणी व सिल्क साड्या', img: '/images/card-paithani.jpg' },
    { name: 'Unstitched Dress Material', marathi: 'ड्रेस मटेरियल', img: '/images/card-dress-material.jpg' },
    { name: 'Readymade Kurtis & Sets', marathi: 'रेडीमेड कपडे', img: '/images/readymade-suit.jpg' },
    { name: 'Kids Ethnic Wear', marathi: 'लहान मुलांचे कपडे', img: '/images/kids-ethnic.jpg' },
    { name: 'Cutlery & Bangles', marathi: 'कटलरी व बांगड्या', img: '/images/accessories-bangles.jpg' },
    { name: 'Our Shop & Retail Counter', marathi: 'आमचे दुकान', img: '/images/store-front-card.jpg' }
  ]

  return (
    <div className="font-sans text-stone-800">
      <SareeBorder />

      {/* =========================================================================
          PAGE HEADER - Solid Saffron Orange (#9A3412)
         ========================================================================= */}
      {/* =========================================================================
          PAGE HEADER - Solid Saffron Orange (#9A3412)
         ========================================================================= */}
      <section className="bg-[#9A3412] text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-[#7C2D12]">
        <div className="max-w-7xl mx-auto text-center space-y-2.5 sm:space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-200">
            आमची माहिती • About Us
          </p>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold text-white leading-tight">
            About Samruddhi Collection
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-amber-100 max-w-xl mx-auto leading-relaxed">
            नाविन्याचे माहेरघर — Trusted destination for sarees, dress materials, and family clothing in Ashwi Bk, Sangamner.
          </p>
        </div>
      </section>

      {/* Bottom Saree Border Strip */}
      <SareeBorder />

      {/* =========================================================================
          SECTION 1: OUR STORY - Solid White Background
         ========================================================================= */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              पारंपारिक विश्वास • Heritage &amp; Quality
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
              A Family Clothing Store Serving Sangamner with Pride
            </h2>
            <div className="w-16 h-1 bg-[#EA580C]" />
            <p className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed">
              <strong>Samruddhi Collection</strong> was founded with a clear mission: to provide the families of Ashwi Bk and nearby villages in Sangamner taluka with the finest sarees, dress materials, and ready-to-wear garments at authentic wholesale rates.
            </p>
            <p className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed">
              Known locally as <em>"नाविन्याचे माहेरघर"</em> (Home of Novelty), we take pride in personal hospitality. Whether you are shopping for an auspicious wedding, preparing for Diwali and Ganeshotsav, or picking daily-wear cotton suits, our team ensures every customer receives honest guidance and exceptional value.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-4 text-xs font-semibold text-stone-800">
              <div className="flex items-center gap-2 bg-[#FFF7ED] border border-amber-200 px-3 sm:px-3.5 py-2 rounded-md">
                <CheckCircle size={16} weight="fill" className="text-[#EA580C] shrink-0" />
                <span>Yeola Paithani &amp; Silk Sarees</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FFF7ED] border border-amber-200 px-3 sm:px-3.5 py-2 rounded-md">
                <CheckCircle size={16} weight="fill" className="text-[#EA580C] shrink-0" />
                <span>Dress Material &amp; Kurtis</span>
              </div>
              <div className="flex items-center gap-2 bg-[#FFF7ED] border border-amber-200 px-3 sm:px-3.5 py-2 rounded-md">
                <CheckCircle size={16} weight="fill" className="text-[#EA580C] shrink-0" />
                <span>Kids Wear &amp; Cutlery</span>
              </div>
            </div>
          </div>

          {/* Right: Real Shop Front Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="border-4 border-stone-200 rounded-lg overflow-hidden shadow-md max-w-md w-full bg-[#1C1917]">
              <img
                src="/images/store-front-card.jpg"
                alt="Samruddhi Collection Shop Entrance"
                className="w-full h-auto aspect-[16/10] object-contain bg-[#1C1917]"
              />
              <div className="bg-[#1C1917] text-white p-3.5 sm:p-4 text-center border-t border-stone-700">
                <p className="text-xs sm:text-sm font-bold">समृद्धी कलेक्शन, आश्वी बुद्रुक</p>
                <p className="text-[11px] sm:text-xs text-stone-400">Swaroopchand Gandhi Market, Sangamner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR 4 PILLARS - Solid Warm Cream (#FFFBEB)
         ========================================================================= */}
      <section className="bg-[#FFFBEB] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              आमची मूल्ये • Core Values
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Why Customers Choose Us
            </h2>
            <div className="w-16 h-1 bg-[#EA580C] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="bg-white border border-amber-200 p-5 sm:p-6 rounded-lg text-center shadow-xs"
                >
                  <div className="w-12 h-12 bg-[#FEF3C7] text-[#7C2D12] mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <Icon size={24} weight="bold" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1.5">{v.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PRODUCT GALLERY - Solid White
         ========================================================================= */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Our Products Under One Roof
            </h2>
            <div className="w-16 h-1 bg-[#EA580C] mx-auto mt-3" />
            <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
              Explore our varied range of traditional and modern clothing collections.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {categoriesList.map((cat) => (
              <div
                key={cat.name}
                className="bg-stone-50 border border-stone-200 rounded-lg overflow-hidden text-center hover:border-[#EA580C]/40 transition-colors shadow-xs"
              >
                <div className="h-28 xs:h-32 sm:h-36 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-2.5 sm:p-3">
                  <p className="text-xs font-bold text-stone-900 leading-tight">{cat.name}</p>
                  <p className="text-[11px] text-[#EA580C] font-medium mt-0.5 sm:mt-1">{cat.marathi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: VISIT OUR SHOP & MAP - Solid Soft Ivory (#FDFBF7)
         ========================================================================= */}
      <section className="bg-[#FDFBF7] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
              दालनाची माहिती • Location
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 leading-tight">
              Conveniently Located in Ashwi Bk
            </h2>
            <div className="w-16 h-1 bg-[#EA580C]" />

            <div className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-stone-700 pt-1 sm:pt-2">
              <div className="flex items-start gap-3">
                <MapPin size={20} weight="bold" className="text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Address:</strong>
                  <span>Pratappur Road, Swaroopchand Gandhi Market, Ashwi Bk, Tal Sangamner, Maharashtra 413714</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} weight="bold" className="text-[#EA580C] shrink-0" />
                <div>
                  <strong className="text-stone-900 block">Phone:</strong>
                  <a href="tel:+919881225553" className="text-stone-800 hover:text-[#EA580C]">
                    098812 25553
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={20} weight="bold" className="text-[#EA580C] shrink-0" />
                <div>
                  <strong className="text-stone-900 block">Opening Hours:</strong>
                  <span>Open Daily from 9:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a
                href="https://maps.google.com/?q=Samruddhi+collection+Ashwi+Bk+Tal+Sangamner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 xs:px-4 sm:px-5 py-2.5 sm:py-3 bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold rounded-md text-xs sm:text-sm transition-colors text-center shadow-xs"
              >
                <NavigationArrow size={18} weight="bold" className="shrink-0" />
                <span className="truncate">Get GPS Directions</span>
              </a>
              <a
                href="https://wa.me/919881225553"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 xs:px-4 sm:px-5 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-md text-xs sm:text-sm transition-colors text-center shadow-xs"
              >
                <WhatsappLogo size={18} weight="fill" className="shrink-0" />
                <span className="truncate">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Map Embed */}
          <div className="lg:col-span-7">
            <div className="border-4 border-white rounded-lg shadow-md overflow-hidden h-64 sm:h-80 md:h-[360px]">
              <iframe
                title="Samruddhi Collection Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.468202580795!2d74.3430589!3d19.4939109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcddc3d4a6e8b7%3A0x6b4f74d06a0ee331!2sAshwi%20BK%2C%20Maharashtra%20413714!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
