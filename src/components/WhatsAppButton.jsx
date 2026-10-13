import { PhoneCall } from '@phosphor-icons/react'

export default function WhatsAppButton() {
  return (
    <>
      {/* Floating Call Button (Bottom Left - Opposite side) */}
      <a
        href="tel:+919881225553"
        className="fixed bottom-4 sm:bottom-6 left-3 sm:left-6 z-50 bg-[#EA580C] hover:bg-[#C2410C] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl transition-transform active:scale-95 flex items-center justify-center border-2 border-white group"
        aria-label="Call Samruddhi Collection at 098812 25553"
      >
        <PhoneCall size={22} weight="fill" className="text-white sm:hidden" />
        <PhoneCall size={28} weight="fill" className="text-white hidden sm:block" />
        <span className="sr-only">Call Us</span>
      </a>

      {/* Floating WhatsApp Button (Bottom Right) with Real WhatsApp Icon */}
      <a
        href="https://wa.me/919881225553?text=Hello%20Samruddhi%20Collection!%20I%20want%20to%20enquire%20about%20your%20sarees%20and%20clothing."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl transition-transform active:scale-95 flex items-center justify-center group hover:opacity-95"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="/images/whatsapp-real.svg"
          alt="WhatsApp"
          className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-md select-none"
        />
        <span className="sr-only">WhatsApp Us</span>
      </a>
    </>
  )
}
