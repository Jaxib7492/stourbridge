import React from 'react';
import { Ear, Stethoscope, Star, Clock, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsKidderminster() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aids & Ear Wax Removal Kidderminster | Expert Audiology</title>
        <meta name="description" content="Professional hearing aids and clinical microsuction ear wax removal in Kidderminster. Independent care, free hearing tests, and local home visits available." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-kidderminster" />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hearing Aids & Ear Care — Kidderminster
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Expert audiology services for the Kidderminster community. Safe, professional, and patient-focused hearing care.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="mt-10 bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 shadow-2xl"
          >
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">
          <p>
            We provide professional **earwax removal in Kidderminster** using the latest microsuction technology. 
            As an independent clinic, we pride ourselves on offering a more personal, clinical experience than high-street retailers.
          </p>
          <p>
            Blocked ears can cause significant distress, from physical discomfort to social withdrawal. 
            Our audiologist-led team offers fast, reliable treatment to restore your hearing and comfort.
          </p>
          <div className="flex items-center gap-2 text-red-500 font-semibold pt-4">
            <MapPin className="w-5 h-5" />
            <span>Serving Kidderminster, Bewdley, Stourport-on-Severn, and Cookley.</span>
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
              Microsuction is the safest method for wax removal. Performed under a microscope, 
              it allows for total precision without the need for water irrigation or syringing.
            </p>
          </div>

          {/* Hearing Aids */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Hearing Tests & Aids</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Access the world’s most advanced hearing aid technology in Kidderminster. 
              We offer free diagnostic hearing tests and professional fitting for all major brands.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Trusted Local Audiology</h2>
          
          <div className="grid sm:grid-cols-2 gap-10 text-gray-300">
            <div className="flex gap-4">
              <ShieldCheck className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Independent Advice</h3>
                <p>We aren't tied to any single manufacturer, ensuring you get the right hearing aid for your lifestyle.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Same-Day Service</h3>
                <p>We often have emergency slots available for Kidderminster patients needing urgent wax removal.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Qualified Experts</h3>
                <p>Rest easy knowing your ears are in the hands of fully qualified and HCPC-registered audiologists.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Home Visits</h3>
                <p>For patients with limited mobility, we offer a comprehensive home visit service across Wyre Forest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Kidderminster Patient FAQs</h2>
          <div className="space-y-4">
            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                How often should I have my hearing tested?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                We recommend a hearing check every two years if you are over 50, or annually if you already wear hearing aids.
              </div>
            </details>

            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                Is wax removal painful?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Not at all. Microsuction is a gentle procedure. Most patients describe it as a cool breeze or a slight whistling sound in the ear.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Experience Better Hearing</h2>
          <p className="text-xl mb-10 opacity-90 text-red-50">Join hundreds of Kidderminster residents who have rediscovered clear sound with our help.</p>
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
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}