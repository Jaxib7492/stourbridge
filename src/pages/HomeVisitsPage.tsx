import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Phone, Mail, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function HomeVisitsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      {/* SEO Metadata */}
      <Helmet>
        <title>Home Visit Hearing Care Stourbridge | Audiologist House Calls</title>
        <meta name="description" content="Professional home visit hearing services in Stourbridge & West Midlands. Mobile ear wax removal, hearing aid fittings, and domiciliary audiology for those with limited mobility." />
        <meta name="keywords" content="home visit hearing test, mobile ear wax removal Stourbridge, domiciliary audiology West Midlands, home hearing aid repair" />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/home-visits" />
      </Helmet>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
            
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-2">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white break-words italic">
                  Home Visit Hearing Care
                </h1>
                <span className="bg-black/40 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap self-start">
                  Mobile Service Available
                </span>
              </div>
              <p className="text-gray-100 text-base sm:text-lg">
                Expert aftercare & hearing services delivered to your doorstep.
              </p>
            </div>
          </div>

          <div className="mt-10 mb-12 flex justify-center">
            <div className="w-full max-w-2xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-red-700">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/byKbXJViT_k?rel=0&modestbranding=1&showinfo=0&controls=1"
                  title="Home Visit Hearing Care Services Stourbridge"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl">
            <p className="text-white text-base sm:text-lg mb-6 break-words leading-relaxed">
              Can't make it to the clinic? Our experienced audiologist will visit you at home — offering **safe microsuction earwax removal**, hearing aid servicing, adjustments and ongoing aftercare with the same professional standards as our Stourbridge clinic.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
              >
                Book a Home Visit
              </button>
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-all"
              >
                See services ↓
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div id="services" className="bg-zinc-950 text-white rounded-2xl p-8 border border-zinc-800">
              <h2 className="text-3xl font-bold mb-8 italic">Our Home Visit Services</h2>
              <div className="space-y-6">
                <div className="flex gap-3">
                  <span className="text-red-500 flex-shrink-0">◆</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-red-500">Microsuction earwax removal</h3>
                    <p className="text-gray-300">— Hospital-grade, gentle, and safe in your own chair.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-red-500 flex-shrink-0">◆</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-red-500">Hearing aid support</h3>
                    <p className="text-gray-300">— Cleaning, reprogramming, battery checks & fitting adjustments.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-red-500 flex-shrink-0">◆</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-red-500">Aftercare & Follow-up</h3>
                    <p className="text-gray-300">— Troubleshooting, tinnitus counseling and rehabilitation advice.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-red-500 flex-shrink-0">◆</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-red-500">Care Home Appointments</h3>
                    <p className="text-gray-300">— Tailored appointments for residents and on-site carers.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-zinc-800">
                <h3 className="text-2xl font-bold mb-4">Who is this for?</h3>
                <p className="text-gray-400">
                  Perfect for patients with limited mobility, those without transport, busy carers, or anyone who feels more comfortable being treated in a familiar environment.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-zinc-950 text-white rounded-2xl p-8 border border-zinc-800">
                <h2 className="text-3xl font-bold mb-6 italic">How to Book</h2>
                <p className="text-gray-300 mb-6">
                  We cover **Stourbridge**, **Halesowen**, **Dudley**, **Kidderminster**, and surrounding areas. 
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:01384476306"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    Call 01384 476 306
                  </a>
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-4 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-3"
                  >
                    <Mail className="w-5 h-5" />
                    Send an Email
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-800">
                  <h3 className="text-xl font-bold mb-4">What to have ready</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>Current hearing aids (if you have them)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>Any recent clinic letters or hearing test results</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>A clear, quiet space with a nearby power socket</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-800">
                  <h3 className="text-xl font-bold mb-4">Service Area</h3>
                  <p className="text-gray-400 text-sm">
                    We typically provide home visits within a 10-mile radius of our Stourbridge clinic. If you are further away, please call us to discuss availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center border-t border-zinc-900 pt-8">
          <p className="text-gray-500 text-sm">
            Stourbridge Hearing Centre — Registered Audiology & Hearing Care. | Phone: 01384 476 306 | Email: stourbridgehearingcentre@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}