import React from 'react';
import { Ear, Stethoscope, Star, Clock, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsOldbury() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aids & Ear Wax Removal Oldbury | Stourbridge Hearing Centre</title>
        <meta name="description" content="Expert hearing aids and microsuction ear wax removal services in Oldbury. Professional ear care, free hearing tests, and urgent appointments available for Sandwell residents." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-oldbury" />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hearing Aids & Hearing Care — Oldbury
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Providing the Oldbury and Sandwell community with gold-standard ear wax removal and world-class hearing aid technology.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="mt-10 bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 shadow-2xl"
          >
            Schedule Your Visit
          </button>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">
          <p>
            Stourbridge Hearing Centre provides professional **earwax removal in Oldbury** using the safe, clinical microsuction method. 
            We understand that blocked ears can be isolating and uncomfortable, which is why we offer a fast-access alternative to GP waiting lists.
          </p>
          <p>
            Our independent clinic is led by expert audiologists who specialize in restoring clarity to your hearing. 
            From comprehensive diagnostic testing to the fitting of discreet digital hearing aids, we provide the highest level of care in the West Midlands.
          </p>
          <div className="flex items-center gap-2 text-red-500 font-semibold pt-4">
            <MapPin className="w-5 h-5" />
            <span>Serving Oldbury, Langley, Warley, and Blackheath.</span>
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
              We use gentle, medical-grade suction to clear earwax blockages. It is widely considered 
              the safest method available and is ideal for Oldbury residents with sensitive ears or narrow canals.
            </p>
          </div>

          {/* Hearing Aids */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Advanced Hearing Tests</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Our free hearing assessments provide a detailed view of your auditory health. We offer 
              the latest rechargeable and Bluetooth-ready hearing aids from the world's leading manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Oldbury Residents Choose Us</h2>
          
          <div className="grid sm:grid-cols-2 gap-10 text-gray-300">
            <div className="flex gap-4">
              <ShieldCheck className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Independent Expertise</h3>
                <p>We are not owned by a manufacturer. Our advice is 100% unbiased and tailored to your specific hearing needs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Swift Appointments</h3>
                <p>We know how urgent a blocked ear can feel. We offer quick turnarounds and emergency slots for microsuction.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Award-Winning Care</h3>
                <p>Our clinic is known for its patient-focused approach, ensuring you never feel rushed during your consultation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Oldbury Home Visits</h3>
                <p>Can't make it to the clinic? We provide a professional home-visit service for residents across the Oldbury area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Service FAQs</h2>
          <div className="space-y-4">
            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden shadow-sm cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                Is ear wax removal covered by the NHS?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Many local GP surgeries in Oldbury and Sandwell no longer provide ear syringing. We offer a clinical, private alternative with no long waiting times.
              </div>
            </details>

            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden shadow-sm cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                How long is a hearing aid consultation?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                We usually allow 60 to 90 minutes for a full hearing assessment to ensure we have time to understand your lifestyle and test your hearing thoroughly.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Take the First Step to Better Hearing</h2>
          <p className="text-xl mb-10 opacity-90 text-red-50">Join the many Oldbury residents who have rediscovered their hearing with our expert care.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-white text-red-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Book My Appointment
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-700 transition-all"
            >
              Call Our Clinic
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}