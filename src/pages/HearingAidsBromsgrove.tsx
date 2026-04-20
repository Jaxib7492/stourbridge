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
        <meta name="description" content="Looking for hearing aids or ear wax removal in Bromsgrove? Our expert clinic offers 0% finance on hearing technology and safe microsuction ear wax removal." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-bromsgrove" />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hearing Aids & Ear Care — Bromsgrove
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Professional hearing assessments and clinical ear wax removal for the Bromsgrove community. Safe, precise, and effective.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="mt-10 bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 shadow-2xl"
          >
            Book Your Visit
          </button>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">
          <p>
            We provide professional **earwax removal in Bromsgrove** using gold-standard microsuction techniques. 
            Our clinic is a trusted destination for patients who prefer a clinical, audiologist-led environment over a high-street retailer.
          </p>
          <p>
            Whether you're noticing a gradual change in your hearing or sudden discomfort caused by a wax blockage, 
            our team offers fast and reliable treatments tailored to your specific ear health needs.
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
              <h2 className="text-2xl font-bold text-white">Ear Wax Removal</h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Microsuction is the safest and most effective way to remove ear wax. It is a dry procedure 
              (no water used), making it perfect for sensitive ears or those with a history of infections.
            </p>
          </div>

          {/* Hearing */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Hearing Technology</h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              We offer free hearing tests in Bromsgrove alongside the latest digital hearing aids. 
              Enjoy independent advice on top brands like Oticon, Phonak, and Starkey with lifetime aftercare.
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
                <h3 className="text-xl font-semibold text-white mb-2">Patient-Focused</h3>
                <p>We are independent, meaning we focus entirely on your hearing needs rather than manufacturer sales targets.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Fast Access</h3>
                <p>No long waiting lists. We aim to offer appointments within 24–48 hours for urgent ear wax removal.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p>Our audiologists have decades of experience in both NHS and private hearing care sectors.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Ear className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Home Visits</h3>
                <p>We offer a full home visit service across Bromsgrove for those unable to attend our clinic in person.</p>
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
                Is microsuction safe?
                <span className="text-red-500 transition-transform group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">Yes. It is considered the gold standard for earwax removal, providing a safer and cleaner experience than traditional syringing.</p>
            </details>

            <details className="bg-gray-900 border border-gray-800 rounded-xl p-6 group cursor-pointer">
              <summary className="text-lg font-semibold list-none flex justify-between items-center">
                How do I know if my ears are blocked?
                <span className="text-red-500 transition-transform group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">Common symptoms include a feeling of fullness, dull hearing, ringing (tinnitus), or even dizziness. A quick check with our audiologist can confirm the cause.</p>
            </details>

            <details className="bg-gray-900 border border-gray-800 rounded-xl p-6 group cursor-pointer">
              <summary className="text-lg font-semibold list-none flex justify-between items-center">
                Do you offer finance for hearing aids?
                <span className="text-red-500 transition-transform group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">Yes! We offer flexible 0% APR finance options over 10 or 12 months to help spread the cost of your hearing technology.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">Better Hearing Starts Today</h2>
          <p className="text-xl mb-10 text-red-50 opacity-90">Book your clinic appointment or home visit in Bromsgrove today.</p>
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