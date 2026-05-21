import React from 'react';
import { Ear, Stethoscope, Star, Clock, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsRedditch() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aids & Ear Wax Removal Redditch | Stourbridge Hearing Centre</title>
        <meta name="description" content="Expert hearing aids and microsuction ear wax removal services in Redditch. Professional ear care, free hearing tests, and urgent appointments available for Worcestershire residents." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-redditch" />
      </Helmet>

      {/* HERO */}
      {/* HERO */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
  <div className="max-w-5xl mx-auto">

    {/* TITLE */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
      Hearing Aids & Ear Care — Redditch
    </h1>

    {/* SUBTITLE */}
    <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
      Providing expert hearing assessments and safe microsuction ear wax removal for the Redditch community.
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
            Stourbridge Hearing Centre provides professional **earwax removal in Redditch** using safe and effective microsuction techniques. 
            We provide a clinical alternative to GP waiting lists, ensuring you get your hearing back to normal as quickly as possible.
          </p>
          <p>
            Our independent clinic is led by experienced audiologists dedicated to patient-focused care. From comprehensive diagnostic 
            hearing tests to the fitting of discreet, modern hearing aids, we offer a full range of auditory services to the Redditch community.
          </p>
          <div className="flex items-center gap-2 text-red-500 font-semibold pt-4">
            <MapPin className="w-5 h-5" />
            <span>Serving Redditch, Bromsgrove, Studley, and Alvechurch.</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Microsuction */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                <Ear className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white italic">Microsuction Wax Removal</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Microsuction is the safest, most precise method for clearing earwax blockages. 
              Unlike syringing, it uses no water, making it ideal for those with sensitive ears or perforated eardrums.
            </p>
          </div>

          {/* Hearing Aids */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white italic">Hearing Tests & Aids</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We offer free diagnostic hearing tests and fit the latest rechargeable, Bluetooth-enabled 
              hearing aids from world-leading brands like Phonak, Oticon, and Starkey.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Why Choose Our Redditch Clinic</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="font-bold mb-2">Audiologist Led</h3>
              <p className="text-gray-400 text-sm">Expert clinical care from qualified professionals.</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="font-bold mb-2">Quick Access</h3>
              <p className="text-gray-400 text-sm">Urgent appointments often available within 24-48 hours.</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="font-bold mb-2">Independent</h3>
              <p className="text-gray-400 text-sm">Unbiased advice across all major hearing aid brands.</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="font-bold mb-2">Local Service</h3>
              <p className="text-gray-400 text-sm">Proudly serving the Worcestershire community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 italic">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden shadow-sm">
              <summary className="p-6 text-lg font-semibold cursor-pointer list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                How much does ear wax removal cost?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Our microsuction service is competitively priced. Please contact us for the latest rates and current availability in Redditch.
              </div>
            </details>

            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden shadow-sm">
              <summary className="p-6 text-lg font-semibold cursor-pointer list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                Is the hearing test really free?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Yes, we provide a full diagnostic hearing assessment free of charge with no obligation to purchase a hearing aid.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 italic">Start Your Journey to Better Hearing</h2>
          <p className="text-xl mb-10 opacity-90">Join the thousands of happy patients who trust Stourbridge Hearing Centre for their ear care.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-red-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Book My Appointment
            </button>
            <a
              href="tel:01384476306"
              className="bg-black text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
            >
              Call 01384 476 306
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}