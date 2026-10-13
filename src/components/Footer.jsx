import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, WhatsappLogo, ArrowUp, Star } from '@phosphor-icons/react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-[#1C1917] text-stone-300">
      {/* Decorative top border in solid saffron/gold */}
      <div className="h-1 bg-[#EA580C] w-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide">
              SAMRUDDHI <span className="text-[#EA580C]">COLLECTION</span>
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">समृद्धी कलेक्शन • नाविन्याचे माहेरघर</p>
            <p className="text-sm leading-relaxed text-stone-400 mt-4">
              Wholesale &amp; retail store for authentic Paithani sarees, silk weaves, dress materials, kids wear, and daily family garments in Ashwi Bk, Sangamner.
            </p>
            <div className="flex items-center gap-2 mt-4 px-3 py-1.5 bg-stone-800 rounded-md w-fit text-sm">
              <span className="flex text-amber-400">
                <Star size={16} weight="fill" />
              </span>
              <span className="font-semibold text-white">4.9</span>
              <span className="text-xs text-stone-400">(30 Google Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'Collections', path: '/collections' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-stone-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Products
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>Paithani &amp; Silk Sarees</li>
              <li>Dress Material &amp; Suits</li>
              <li>Readymade Kurtis &amp; Garments</li>
              <li>Kids Ethnic &amp; Daily Wear</li>
              <li>Glass Bangles &amp; Cutlery</li>
              <li>Nauvari &amp; Traditional Weaves</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Visit Our Shop
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} weight="bold" className="text-[#EA580C] shrink-0 mt-0.5" />
                <span>
                  Pratappur Road, Swaroopchand Gandhi Market, Ashwi Bk, Tal Sangamner, Maharashtra 413714
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={18} weight="bold" className="text-[#EA580C] shrink-0" />
                <a href="tel:+919881225553" className="hover:text-white transition-colors">
                  098812 25553
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={18} weight="bold" className="text-[#EA580C] shrink-0" />
                <span>Open Daily • Closes 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Samruddhi Collection. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} weight="bold" />
          </button>
        </div>
      </div>
    </footer>
  )
}
