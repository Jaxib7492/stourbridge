import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function AftercarePage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need an appointment for hearing aid cleaning in Stourbridge?',
      answer: 'No — our walk-in hearing aid cleaning and maintenance service is open 6 days a week at Stourbridge Hearing Centre. Just pop in for cleaning, domes, wax filters, tube checks, comfort adjustments and quick support.'
    },
    {
      question: 'Is the quick-look ear check really free?',
      answer: 'Yes, absolutely! We offer a complimentary quick-look ear check to check for earwax — especially useful if sounds are muffled, your hearing aids do not seem as clear, or you think your ears may be blocked. No appointment required.'
    },
    {
      question: 'How often should I come for hearing aid aftercare?',
      answer: 'We recommend visiting every 3-6 months for routine hearing aid cleaning, wax filter changes, hearing checks, fine-tuning and performance reviews. However, you can pop in anytime you need support or if something does not feel quite right.'
    },
    {
      question: 'What is included in hearing aid aftercare?',
      answer: 'Aftercare can include hearing aid cleaning, fine-tuning, comfort adjustments, wax filter replacement, dome replacement, receiver checks, microphone cleaning, app and Bluetooth pairing help, hearing checks and advice from our local hearing care team.'
    },
    {
      question: 'Can you help with hearing aid Bluetooth or app problems?',
      answer: 'Yes. We help with hearing aid app setup, Bluetooth pairing, phone connection problems, streaming issues and general troubleshooting for modern digital hearing aids.'
    },
    {
      question: 'Do you offer aftercare for patients from nearby areas?',
      answer: 'Yes. Patients visit us from Stourbridge, Dudley, Halesowen, Kingswinford, Brierley Hill, Hagley, Kidderminster, Wolverhampton, Birmingham, Cradley Heath, Wordsley, Pedmore and nearby areas.'
    }
  ];

  const faqSchema = {
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

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Stourbridge Hearing Centre',
    url: 'https://www.stourbridgehearing.co.uk/aftercare',
    telephone: '01384 476 306',
    email: 'stourbridgehearingcentre@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '59 High St',
      addressLocality: 'Stourbridge',
      postalCode: 'DY8 1DE',
      addressCountry: 'GB'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '17:00'
      }
    ],
    areaServed: [
      'Stourbridge',
      'Dudley',
      'Halesowen',
      'Kingswinford',
      'Brierley Hill',
      'Hagley',
      'Kidderminster',
      'Wolverhampton',
      'Birmingham',
      'Cradley Heath',
      'Wordsley',
      'Pedmore',
      'Amblecote'
    ],
    medicalSpecialty: 'Audiology',
    priceRange: '££'
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hearing Aid Aftercare and Maintenance in Stourbridge',
    serviceType: 'Hearing aid aftercare, hearing aid cleaning, hearing aid servicing, hearing aid repairs and hearing checks',
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Stourbridge Hearing Centre'
    },
    areaServed: [
      'Stourbridge',
      'Dudley',
      'Halesowen',
      'Kingswinford',
      'Brierley Hill',
      'Hagley',
      'Kidderminster',
      'Wolverhampton',
      'Birmingham'
    ],
    description:
      'Lifetime hearing aid aftercare in Stourbridge including walk-in cleaning, wax filter replacement, domes, hearing checks, fine-tuning, Bluetooth support, hearing aid adjustments and ongoing hearing care.'
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aid Aftercare Stourbridge | Cleaning, Servicing & Support</title>
        <meta
          name="description"
          content="Hearing aid aftercare in Stourbridge including walk-in hearing aid cleaning, servicing, fine-tuning, repairs, wax filters, domes, Bluetooth help and free quick-look ear checks."
        />
        <meta
          name="keywords"
          content="hearing aid aftercare Stourbridge, hearing aid cleaning Stourbridge, hearing aid servicing Stourbridge, hearing aid repairs Stourbridge, hearing aid maintenance Stourbridge, hearing aid fine tuning, hearing aid adjustments, hearing checks Stourbridge, hearing care Stourbridge, audiologist Stourbridge, hearing clinic Stourbridge, earwax check Stourbridge, hearing aid domes, hearing aid wax filters, Bluetooth hearing aid help, hearing aid support Dudley, hearing aid support Halesowen, hearing aid support Kingswinford"
        />
        <meta property="og:title" content="Hearing Aid Aftercare & Support in Stourbridge" />
        <meta
          property="og:description"
          content="Lifetime hearing aid aftercare, walk-in cleaning, fine-tuning, wax filters, domes, Bluetooth support and hearing checks at Stourbridge Hearing Centre."
        />
        <meta property="og:url" content="https://www.stourbridgehearing.co.uk/aftercare" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/aftercare" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hearing Aid Aftercare, Cleaning & Support in Stourbridge
              </h1>
              <p className="text-xl text-gray-100 mb-10 leading-relaxed">
                Enjoy lifetime hearing aid aftercare with professional fine-tuning, hearing aid cleaning, servicing, adjustments, Bluetooth support, wax filter changes, domes, and regular hearing checks to keep you hearing your best.
              </p>

              <div className="space-y-4 mb-10">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book Aftercare Check
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto ml-0 sm:ml-4 bg-transparent border-2 border-white hover:bg-white hover:text-red-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Walk In Today
                </button>
              </div>

              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
              >
                Free Quick-Look Ear Check
              </button>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-black bg-opacity-40 border border-gray-600 rounded-lg text-sm text-gray-100">
                  Fully Qualified HCPC Registered Clinicians
                </span>
                <span className="px-4 py-2 bg-black bg-opacity-40 border border-gray-600 rounded-lg text-sm text-gray-100">
                  Same-week appointments
                </span>
                <span className="px-4 py-2 bg-black bg-opacity-40 border border-gray-600 rounded-lg text-sm text-gray-100">
                  Independent local hearing clinic
                </span>
                <span className="px-4 py-2 bg-black bg-opacity-40 border border-gray-600 rounded-lg text-sm text-gray-100">
                  Patients from Dudley, Halesowen & Kingswinford
                </span>
              </div>
            </div>

            {/* RIGHT SIDE (Tiles + Video stacked) */}
            <div className="flex flex-col gap-6">
              {/* VIDEO BLOCK */}
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-gray-700 shadow-lg">
                <video
                  src="/New-Video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-contain"
                  controlsList="nodownload noplaybackrate noremoteplayback"
                />
              </div>

              {/* TILES BLOCK */}
              <div className="order-2 lg:order-1 bg-gradient-to-br from-black to-gray-900 border border-gray-700 rounded-2xl p-8">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                    <span className="text-gray-300 text-center">Hearing Aid Cleaning</span>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                    <span className="text-gray-300 text-center">Fine-tuning</span>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                    <span className="text-gray-300 text-center">Hearing Checks</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                    <span className="text-gray-300 text-center">Wax Check</span>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                    <span className="text-gray-300 text-center">Domes & Filters</span>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                    <span className="text-gray-300 text-center">Ongoing Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 bg-black/30 border border-gray-700 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
              Local Hearing Care for Stourbridge and Nearby Areas
            </h2>
            <p className="text-gray-200 text-center max-w-5xl mx-auto leading-relaxed">
              Stourbridge Hearing Centre provides hearing aid aftercare, hearing aid servicing, hearing checks, hearing aid repairs, earwax checks and hearing care support for patients from Stourbridge, Dudley, Halesowen, Kingswinford, Brierley Hill, Hagley, Kidderminster, Wolverhampton, Birmingham, Cradley Heath, Wordsley, Pedmore and Amblecote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
                What Is Included in Your Hearing Aid Aftercare?
              </h2>

              <div className="space-y-6">
                {[
                  "Lifetime aftercare — scheduled hearing aid reviews to keep performance optimised.",
                  "Professional hearing aid fine-tuning and comfort adjustments for work, family, restaurants, TV, phone calls and everyday listening environments.",
                  "Routine hearing aid cleaning including domes, wax filters, microphones, receivers, vents and tubing.",
                  "6-monthly hearing checks to monitor changes and update your digital hearing aid settings when needed.",
                  "Connectivity help including Bluetooth pairing, mobile app setup, phone streaming, TV streaming and troubleshooting.",
                  "Advice on hearing loss, ear health, hearing protection, earwax checks and getting the best from your hearing aids."
                ].map((text, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded bg-teal-500 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Arrange an Aftercare Visit
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Ask a Question
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                Walk-In Hearing Aid Cleaning & Maintenance in Stourbridge
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Open <span className="font-bold text-white">6 days a week</span> — no appointment needed. Pop in for quick hearing aid cleaning, wax filter changes, tube checks, receiver checks, dome replacement, microphone cleaning and comfort adjustments.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-black bg-opacity-40 border border-gray-600 rounded-lg p-6">
                  <p className="text-gray-400 text-sm mb-2">Mon – Sat</p>
                  <p className="text-white text-lg font-semibold">9:30 AM – 5:00 PM</p>
                </div>
                <div className="bg-black bg-opacity-40 border border-gray-600 rounded-lg p-6">
                  <p className="text-gray-400 text-sm mb-2">Location</p>
                  <p className="text-white text-lg font-semibold">59 High St, Stourbridge DY8 1DE</p>
                </div>
              </div>

              <div className="bg-black bg-opacity-40 border border-gray-600 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-bold text-white mb-3">Popular Aftercare Services</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-gray-300">
                  <p>• Hearing aid servicing</p>
                  <p>• Hearing aid repairs</p>
                  <p>• Hearing aid cleaning</p>
                  <p>• Wax filter replacement</p>
                  <p>• Dome replacement</p>
                  <p>• Tube checks</p>
                  <p>• Bluetooth hearing aid help</p>
                  <p>• Hearing aid adjustments</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=59+High+St+Stourbridge+DY8+1DE', '_blank')}
                  className="bg-white hover:bg-gray-100 text-red-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Directions
                </button>
                <a
                  href="tel:01384476306"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call 01384 476 306
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Free Quick-Look Ear Check in Stourbridge
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Not sure if wax is the problem? Drop in for a <span className="font-bold text-white">complimentary quick look</span> to check for earwax — especially useful if sounds are muffled, your hearing aids sound blocked, speech is unclear, or your hearing seems dull.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Visual check for earwax and blockage",
                  "Advice on next steps if wax is present",
                  "Helpful if hearing aids sound blocked or unclear",
                  "No appointment required during opening hours"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Pop In This Week
                </button>
                <button
                  onClick={() => navigate('/earwax-removal')}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Earwax Removal Info
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 overflow-hidden">
                <img
                  src="/image.png"
                  alt="Free quick-look ear check and otoscopy ear examination at Stourbridge Hearing Centre"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-400 text-sm text-center mt-4">
                Ideal first step if hearing seems dull, ears feel blocked, or hearing aids sound unclear.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            How Hearing Aid Aftercare Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { num: 1, title: "Check & Clean", text: "We inspect microphones, receivers, vents and tubing, then clean or replace domes, tubes and wax filters when needed." },
              { num: 2, title: "Fine-Tune", text: "We adjust your hearing aid settings for comfort, clarity, speech understanding and everyday listening environments." },
              { num: 3, title: "Review", text: "We plan follow-ups, answer questions and share practical tips for getting the very best from your hearing aids." }
            ].map((step, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8">
                <div className="text-6xl font-bold text-red-600 mb-4">{step.num}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Arrange Aftercare
            </button>
            <a
              href="tel:01384476306"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Call 01384 476 306
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            Hearing Aid Aftercare FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
                >
                  <span className="text-xl font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
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
              Ask a Question
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Hearing Aid Support Near You
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8">
            Looking for hearing aid cleaning near me, hearing aid repairs near me, hearing aid servicing in Stourbridge, or trusted hearing care near Dudley and Halesowen? Our independent hearing centre provides friendly local support for digital hearing aids, hearing tests, earwax checks and long-term hearing care.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Stourbridge',
              'Dudley',
              'Halesowen',
              'Kingswinford',
              'Brierley Hill',
              'Hagley',
              'Kidderminster',
              'Wolverhampton',
              'Birmingham',
              'Cradley Heath',
              'Wordsley',
              'Pedmore',
              'Amblecote'
            ].map((area) => (
              <span key={area} className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-gray-300">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 via-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready for Your Hearing Aid Aftercare Visit?
          </h2>
          <p className="text-xl text-white mb-10">
            Book an appointment or simply walk in during opening hours for hearing aid cleaning, servicing, wax filters, domes, adjustments or a free quick-look ear check.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Aftercare Check
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
    </div>
  );
}
