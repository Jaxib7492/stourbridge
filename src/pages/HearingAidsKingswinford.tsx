import React from 'react';
import { Ear, Stethoscope, Star, Clock, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsKingswinford() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aids & Ear Wax Removal Kingswinford | Expert Audiology</title>
        <meta name="description" content="Professional hearing aids and clinical microsuction ear wax removal in Kingswinford. Benefit from free hearing tests, independent advice, and local home visits." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-kingswinford" />
      </Helmet>

      {/* HERO */}
      {/* HERO */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
  <div className="max-w-5xl mx-auto">

    {/* TITLE */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
      Hearing Aids & Ear Care — Kingswinford
    </h1>

    {/* SUBTITLE */}
    <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
      Providing expert hearing assessments and safe microsuction ear wax removal for the Kingswinford community.
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
            Stourbridge Hearing Centre provides professional **earwax removal in Kingswinford** using safe and highly effective microsuction techniques. 
            We offer a clinical alternative to traditional syringing, performed by experienced audiologists.
          </p>
          <p>
            Whether you are struggling with sudden hearing loss due to a blockage or looking for an upgrade in hearing aid technology, 
            our clinic provides the expertise and time required for a truly personal service.
          </p>
          <div className="flex items-center gap-2 text-red-500 font-semibold pt-4">
            <MapPin className="w-5 h-5" />
            <span>Serving Kingswinford, Wall Heath, Wordsley, and Himley.</span>
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
              <h2 className="text-2xl font-bold text-white">Clinical Wax Removal</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We use medical-grade suction to gently remove earwax. This process is far safer than 
              syringing and provides instant relief from blockages and muffled hearing.
            </p>
          </div>

          {/* Hearing Aids */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Hearing Technology</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Experience the latest discreet hearing aids in Kingswinford. Our independent status 
              allows us to source the best devices from Phonak, Oticon, Widex, and more.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Local Expertise You Can Trust</h2>
          
          <div className="grid sm:grid-cols-2 gap-10 text-gray-300">
            <div className="flex gap-4">
              <ShieldCheck className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Independent Clinic</h3>
                <p>We offer unbiased advice across all leading brands, focusing entirely on your specific hearing goals.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Flexible Booking</h3>
                <p>We prioritize urgent cases for wax removal, often offering appointments within 24 to 48 hours.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">5-Star Aftercare</h3>
                <p>All hearing aid fittings include lifetime aftercare, including fine-tuning and regular health checks.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Kingswinford Home Visits</h3>
                <p>We provide a dedicated home visit service for residents who cannot visit our main clinic in person.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Kingswinford Patient FAQs</h2>
          <div className="space-y-4">
            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden shadow-sm cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                What is the benefit of microsuction over syringing?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Microsuction is a dry procedure, meaning there is no risk of infection from water. It is safer, cleaner, and allows the audiologist to see exactly what they are doing at all times.
              </div>
            </details>

            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden shadow-sm cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                How much does a hearing test cost?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                We offer free initial hearing assessments for adults. This includes a full diagnostic check and a discussion regarding your results and potential solutions.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Hear Clearly Again?</h2>
          <p className="text-xl mb-10 opacity-90 text-red-50">Don't settle for muffled sound. Contact our Kingswinford team for a professional consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-white text-red-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Book Appointment
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