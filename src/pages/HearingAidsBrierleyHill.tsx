import React from 'react';
import { Ear, Stethoscope, Star, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsBrierleyHill() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aids & Earwax Removal Brierley Hill | Clinical Microsuction</title>
        <meta name="description" content="HCPC-registered microsuction earwax removal & private hearing aids for Brierley Hill patients. Diagnostic hearing tests, water-free ear cleaning & home visits." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-brierley-hill" />
      </Helmet>

      {/* HERO */}
      {/* HERO */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
  <div className="max-w-5xl mx-auto">

    {/* TITLE */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
      Microsuction Earwax Removal & Hearing Aids in Brierley Hill
    </h1>

    {/* SUBTITLE */}
    <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
      HCPC-Registered Clinical Audiology, Ear Care & Home Visit Services
      At Stourbridge Hearing Centre, our qualified clinical audiologists provide expert ear health care for residents across Brierley Hill.
      From safe, water-free microsuction earwax extraction to full diagnostic hearing evaluations and custom digital hearing aids, our independent practice delivers fast, effective relief.
    </p>

    {/* BUTTON */}
    <div className="mt-10 flex justify-center">
      <button
        onClick={() => navigate('/contact')}
        className="bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
      >
        Book Your Appointment
      </button>
    </div>

  </div>
</section>

{/* MAP SECTION */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
  <div className="max-w-6xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-12">

      <h2 className="text-4xl font-bold text-white mb-4">
        Independent Audiological Care Serving Brierley Hill & The Black Country
      </h2>

      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Clinical Cerumen Extraction & Prescription Digital Hearing Instruments
      </p>

    </div>

    {/* MAP CARD */}
    <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">

      {/* MAP */}
      <div className="relative w-full h-[550px]">

        <iframe
          title="Stourbridge Hearing Centre Location"
          src="https://www.google.com/maps?q=Stourbridge%20Hearing%20Centre&output=embed&z=16"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>

        {/* GET DIRECTIONS BUTTON */}
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Stourbridge+Hearing+Centre"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-2xl font-bold shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Get Directions
        </a>

      </div>

      {/* INFO SECTION */}
      <div className="p-8 grid md:grid-cols-3 gap-6">

        {/* LOCATION */}
        <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-red-500 mb-3">
            Clinic Location
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Stourbridge Hearing Centre provides professional hearing care,
            hearing aids, and microsuction ear wax removal services.
          </p>
        </div>

        {/* HOME VISITS */}
        <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-red-500 mb-3">
            Home Visits Available
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Comfortable at-home appointments available for patients
            unable to travel to the clinic.
          </p>
        </div>

        {/* FAST BOOKINGS */}
        <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-red-500 mb-3">
            Fast Appointments
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Same-day and next-day bookings available depending on availability.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">
          <p>
            Situated moments from Brierley Hill, Pensnett, Brockmoor, and the Waterfront, our independent practice offers premier audiological consultations and treatment.
          </p>
          <p>
            Impacted earwax can cause sudden conductible hearing loss, fullness, and tinnitus. Our registered audiologists utilize video otoscopy and gentle suction to restore canal health and optimize hearing performance.
          </p>
          <div className="flex items-center gap-2 text-red-500 font-semibold">
            <MapPin className="w-5 h-5" />
            <span>Serving Brierley Hill, Pensnett, Brockmoor, and the Waterfront.</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Microsuction */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg">
                <Ear className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Clinical Microsuction Cerumen Extraction</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Precision water-free ear wax removal conducted under continuous high-magnification video otoscopy, making it the safest alternative to irrigation.
            </p>
          </div>

          {/* Hearing */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Diagnostic Hearing Assessments & Digital Hearing Instruments</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Comprehensive audiometric testing and bespoke fittings of advanced rechargeable, invisible, and Bluetooth-enabled hearing aids.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">The Local Choice for Ear Care</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-gray-300">
            <div className="flex gap-4">
              <ShieldCheck className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">HCPC-Registered Audiology Team</h3>
                <p>All clinical procedures are conducted strictly by qualified hearing aid audiologists with extensive healthcare expertise.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Immediate Same-Day Relief</h3>
                <p>Experience instant acoustic restoration with full video otoscopic verification before and after treatment.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Unbiased Independent Choice</h3>
                <p>Complete freedom of choice across all major global hearing aid brands without manufacturer constraints.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Ear className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Domiciliary Home Visits</h3>
                <p>Dedicated at-home clinical earwax removal and hearing tests for Brierley Hill patients unable to travel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Brierley Hill Patient FAQs</h2>
          <div className="space-y-6">
            <details className="bg-gray-900 border border-gray-800 rounded-xl p-6 group cursor-pointer">
              <summary className="text-lg font-semibold list-none flex justify-between items-center">
                <span>Why is clinical microsuction safer than traditional ear syringing?</span>
                <span className="text-red-500 transition-transform group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">Microsuction uses low-pressure suction under direct microscopic vision without flushing high-pressure water into the canal, eliminating the risk of tympanic membrane perforation.</p>
            </details>

            <details className="bg-gray-900 border border-gray-800 rounded-xl p-6 group cursor-pointer">
              <summary className="text-lg font-semibold list-none flex justify-between items-center">
                <span>Do I require a GP referral for earwax removal or hearing tests in Brierley Hill?</span>
                <span className="text-red-500 transition-transform group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">No GP referral is necessary. You can book directly with our clinical audiologists for immediate appointments and bypass lengthy waiting lists.</p>
            </details>

            <details className="bg-gray-900 border border-gray-800 rounded-xl p-6 group cursor-pointer">
              <summary className="text-lg font-semibold list-none flex justify-between items-center">
                <span>Do you offer home visit services in Brierley Hill?</span>
                <span className="text-red-500 transition-transform group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">Yes, our clinical team brings full diagnostic equipment and portable microsuction units directly to your home across Brierley Hill, Pensnett, and surrounding areas.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">Book Clinical Ear Care for Brierley Hill Today</h2>
          <p className="text-xl mb-10 text-red-50 opacity-90">Contact Stourbridge Hearing Centre to schedule same-day microsuction earwax removal, a full diagnostic hearing assessment, or a home visit with an HCPC-registered audiologist.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-transform hover:scale-105 shadow-xl"
            >
              Book Now
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-700 transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}