import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  WhatsappLogo,
  PaperPlaneTilt,
  CheckCircle,
  NavigationArrow,
  CaretDown,
  Check
} from '@phosphor-icons/react'
import SareeBorder from '../components/SareeBorder'
import ScrollReveal from '../components/ScrollReveal'

const INTEREST_OPTIONS = [
  'Paithani & Silk Sarees',
  'Unstitched Dress Material',
  'Readymade Kurtis & Suits',
  'Kids Ethnic Wear',
  'Wedding Bulk / Wholesale Orders',
  'Cutlery & Bangles'
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Paithani & Silk Sarees',
    message: '',
    consent: false
  })
  const [submitted, setSubmitted] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false)
      }
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsDropdownOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    setSubmitted(true)
  }

  return (
    <div className="font-sans text-stone-800">
      <SareeBorder />

      {/* =========================================================================
          PAGE HEADER - Solid Saffron Orange (#9A3412)
         ========================================================================= */}
      <section className="bg-[#9A3412] text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-[#7C2D12]">
        <div className="max-w-7xl mx-auto text-center space-y-2.5 sm:space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-200">
            संपर्क • Contact Us
          </p>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold text-white leading-tight">
            Get in Touch With Us
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-amber-100 max-w-xl mx-auto leading-relaxed">
            Have questions about saree designs, bulk wholesale orders, or store directions? We are glad to assist you.
          </p>
        </div>
      </section>

      {/* Bottom Saree Border Strip */}
      <SareeBorder />

      {/* =========================================================================
          CONTACT FORM & MAP - Solid White Background
         ========================================================================= */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Form Column */}
          <ScrollReveal variant="fade-right" duration={650} className="lg:col-span-5">
            <div className="border border-stone-200 p-6 sm:p-9 sm:py-10 rounded-lg bg-white shadow-xs max-w-lg mx-auto lg:max-w-none">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                मेसेज पाठवा • Send an Enquiry
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                Enquire About Clothing &amp; Sarees
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 mb-6 sm:mb-7 leading-relaxed">
                Fill this simple form or message us directly on WhatsApp for immediate assistance.
              </p>

              {submitted ? (
                <div className="bg-[#DCFCE7] border border-[#86EFAC] text-[#14532D] p-5 sm:p-6 rounded-md text-center space-y-3">
                  <CheckCircle size={36} weight="fill" className="mx-auto text-[#16A34A]" />
                  <h4 className="font-bold text-base">Enquiry Received!</h4>
                  <p className="text-xs leading-relaxed">
                    Thank you, {formData.name}. We will connect with you on {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', phone: '', interest: 'Paithani & Silk Sarees', message: '' })
                    }}
                    className="mt-2 text-xs font-bold underline cursor-pointer text-[#16A34A]"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kadam"
                      className="w-full px-4 py-3 border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:border-[#EA580C] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98812 25553"
                      className="w-full px-4 py-3 border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:border-[#EA580C] text-sm"
                    />
                  </div>

                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                      Product Interest
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                      className={`w-full px-4 py-3 bg-white border rounded-md text-stone-900 text-sm flex items-center justify-between text-left transition-all cursor-pointer ${
                        isDropdownOpen
                          ? 'border-[#EA580C] ring-2 ring-[#EA580C]/20 shadow-xs'
                          : 'border-stone-300 hover:border-stone-400'
                      }`}
                    >
                      <span className="truncate font-medium">{formData.interest}</span>
                      <CaretDown
                        size={16}
                        weight="bold"
                        className={`shrink-0 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-[#EA580C]' : 'text-stone-400'
                        }`}
                      />
                    </button>

                    {/* Custom Dropdown Menu matching site theme */}
                    {isDropdownOpen && (
                      <div
                        role="listbox"
                        className="absolute z-30 left-0 right-0 mt-1.5 bg-white border border-amber-200 rounded-lg shadow-xl overflow-hidden py-1.5 max-h-64 overflow-y-auto"
                      >
                        {INTEREST_OPTIONS.map((opt) => {
                          const isSelected = formData.interest === opt
                          return (
                            <button
                              key={opt}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setFormData({ ...formData, interest: opt })
                                setIsDropdownOpen(false)
                              }}
                              className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                isSelected
                                  ? 'bg-[#FFF7ED] text-[#EA580C] font-semibold'
                                  : 'text-stone-700 hover:bg-[#FFFBEB] hover:text-[#EA580C]'
                              }`}
                            >
                              <span>{opt}</span>
                              {isSelected && (
                                <Check size={16} weight="bold" className="text-[#EA580C] shrink-0" />
                              )}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                      Your Message / Enquiry
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let us know what color, design, or occasion you are shopping for..."
                      className="w-full px-4 py-3 border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:border-[#EA580C] text-sm resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 h-4 w-4 shrink-0 rounded border-stone-300 text-[#EA580C] accent-[#EA580C] cursor-pointer"
                      />
                      <span className="text-xs text-stone-600 leading-relaxed">
                        I hereby authorise to send notifications on SMS/Messages/WhatsApp/Promotional/RCS/Information Messages. By clicking Submit, you agree to our{' '}
                        <Link to="/terms" className="text-[#EA580C] font-semibold hover:underline">Terms of Services</Link>
                        {' '}and then you have read our{' '}
                        <Link to="/privacy" className="text-[#EA580C] font-semibold hover:underline">Privacy Policy</Link>.
                        <span className="text-red-500 font-bold"> *</span>
                      </span>
                    </label>
                  </div>

                  <div className="pt-3 flex flex-row items-center gap-2 sm:gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 sm:py-3.5 px-2 xs:px-4 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold rounded-md text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-xs"
                    >
                      <PaperPlaneTilt size={18} weight="bold" className="shrink-0" />
                      <span className="truncate">Submit Enquiry</span>
                    </button>
                    <a
                      href={`https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection,%20my%20name%20is%20${encodeURIComponent(
                        formData.name || 'a customer'
                      )}.%20I%20want%20to%20enquire%20about%20${encodeURIComponent(
                        formData.interest
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 sm:py-3.5 px-2 xs:px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-md text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 sm:gap-2 text-center shadow-xs"
                    >
                      <WhatsappLogo size={18} weight="fill" className="shrink-0" />
                      <span className="truncate">Chat on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Map Column */}
          <ScrollReveal variant="fade-left" duration={650} delay={80} className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-3 sm:space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                नकाशा • Shop Location Map
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                Find Us on Google Maps
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Located near Shri Ganesh Clinical Laboratory, Swaroopchand Gandhi Market in Ashwi Bk, Sangamner.
              </p>

              <div className="border border-stone-200 rounded-lg overflow-hidden h-72 sm:h-96 lg:h-[440px] shadow-xs">
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

              <div className="pt-1 sm:pt-2">
                <a
                  href="https://maps.google.com/?q=Samruddhi+collection+Ashwi+Bk+Tal+Sangamner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-md text-xs sm:text-sm transition-all hover:scale-102 active:scale-95 w-full sm:w-auto shadow-xs"
                >
                  <NavigationArrow size={16} weight="bold" />
                  <span>Open in Google Maps App</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
