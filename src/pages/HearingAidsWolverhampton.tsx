import React from 'react';
import { Ear, Stethoscope, Star, Clock, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsWolverhampton() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aids & Ear Wax Removal Wolverhampton | Stourbridge Hearing Centre</title>
        <meta name="description" content="Expert hearing aids and microsuction ear wax removal services in Wolverhampton. Professional ear care, free hearing tests, and urgent appointments available for Black Country residents." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-wolverhampton" />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 italic">
            Hearing Aids & Hearing Care — Wolverhampton
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Professional microsuction ear wax removal and advanced digital hearing solutions for the Wolverhampton community.
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
            We provide professional **earwax removal in Wolverhampton** using the safe and effective microsuction technique. 
            Blocked ears can lead to sudden hearing loss, tinnitus, and physical discomfort; our clinic offers a fast, clinical alternative to long waiting lists.
          </p>
          <p>
            As an independent, audiologist-led clinic, we go beyond simple retail. We provide comprehensive diagnostic hearing assessments 
            and fit the world's most advanced hearing aid technology, tailored specifically to your lifestyle and hearing needs.
          </p>
          <div className="flex items-center gap-2 text-red-500 font-semibold pt-4 border-t border-gray-800">
            <MapPin className="w-5 h-5" />
            <span>Serving Wolverhampton, Codsall, Wombourne, and Tettenhall.</span>
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
              Experience the gold standard in ear hygiene. Our microsuction process is precise, dry (no water involved), 
              and performed by clinical experts to ensure maximum comfort and safety for Wolverhampton patients.
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
              We offer free, high-level diagnostic hearing tests and provide access to the latest invisible, 
              rechargeable hearing aids from leading global manufacturers like Phonak and Starkey.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Why Choose Our Wolverhampton Clinic</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="font-bold mb-2">Qualified Experts</h3>
              <p className="text-gray-400 text-sm">Appointments led by fully registered clinical audiologists.</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="font-bold mb-2">Same Day Options</h3>
              <p className="text-gray-400 text-sm">We strive to offer short-notice appointments for wax removal.</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="font-bold mb-2">Independent Choice</h3>
              <p className="text-gray-400 text-sm">We are not tied to one brand, ensuring you get the best device for you.</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="font-bold mb-2">Trusted Locally</h3>
              <p className="text-gray-400 text-sm">Highly rated hearing care across the Black Country area.</p>
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
                Is microsuction better than ear syringing?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Yes, microsuction is generally considered safer as it avoids the use of high-pressure water and provides the audiologist with a clear, magnified view of the ear canal during the entire procedure.
              </div>
            </details>

            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden shadow-sm">
              <summary className="p-6 text-lg font-semibold cursor-pointer list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                Do I need a GP referral?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                No, you can book directly with us for both hearing tests and ear wax removal in Wolverhampton without needing a referral from your doctor.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 italic">Regain Your Clarity of Hearing</h2>
          <p className="text-xl mb-10 opacity-90">Experience professional care in a clinical environment right here in Wolverhampton.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-red-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Book Wolverhampton Clinic
            </button>
            <a
              href="tel:01384476306"
              className="bg-black text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Call 01384 476 306
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}