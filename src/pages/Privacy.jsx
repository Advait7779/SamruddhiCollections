import { Link } from 'react-router-dom'
import {
  LockKey,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight
} from '@phosphor-icons/react'
import SareeBorder from '../components/SareeBorder'
import ScrollReveal from '../components/ScrollReveal'

export default function Privacy() {
  return (
    <div className="font-sans text-stone-800">
      <SareeBorder />

      {/* =========================================================================
          PAGE HEADER - Solid Saffron Orange (#9A3412)
         ========================================================================= */}
      <section className="bg-[#9A3412] text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-[#7C2D12]">
        <div className="max-w-4xl mx-auto text-center space-y-2.5 sm:space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-200">
            गोपनीयता धोरण • Privacy &amp; Data Protection
          </p>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-amber-100 max-w-xl mx-auto leading-relaxed">
            How Samruddhi Collection protects your personal information and respects your privacy.
          </p>
          <p className="text-[11px] text-amber-300">
            Last Updated: October 2026 • Effective Immediately
          </p>
        </div>
      </section>

      <SareeBorder />

      {/* =========================================================================
          PRIVACY POLICY CONTENT
         ========================================================================= */}
      <section className="bg-stone-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" duration={650} className="max-w-4xl mx-auto">
          <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-10 shadow-xs space-y-8 text-sm leading-relaxed text-stone-700">

          {/* Section 1 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              1. Overview &amp; Commitment
            </h2>
            <p>
              At <strong>Samruddhi Collection</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are committed to safeguarding the privacy and confidentiality of our customers. This Privacy Policy explains how we collect, handle, and protect your personal information when you browse our website (<span className="text-[#EA580C] font-medium">samruddhicollection.com</span>), submit an inquiry, or visit our retail store in Ashwi Bk, Sangamner.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              2. Information We Collect
            </h2>
            <div className="space-y-2">
              <p>We collect only the essential information needed to assist you:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>
                  <strong>Contact Information:</strong> Your full name and mobile phone number provided when completing our enquiry form or contacting us on WhatsApp.
                </li>
                <li>
                  <strong>Inquiry Details:</strong> Specific clothing interests, such as Paithani sarees, dress materials, readymade kurtis, kids ethnic wear, or wholesale bulk wedding inquiries.
                </li>
                <li>
                  <strong>Website Browsing Data:</strong> Standard anonymous web metrics (such as browser type and device viewport) to ensure fast and reliable page loading.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              3. How We Use Your Information
            </h2>
            <div className="space-y-2">
              <p>Your personal information is used exclusively for legitimate business purposes:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Responding promptly to your saree and fabric inquiries.</li>
                <li>Sharing requested photos, videos, and catalog details of fresh arrivals.</li>
                <li>Providing wholesale rate estimates for bulk wedding orders.</li>
                <li>Providing accurate directions, shop timings, and customer assistance.</li>
                <li>Sending periodic festive updates, discount offers, and new collection launches.</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              4. Strict Non-Disclosure &amp; No Sale of Data
            </h2>
            <div className="bg-[#FFF7ED] border border-orange-200 rounded-lg p-4 sm:p-5 text-xs sm:text-sm text-stone-700 space-y-2">
              <p className="font-semibold text-stone-900">
                We respect your personal privacy:
              </p>
              <p>
                We do <strong>not</strong> sell, rent, trade, or share your mobile phone number or personal details with any third-party marketing companies, advertisers, or external lead brokers under any circumstances.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              5. Customer Messaging &amp; Opt-Out Options
            </h2>
            <p className="mb-2">
              We send updates only to customers who have reached out to us or requested information. You always maintain full control over the communications you receive:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                You can easily opt out of promotional messages at any time by replying <span className="font-mono bg-white px-2 py-0.5 rounded border border-orange-200 text-[#EA580C] font-bold">STOP</span> or <span className="font-mono bg-white px-2 py-0.5 rounded border border-orange-200 text-[#EA580C] font-bold">UNSUBSCRIBE</span>.
              </li>
              <li>
                You can also call or message us directly at <strong>+91 98812 25553</strong> to have your contact details removed from our updates list.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              6. Data Security &amp; Retention
            </h2>
            <p>
              We apply appropriate technical safeguards to ensure that customer contact records are stored securely and protected against unauthorized access. We retain personal details only for as long as necessary to fulfill customer service requests or comply with applicable legal regulations.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
              7. Your Rights
            </h2>
            <p>
              You have the right to request access to the contact details we maintain for you, request corrections of outdated information, or ask us to delete your records from our messaging databases. To exercise any of these rights, please contact our store directly.
            </p>
          </div>

          {/* Contact Box */}
          <div className="border-t border-stone-200 pt-6">
            <h3 className="text-base font-bold text-stone-900 mb-3">
              Privacy Contact &amp; Store Details
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-stone-700">
              <p>
                <strong>Store Name:</strong> Samruddhi Collection
              </p>
              <p>
                <strong>Address:</strong> Pratappur Road, Swaroopchand Gandhi Market, Ashwi Bk, Taluka Sangamner, Dist. Ahmednagar, Maharashtra 413714
              </p>
              <p>
                <strong>Phone / WhatsApp:</strong> <a href="tel:+919881225553" className="text-[#EA580C] font-semibold hover:underline">+91 98812 25553</a>
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4 text-xs font-bold text-[#EA580C]">
              <Link to="/terms" className="hover:text-[#C2410C] flex items-center gap-1">
                <span>Terms &amp; Conditions</span>
                <ArrowRight size={14} weight="bold" />
              </Link>
              <span className="text-stone-300">•</span>
              <Link to="/contact" className="hover:text-[#C2410C]">
                <span>Contact Store</span>
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  </div>
)
}
