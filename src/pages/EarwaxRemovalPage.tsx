import React from 'react';
import { Check, Shield, Clock, Calendar, RefreshCw, Video, Target, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function EarwaxRemovalPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Earwax Removal Stourbridge | Safe Microsuction Clinic</title>
        <meta name="description" content="Professional microsuction earwax removal in Stourbridge. Safe, effective, and water-free treatment. Same-day appointments often available for £50 (one ear) or £70 (both)." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/earwax-removal" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Earwax Removal (Microsuction)
          </h1>
          <p className="text-xl text-gray-100 mb-10 max-w-4xl mx-auto">
            Gentle, safe and effective earwax removal using a fine suction tube under direct vision — <span className="font-bold">no water flushed into the ear.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => navigate('/contact')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Free Quick Look Service Available
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Now
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Ask a Question
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="bg-black/30 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-white">Safe for ear perforations</span>
              </div>
            </div>
            <div className="bg-black/30 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-white">Typically 15-20 minutes</span>
              </div>
            </div>
            <div className="bg-black/30 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-white">Same-day appointments</span>
              </div>
            </div>
            <div className="bg-black/30 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-white">Free hearing check included</span>
              </div>
            </div>
            <div className="bg-black/30 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-white">Free follow-up if needed</span>
              </div>
            </div>
            <div className="bg-black/30 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-white">Free 4-6 month check service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
            Before & After Microsuction
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            See the difference after safe and effective microsuction treatment.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
              <div className="bg-gradient-to-r from-red-900 to-red-800 py-4 px-6">
                <h3 className="text-2xl font-bold text-white">Before Treatment</h3>
              </div>
              <div className="aspect-video bg-gray-800">
                <video src="/Before removal.mp4" className="w-full h-full object-cover" controls playsInline />
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
              <div className="bg-gradient-to-r from-green-900 to-green-800 py-4 px-6">
                <h3 className="text-2xl font-bold text-white">After Treatment</h3>
              </div>
              <div className="aspect-video bg-gray-800">
                <video src="/After Removal.mp4" className="w-full h-full object-cover" controls playsInline />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16">Transparent Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 text-left">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">One Ear</h3>
                <p className="text-5xl font-bold text-white">£50</p>
              </div>
              <ul className="space-y-3">
                {['Video otoscopy check', 'Microsuction removal', 'Prevention advice', 'Free hearing check', 'Free follow-up'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 text-left">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">Both Ears</h3>
                <p className="text-5xl font-bold text-white">£70</p>
              </div>
              <ul className="space-y-3">
                {['Video otoscopy check', 'Both ears microsuction', 'Prevention advice', 'Free hearing check', 'Free follow-up'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="bg-red-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6"><Video className="w-8 h-8 text-red-500" /></div>
              <h3 className="text-2xl font-bold text-white mb-4">Video Otoscopy</h3>
              <p className="text-gray-300">We examine the ear canal, explain what we see, and discuss next steps.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="bg-red-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6"><Target className="w-8 h-8 text-red-500" /></div>
              <h3 className="text-2xl font-bold text-white mb-4">Precise Microsuction</h3>
              <p className="text-gray-300">Wax is removed under magnification using a fine suction tube — quick and comfortable.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="bg-red-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6"><Heart className="w-8 h-8 text-red-500" /></div>
              <h3 className="text-2xl font-bold text-white mb-4">Care & Prevention</h3>
              <p className="text-gray-300">We provide aftercare advice and invite you for a free 4-6 monthly pop-in check.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 via-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready for clear ears?</h2>
          <p className="text-xl text-white mb-10">Same-day appointments often available. Free follow-up if wax isn't fully removed.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:01384476306" className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg">
              Call 01384 476 306
            </a>
            <button onClick={() => navigate('/contact')} className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Ask a Question
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}