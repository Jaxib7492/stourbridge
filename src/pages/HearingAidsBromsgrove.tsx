import React from 'react';
import { Ear, Stethoscope, Star, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsBromsgrove() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aids & Ear Wax Removal Bromsgrove | Expert Care</title>
        <meta name="description" content="HCPC-registered microsuction earwax removal & 0% APR private hearing aids in Bromsgrove. Water-free clinical ear care, video otoscopy & home visits available." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-bromsgrove" />
      </Helmet>

      {/* HERO */}
     {/* HERO */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
  <div className="max-w-5xl mx-auto">

    {/* TITLE */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
      Microsuction Earwax Removal & Private Hearing Care in Bromsgrove
    </h1>

    {/* SUBTITLE */}
    <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
      HCPC-Registered Clinical Audiology, Advanced Ear Care & Home Visit Services
      At Stourbridge Hearing Centre, our qualified clinical audiologists provide expert, water-free microsuction earwax removal and comprehensive hearing assessments for patients across Bromsgrove.
      Whether you require rapid relief from impacted ear canal blockage or custom prescription hearing instruments with 0% APR financing options, our independent practice delivers patient-focused care..
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
        Independent Audiology & Cerumen Extraction Practice Serving Bromsgrove
      </h2>

      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Clinical Diagnostic Otoscopy & Prescription Digital Hearing Technology
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
            Conveniently located for patients in Bromsgrove, Aston Fields, Catshill, and Barnt Green, our independent clinic provides clinical-grade hearing healthcare and video otoscopic examinations.
          </p>
          <p>
            Earwax impaction can trigger sudden conductive hearing impairment, otalgia, and tinnitus. Our registered audiologists utilize direct-vision micro-vacuum extraction to safely clear acoustic canals and evaluate middle-ear integrity.
          </p>
          <div className="flex items-center gap-2 text-red-500 font-semibold">
            <MapPin className="w-5 h-5" />
            <span>Serving Bromsgrove, Aston Fields, Catshill, and Barnt Green.</span>
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
              <h2 className="text-2xl font-bold text-white">Water-Free Clinical Microsuction</h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Safe extraction of impacted cerumen under direct microscopic illumination, ideal for narrow canals, sensitive ears, or patients with perforated eardrums.
            </p>
          </div>

          {/* Hearing */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Diagnostic Audiometric Assessments & Prescription Hearing Devices</h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Comprehensive hearing checks and bespoke fittings of premium digital hearing instruments from Oticon, Phonak, Starkey, and Resound with 0% APR financing options.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Expert Ear Care in Bromsgrove</h2>
          
          <div className="grid sm:grid-cols-2 gap-8 text-gray-300">
            <div className="flex gap-4">
              <ShieldCheck className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Access Appointments</h3>
                <p>Clinical care provided strictly by qualified audiology practitioners adhering to gold-standard healthcare protocols.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Fast Access</h3>
                <p>Emergency same-day and 24–48 hour appointments for fast, effective earwax extraction and hearing relief.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Independent Multi-Brand Advice</h3>
                <p>Complete freedom to select prescription hearing instruments across all major manufacturers without sales targets.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Ear className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Domiciliary Care Across Bromsgrove</h3>
                <p>Dedicated home visits offering mobile microsuction and hearing tests for patients with mobility limitations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Bromsgrove Patient FAQs</h2>
          <div className="space-y-4">
            <details className="bg-gray-900 border border-gray-800 rounded-xl p-6 group cursor-pointer">
              <summary className="text-lg font-semibold list-none flex justify-between items-center">
                <span>Why is water-free microsuction safer than traditional ear syringing?</span>
                <span className="text-red-500 transition-transform group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">Microsuction uses direct microscopic visualization and gentle low-pressure suction, eliminating the water pressure risks associated with traditional ear syringing.</p>
            </details>

            <details className="bg-gray-900 border border-gray-800 rounded-xl p-6 group cursor-pointer">
              <summary className="text-lg font-semibold list-none flex justify-between items-center">
                <span>What are the main clinical symptoms of impacted earwax?</span>
                <span className="text-red-500 transition-transform group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">Common signs include acoustic canal fullness, conductive hearing loss, tinnitus (ringing), ear canal discomfort, and occasional dizziness.</p>
            </details>

            <details className="bg-gray-900 border border-gray-800 rounded-xl p-6 group cursor-pointer">
              <summary className="text-lg font-semibold list-none flex justify-between items-center">
                <span>Are 0% APR financing plans available for hearing aids in Bromsgrove?</span>
                <span className="text-red-500 transition-transform group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">Yes. We offer interest-free monthly financing plans (over 3, 6, 10, or 12 months) with zero hidden fees and no deposit requirements on select hearing instruments.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">Book Clinical Ear Care or Home Visits in Bromsgrove Today</h2>
          <p className="text-xl mb-10 text-red-50 opacity-90">Contact Stourbridge Hearing Centre to schedule same-day microsuction earwax removal, arrange a diagnostic hearing assessment, or request a domiciliary home visit.</p>
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