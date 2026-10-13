import { useState, useMemo } from 'react'
import {
  MagnifyingGlass,
  WhatsappLogo,
  Phone,
  Tag,
  ArrowRight,
  Storefront,
  Clock,
  MapPin,
  CheckCircle
} from '@phosphor-icons/react'
import SareeBorder from '../components/SareeBorder'

const CATEGORIES = [
  'All',
  'Sarees',
  'Dress Material',
  'Readymade',
  'Kids Wear',
  'Cutlery'
]

const CATALOG_ITEMS = [
  {
    id: 1,
    name: 'Yeola Pure Paithani Silk Saree',
    category: 'Sarees',
    marathi: 'येवला पैठणी साडी',
    image: '/images/card-paithani.jpg',
    tag: 'Bridal Bestseller',
    fabric: 'Pure Mulberry Silk',
    description: 'Authentic handwoven peacock motif zari pallu with rich golden border. Perfect for bridal and traditional Maharashtrian weddings.'
  },
  {
    id: 2,
    name: 'Kanjivaram Temple Border Silk Saree',
    category: 'Sarees',
    marathi: 'कांचीवरम सिल्क साडी',
    image: '/images/saree-kanjivaram.jpg',
    tag: 'Festive Special',
    fabric: 'Traditional Silk Weave',
    description: 'Opulent crimson and gold zari temple design border with rich contrast pallu for grand festive occasions and pujas.'
  },
  {
    id: 3,
    name: 'Yeola Handcrafted Bridal Paithani',
    category: 'Sarees',
    marathi: 'येवला ब्रायडल पैठणी',
    image: '/images/slider-bridal-paithani.jpg',
    tag: 'Store Exclusive',
    fabric: 'Pure Silk with Gold Zari',
    description: 'Traditional crimson and gold zari Paithani with dense peacock border woven for Maharashtrian wedding brides.'
  },
  {
    id: 4,
    name: 'Chanderi Embroidered Dress Material Set',
    category: 'Dress Material',
    marathi: 'चंदेरी ड्रेस मटेरियल',
    image: '/images/card-dress-material.jpg',
    tag: 'Unstitched Suit',
    fabric: 'Chanderi Cotton-Silk',
    description: 'Pastel festive dress material piece with intricately scalloped embroidered dupatta and soft breathable bottom fabric.'
  },
  {
    id: 5,
    name: 'Pure Cotton Daily Wear Dress Material',
    category: 'Dress Material',
    marathi: 'सुती कॉटन ड्रेस मटेरियल',
    image: '/images/card-dress-material.jpg',
    tag: 'Summer & Daily Wear',
    fabric: '100% Combed Cotton',
    description: 'Colorfast pure cotton unstitched salwar suit material with matching printed dupatta, soft and comfortable for daily routines.'
  },
  {
    id: 6,
    name: 'Designer Ready-to-Wear Kurti & Pant Set',
    category: 'Readymade',
    marathi: 'रेडीमेड कुर्ती सेट',
    image: '/images/readymade-suit.jpg',
    tag: 'New Style',
    fabric: 'Raw Silk & Rayon',
    description: 'Elegant straight-cut kurti with tailored pants and coordinated dupatta, perfect for festive visits and family functions.'
  },
  {
    id: 7,
    name: 'Flared Anarkali Festive Readymade Gown',
    category: 'Readymade',
    marathi: 'अनारकली रेडीमेड ड्रेस',
    image: '/images/readymade-suit.jpg',
    tag: 'Party Wear',
    fabric: 'Georgette with Soft Lining',
    description: 'Graceful flared silhouette with neat neckline embroidery and comfortable inner lining for wedding parties.'
  },
  {
    id: 8,
    name: 'Boys Festive Dhoti Kurta & Vest Set',
    category: 'Kids Wear',
    marathi: 'मुलांचा धोती कुर्ता सेट',
    image: '/images/kids-ethnic.jpg',
    tag: 'Kids Ethnic',
    fabric: 'Soft Cotton-Silk Blend',
    description: 'Royal festive dhoti kurta set with brocade vest, soft on delicate skin and pre-stitched for easy comfortable wearing.'
  },
  {
    id: 9,
    name: 'Girls Traditional Flared Lehenga Choli',
    category: 'Kids Wear',
    marathi: 'मुलींचे पारंपारिक लेहंगा चोली',
    image: '/images/kids-ethnic.jpg',
    tag: 'Festive Choice',
    fabric: 'Art Silk with Cotton Lining',
    description: 'Bright festive colors with golden zari border and matching dupatta designed for family pujas and birthday functions.'
  },
  {
    id: 10,
    name: 'Bridal Kundan & Glass Bangles Set',
    category: 'Cutlery',
    marathi: 'कंगन व काचेच्या बांगड्या सेट',
    image: '/images/accessories-bangles.jpg',
    tag: 'Matching Bangles',
    fabric: 'Traditional Velvet & Glass',
    description: 'Complete matching sets of red and green glass bangles, kundan kangan, bindis, and bridal cosmetics.'
  },
  {
    id: 11,
    name: 'Nauvari Traditional Maharashtrian Saree',
    category: 'Sarees',
    marathi: 'पारंपारिक नऊवारी साडी',
    image: '/images/saree-paithani.jpg',
    tag: 'Traditional Maharashtrian',
    fabric: 'Belgaum & Yeola Silk',
    description: 'Authentic 9-yard traditional Nauvari saree with contrast border, ideal for traditional rituals and weddings.'
  },
  {
    id: 12,
    name: 'Vanity & Cutlery Accessories Pack',
    category: 'Cutlery',
    marathi: 'कटलरी व सौंदर्य साहित्य',
    image: '/images/accessories-bangles.jpg',
    tag: 'Beauty Essentials',
    fabric: 'Curated Accessories',
    description: 'Hair pins, safety pins, premium sindoor, cosmetics, hair accessories, and daily vanity items.'
  }
]

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = useMemo(() => {
    return CATALOG_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

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
            आमचे संपूर्ण दालन • Product Catalog
          </p>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold text-white leading-tight">
            Our Collections
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-amber-100 max-w-xl mx-auto leading-relaxed">
            Authentic Paithani sarees, unstitched suit fabrics, readymade garments, kids wear, and accessories. Wholesale &amp; retail at Ashwi Bk.
          </p>
          <p className="text-[11px] sm:text-xs text-amber-300 font-medium pt-1">
            (For wholesale bulk orders or single purchases, send an enquiry on WhatsApp)
          </p>
        </div>
      </section>

      {/* Bottom Saree Border Strip */}
      <SareeBorder />

      {/* =========================================================================
          FILTER BAR - Solid Light Yellow (#FFFBEB)
         ========================================================================= */}
      <section className="bg-[#FFFBEB] border-b border-amber-200 py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          {/* Category Tabs (Scrollable on small mobile, wraps on larger viewports) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full md:w-auto flex-nowrap md:flex-wrap">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap flex-shrink-0 px-3.5 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#EA580C] text-white shadow-xs'
                      : 'bg-white border border-stone-300 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search saree, kurti, cotton..."
              className="w-full pl-9 pr-4 py-2 sm:py-2.5 bg-white border border-stone-300 rounded-md text-xs sm:text-sm text-stone-800 focus:outline-none focus:border-[#EA580C]"
            />
            <MagnifyingGlass
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          CATALOG GRID - Solid White Background (No pricing, clean cards)
         ========================================================================= */}
      <section className="bg-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Showing Count */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-stone-500 border-b border-stone-200 pb-3">
            <span>
              Showing <strong className="text-stone-800">{filteredItems.length}</strong> items in{' '}
              <strong className="text-[#EA580C]">{selectedCategory}</strong>
            </span>
            <span className="hidden sm:inline">
              Wholesale inquiries welcome • Direct shop in Ashwi Bk
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-stone-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#EA580C]/40 transition-colors shadow-sm"
              >
                <div>
                  {/* Product Real Image */}
                  <div className="h-56 xs:h-64 sm:h-72 overflow-hidden bg-stone-100 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <span className="absolute top-3 left-3 bg-[#7C2D12] text-amber-200 text-[11px] font-bold px-2.5 py-1 rounded">
                      {item.tag}
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                      <span className="font-semibold text-[#EA580C]">{item.category}</span>
                      <span>{item.marathi}</span>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-xs text-stone-500 font-medium mt-1">
                      Fabric: <span className="text-stone-700">{item.fabric}</span>
                    </p>

                    <p className="text-xs text-stone-600 mt-2 sm:mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action - Direct WhatsApp Enquiry (NO PRICING) */}
                <div className="p-4 sm:p-5 pt-0">
                  <a
                    href={`https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(
                      item.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors"
                  >
                    <WhatsappLogo size={18} weight="fill" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-14 sm:py-16 bg-[#FFFBEB] rounded-lg border border-amber-200 px-4">
              <p className="text-stone-700 font-semibold text-sm sm:text-base">No items found matching your search.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className="mt-3 text-xs sm:text-sm font-bold text-[#EA580C] underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          SPECIAL OFFERS & SHOWROOM PERKS - Solid Light Yellow (#FEF9C3)
         ========================================================================= */}
      <section className="bg-[#FEF9C3] py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-b border-amber-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C2D12] bg-[#FDE047] px-2.5 py-1 rounded">
              In-Store Services
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 leading-tight">
              Visiting for a Wedding or Bulk Order?
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 max-w-xl leading-relaxed">
              We provide complimentary Saree Fall &amp; Pico services, custom matching bangles, and attractive wholesale discounts for wedding party shopping.
            </p>
          </div>

          <div className="flex flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <a
              href="tel:+919881225553"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 xs:px-4 sm:px-5 py-2.5 sm:py-3 bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold rounded-md text-xs sm:text-sm transition-colors text-center shadow-xs"
            >
              <Phone size={18} weight="bold" className="shrink-0" />
              <span className="truncate">Call: 098812 25553</span>
            </a>
            <a
              href="https://wa.me/919881225553?text=Hello,%20I%20want%20to%20discuss%20bulk%20or%20wedding%20saree%20shopping."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 xs:px-4 sm:px-5 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-md text-xs sm:text-sm transition-colors text-center shadow-xs"
            >
              <WhatsappLogo size={18} weight="fill" className="shrink-0" />
              <span className="truncate">WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM HELP SECTION - Solid Soft Ivory (#FDFBF7)
         ========================================================================= */}
      <section className="bg-[#FDFBF7] py-12 sm:py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
            Looking for something specific?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            If you need a specific Paithani weave, nauvari color, or particular dress material pattern, send us a photo or message on WhatsApp. We will check our shop stock for you.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection,%20I%20am%20looking%20for%20a%20specific%20saree/dress."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-md text-sm transition-colors w-full sm:w-auto"
            >
              <WhatsappLogo size={20} weight="fill" />
              <span>Send Saree Photo on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
