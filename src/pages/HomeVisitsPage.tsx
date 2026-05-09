import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Phone, Mail, Check, MapPin, Map } from 'lucide-react';
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

      {/* HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white break-words italic">
                  Home Visit Hearing Care
                </h1>
                <span className="bg-black/40 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap self-start">
                  Mobile Service Available
                </span>
              </div>
              <p className="text-gray-100 text-lg sm:text-xl max-w-2xl">
                Expert aftercare and clinical hearing services delivered to the comfort of your own home.
              </p>
            </div>
          </div>

          {/* VIDEO EMBED */}
          <div className="mt-10 mb-12 flex justify-center">
            <div className="w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-red-700/50">
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

          {/* MAIN CTA BLOCK */}
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 sm:p-10 mb-12 border border-white/10 shadow-xl">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-white mb-4 italic">Clinic Standards, Home Comfort</h2>
              <p className="text-gray-100 text-base sm:text-lg mb-8 leading-relaxed">
                Can't make it to our Stourbridge clinic? Our experienced audiologist provides **safe microsuction earwax removal**, hearing aid servicing, and bespoke adjustments at your doorstep. We bring the same professional-grade equipment and clinical expertise directly to you.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
                >
                  Book a Home Visit
                </button>
                <button
                  onClick={() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all"
                >
                  View Services ↓
                </button>
              </div>
            </div>
          </div>

          {/* TWO COLUMN CONTENT */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* SERVICES LIST */}
            <div id="services" className="bg-zinc-950 text-white rounded-3xl p-8 border border-zinc-800 shadow-xl">
              <h2 className="text-3xl font-bold mb-8 italic">Our Home Services</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-red-500/10 p-3 rounded-xl h-fit">
                    <Check className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-white">Microsuction Removal</h3>
                    <p className="text-gray-400">Hospital-grade, gentle earwax removal performed safely in your own chair.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-red-500/10 p-3 rounded-xl h-fit">
                    <Check className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-white">Hearing Aid Servicing</h3>
                    <p className="text-gray-400">Professional cleaning, reprogramming, battery checks, and fitting adjustments.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-red-500/10 p-3 rounded-xl h-fit">
                    <Check className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-white">Counseling & Care</h3>
                    <p className="text-gray-400">Tinnitus counseling, rehabilitation advice, and comprehensive aftercare support.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-red-500/10 p-3 rounded-xl h-fit">
                    <Check className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-white">Care Home Visits</h3>
                    <p className="text-gray-400">Bespoke appointments for care home residents and on-site staff training.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-800">
                <h3 className="text-2xl font-bold mb-4 italic">Who is this for?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our domiciliary service is ideal for patients with limited mobility, those without easy access to transport, busy carers, or anyone who simply feels more at ease in a familiar environment.
                </p>
              </div>
            </div>

            {/* BOOKING & AREA */}
            <div className="flex flex-col gap-8">
              <div className="bg-zinc-900 text-white rounded-3xl p-8 border border-zinc-800 shadow-xl">
                <h2 className="text-3xl font-bold mb-6 italic">How to Book</h2>
                <p className="text-gray-300 mb-8">
                  We cover **Stourbridge**, **Halesowen**, **Dudley**, **Kidderminster**, and surrounding West Midlands areas.
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:01384476306"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-5 rounded-xl font-bold transition-all flex items-center justify-center gap-3 text-lg shadow-lg active:scale-95"
                  >
                    <Phone className="w-6 h-6" />
                    Call 01384 476 306
                  </a>
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-5 rounded-xl font-bold transition-all flex items-center justify-center gap-3 text-lg border border-zinc-700"
                  >
                    <Mail className="w-6 h-6" />
                    Request via Email
                  </button>
                </div>

                <div className="mt-10 pt-8 border-t border-zinc-800">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="text-red-500 w-5 h-5" />
                    Service Radius
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Home visits are typically provided within a 10-mile radius of our Stourbridge clinic. If you reside outside this area, please contact us—we always try to accommodate patients whenever possible.
                  </p>
                </div>
              </div>

              {/* PREPARATION CARD */}
              <div className="bg-red-950/20 rounded-3xl p-8 border border-red-900/30">
                <h3 className="text-xl font-bold mb-6 text-red-500 italic">Before Your Appointment</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Have your current hearing aids and spare batteries ready.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Locate any recent clinic letters or hearing test results.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>A quiet room with a power socket nearby is ideal for testing.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Stourbridge Hearing Centre — Professional Domiciliary Audiology. 
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span> 
            01384 476 306 | stourbridgehearingcentre@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}