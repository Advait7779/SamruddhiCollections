import { useState } from 'react'
import {
  Phone,
  WhatsappLogo,
  MapPin,
  Clock,
  CaretDown,
  PaperPlaneTilt,
  CheckCircle,
  NavigationArrow
} from '@phosphor-icons/react'
import SareeBorder from '../components/SareeBorder'

const FAQS = [
  {
    question: 'What types of sarees are available in your shop?',
    answer: 'We stock Yeola Paithani sarees, Kanjivaram silk, pure cotton sarees, Nauvari (9-yard) sarees, designer georgette, and bridal wedding collections.'
  },
  {
    question: 'Do you offer wholesale rates for wedding purchases?',
    answer: 'Yes! We provide special wholesale rates for bulk wedding purchases, family functions, and return gifts. Contact us on WhatsApp or visit our shop.'
  },
  {
    question: 'What are your shop timings and open days?',
    answer: 'We are open all 7 days of the week from 9:00 AM to 8:00 PM.'
  },
  {
    question: 'Can I order or enquire through WhatsApp?',
    answer: 'Yes, you can message us directly on 098812 25553 with photos or queries, and we will share current stock details and photos.'
  },
  {
    question: 'Where is your shop located in Ashwi Bk?',
    answer: 'We are located at Pratappur Road, Swaroopchand Gandhi Market, Ashwi Bk, Tal Sangamner, Maharashtra 413714.'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Sarees',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

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

      {/* =========================================================================
          SECTION 1: 3 INFO CARDS - Solid Warm Light Yellow (#FFFBEB)
         ========================================================================= */}
      <section className="bg-[#FFFBEB] py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-amber-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: Phone */}
          <div className="bg-white border border-amber-200 p-5 sm:p-6 rounded-lg text-center flex flex-col items-center shadow-xs">
            <div className="w-12 h-12 bg-[#FFF7ED] text-[#EA580C] rounded-full flex items-center justify-center mb-3">
              <Phone size={24} weight="bold" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-stone-900">Call Us Directly</h3>
            <p className="text-xs text-stone-500 mt-1">Direct shop desk</p>
            <a
              href="tel:+919881225553"
              className="mt-2.5 text-base sm:text-lg font-bold text-[#EA580C] hover:underline"
            >
              098812 25553
            </a>
          </div>

          {/* Card 2: Address */}
          <div className="bg-white border border-amber-200 p-5 sm:p-6 rounded-lg text-center flex flex-col items-center shadow-xs">
            <div className="w-12 h-12 bg-[#FFF7ED] text-[#EA580C] rounded-full flex items-center justify-center mb-3">
              <MapPin size={24} weight="bold" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-stone-900">Store Address</h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed max-w-xs">
              Pratappur Road, Swaroopchand Gandhi Market, Ashwi Bk, Tal Sangamner, Maharashtra 413714
            </p>
          </div>

          {/* Card 3: Hours */}
          <div className="bg-white border border-amber-200 p-5 sm:p-6 rounded-lg text-center flex flex-col items-center shadow-xs">
            <div className="w-12 h-12 bg-[#FFF7ED] text-[#EA580C] rounded-full flex items-center justify-center mb-3">
              <Clock size={24} weight="bold" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-stone-900">Shop Hours</h3>
            <p className="text-xs text-stone-500 mt-1">Open 7 days a week</p>
            <p className="mt-2 text-xs sm:text-sm font-bold text-stone-800">
              9:00 AM – 8:00 PM Daily
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CONTACT FORM & MAP - Solid White Background
         ========================================================================= */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form Column */}
          <div className="lg:col-span-6">
            <div className="border border-stone-200 p-5 sm:p-8 rounded-lg bg-white shadow-xs">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EA580C]">
                मेसेज पाठवा • Send an Enquiry
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                Enquire About Clothing &amp; Sarees
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 mb-5 sm:mb-6 leading-relaxed">
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
                      setFormData({ name: '', phone: '', interest: 'Sarees', message: '' })
                    }}
                    className="mt-2 text-xs font-bold underline cursor-pointer text-[#16A34A]"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kadam"
                      className="w-full px-3.5 py-2.5 border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:border-[#EA580C] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98812 25553"
                      className="w-full px-3.5 py-2.5 border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:border-[#EA580C] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                      Product Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:border-[#EA580C] bg-white text-sm"
                    >
                      <option value="Paithani & Silk Sarees">Paithani &amp; Silk Sarees</option>
                      <option value="Dress Material">Unstitched Dress Material</option>
                      <option value="Readymade Garments">Readymade Kurtis &amp; Suits</option>
                      <option value="Kids Wear">Kids Ethnic Wear</option>
                      <option value="Wedding Bulk Orders">Wedding Bulk / Wholesale Orders</option>
                      <option value="Cutlery & Bangles">Cutlery &amp; Bangles</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                      Your Message / Enquiry
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let us know what color, design, or occasion you are shopping for..."
                      className="w-full px-3.5 py-2.5 border border-stone-300 rounded-md text-stone-900 focus:outline-none focus:border-[#EA580C] text-sm"
                    />
                  </div>

                  <div className="pt-2 flex flex-row items-center gap-2 sm:gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-2.5 sm:py-3 px-2 xs:px-4 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold rounded-md text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-xs"
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
                      className="flex-1 py-2.5 sm:py-3 px-2 xs:px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-md text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 sm:gap-2 text-center shadow-xs"
                    >
                      <WhatsappLogo size={18} weight="fill" className="shrink-0" />
                      <span className="truncate">Chat on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
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

              <div className="border border-stone-200 rounded-lg overflow-hidden h-64 sm:h-80 shadow-xs">
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
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-md text-xs sm:text-sm transition-colors w-full sm:w-auto"
                >
                  <NavigationArrow size={16} weight="bold" />
                  <span>Open in Google Maps App</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FAQ ACCORDION - Solid Light Yellow (#FEF9C3)
         ========================================================================= */}
      <section className="bg-[#FEF9C3] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7C2D12] bg-[#FDE047] px-3 py-1 rounded">
              वारंवार विचारले जाणारे प्रश्न • FAQs
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-2">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#EA580C] mx-auto mt-3" />
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={faq.question}
                  className="bg-white border border-amber-200 rounded-lg overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left p-3.5 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-stone-900 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <CaretDown
                      size={18}
                      weight="bold"
                      className={`text-[#EA580C] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-stone-600 border-t border-stone-100 pt-3 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
