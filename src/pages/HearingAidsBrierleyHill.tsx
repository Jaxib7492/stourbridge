import React from 'react';
import { Ear, Stethoscope, Star, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsBrierleyHill() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aids & Ear Wax Removal Brierley Hill | Expert Audiology</title>
        <meta name="description" content="Professional hearing aids and microsuction ear wax removal in Brierley Hill. Independent audiology clinic providing free hearing tests and safe wax removal." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-brierley-hill" />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hearing Aids & Ear Care — Brierley Hill
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Providing expert hearing assessments and safe microsuction ear wax removal for the Brierley Hill community.
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
            We provide professional **earwax removal in Brierley Hill** using safe and effective microsuction techniques. 
            Located just a short journey from the heart of Brierley Hill, our clinic is the preferred choice for residents seeking clinical excellence.
          </p>
          <p>
            Whether you are struggling with blocked ears, sudden hearing loss, or need an upgrade to your current hearing aids, 
            our audiologist-led team is here to help with honest, independent advice.
          </p>
          <div className="flex items-center gap-2 text-red-500 font-semibold">
            <MapPin className="w-5 h-5" />
            <span>Serving Brierley Hill, Pensnett, Brockmoor, and the Waterfront.</span>
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
              <h2 className="text-2xl font-bold text-white">Microsuction Wax Removal</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We use medical-grade suction to clear earwax safely. This method is much safer than syringing and is 
              performed under a high-spec microscope for total precision.
            </p>
          </div>

          {/* Hearing */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Hearing Tests & Aids</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Access the latest hearing technology in Brierley Hill. We offer comprehensive diagnostic tests 
              and a wide range of rechargeable and invisible hearing aids.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">The Local Choice for Ear Care</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-gray-300">
            <div className="flex gap-4">
              <ShieldCheck className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Safe & Regulated</h3>
                <p>Procedures carried out by qualified hearing aid audiologists with years of clinical experience.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Same-Day Results</h3>
                <p>Walk out of your appointment with clearer hearing and a full understanding of your ear health.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">5-Star Support</h3>
                <p>We pride ourselves on our reputation across the Black Country for patient satisfaction.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Ear className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Home Visits</h3>
                <p>If you can't get to us in Brierley Hill, we can bring our professional services to your home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Brierley Hill Patient FAQs</h2>
          <div className="space-y-6">
            <details className="bg-gray-900 border border-gray-800 rounded-xl p-6 group cursor-pointer">
              <summary className="text-lg font-semibold list-none flex justify-between items-center">
                Is microsuction safe?
                <span className="text-red-500 transition-transform group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">Yes, it is considered the safest method of wax removal as it avoids the use of high-pressure water, reducing the risk of infection or perforation.</p>
            </details>

            <details className="bg-gray-900 border border-gray-800 rounded-xl p-6 group cursor-pointer">
              <summary className="text-lg font-semibold list-none flex justify-between items-center">
                Do I need a referral from my GP?
                <summary className="text-lg font-semibold list-none flex justify-between items-center"></summary>
                <span className="text-red-500 transition-transform group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">No, you can book directly with us. We often see patients much faster than the typical NHS wait times.</p>
            </details>

            <details className="bg-gray-900 border border-gray-800 rounded-xl p-6 group cursor-pointer">
              <summary className="text-lg font-semibold list-none flex justify-between items-center">
                Where are you located?
                <span className="text-red-500 transition-transform group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 text-gray-400">Our main clinic is located in Stourbridge, serving Brierley Hill and surrounding areas. We also offer home visits for those with limited mobility.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">Restore Your Hearing Today</h2>
          <p className="text-xl mb-10 text-red-50 opacity-90">Experience clear sound again with our Brierley Hill ear care services.</p>
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