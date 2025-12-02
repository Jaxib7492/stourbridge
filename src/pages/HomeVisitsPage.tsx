import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Phone, Mail, Check } from 'lucide-react';

export function HomeVisitsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-600 to-red-500 p-4 rounded-xl flex-shrink-0">
              <Home className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-2">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white break-words">
                  Stourbridge Hearing Centre — Home Visit Hearing Care
                </h1>
                <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap self-start">
                  Home Visits • Stourbridge
                </span>
              </div>
              <p className="text-gray-300 text-base sm:text-lg">
                Expert aftercare & hearing services at the comfort of your home
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 rounded-2xl p-6 sm:p-8 mb-12">
            <p className="text-white text-base sm:text-lg mb-6 break-words">
              Can't make it to the clinic? Our experienced audiologist will visit you at home — offering safe microsuction earwax removal, hearing aid servicing, adjustments and ongoing aftercare with the same professional standards as our Stourbridge clinic.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                Book a Home Visit
              </button>
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all"
              >
                See services ↓
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div id="services" className="bg-black text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Our Home Visit Services</h2>
              <div className="space-y-6">
                <div className="flex gap-3">
                  <span className="text-red-400 flex-shrink-0">◆</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Microsuction earwax removal</h3>
                    <p className="text-gray-300">— clinic-grade, gentle, and safe at home.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-red-400 flex-shrink-0">◆</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Hearing aid support & adjustments</h3>
                    <p className="text-gray-300">— cleaning, reprogramming, battery & fitting checks.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-red-400 flex-shrink-0">◆</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Aftercare & follow-up</h3>
                    <p className="text-gray-300">— troubleshooting, counselling and rehabilitation advice.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-red-400 flex-shrink-0">◆</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Care home visits</h3>
                    <p className="text-gray-300">— tailored appointments for residents and carers.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Who benefits?</h3>
                <p className="text-gray-300">
                  Ideal for people with limited mobility, those who find travel difficult, busy carers, or anyone who prefers care at home.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-2xl font-bold mb-4">What to expect</h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">1.</span>
                    <span>Pre-visit discussion by phone to understand needs and any access requirements.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">2.</span>
                    <span>Prompt arrival at the agreed time, fully equipped with portable clinical tools.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">3.</span>
                    <span>Clear aftercare instructions and written notes about any adjustments made.</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-black text-white rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Book your home visit</h2>
                <p className="text-gray-300 mb-6">
                  We cover Stourbridge and nearby areas. Appointments available weekdays; emergency visits considered where clinically appropriate.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    <Phone className="inline w-5 h-5 mr-2" />
                    Call to book
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    <Mail className="inline w-5 h-5 mr-2" />
                    Email us
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h3 className="text-xl font-bold mb-4">What to have ready</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Current hearing aids (if applicable)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Any recent audiology reports or clinic letters</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>A well-lit, quiet space for the procedure</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h3 className="text-xl font-bold mb-4">Location</h3>
                  <p className="text-gray-300">
                    Stourbridge, West Midlands — home visits within surrounding postcode areas. Call to confirm availability for your address.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently asked questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Do you charge extra for a home visit?</h3>
                <p className="text-gray-300 mb-4">
                  Yes — there is a home visit fee to cover travel and time. Exact pricing depends on distance and service required; please call us for a quote.
                </p>
                <p className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold inline-block">
                  If you purchase a pair of hearing aids, we refund the cost of the home visit service.
                </p>
              </div>

              <div className="bg-black text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Is microsuction safe at home?</h3>
                <p className="text-gray-300">
                  Microsuction is a safe, clinic-standard procedure performed with portable equipment. We follow the same infection-control and safety procedures as in the clinic.
                </p>
              </div>

              <div className="bg-black text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Do you service all hearing aid makes?</h3>
                <p className="text-gray-300">
                  Yes — we provide general servicing and many manufacturer-specific adjustments. For warranty repair or advanced diagnostics we may liaise with the manufacturer if needed.
                </p>
              </div>

              <div className="bg-black text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Patient feedback</h3>
                <p className="text-gray-300 italic mb-4">
                  "The audiologist was calm, professional and made the whole process easy — I much preferred having it done at home." — A local patient
                </p>
                <p className="text-gray-400 text-sm">
                  Want to add your testimonial? Email it to us and we may feature it on our site.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            Stourbridge Hearing Centre — Registered audiology & hearing care. | Phone: 01384 476 306 | Email: stourbridgehearingcentre@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
