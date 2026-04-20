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
        <title>Hearing Aids & Ear Wax Removal Birmingham | Professional Care</title>
        <meta name="description" content="Expert hearing aids and microsuction ear wax removal services in Birmingham. Fast appointments, professional audiologists, and gold-standard ear care." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-birmingham" />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hearing Aids & Ear Care — Birmingham
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Professional hearing services and safe ear wax removal for patients across Birmingham. 
            Expert care, precise technology, and effective results.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="mt-10 bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 shadow-2xl"
          >
            Book Your Consultation
          </button>
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
            Blocked ears can lead to more than just physical discomfort; they can cause significant hearing loss, 
            tinnitus, and social isolation. Our Birmingham clinics offer fast, reliable treatments to restore your hearing clarity.
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
                <h3 className="text-xl font-semibold mb-2">Expert Audiologists</h3>
                <p className="text-gray-400">Our clinic is led by highly experienced professionals focused on clinical excellence.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
                <p className="text-gray-400">We offer same-day or next-day appointments in many cases to resolve hearing issues fast.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Independent Choice</h3>
                <p className="text-gray-400">We aren't tied to one manufacturer, giving you access to the world's best hearing aid brands.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Ear className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Lifetime Aftercare</h3>
                <p className="text-gray-400">Our commitment doesn't end at fitting; we provide ongoing support and adjustments for life.</p>
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
              <h3 className="text-xl font-semibold text-white mb-3">Is microsuction safe?</h3>
              <p className="text-gray-400">Yes, it is widely considered the safest and most comfortable method for removing earwax, as the professional has a clear view of the ear canal throughout.</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">Do I need ear drops before my appointment?</h3>
              <p className="text-gray-400">While not always necessary, using Olive Oil drops for 2-3 days prior can help soften the wax and make the removal process even smoother.</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-3">How long does treatment take?</h3>
              <p className="text-gray-400">Standard appointments usually last between 15–30 minutes, depending on the amount of wax present in both ears.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 to-red-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Take the First Step to Better Hearing</h2>
          <p className="text-xl mb-10 opacity-90">Book your Birmingham clinic appointment or home visit today.</p>
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