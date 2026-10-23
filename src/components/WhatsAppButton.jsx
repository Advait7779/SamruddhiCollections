import { useState, useEffect } from 'react'
import { PhoneCall, ArrowUp } from '@phosphor-icons/react'

export default function WhatsAppButton() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 250)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Floating Call Button (Bottom Left - Opposite side) */}
      <a
        href="tel:+919881225553"
        className="fixed bottom-4 sm:bottom-6 left-3 sm:left-6 z-50 bg-[#EA580C] hover:bg-[#C2410C] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl transition-transform active:scale-95 flex items-center justify-center border-2 border-white group"
        aria-label="Call Samruddhi Collection at +91 98812 25553"
      >
        <PhoneCall size={22} weight="fill" className="text-white sm:hidden" />
        <PhoneCall size={28} weight="fill" className="text-white hidden sm:block" />
        <span className="sr-only">Call Us</span>
      </a>

      {/* Floating Stack on Bottom Right: Back to Top (Arrow Only) + WhatsApp */}
      <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 flex flex-col items-center gap-2.5 sm:gap-3">
        {/* Back to Top Button (Arrow Only, above WhatsApp) */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to Top"
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-stone-900/90 hover:bg-[#EA580C] text-white shadow-lg transition-all duration-300 flex items-center justify-center border border-white/20 active:scale-95 cursor-pointer ${
            showTop
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-3 pointer-events-none'
          }`}
        >
          <ArrowUp size={20} weight="bold" />
        </button>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection!%20I%20want%20to%20enquire%20about%20your%20sarees%20and%20clothing."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center group filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.22)] hover:drop-shadow-[0_6px_14px_rgba(0,0,0,0.3)]"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="/images/whatsapp-real.svg"
            alt="WhatsApp"
            className="w-12 h-12 sm:w-14 sm:h-14 select-none"
          />
          <span className="sr-only">WhatsApp Us</span>
        </a>
      </div>
    </>
  )
}
