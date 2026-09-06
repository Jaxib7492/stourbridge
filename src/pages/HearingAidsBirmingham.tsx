import React from 'react';
import { Ear, Stethoscope, Star, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsBirmingham() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aids & Microsuction Birmingham | Independent Audiologist</title>
        <meta name="description" content="HCPC-registered audiologists providing private hearing aids and microsuction earwax removal for Birmingham patients. Clinical care, home visits & same-day appointments." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-birmingham" />
      </Helmet>

      {/* HERO */}
      {/* HERO */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
  <div className="max-w-5xl mx-auto">

    {/* TITLE */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
      Private Hearing Aids & Microsuction Earwax Removal for Birmingham
    </h1>

    {/* SUBTITLE */}
    <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
      HCPC-Registered Clinical Audiology Care, Hearing Assessments & Domiciliary Visits
      At Stourbridge Hearing Centre, our qualified clinical audiologists deliver comprehensive hearing healthcare for patients across Birmingham.
      Whether you require precise microsuction earwax removal, full diagnostic audiometry, or invisible digital hearing aids, our independent practice provides expert, patient-focused care tailored to your exact hearing needs.
    </p>

    {/* BUTTONS */}
    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

      {/* CONSULTATION BUTTON */}
      <button
        onClick={() => navigate('/contact')}
        className="bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
      >
        Book Your Consultation
      </button>

      {/* HOME VISITS BUTTON */}
      <button
        onClick={() => navigate('/home-visits')}
        className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
      >
        Home Visits
      </button>

    </div>

  </div>
</section>

{/* PROFESSIONAL LOCATION MAP */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
  <div className="max-w-6xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-12">

      <h2 className="text-4xl font-bold text-white mb-4">
        Independent Audiology Practice Serving Birmingham & West Midlands
      </h2>

      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Advanced Diagnostic Hearing Services & Clinical Cerumen Management
        Located within easy reach of Greater Birmingham, our independent practice offers private audiometry, prescription hearing instrument fittings, and water-free microsuction.
      </p>

    </div>

    {/* MAP CARD */}
    <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">

      {/* MAP */}
      <div className="relative w-full h-[550px]">

        <iframe
          title="Stourbridge Hearing Centre Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6674309.426382166!2d3.1469805935044!3d46.61824495131681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487091bae0831089%3A0xd24b5345dc5080ef!2sStourbridge%20Hearing%20Centre%20-Earwax%20removal%20%26%20Hearing%20Aids%20Specialists!5e0!3m2!1sen!2s!4v1779387526809!5m2!1sen!2s"
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
        <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6 text-center md:text-left">
          <p>
            We provide professional **earwax removal in Birmingham** using the latest safe and effective microsuction techniques. 
            As an independent clinic, we pride ourselves on giving each patient the time and attention they deserve.
          </p>
          <p>
            Excess cerumen (earwax) impaction can cause conductible hearing loss, otalgia, and tinnitus. We provide prompt, clinical-grade ear care and video otoscopy to clear blocked canals and assess middle-ear health.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-red-500 font-semibold">
            <MapPin className="w-5 h-5" />
            <span>Serving Harborne, Edgbaston, Solihull, and Greater Birmingham.</span>
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
              <h2 className="text-2xl font-bold text-white">
                Microsuction Ear Wax Removal
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Microsuction is the **gold standard** for earwax removal. It is safe, precise, and unlike traditional syringing, 
              it does not involve water, making it ideal for sensitive ears or those with previous perforations.
            </p>
          </div>

          {/* Hearing */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Hearing Tests & Aids
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              We provide comprehensive hearing assessments in Birmingham. From invisible hearing aids to the latest 
              Bluetooth-enabled technology, we ensure your devices are tailored to your lifestyle and budget.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Stourbridge Hearing?</h2>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <ShieldCheck className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">HCPC-Registered Clinical Audiologists</h3>
                <p className="text-gray-400">Professional care carried out strictly by qualified audiologists committed to clinical excellence.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Rapid Access Appointments</h3>
                <p className="text-gray-400">Same-day and next-day clinical availability for urgent earwax removal and hearing checks.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Unbiased Multi-Brand Technology</h3>
                <p className="text-gray-400">As an independent practice, we prescribe devices from all leading global manufacturers without commercial bias.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Ear className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Lifetime Care</h3>
                <p className="text-gray-400">All hearing instrument fittings include ongoing clinical adjustments, ear canal health checks, and routine aftercare.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-500">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">Why is clinical microsuction preferred over traditional syringing?</h3>
              <p className="text-gray-400">Microsuction uses low-pressure suction under continuous microscopic visualization, avoiding water pressure against the tympanic membrane and lowering the risk of infection or injury.</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">Should I soften earwax with drops before my microsuction appointment?</h3>
              <p className="text-gray-400">Applying medical-grade olive oil spray for 1 to 2 days prior to your visit softens hard cerumen, facilitating quicker and more comfortable extraction.</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">How long does a full clinical earwax removal session take?</h3>
              <p className="text-gray-400">Appointment slots generally take 15 to 30 minutes, incorporating preliminary video otoscopy, bilateral suction clearance, and post-procedure verification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 to-red-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Schedule Private Hearing Care or Domiciliary Visits for Birmingham</h2>
          <p className="text-xl mb-10 opacity-90">Contact our HCPC-registered audiology team today to arrange in-clinic microsuction, a diagnostic hearing assessment, or a home visit across Greater Birmingham.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Book Clinic Appointment
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-700 transition-all"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}