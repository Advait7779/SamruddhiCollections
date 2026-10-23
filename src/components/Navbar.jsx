import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Phone,
  WhatsappLogo,
  List,
  X,
  CaretDown,
  ArrowRight,
  MapPin,
  Clock
} from '@phosphor-icons/react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Collections', path: '/collections' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const collectionCategories = [
  { name: 'Yeola Paithani & Silk Sarees', path: '/collections' },
  { name: 'Unstitched Dress Material', path: '/collections' },
  { name: 'Readymade Kurtis & Suits', path: '/collections' },
  { name: 'Kids Ethnic Wear', path: '/collections' },
  { name: 'Cutlery & Bangles Set', path: '/collections' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(true)
  const location = useLocation()

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Track scroll position for subtle shadow elevation
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-stone-200 transition-shadow duration-200 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 py-1">
            <img
              src="/images/logo.png"
              alt="Samruddhi Collection"
              className="h-10 sm:h-12 md:h-16 w-auto object-contain transition-all"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#EA580C] font-semibold border-b-2 border-[#EA580C] pb-1'
                      : 'text-stone-700 hover:text-[#EA580C]'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="tel:+919881225553"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-semibold rounded-md transition-colors shadow-xs"
            >
              <Phone size={13} weight="bold" />
              <span>Call Shop</span>
            </a>
            <a
              href="https://wa.me/919881225553"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-md transition-colors shadow-xs"
            >
              <WhatsappLogo size={14} weight="fill" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors cursor-pointer"
            aria-label="Open mobile menu"
            aria-expanded={isOpen}
          >
            <List size={26} weight="bold" />
          </button>
        </div>
      </div>

      {/* =========================================================================
          MOBILE SLIDE-OVER DRAWER (Sliding from Right Side - AiSensy Style)
         ========================================================================= */}

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-over Container from Right */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl md:hidden flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Drawer Header with Close Button */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200 bg-stone-50/70">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Samruddhi Collection"
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={22} weight="bold" />
          </button>
        </div>

        {/* Scrollable Navigation Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {/* Main Links */}
          <div className="space-y-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between py-2.5 text-base font-bold transition-colors ${
                location.pathname === '/' ? 'text-[#EA580C]' : 'text-stone-800 hover:text-[#EA580C]'
              }`}
            >
              <span>Home</span>
            </Link>

            {/* Expandable Collections Accordion */}
            <div className="py-1">
              <button
                type="button"
                onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                className="w-full flex items-center justify-between py-2 text-base font-bold text-stone-800 hover:text-[#EA580C] transition-colors cursor-pointer"
              >
                <span>Collections</span>
                <CaretDown
                  size={16}
                  weight="bold"
                  className={`transition-transform duration-200 ${
                    isCollectionsOpen ? 'rotate-180 text-[#EA580C]' : 'text-stone-400'
                  }`}
                />
              </button>

              {isCollectionsOpen && (
                <div className="pl-3 ml-1.5 border-l-2 border-amber-300/80 space-y-2 py-1.5 mt-1">
                  {collectionCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-xs sm:text-sm text-stone-600 hover:text-[#EA580C] transition-colors py-1"
                    >
                      {cat.name}
                    </Link>
                  ))}
                  <Link
                    to="/collections"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#EA580C] pt-1"
                  >
                    <span>View All Collections</span>
                    <ArrowRight size={13} weight="bold" />
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between py-2.5 text-base font-bold transition-colors ${
                location.pathname === '/about' ? 'text-[#EA580C]' : 'text-stone-800 hover:text-[#EA580C]'
              }`}
            >
              <span>About Us</span>
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between py-2.5 text-base font-bold transition-colors ${
                location.pathname === '/contact' ? 'text-[#EA580C]' : 'text-stone-800 hover:text-[#EA580C]'
              }`}
            >
              <span>Contact &amp; Map</span>
            </Link>
          </div>

          {/* Quick Info & Policies Divider */}
          <div className="border-t border-stone-200 pt-4 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
              Policies &amp; Legal
            </span>
            <div className="space-y-1.5 text-xs">
              <Link
                to="/terms"
                onClick={() => setIsOpen(false)}
                className="block text-stone-600 hover:text-[#EA580C] py-1 transition-colors"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                to="/privacy"
                onClick={() => setIsOpen(false)}
                className="block text-stone-600 hover:text-[#EA580C] py-1 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Store Location & Timings Badge */}
          <div className="bg-[#FFFBEB] border border-amber-200 rounded-lg p-3 text-xs space-y-1.5 text-stone-700">
            <div className="flex items-center gap-1.5 font-bold text-[#7C2D12]">
              <MapPin size={15} weight="fill" className="text-[#EA580C]" />
              <span>Ashwi Bk, Sangamner</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-600 text-[11px]">
              <Clock size={14} weight="bold" />
              <span>Open Daily • Closes 8:00 PM</span>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions (AiSensy Style Stacked Buttons) */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-white space-y-2.5">
          {/* Primary Action Button: WhatsApp */}
          <a
            href="https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection,%20I%20am%20browsing%20your%20website%20and%20want%20to%20enquire."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <WhatsappLogo size={18} weight="fill" />
            <span>Chat on WhatsApp</span>
            <ArrowRight size={16} weight="bold" />
          </a>

          {/* Secondary Action Button: Call Shop */}
          <a
            href="tel:+919881225553"
            className="w-full py-3 px-4 bg-white border-2 border-stone-900 hover:bg-stone-900 hover:text-white text-stone-900 font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <Phone size={16} weight="bold" />
            <span>Call: +91 98812 25553</span>
            <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </div>
    </header>

    {/* Spacer so page content begins immediately below the fixed header */}
    <div className="h-16 sm:h-20" aria-hidden="true" />
  </>
  )
}
