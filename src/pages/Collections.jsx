import {
  WhatsappLogo,
  Phone
} from '@phosphor-icons/react'
import SareeBorder from '../components/SareeBorder'
import ScrollReveal from '../components/ScrollReveal'

const CATALOG_ITEMS = [
  {
    id: 1,
    name: 'Yeola Handcrafted Bridal Paithani',
    category: 'Sarees',
    marathi: 'येवला ब्रायडल पैठणी',
    image: '/images/slider-bridal-paithani.jpg',
    position: 'object-top',
    tag: 'Bridal Exclusive',
    fabric: 'Pure Silk with Gold Zari',
    description: 'Traditional emerald green pure silk Paithani with rich red and gold zari peacock (mor) pallu woven for weddings and celebrations.'
  },
  {
    id: 2,
    name: 'Yeola Pure Paithani Silk Saree',
    category: 'Sarees',
    marathi: 'येवला पैठणी साडी',
    image: '/images/card-paithani.jpg',
    tag: 'Handloom Classic',
    fabric: 'Pure Mulberry Silk',
    description: 'Authentic handwoven peacock motif zari pallu with rich golden border. Perfect for bridal and traditional Maharashtrian weddings.'
  },
  {
    id: 3,
    name: 'Pure Cotton & Chanderi Dress Material',
    category: 'Dress Material',
    marathi: 'चंदेरी व कॉटन ड्रेस मटेरियल',
    image: '/images/card-dress-material.jpg',
    tag: 'Unstitched Suit Set',
    fabric: 'Chanderi Cotton-Silk & Combed Cotton',
    description: 'Festive dress material sets with intricately scalloped embroidered dupatta and soft, breathable, colorfast fabric.'
  },
  {
    id: 4,
    name: 'Designer Ready-to-Wear Kurti & Pant Set',
    category: 'Readymade',
    marathi: 'रेडीमेड कुर्ती सेट',
    image: '/images/readymade-suit.jpg',
    position: 'object-top',
    tag: 'New Collection',
    fabric: 'Raw Silk & Rayon',
    description: 'Elegant straight-cut kurti with tailored pants and coordinated dupatta, perfect for festive visits and family functions.'
  },
  {
    id: 5,
    name: 'Boys Festive Dhoti Kurta & Kids Wear',
    category: 'Kids Wear',
    marathi: 'मुलांचा धोती कुर्ता सेट',
    image: '/images/kids-ethnic.jpg',
    position: 'object-top',
    tag: 'Kids Ethnic',
    fabric: 'Soft Cotton-Silk Blend',
    description: 'Royal festive dhoti kurta set with brocade vest, soft on delicate skin and pre-stitched for easy comfortable wearing.'
  },
  {
    id: 6,
    name: 'Bridal Kundan & Glass Bangles Set',
    category: 'Cutlery & Matching',
    marathi: 'कंगन व काचेच्या बांगड्या सेट',
    image: '/images/accessories-bangles.jpg',
    tag: 'Matching Bangles',
    fabric: 'Traditional Velvet & Glass',
    description: 'Complete matching sets of red and green glass bangles, kundan kangan, bindis, and bridal cosmetics.'
  }
]

export default function Collections() {
  return (
    <div className="font-sans text-stone-800">
      <SareeBorder />

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
          CATALOG GRID - Solid White Background (No pricing, clean cards)
         ========================================================================= */}
      <section className="bg-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Showing Count */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-stone-500 border-b border-stone-200 pb-3">
            <span>
              Showing <strong className="text-stone-800">{CATALOG_ITEMS.length}</strong> Curated Collections
            </span>
            <span className="hidden sm:inline">
              Wholesale inquiries welcome • Direct showroom in Ashwi Bk
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {CATALOG_ITEMS.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                variant="fade-up"
                delay={(idx % 3) * 90}
                duration={650}
                className="h-full"
              >
                <div className="group bg-white border border-stone-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#EA580C]/50 transition-colors shadow-xs card-hover-lift h-full">
                  <div>
                    {/* Product Real Image */}
                    <div className="h-56 xs:h-64 sm:h-72 overflow-hidden bg-stone-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`w-full h-full object-cover card-img-zoom ${item.position || 'object-center'}`}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                        <span className="font-semibold text-[#EA580C]">{item.category}</span>
                        <span>{item.marathi}</span>
                      </div>

                      <h3 className="text-base font-bold text-stone-900 leading-snug group-hover:text-[#EA580C] transition-colors">
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
                      className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold rounded-md transition-all active:scale-95 shadow-xs"
                    >
                      <WhatsappLogo size={18} weight="fill" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
              <span className="truncate">Call: +91 98812 25553</span>
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
    </div>
  )
}
