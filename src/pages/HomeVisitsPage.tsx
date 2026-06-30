import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, Check, MapPin, ChevronDown, Home, ShieldCheck, Headphones, HeartPulse } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function HomeVisitsPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const serviceAreas = [
    'Stourbridge',
    'Halesowen',
    'Dudley',
    'Kidderminster',
    'Kingswinford',
    'Brierley Hill',
    'Hagley',
    'Cradley Heath',
    'Wordsley',
    'Pedmore',
    'Amblecote',
    'Wolverhampton',
    'Birmingham',
    'Stourport-on-Severn',
    'West Midlands'
  ];

  const faqs = [
    {
      question: 'Do you offer home visit hearing care in Stourbridge?',
      answer:
        'Yes. Stourbridge Hearing Centre provides professional home visit hearing care in Stourbridge and nearby West Midlands areas, including hearing aid servicing, hearing aid adjustments, ear health checks, and microsuction earwax removal where suitable.'
    },
    {
      question: 'Can I book mobile earwax removal at home?',
      answer:
        'Yes. We offer mobile microsuction earwax removal for suitable patients. The audiologist will check your ears first and explain whether removal is needed and safe to carry out at home.'
    },
    {
      question: 'Which areas do you cover for home visits?',
      answer:
        'We usually cover Stourbridge, Halesowen, Dudley, Kidderminster, Kingswinford, Brierley Hill, Hagley, Cradley Heath, Wordsley, Pedmore, Amblecote and nearby West Midlands locations. If you are slightly outside the usual radius, please contact us and we will try to help.'
    },
    {
      question: 'Are home hearing tests available?',
      answer:
        'Home hearing tests and hearing assessments may be available depending on your needs and location. We can also advise on hearing aids, hearing loss, tinnitus support, and ongoing hearing care from the comfort of your home.'
    },
    {
      question: 'Can you repair or adjust hearing aids at home?',
      answer:
        'Yes. We can help with hearing aid cleaning, wax filter changes, tubing, domes, batteries, comfort adjustments, Bluetooth/app support, and hearing aid fine-tuning where possible during a home visit.'
    },
    {
      question: 'Who are home visits best suited for?',
      answer:
        'Home visit hearing care is ideal for people with limited mobility, elderly patients, care home residents, patients without easy transport, busy carers, and anyone who feels more comfortable receiving hearing care at home.'
    }
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Stourbridge Hearing Centre',
    url: 'https://www.stourbridgehearing.co.uk/home-visits',
    telephone: '01384 476 306',
    email: 'stourbridgehearingcentre@gmail.com',
    image: 'https://www.stourbridgehearing.co.uk/image.png',
    description:
      'Home visit hearing care in Stourbridge, including mobile earwax removal, hearing aid servicing, hearing aid adjustments, hearing checks and domiciliary audiology support across nearby West Midlands areas.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '59 High St',
      addressLocality: 'Stourbridge',
      postalCode: 'DY8 1DE',
      addressCountry: 'GB'
    },
    areaServed: serviceAreas.map((area) => ({
      '@type': 'Place',
      name: area
    })),
    medicalSpecialty: [
      'Audiology',
      'Hearing Care',
      'Hearing Aid Fitting',
      'Earwax Removal',
      'Domiciliary Audiology'
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '17:00'
      }
    ]
  };

  const faqSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-black">
      {/* SEO Metadata */}
      <Helmet>
        <title>Home Visit Hearing Care Stourbridge | Mobile Audiologist & Earwax Removal</title>
        <meta
          name="description"
          content="Home visit hearing care in Stourbridge and nearby West Midlands areas. Mobile earwax removal, home hearing tests, hearing aid servicing, hearing aid repairs, adjustments and domiciliary audiology support."
        />
        <meta
          name="keywords"
          content="home visit hearing care Stourbridge, mobile audiologist Stourbridge, home hearing test Stourbridge, mobile earwax removal Stourbridge, domiciliary audiology West Midlands, hearing aid home visit, hearing aid repair at home, hearing aid servicing Stourbridge, hearing care at home, audiologist house calls Stourbridge, home hearing aid fitting, care home hearing visits, hearing tests at home, earwax removal at home Stourbridge, hearing aid adjustments Stourbridge"
        />
        <meta property="og:title" content="Home Visit Hearing Care Stourbridge | Mobile Audiologist" />
        <meta
          property="og:description"
          content="Professional hearing care at home including mobile earwax removal, hearing aid servicing, adjustments, hearing checks and domiciliary audiology across Stourbridge and nearby areas."
        />
        <meta property="og:url" content="https://www.stourbridgehearing.co.uk/home-visits" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/home-visits" />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white break-words italic">
                  Home Visit Hearing Care in Stourbridge
                </h1>
                <span className="bg-black/40 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap self-start">
                  Mobile Service Available
                </span>
              </div>
              <p className="text-gray-100 text-lg sm:text-xl max-w-3xl">
                Expert home hearing care, mobile earwax removal, hearing aid servicing, hearing aid adjustments and domiciliary audiology support delivered to the comfort of your own home.
              </p>
            </div>
          </div>

          {/* VIDEO EMBED */}
          <div className="mt-10 mb-12 flex justify-center">
            <div className="w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-red-700/50">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/byKbXJViT_k?rel=0&modestbranding=1&showinfo=0&controls=1"
                  title="Home Visit Hearing Care Services in Stourbridge"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* MAIN CTA BLOCK */}
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 sm:p-10 mb-12 border border-white/10 shadow-xl">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold text-white mb-4 italic">
                Clinic Standards, Home Comfort
              </h2>
              <p className="text-gray-100 text-base sm:text-lg mb-8 leading-relaxed">
                Can't make it to our Stourbridge clinic? Our experienced audiologist provides <strong>safe microsuction earwax removal</strong>, hearing aid servicing, hearing aid repairs, hearing checks, tinnitus advice, and bespoke hearing aid adjustments at your doorstep. We bring professional-grade equipment and trusted clinical expertise directly to you.
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

          {/* SEO TRUST CARDS */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 text-white">
              <Home className="w-8 h-8 text-red-300 mb-4" />
              <h3 className="font-bold text-lg mb-2">Home Hearing Care</h3>
              <p className="text-gray-200 text-sm">Professional hearing support without travelling to the clinic.</p>
            </div>
            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 text-white">
              <ShieldCheck className="w-8 h-8 text-red-300 mb-4" />
              <h3 className="font-bold text-lg mb-2">Safe Earwax Removal</h3>
              <p className="text-gray-200 text-sm">Microsuction earwax removal at home where clinically suitable.</p>
            </div>
            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 text-white">
              <Headphones className="w-8 h-8 text-red-300 mb-4" />
              <h3 className="font-bold text-lg mb-2">Hearing Aid Support</h3>
              <p className="text-gray-200 text-sm">Cleaning, servicing, repairs, domes, filters and adjustments.</p>
            </div>
            <div className="bg-black/30 border border-white/10 rounded-2xl p-6 text-white">
              <HeartPulse className="w-8 h-8 text-red-300 mb-4" />
              <h3 className="font-bold text-lg mb-2">Care Home Visits</h3>
              <p className="text-gray-200 text-sm">Domiciliary audiology support for residents and carers.</p>
            </div>
          </div>

          {/* TWO COLUMN CONTENT */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* SERVICES LIST */}
            <div id="services" className="bg-zinc-950 text-white rounded-3xl p-8 border border-zinc-800 shadow-xl">
              <h2 className="text-3xl font-bold mb-8 italic">
                Our Home Visit Hearing Services
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-red-500/10 p-3 rounded-xl h-fit">
                    <Check className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-white">
                      Mobile Microsuction Earwax Removal
                    </h3>
                    <p className="text-gray-400">
                      Hospital-grade, gentle earwax removal performed safely in your own chair after an ear health check and video otoscopy where suitable.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-red-500/10 p-3 rounded-xl h-fit">
                    <Check className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-white">
                      Hearing Aid Servicing & Repairs
                    </h3>
                    <p className="text-gray-400">
                      Professional cleaning, reprogramming, battery checks, wax filter changes, tubing, domes, receiver checks and fitting adjustments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-red-500/10 p-3 rounded-xl h-fit">
                    <Check className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-white">
                      Home Hearing Tests & Hearing Assessments
                    </h3>
                    <p className="text-gray-400">
                      Hearing checks, hearing loss advice, hearing aid demonstrations and personalised recommendations for your listening needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-red-500/10 p-3 rounded-xl h-fit">
                    <Check className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-white">
                      Tinnitus Counselling & Hearing Rehabilitation
                    </h3>
                    <p className="text-gray-400">
                      Practical tinnitus advice, communication strategies, hearing rehabilitation support and ongoing aftercare from an experienced hearing care professional.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-red-500/10 p-3 rounded-xl h-fit">
                    <Check className="text-red-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1 text-white">
                      Care Home Hearing Visits
                    </h3>
                    <p className="text-gray-400">
                      Bespoke appointments for care home residents, hearing aid maintenance clinics, ear health checks and on-site support for care staff.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-800">
                <h3 className="text-2xl font-bold mb-4 italic">Who is this for?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our domiciliary audiology service is ideal for patients with limited mobility, older adults, care home residents, those without easy access to transport, busy carers, or anyone who feels more comfortable receiving professional hearing care in a familiar environment.
                </p>
              </div>
            </div>

            {/* BOOKING & AREA */}
            <div className="flex flex-col gap-8">
              <div className="bg-zinc-900 text-white rounded-3xl p-8 border border-zinc-800 shadow-xl">
                <h2 className="text-3xl font-bold mb-6 italic">How to Book</h2>
                <p className="text-gray-300 mb-8">
                  We cover <strong>Stourbridge</strong>, <strong>Halesowen</strong>, <strong>Dudley</strong>, <strong>Kidderminster</strong>, <strong>Kingswinford</strong>, <strong>Brierley Hill</strong>, <strong>Hagley</strong> and surrounding West Midlands areas.
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
                    Home visits are typically provided within a 10-mile radius of our Stourbridge clinic. If you reside outside this area, please contact us — we always try to accommodate patients whenever possible.
                  </p>
                </div>
              </div>

              {/* PREPARATION CARD */}
              <div className="bg-red-950/20 rounded-3xl p-8 border border-red-900/30">
                <h3 className="text-xl font-bold mb-6 text-red-500 italic">Before Your Appointment</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Have your current hearing aids, charger and spare batteries ready.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Locate any recent clinic letters, hearing test results or hearing aid paperwork.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>A quiet room with a power socket nearby is ideal for hearing checks and hearing aid programming.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>If you are booking earwax removal, please mention any ear surgery, infections, pain or perforations before your appointment.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800">
                <h3 className="text-2xl font-bold mb-5 text-white italic">Local Areas We Visit</h3>
                <div className="flex flex-wrap gap-3">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 bg-black border border-zinc-700 rounded-full text-sm text-gray-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5">
              Why Choose Our Mobile Audiologist Service?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Stourbridge Hearing Centre provides independent hearing care, trusted aftercare and professional home visit hearing services for patients who need convenient support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Independent Hearing Care</h3>
              <p className="text-gray-300 leading-relaxed">
                Honest advice from a local independent hearing centre with no pressure, clear recommendations and ongoing support.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Clinical Equipment at Home</h3>
              <p className="text-gray-300 leading-relaxed">
                We bring professional hearing care equipment for hearing checks, hearing aid servicing, fine-tuning and earwax assessment.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Convenient Local Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Ideal for Stourbridge, Dudley, Halesowen, Kidderminster and nearby patients who prefer expert care without travelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            Home Visit Hearing Care FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
                >
                  <span className="text-lg sm:text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 sm:px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate('/contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ask About a Home Visit
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 via-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Need Hearing Care at Home?
          </h2>
          <p className="text-xl text-white mb-10">
            Book a home visit for hearing aid servicing, mobile earwax removal, hearing checks, tinnitus advice or independent hearing care support across Stourbridge and nearby areas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book a Home Visit
            </button>
            <a
              href="tel:01384476306"
              className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Call 01384 476 306
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Stourbridge Hearing Centre — Professional Domiciliary Audiology, Mobile Earwax Removal and Home Visit Hearing Care.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span>
            01384 476 306 | stourbridgehearingcentre@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}
