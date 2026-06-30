import React from 'react';
import { Check, Shield, Clock, Calendar, RefreshCw, Video, Target, Heart, MapPin, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function EarwaxRemovalPage() {
  const navigate = useNavigate();

  const serviceKeywords = [
    'Microsuction earwax removal',
    'Blocked ear treatment',
    'Ear cleaning service',
    'Ear health check',
    'Video otoscopy',
    'Hearing check included',
    'Tinnitus related to wax build-up',
    'Hearing loss from earwax',
    'Safe earwax removal',
    'Private audiologist appointment',
    'Earwax removal near Dudley',
    'Earwax removal near Halesowen',
  ];

  const areasServed = [
    'Stourbridge',
    'Dudley',
    'Halesowen',
    'Brierley Hill',
    'Kingswinford',
    'Hagley',
    'Cradley Heath',
    'Wolverhampton',
    'Birmingham',
    'Kidderminster',
    'Stourport-on-Severn',
    'Wordsley',
    'Pedmore',
    'Amblecote',
    'Bromsgrove',
  ];

  const faqs = [
    {
      question: 'What is microsuction earwax removal?',
      answer:
        'Microsuction earwax removal is a safe, water-free method of removing earwax using a fine suction tube under direct vision. It is commonly used by audiologists because it is precise, gentle and effective.',
    },
    {
      question: 'Do you offer earwax removal in Stourbridge?',
      answer:
        'Yes. Stourbridge Hearing Centre provides professional microsuction earwax removal in Stourbridge for patients from Dudley, Halesowen, Brierley Hill, Kingswinford, Hagley and surrounding areas.',
    },
    {
      question: 'How much does earwax removal cost?',
      answer:
        'Earwax removal is £50 for one ear and £70 for both ears. The appointment includes video otoscopy, microsuction removal, prevention advice, a free hearing check and a free follow-up if needed.',
    },
    {
      question: 'Is microsuction safe for blocked ears?',
      answer:
        'Microsuction is a safe and comfortable option for many blocked ear problems because no water is flushed into the ear canal. Your audiologist will check your ears first using video otoscopy.',
    },
    {
      question: 'Can earwax cause hearing loss or tinnitus?',
      answer:
        'Yes. A build-up of earwax can make sounds seem muffled and may contribute to blocked ear sensations or tinnitus-like symptoms. Removing the wax can often help restore clearer hearing.',
    },
    {
      question: 'Do you include a hearing check?',
      answer:
        'Yes. A free hearing check is included, and we can advise you if you may benefit from a full hearing test, hearing assessment or hearing care appointment.',
    },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Stourbridge Hearing Centre',
    url: 'https://www.stourbridgehearing.co.uk/earwax-removal',
    telephone: '01384 476 306',
    email: 'stourbridgehearingcentre@gmail.com',
    image: 'https://www.stourbridgehearing.co.uk/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '59 High St',
      addressLocality: 'Stourbridge',
      postalCode: 'DY8 1DE',
      addressCountry: 'GB',
    },
    areaServed: areasServed,
    medicalSpecialty: ['Audiology', 'Hearing Care', 'Earwax Removal', 'Microsuction'],
    priceRange: '£50-£70',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '17:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Earwax Removal and Hearing Care Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Microsuction Earwax Removal - One Ear',
          price: '50',
          priceCurrency: 'GBP',
        },
        {
          '@type': 'Offer',
          name: 'Microsuction Earwax Removal - Both Ears',
          price: '70',
          priceCurrency: 'GBP',
        },
        {
          '@type': 'Offer',
          name: 'Free Hearing Check',
          price: '0',
          priceCurrency: 'GBP',
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Earwax Removal Stourbridge | Microsuction, Blocked Ear Treatment & Hearing Check</title>
        <meta
          name="description"
          content="Professional microsuction earwax removal in Stourbridge. Safe blocked ear treatment, ear cleaning, video otoscopy and free hearing check. Serving Dudley, Halesowen, Brierley Hill, Kingswinford and nearby areas."
        />
        <meta
          name="keywords"
          content="earwax removal Stourbridge, microsuction Stourbridge, blocked ears Stourbridge, ear cleaning Stourbridge, hearing check Stourbridge, hearing care Stourbridge, audiologist Stourbridge, earwax removal near Dudley, earwax removal near Halesowen, earwax removal near Brierley Hill, earwax removal near Kingswinford, tinnitus earwax, hearing loss earwax, video otoscopy"
        />
        <meta property="og:title" content="Earwax Removal Stourbridge | Safe Microsuction Clinic" />
        <meta
          property="og:description"
          content="Safe, gentle and effective microsuction earwax removal in Stourbridge with video otoscopy, free hearing check and transparent pricing."
        />
        <meta property="og:url" content="https://www.stourbridgehearing.co.uk/earwax-removal" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Stourbridge Hearing Centre" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/earwax-removal" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-100 font-semibold uppercase tracking-wide mb-4">
            Professional Hearing Care in Stourbridge
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Earwax Removal & Microsuction in Stourbridge
          </h1>

          <p className="text-xl text-gray-100 mb-6 max-w-4xl mx-auto">
            Gentle, safe and effective earwax removal using a fine suction tube under direct vision —{' '}
            <span className="font-bold">no water flushed into the ear.</span>
          </p>

          <p className="text-lg text-gray-100 mb-10 max-w-4xl mx-auto">
            We help with blocked ears, muffled hearing, earwax build-up, ear discomfort and hearing loss caused by wax.
            Your appointment includes video otoscopy, professional microsuction and a free hearing check from a trusted
            local hearing clinic in Stourbridge.
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
              Book Earwax Removal
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Ask a Hearing Care Question
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="bg-black/30 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-white">Safe for many ear conditions</span>
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
                <span className="text-white">Same-day appointments often available</span>
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

      {/* Local SEO Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Safe Earwax Removal, Ear Cleaning & Hearing Care Services
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              At Stourbridge Hearing Centre, we provide local audiology support for earwax build-up, blocked ears,
              muffled hearing, hearing checks and ongoing hearing care. Our microsuction service is suitable for many
              patients looking for professional earwax removal near Dudley, Halesowen, Brierley Hill and Kingswinford.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceKeywords.map((keyword, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-200">{keyword}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
            Before & After Microsuction Earwax Removal
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            See the difference after safe and effective microsuction treatment for blocked ears and earwax build-up.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
              <div className="bg-gradient-to-r from-red-900 to-red-800 py-4 px-6">
                <h3 className="text-2xl font-bold text-white">Before Treatment</h3>
              </div>
              <div className="aspect-video bg-gray-800">
                <video
                  src="/Before removal.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  title="Before microsuction earwax removal in Stourbridge"
                />
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
              <div className="bg-gradient-to-r from-green-900 to-green-800 py-4 px-6">
                <h3 className="text-2xl font-bold text-white">After Treatment</h3>
              </div>
              <div className="aspect-video bg-gray-800">
                <video
                  src="/After Removal.mp4"
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  title="After microsuction earwax removal and ear cleaning"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-red-400 font-semibold uppercase tracking-wide mb-3">
            Earwax Removal Prices
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Transparent Pricing for Microsuction in Stourbridge
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
            Clear prices for one ear or both ears. Every appointment includes an ear health check, video otoscopy,
            professional wax removal, prevention advice and a free hearing check.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 text-left">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">One Ear</h3>
                <p className="text-5xl font-bold text-white">£50</p>
              </div>
              <ul className="space-y-3">
                {[
                  'Video otoscopy ear health check',
                  'Microsuction earwax removal',
                  'Blocked ear and wax build-up advice',
                  'Free hearing check',
                  'Free follow-up if needed',
                ].map((item, idx) => (
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
                {[
                  'Video otoscopy ear health check',
                  'Both ears microsuction',
                  'Ear cleaning and prevention advice',
                  'Free hearing check',
                  'Free follow-up if needed',
                ].map((item, idx) => (
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
          <p className="text-red-400 font-semibold uppercase tracking-wide mb-3 text-center">
            What Happens During Your Appointment
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            What to Expect From Your Earwax Removal Appointment
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="bg-red-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Video Otoscopy</h3>
              <p className="text-gray-300">
                We examine your ear canal with video otoscopy, explain what we see, check for wax build-up and discuss
                the best next step for your ear health.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="bg-red-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Precise Microsuction</h3>
              <p className="text-gray-300">
                Wax is removed under magnification using a fine suction tube. This water-free ear cleaning method is
                quick, precise and comfortable for most patients.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="bg-red-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Care & Prevention</h3>
              <p className="text-gray-300">
                We provide aftercare advice, wax prevention guidance, a free hearing check and invite you for a free
                4-6 monthly pop-in check.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-400 font-semibold uppercase tracking-wide mb-3">
            Local Earwax Removal Near You
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Patients Visit Us From Stourbridge & Nearby Areas
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-10">
            Our hearing clinic is based on Stourbridge High Street and welcomes patients looking for microsuction
            earwax removal, blocked ear treatment, hearing checks and hearing care from nearby towns across the West Midlands.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {areasServed.map((area, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-4">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="text-gray-200">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-400 font-semibold uppercase tracking-wide mb-3 text-center">
            Earwax Removal FAQs
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            Questions About Microsuction Earwax Removal
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Your Earwax Removal Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 via-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-100 font-semibold uppercase tracking-wide mb-3">
            Stourbridge Hearing Centre
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready for Clearer Ears and Better Hearing?
          </h2>
          <p className="text-xl text-white mb-10">
            Same-day appointments often available for microsuction earwax removal in Stourbridge. Free follow-up if wax
            is not fully removed, plus a free hearing check included.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:01384476306"
              className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg"
            >
              Call 01384 476 306
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Ask a Question
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
