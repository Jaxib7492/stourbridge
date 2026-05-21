import React from 'react';
import { Ear, Stethoscope, Star, Clock, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsHalesowen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aids & Ear Wax Removal Halesowen | Expert Audiologist</title>
        <meta name="description" content="Expert hearing aids and microsuction ear wax removal services in Halesowen. Professional ear care, free hearing tests, and quick appointments available." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-halesowen" />
      </Helmet>

      {/* HERO */}
      {/* HERO */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
  <div className="max-w-5xl mx-auto">

    {/* TITLE */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
      Hearing Aids & Ear Care — Halesowen
    </h1>

    {/* SUBTITLE */}
    <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
      Providing expert hearing assessments and safe microsuction ear wax removal for the Halesowen community.
      Expert care, precise technology, and effective results.
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
        Visit Stourbridge Hearing Centre
      </h2>

      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Professional hearing aid services and microsuction ear wax removal
        with expert care and advanced technology.
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
            We provide professional **earwax removal in Halesowen** using the highly-regarded microsuction technique. 
            This method is widely considered the safest way to clear blockages without the mess or discomfort of traditional water syringing.
          </p>
          <p>
            Blocked ears can lead to a sense of isolation and physical discomfort. Our local clinic offers a fast, clinical 
            alternative to long waiting lists, ensuring you receive expert care when you need it most.
          </p>
          <div className="flex items-center gap-2 text-red-500 font-semibold pt-4">
            <MapPin className="w-5 h-5" />
            <span>Serving Halesowen, Quinton, Cradley, and Romsley.</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Microsuction */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                <Ear className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Microsuction Wax Removal</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Experience the gold standard in ear care. Our microsuction service is precise, effective, and 
              safe for those with perforated eardrums or sensitive ear canals.
            </p>
          </div>

          {/* Hearing Aids */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Hearing Assessments</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We offer free hearing tests in Halesowen using state-of-the-art diagnostic equipment. 
              Discover a wide range of digital, rechargeable, and Bluetooth-compatible hearing aids.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-display">Trusted Halesowen Audiology</h2>
          
          <div className="grid sm:grid-cols-2 gap-10 text-gray-300">
            <div className="flex gap-4">
              <ShieldCheck className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Qualified Clinicians</h3>
                <p>All procedures are performed by registered audiologists with extensive experience in ear health.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Urgent Appointments</h3>
                <p>We understand the frustration of blocked ears. We offer quick turnarounds for wax removal.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">5-Star Patient Care</h3>
                <p>Independent and unbiased. We recommend the best solution for your hearing, not our bottom line.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Ear className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Latest Technology</h3>
                <p>From invisible style aids to AI-powered sound processing, we bring the future to Halesowen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Halesowen Service FAQs</h2>
          <div className="space-y-4">
            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                Is microsuction safe for everyone?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Yes, microsuction is suitable for almost everyone, including people with perforated eardrums or narrow ear canals where other methods (like irrigation) might be risky.
              </div>
            </details>

            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                Do you offer home visits in Halesowen?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Absolutely. If you have mobility issues or simply prefer the comfort of your home, we provide a full home-visit service across the Halesowen area.
              </div>
            </details>

            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                How much does ear wax removal cost?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Our pricing is competitive and transparent. Please contact us for the latest rates for single or both ear treatments.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Reconnect With the World</h2>
          <p className="text-xl mb-10 opacity-90 text-red-50">Don't let hearing loss or earwax blockages hold you back. Book your Halesowen appointment today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-white text-red-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Book Now
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-700 transition-all"
            >
              Call Clinic
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}