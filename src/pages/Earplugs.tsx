import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Phone,
  Check,
  MapPin,
  ChevronDown,
  CalendarDays,
  Ear,
  ShieldCheck,
  Headphones,
  Volume2,
  Award,
  Stethoscope,
  ClipboardCheck,
  Search,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function EarplugsPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const productTypes = [
    {
      icon: Headphones,
      title: 'In-Ear Monitors',
      description:
        'High-fidelity ear canal impressions for musicians, stage performers, and audiophiles purchasing bespoke IEMs.',
    },
    {
      icon: Ear,
      title: 'Custom Shooting Ear Plugs',
      description:
        'Deep-canal impressions suitable for active digital shooting plugs and custom passive hunter hearing protection.',
    },
    {
      icon: ShieldCheck,
      title: 'Custom Hearing Protection',
      description:
        'Silicone and acrylic ear mould impressions designed for industrial work, sleep, swimming, and motorsport.',
    },
    {
      icon: Volume2,
      title: 'Noise Reduction Ear Plugs',
      description:
        'Bespoke moulding tailored for noise-attenuating earplugs and precision acoustic filters.',
    },
    {
      icon: Ear,
      title: 'Other Custom Ear Products',
      description:
        'Other products requiring professionally taken ear impressions.',
    },
  ];

  const benefits = [
    {
      icon: Stethoscope,
      title: 'Professional Service',
      description:
        'Professional ear impression service.',
    },
    {
      icon: ClipboardCheck,
      title: 'Standalone Service',
      description:
        'Available as a standalone service.',
    },
    {
      icon: Ear,
      title: 'Versatile Product Support',
      description:
        'Suitable for customers purchasing in-ear monitors or custom shooting plugs.',
    },
    {
      icon: Search,
      title: 'FREE Ear Check',
      description:
        'FREE Quick Look Ear Check.',
    },
    {
      icon: MapPin,
      title: 'Convenient Location',
      description:
        'Convenient Stourbridge town centre location.',
    },
    {
      icon: Award,
      title: 'Qualified Audiologist',
      description:
        'Friendly and professional service by a qualified audiologist.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      icon: CalendarDays,
      title: 'Schedule Screening',
      description:
        'Book your preliminary ear canal inspection at our Stourbridge practice.',
    },
    {
      number: '02',
      icon: Search,
      title: 'Diagnostic Otoscopy',
      description:
        'Our audiologist examines the ear canal for clear pathways and healthy eardrums.',
    },
    {
      number: '03',
      icon: Ear,
      title: 'Material Placement',
      description:
        'An impression dam is safely positioned and medical-grade silicone is applied.',
    },
    {
      number: '04',
      icon: Headphones,
      title: 'Manufacturer Dispatch',
      description:
        'Receive your accurate, cured impressions ready for submission to your supplier.',
    },
  ];

  const faqs = [
    {
      question: 'What is an ear impression?',
      answer:
        'An ear impression is a custom mould taken from inside the ear, enabling third-party manufacturers to craft bespoke hearing protection or audio gear that fits perfectly.',
    },
    {
      question: 'What products can you take impressions for?',
      answer:
        'We accommodate in-ear monitors, shooting plugs, industrial protection, sleeping and swimming plugs, and all other bespoke acoustic fitments.',
    },
    {
      question:
        'Do I need to purchase the custom product from Stourbridge Hearing Centre?',
      answer:
        'No. Our standalone service is designed for customers ordering directly from third-party manufacturers. Our clinical impressions are accepted by all major IEM and custom earplug brands.',
    },
    {
      question: 'Is the initial ear check free?',
      answer:
        'Yes. We offer a complimentary otoscopy screening before taking impressions to verify that your ear canals are clear and suitable.',
    },
    {
      question: 'Why do I need an ear check beforehand?',
      answer:
        'It ensures safety and accuracy. Obstructions like excessive earwax or inflammation must be identified early, as they can interfere with impression taking or endanger canal tissue.',
    },
    {
      question: 'Where are you located?',
      answer:
        'Stourbridge Hearing Centre is located at 59 High Street, Stourbridge, DY8 1DE, in the town centre.',
    },
  ];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Stourbridge Hearing Centre',
    url: 'https://www.stourbridgehearing.co.uk/earplugs',
    telephone: '01384 476 306',
    email: 'stourbridgehearingcentre@gmail.com',
    description:
      'Professional ear impression service in Stourbridge for in-ear monitors, custom shooting ear plugs, hearing protection, noise reduction ear plugs and other custom-made ear products.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '59 High St',
      addressLocality: 'Stourbridge',
      postalCode: 'DY8 1DE',
      addressCountry: 'GB',
    },
    medicalSpecialty: ['Audiology', 'Hearing Care'],
    areaServed: [
      {
        '@type': 'Place',
        name: 'Stourbridge',
      },
      {
        '@type': 'Place',
        name: 'West Midlands',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:30',
        closes: '17:00',
      },
    ],
  };

  const faqSchemaData = {
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

      {/* SEO METADATA */}
      <Helmet>
        <title>Custom Ear Impressions Stourbridge | Audiologist Earplugs</title>
        <meta
          name="description"
          content="HCPC-registered ear impression service in Stourbridge. Professional impressions for custom in-ear monitors, shooting plugs, and noise protection. Free ear check."
        />
        <meta
          name="keywords"
          content="ear impressions Stourbridge, ear impression service Stourbridge, custom earplugs Stourbridge, custom shooting ear plugs Stourbridge, custom hearing protection Stourbridge, in ear monitor impressions Stourbridge, noise reduction ear plugs Stourbridge, professional ear impressions, ear impressions West Midlands, custom ear products Stourbridge"
        />
        <meta
          property="og:title"
          content="Ear Impression Service Stourbridge | Stourbridge Hearing Centre"
        />
        <meta
          property="og:description"
          content="Professional ear impressions for in-ear monitors, custom shooting ear plugs, hearing protection, noise reduction ear plugs and other custom-made ear products."
        />
        <meta
          property="og:url"
          content="https://www.stourbridgehearing.co.uk/earplugs"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://www.stourbridgehearing.co.uk/earplugs"
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-950 via-red-800 to-red-950 text-white">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-black/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* HERO CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Ear className="w-4 h-4 text-red-200" />
                <span className="text-sm font-semibold">
                  Professional Ear Impression Service
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Ear Impression Service
                <span className="block text-red-200">in Stourbridge</span>
              </h1>

              <div className="w-20 h-1 bg-red-400 mb-6 rounded-full" />

              <p className="text-red-50 text-base sm:text-lg leading-relaxed mb-5 max-w-2xl">
                At Stourbridge Hearing Centre, we provide a professional ear impression service for customers who require accurate impressions of their ears for custom-made products.
              </p>

              <p className="text-red-100 leading-relaxed mb-8 max-w-2xl">
                If you are purchasing in-ear monitors, custom shooting ear plugs, hearing protection or other custom-made ear products, we can provide the professional ear impressions required for your chosen supplier or manufacturer.
              </p>

              {/* HERO BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white px-7 py-4 rounded-xl font-bold shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CalendarDays className="w-5 h-5" />
                  Book FREE Quick Look Ear Check
                </button>

                <a
                  href="tel:01384476306"
                  className="inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 border border-white/20 text-white px-7 py-4 rounded-xl font-bold shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call 01384 476 306
                </a>
              </div>

              {/* HERO TRUST BADGES */}
              <div className="flex flex-wrap gap-3 mt-8">
                <div className="flex items-center gap-2 bg-black/20 border border-white/10 rounded-full px-4 py-2 text-sm">
                  <Check className="w-4 h-4 text-green-300" />
                  FREE Quick Look Ear Check
                </div>

                <div className="flex items-center gap-2 bg-black/20 border border-white/10 rounded-full px-4 py-2 text-sm">
                  <Check className="w-4 h-4 text-green-300" />
                  Qualified Audiologist
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative">
              {/* IMAGE PLACED BEFORE THE FREE QUICK LOOK BOX */}
              <div className="mb-6 rounded-3xl overflow-hidden shadow-2xl border border-red-500/20">
                <img
                  src="audio_procedure.jpg"
                  alt="Audiological ear impression procedure"
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>

              {/* ORIGINAL BOX CARD */}
              <div className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl border border-red-500/20">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

                <div className="relative">
                  <div className="w-20 h-20 bg-white/15 rounded-2xl flex items-center justify-center mb-7">
                    <Search className="w-10 h-10 text-white" />
                  </div>

                  

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
                    Ear Check Before Your Ear Impression
                  </h3>

                  <p className="text-red-50 leading-relaxed mb-7">
                    Before taking an ear impression, it is important to check that your ears and ear canals are suitable for the procedure.
                  </p>

                  
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-red-500 font-bold uppercase tracking-wider text-sm mb-3">
              Professional Ear Impressions For
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
              Custom Products
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Our ear impression service is available as a standalone appointment. You may already know which company or supplier you are purchasing your custom product from and simply require professionally taken ear impressions.
            </p>
          </div>

          {/* PRODUCT CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {productTypes.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.title}
                  className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="font-bold text-white text-lg mb-3">
                    {product.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Once your ear impressions have been taken, you can use them as required for the custom product being made.
          </p>
        </div>
      </section>

      {/* FREE EAR CHECK SECTION */}
      <section className="py-16 sm:py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* VISUAL CARD */}
            <div className="order-2 lg:order-1">
              <div className="relative bg-gray-900 border border-gray-700 rounded-3xl p-3 shadow-2xl">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl min-h-[360px] sm:min-h-[430px] flex items-center justify-center overflow-hidden">
                  <div className="text-center px-8">
                    <div className="mx-auto w-28 h-28 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-7">
                      <Ear className="w-16 h-16 text-red-500" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                      Professional Ear Impressions
                    </h3>

                    <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
                      Accurate professional impressions for custom-made ear products.
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-full font-bold text-sm">
                      <ShieldCheck className="w-5 h-5" />
                      Professional & Accurate
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="order-1 lg:order-2">
              <p className="text-red-500 font-bold uppercase tracking-wider text-sm mb-3">
                Pre-Impression Clinical Otoscopy
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Free Quick Look Ear Check Before Your Ear Impression
              </h2>

              <p className="text-gray-400 leading-relaxed mb-5">
                Before taking an ear impression, it is important to check that your ears and ear canals are suitable for the procedure.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                At Stourbridge Hearing Centre, we offer a FREE Quick Look Ear Check before your ear impression appointment.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-gray-900 rounded-2xl border border-gray-800 shadow-lg">
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      Quick Look Inside Your Ears
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Using specialist equipment, we can take a quick look inside your ears.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-gray-900 rounded-2xl border border-gray-800 shadow-lg">
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      Check for Excessive Earwax
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      We check for issues such as excessive earwax that could affect the ear impression process.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-red-950/40 rounded-2xl border border-red-900/50">
                  <div className="w-11 h-11 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      Proceed When Suitable
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      If your ears are suitable, we can proceed with arranging or carrying out your ear impression service.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-red-500 font-bold uppercase tracking-wider text-sm mb-3">
              Why Choose Stourbridge Hearing Centre?
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
              Professional. Convenient. Friendly.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Professional ear impression service designed around your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="relative bg-gray-900 border border-gray-800 rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:border-red-500/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-red-500" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-red-400 font-bold uppercase tracking-wider text-sm mb-3">
              Simple Process
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5">
              How Our Ear Impression Service Works
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              From your FREE Quick Look Ear Check through to your professional ear impression.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-red-700 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-7">
                    <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <span className="text-4xl font-extrabold text-red-900">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STANDALONE SERVICE */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-red-500 font-bold uppercase tracking-wider text-sm mb-3">
                  Standalone Service
                </p>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
                  Professional Ear Impressions for Custom Products
                </h2>

                <p className="text-gray-400 leading-relaxed mb-5">
                  Our ear impression service is available as a standalone appointment. You may already know which company or supplier you are purchasing your custom product from and simply require professionally taken ear impressions.
                </p>
              </div>

              <div className="bg-gray-950 rounded-2xl border border-gray-800 p-7 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-5">
                  We can provide ear impressions for products including:
                </h3>

                <ul className="space-y-4">
                  {[
                    'In-ear monitors',
                    'Custom shooting ear plugs',
                    'Custom hearing protection',
                    'Noise reduction ear plugs',
                    'Other products requiring professionally taken ear impressions',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-red-500" />
                      </span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION / CONTACT */}
      <section className="py-16 sm:py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* LOCATION */}
            <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8 sm:p-10 shadow-xl">
              <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-red-500" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Contact Stourbridge Hearing Centre
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6">
                Convenient Stourbridge town centre location.
              </p>

              <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                {/* Embedded Google Map Container */}
                <div className="relative w-full h-[350px]">
                  <iframe
                    title="Stourbridge Hearing Centre Location"
                    src="https://www.google.com/maps?q=Stourbridge%20Hearing%20Centre&output=embed&z=16"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>

                  {/* Get Directions Button */}
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Stourbridge+Hearing+Centre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-2xl font-bold shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    Get Directions
                  </a>
                </div>

                {/* Address Detail Footer */}
                <div className="p-6 bg-black/40 border-t border-gray-800">
                  <p className="font-bold text-white text-lg">Stourbridge Hearing Centre</p>
                  <p className="text-gray-400 mt-1">
                    59 High Street, Stourbridge, DY8 1DE
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div className="bg-black rounded-3xl border border-gray-800 p-8 sm:p-10 text-white shadow-2xl">
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-white" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
                Book Your Ear Impression Service in Stourbridge
              </h2>

              <p className="text-gray-400 leading-relaxed mb-8">
                If you need professional ear impressions in Stourbridge for in-ear monitors, shooting ear plugs or other custom-made ear products, Stourbridge Hearing Centre is here to help. We recommend booking your FREE Quick Look Ear Check first so we can check your ears before proceeding with ear impressions.
              </p>

              <div className="flex flex-col gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-red-600 hover:bg-red-500 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <CalendarDays className="w-5 h-5" />
                  Book FREE Quick Look Ear Check
                </button>

                <a
                  href="tel:01384476306"
                  className="w-full bg-gray-900 hover:bg-gray-800 border border-gray-700 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  01384 476 306
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-red-500 font-bold uppercase tracking-wider text-sm mb-3">
              Frequently Asked Questions
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Ear Impression FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border border-gray-800 rounded-2xl overflow-hidden bg-gray-900 shadow-lg"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-5">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 sm:px-7">
                    <div className="border-t border-gray-800 pt-5">
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-800">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-black/10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
            <Ear className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Book Your Ear Impression Service in Stourbridge
          </h2>

          <p className="text-red-50 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-9">
            If you need professional ear impressions in Stourbridge for in-ear monitors, shooting ear plugs or other custom-made ear products, Stourbridge Hearing Centre is here to help.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-xl font-bold shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <CalendarDays className="w-5 h-5" />
              Book FREE Quick Look Ear Check
            </button>

            <a
              href="tel:01384476306"
              className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call 01384 476 306
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default EarplugsPage;