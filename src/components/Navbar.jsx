import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, WhatsappLogo, List, X } from '@phosphor-icons/react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Collections', path: '/collections' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-stone-200">
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
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-medium rounded transition-colors"
            >
              <Phone size={13} weight="bold" />
              <span>Call Shop</span>
            </a>
            <a
              href="https://wa.me/919881225553"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-medium rounded transition-colors"
            >
              <WhatsappLogo size={14} weight="fill" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-4 py-4 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#FFF7ED] text-[#EA580C] font-semibold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
          <div className="pt-3 border-t border-stone-200 flex flex-col sm:flex-row gap-2">
            <a
              href="tel:+919881225553"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#EA580C] active:bg-[#C2410C] text-white rounded-md text-sm font-semibold transition-colors"
            >
              <Phone size={16} weight="bold" />
              <span>Call Shop: 098812 25553</span>
            </a>
            <a
              href="https://wa.me/919881225553"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] active:bg-[#20bd5a] text-white rounded-md text-sm font-semibold transition-colors"
            >
              <WhatsappLogo size={18} weight="fill" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
