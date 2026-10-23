import { Link } from 'react-router-dom'
import {
  FileText,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight
} from '@phosphor-icons/react'
import SareeBorder from '../components/SareeBorder'
import ScrollReveal from '../components/ScrollReveal'

export default function Terms() {
  return (
    <div className="font-sans text-stone-800">
      <SareeBorder />

      {/* =========================================================================
          PAGE HEADER - Solid Saffron Orange (#9A3412)
         ========================================================================= */}
      <section className="bg-[#9A3412] text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-[#7C2D12]">
        <div className="max-w-4xl mx-auto text-center space-y-2.5 sm:space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-200">
            नियम व अटी • Legal &amp; Policies
          </p>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white leading-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-amber-100 max-w-xl mx-auto leading-relaxed">
            General terms of use, customer communications, and store purchase policies for Samruddhi Collection.
          </p>
          <p className="text-[11px] text-amber-300">
            Last Updated: October 2026 • Effective Immediately
          </p>
        </div>
      </section>

      <SareeBorder />

      {/* =========================================================================
          TERMS CONTENT
         ========================================================================= */}
      <section className="bg-stone-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" duration={650} className="max-w-4xl mx-auto">
          <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-10 shadow-xs space-y-8 text-sm leading-relaxed text-stone-700">

          {/* Section 1 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              Welcome to <strong>Samruddhi Collection</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), located at Pratappur Road, Swaroopchand Gandhi Market, Ashwi Bk, Taluka Sangamner, Dist. Ahmednagar, Maharashtra 413714. By accessing our website (<span className="text-[#EA580C] font-medium">samruddhicollection.com</span>), visiting our retail counter, or submitting customer inquiries through our online contact forms and messaging channels, you agree to be bound by these Terms and Conditions.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              2. Products, Fabrics &amp; Handloom Variations
            </h2>
            <p>
              We specialize in genuine Yeola Paithani sarees, handloom silk weaves, designer unstitched dress materials, readymade suits, and kids ethnic wear. Due to the handcrafted nature of traditional handloom sarees and variations in digital display screens, slight variations in color hues, zari luster, or weave textures between online photographs and physical fabrics are normal and celebrated characteristics of authentic handloom textiles.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              3. Inquiries, Pricing &amp; Wholesale Bulk Orders
            </h2>
            <div className="space-y-2">
              <p>
                Product photos and descriptions on our website are provided to showcase our curated catalog. We operate both wholesale and retail counters:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Pricing and availability are subject to stock changes and seasonal textile arrivals.</li>
                <li>Special discounted wholesale rates are offered for bulk wedding purchases and community functions upon direct inquiry.</li>
                <li>All final price confirmations and orders are concluded directly with our store management via WhatsApp, phone, or in-person store visits.</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              4. Customer Communications &amp; Messaging
            </h2>
            <p className="mb-3">
              When you submit your mobile number on our website contact form, initiate an inquiry via WhatsApp, or opt in at our store counter, you consent to receive customer service updates, product catalogs, order status alerts, and periodic seasonal offers from Samruddhi Collection.
            </p>
            <div className="bg-[#FFF7ED] border border-orange-200 rounded-lg p-4 sm:p-5 space-y-2.5 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#15803D] shrink-0 mt-0.5" />
                <span>
                  <strong>Standard Carrier Rates:</strong> Standard message and data rates may apply according to your mobile network operator plan.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#15803D] shrink-0 mt-0.5" />
                <span>
                  <strong>Opt-Out Choice:</strong> You can opt out of promotional communications at any time by replying <span className="font-mono bg-white px-2 py-0.5 rounded border border-orange-200 text-[#EA580C] font-bold">STOP</span> or <span className="font-mono bg-white px-2 py-0.5 rounded border border-orange-200 text-[#EA580C] font-bold">UNSUBSCRIBE</span>, or by calling our store directly at <strong>+91 98812 25553</strong>.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={18} weight="fill" className="text-[#15803D] shrink-0 mt-0.5" />
                <span>
                  <strong>Customer Assistance:</strong> For any assistance, reply <span className="font-mono bg-white px-2 py-0.5 rounded border border-orange-200 text-[#EA580C] font-bold">HELP</span> or connect with our support team on WhatsApp at <strong>+91 98812 25553</strong>.
                </span>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              5. Complimentary Saree Services &amp; Store Purchases
            </h2>
            <p>
              We provide complimentary Fall and Pico services on selected bridal and festive Paithani saree purchases. Customers are encouraged to thoroughly inspect all sarees and garments at the time of purchase. Return, replacement, and exchange policies for purchased items are subject to standard retail store guidelines and fabric condition.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website, including photographs, logo, branding, texts, and graphics, is the property of Samruddhi Collection. Any unauthorized reproduction, duplication, or redistribution without prior written consent is strictly prohibited.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              7. Limitation of Liability
            </h2>
            <p>
              Samruddhi Collection shall not be liable for any indirect, incidental, or consequential damages resulting from the use of this website, delayed message delivery caused by mobile carrier network downtime, or temporary store closures during public holidays.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              8. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the Republic of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Sangamner / Ahmednagar District, Maharashtra.
            </p>
          </div>

          {/* Contact Box */}
          <div className="border-t border-stone-200 pt-6">
            <h3 className="text-base font-bold text-stone-900 mb-3">
              Questions About Our Terms?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
              <div className="flex items-center gap-2">
                <Phone size={16} weight="bold" className="text-[#EA580C]" />
                <span>Call: <strong>+91 98812 25553</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} weight="bold" className="text-[#EA580C]" />
                <span>Swaroopchand Gandhi Market, Ashwi Bk</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4 text-xs font-bold text-[#EA580C]">
              <Link to="/contact" className="hover:text-[#C2410C] flex items-center gap-1">
                <span>Contact Us</span>
                <ArrowRight size={14} weight="bold" />
              </Link>
              <span className="text-stone-300">•</span>
              <Link to="/privacy" className="hover:text-[#C2410C]">
                <span>Privacy Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  </div>
)
}
