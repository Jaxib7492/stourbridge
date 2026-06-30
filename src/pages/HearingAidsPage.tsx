import React from 'react';
import {
  CreditCard,
  CheckCircle2,
  Headphones,
  ShieldCheck,
  Zap,
  MapPin,
  Settings,
  BatteryCharging,
  Volume2,
  Bluetooth,
  HelpCircle
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function HearingAidsPage() {

  const navigate = useNavigate();

  const hearingAidStyles = [
    {
      title: "RIC – Rechargeable Hearing Aids",
      img: "/image copy copy copy copy copy copy.png",
      desc: "Our most popular style. Discreet behind-the-ear digital hearing aids with Bluetooth connectivity, rechargeable batteries, and clear everyday sound."
    },
    {
      title: "IIC – Invisible Hearing Aids",
      img: "/image copy copy copy copy copy copy copy copy copy copy copy.png",
      desc: "Custom-made invisible hearing aids that sit deep in the ear canal. Virtually invisible to those around you and ideal for discreet hearing support."
    },
    {
      title: "CIC – Completely-in-Canal Hearing Aids",
      img: "/image copy copy copy copy copy copy copy copy.png",
      desc: "Custom-moulded hearing aids for a comfortable fit, natural sound quality, and high-level discretion for mild to moderate hearing loss."
    },
    {
      title: "ITC – Rechargeable In-the-Canal Hearing Aids",
      img: "/image copy copy copy copy copy copy copy copy copy copy.png",
      desc: "Modern rechargeable in-the-ear hearing aids combining custom comfort, easy handling, and advanced digital sound processing."
    },
    {
      title: "ITE – In-the-Ear Hearing Aids",
      img: "/image copy copy copy copy copy copy copy copy copy.png",
      desc: "Easy-to-handle hearing aids with tactile controls. A great choice for patients who want comfort, reliability, and simple daily use."
    },
    {
      title: "Bluetooth Hearing Aids",
      img: "/image copy copy copy copy copy copy copy copy copy copy copy copy.png",
      desc: "Stream phone calls, music, TV audio, and video sound directly to your hearing aids using modern Bluetooth hearing aid technology."
    }
  ];

  const serviceKeywords = [
    "Free hearing tests in Stourbridge",
    "Private hearing aid fittings",
    "Digital hearing aids",
    "Invisible hearing aids",
    "Rechargeable hearing aids",
    "Bluetooth hearing aids",
    "Hearing aid adjustments",
    "Hearing aid servicing",
    "Hearing aid repairs",
    "Hearing aid aftercare",
    "Hearing loss assessments",
    "Tinnitus advice",
    "Ear health checks",
    "Home visit hearing care",
    "Independent audiologists"
  ];

  const areasServed = [
    "Stourbridge",
    "Dudley",
    "Halesowen",
    "Brierley Hill",
    "Kingswinford",
    "Hagley",
    "Kidderminster",
    "Cradley Heath",
    "Wolverhampton",
    "Birmingham",
    "Wordsley",
    "Pedmore",
    "Amblecote",
    "Stourport-on-Severn"
  ];

  const faqs = [
    {
      question: "Do you offer free hearing tests in Stourbridge?",
      answer: "Yes. We offer free hearing tests and hearing checks at Stourbridge Hearing Centre to help assess your hearing and recommend the most suitable next steps."
    },
    {
      question: "Which hearing aids do you provide?",
      answer: "We provide modern digital hearing aids including rechargeable hearing aids, Bluetooth hearing aids, invisible hearing aids, in-the-ear hearing aids, and receiver-in-canal hearing aids from leading manufacturers."
    },
    {
      question: "Can I try hearing aids before buying?",
      answer: "Yes. We offer hearing aid demonstrations so you can understand the sound quality, comfort, and features before making a decision."
    },
    {
      question: "Do you provide hearing aid aftercare?",
      answer: "Yes. Lifetime support is included, including fine-tuning, adjustments, maintenance, cleaning advice, and ongoing aftercare."
    },
    {
      question: "Do you offer home visits for hearing aids?",
      answer: "Yes. Home visit hearing care may be available for patients who cannot easily visit our hearing clinic in Stourbridge."
    },
    {
      question: "Do you cover nearby areas outside Stourbridge?",
      answer: "Yes. Patients visit us from Dudley, Halesowen, Brierley Hill, Kingswinford, Hagley, Kidderminster, Wolverhampton, Birmingham, and surrounding areas."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Stourbridge Hearing Centre",
    "url": "https://www.stourbridgehearing.co.uk/hearing-aids",
    "telephone": "01384 476 306",
    "email": "stourbridgehearingcentre@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "59 High St",
      "addressLocality": "Stourbridge",
      "postalCode": "DY8 1DE",
      "addressCountry": "GB"
    },
    "areaServed": areasServed,
    "medicalSpecialty": [
      "Audiology",
      "Hearing Care",
      "Hearing Tests",
      "Hearing Aids",
      "Tinnitus Advice"
    ],
    "priceRange": "££",
    "description": "Independent hearing clinic in Stourbridge offering free hearing tests, private digital hearing aids, hearing aid fittings, rechargeable hearing aids, invisible hearing aids, hearing aid servicing, and lifetime aftercare."
  };

  return (

    <div className="min-h-screen bg-black text-white">

      <Helmet>
        <title>
          Private Hearing Aids Stourbridge | Free Hearing Tests & Independent Audiologists
        </title>

        <meta
          name="description"
          content="Private hearing aids in Stourbridge from independent audiologists. Free hearing tests, digital hearing aids, invisible and rechargeable hearing aids, Bluetooth hearing aids, 0% finance, home visits and lifetime aftercare."
        />

        <meta
          name="keywords"
          content="hearing aids Stourbridge, private hearing aids Stourbridge, hearing tests Stourbridge, free hearing test Stourbridge, audiologist Stourbridge, hearing clinic Stourbridge, digital hearing aids, invisible hearing aids, rechargeable hearing aids, Bluetooth hearing aids, hearing aid repairs, hearing aid servicing, hearing care Dudley, hearing aids Halesowen, hearing loss assessment, tinnitus advice"
        />

        <meta property="og:title" content="Private Hearing Aids Stourbridge | Free Hearing Tests" />
        <meta property="og:description" content="Book a free hearing test and discover private digital hearing aids, invisible hearing aids, rechargeable hearing aids, Bluetooth hearing aids and lifetime aftercare in Stourbridge." />
        <meta property="og:url" content="https://www.stourbridgehearing.co.uk/hearing-aids" />
        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://www.stourbridgehearing.co.uk/hearing-aids"
        />

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 overflow-hidden">

        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-black rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">

          <p className="text-red-100 uppercase tracking-[0.25em] font-semibold mb-4">
            Independent Hearing Clinic in Stourbridge
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Private Hearing Aids & Free Hearing Tests in Stourbridge
          </h1>

          <p className="text-xl sm:text-2xl text-gray-100 mb-6 max-w-4xl mx-auto font-light">
            World-class hearing solutions, digital hearing aids, invisible hearing aids, rechargeable hearing aids and expert hearing care, fitted by independent audiologists in the heart of Stourbridge.
          </p>

          <p className="text-base sm:text-lg text-red-50 mb-10 max-w-4xl mx-auto">
            We help patients with hearing loss, speech clarity, tinnitus concerns, hearing aid servicing, hearing aid adjustments and long-term aftercare across Stourbridge, Dudley, Halesowen, Brierley Hill, Kingswinford, Hagley and nearby areas.
          </p>

          {/* YouTube Video */}
          <div className="mt-12 mb-16 flex justify-center">

            <div className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-red-700/50">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9ixmIbHQNLA?si=xSt1TlWtCpS8u5kh&rel=0&modestbranding=1&showinfo=0&controls=1"
                title="Private hearing aids and hearing care at Stourbridge Hearing Centre"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-6">

            <button
              onClick={() => navigate('/contact')}
              className="bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Book FREE Hearing Test
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Book Home Visit
            </button>

            <a
              href="tel:01384476306"
              className="bg-white text-red-800 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl"
            >
              Call 01384 476 306
            </a>

          </div>

        </div>

      </section>

      {/* SEO Service Keywords Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Complete Hearing Care Services in Stourbridge
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              From your first hearing test to fitting, fine-tuning and lifetime support, our independent hearing centre provides personalised hearing care for adults across Stourbridge and surrounding towns.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceKeywords.map((service, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center gap-3 hover:border-red-600 transition-all">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-200 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              The Latest Discreet Hearing Aid Technology
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
              Choose from invisible hearing aids, rechargeable digital hearing aids, Bluetooth hearing aids and custom in-the-ear devices designed around your hearing needs, lifestyle and comfort.
            </p>

            <div className="h-1 w-24 bg-red-600 mx-auto"></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {hearingAidStyles.map((item, idx) => (

              <div
                key={idx}
                className="group bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-red-600 transition-all duration-500"
              >

                <div className="aspect-square bg-gray-900 rounded-xl mb-6 p-6 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">

                  <img
                    src={item.img}
                    alt={`${item.title} available at Stourbridge Hearing Centre`}
                    className="w-full h-full object-contain"
                  />

                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Hearing Aid Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Choose Private Digital Hearing Aids?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Modern hearing aids do much more than make sounds louder. They improve speech clarity, reduce background noise, connect to your phone and can be adjusted precisely to your hearing test results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <Volume2 className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Clearer Speech</h3>
              <p className="text-gray-400">Hear conversations more clearly at home, in restaurants, at work and around family.</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <Bluetooth className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Bluetooth Streaming</h3>
              <p className="text-gray-400">Stream calls, music, videos and TV sound directly to compatible hearing aids.</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <BatteryCharging className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Rechargeable Options</h3>
              <p className="text-gray-400">Enjoy convenient charging without regularly changing small batteries.</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <Settings className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Personalised Fitting</h3>
              <p className="text-gray-400">Every hearing aid is programmed and fine-tuned around your hearing loss, comfort and lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-800 to-red-600">

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <div className="flex-1 text-center md:text-left">

            <h2 className="text-4xl font-bold mb-6 italic text-white">
              Lifetime Hearing Aid Support Included
            </h2>

            <p className="text-red-50 text-lg mb-6">
              Our private hearing aids come with ongoing aftercare, hearing aid adjustments, servicing support and friendly advice from experienced independent audiologists.
            </p>

            <div className="space-y-4 mb-8">

              <div className="flex items-center gap-3 justify-center md:justify-start">

                <CheckCircle2 className="text-white w-6 h-6" />

                <span className="text-lg font-medium text-white">
                  Unlimited Fine-Tuning & Adjustments
                </span>

              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">

                <CheckCircle2 className="text-white w-6 h-6" />

                <span className="text-lg font-medium text-white">
                  Walk-in Maintenance (6 Days a Week)
                </span>

              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">

                <CheckCircle2 className="text-white w-6 h-6" />

                <span className="text-lg font-medium text-white">
                  Hearing Aid Servicing, Cleaning Advice & Aftercare
                </span>

              </div>

            </div>

            <button
              onClick={() => navigate('/contact')}
              className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl"
            >
              Ask Our Experts
            </button>

          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">

              <ShieldCheck className="w-10 h-10 mb-4 text-white" />

              <h4 className="font-bold text-white">
                5-Year Warranty
              </h4>

            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">

              <Zap className="w-10 h-10 mb-4 text-white" />

              <h4 className="font-bold text-white">
                Free Hearing Aid Sound Quality Demonstration
              </h4>

            </div>

          </div>

        </div>

      </section>

      {/* Brand Logos Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-black">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-8">

            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              Leading Hearing Aid Manufacturers
            </h3>

            <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
              We work with trusted hearing aid manufacturers to provide high-quality digital hearing aids, rechargeable devices, invisible hearing aids and Bluetooth hearing solutions.
            </p>

            <div className="h-1 w-20 bg-red-600 mx-auto mt-3 rounded-full"></div>

          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">

            {[
              { logo: "/a.png", alt: "Hearing aid manufacturer logo 1 at Stourbridge Hearing Centre" },
              { logo: "/b.png", alt: "Hearing aid manufacturer logo 2 at Stourbridge Hearing Centre" },
              { logo: "/c.png", alt: "Hearing aid manufacturer logo 3 at Stourbridge Hearing Centre" },
              { logo: "/d.png", alt: "Hearing aid manufacturer logo 4 at Stourbridge Hearing Centre" },
              { logo: "/e.png", alt: "Hearing aid manufacturer logo 5 at Stourbridge Hearing Centre" },
              { logo: "/f.png", alt: "Hearing aid manufacturer logo 6 at Stourbridge Hearing Centre" }
            ].map((brand, idx) => (

              <div
                key={idx}
                className="w-[120px] h-[70px] bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg"
              >

                <img
                  src={brand.logo}
                  alt={brand.alt}
                  className="max-w-full max-h-full object-contain"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Areas Served Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <MapPin className="w-12 h-12 text-red-500 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Hearing Aids Near Stourbridge, Dudley & Halesowen
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-10">
            Our hearing clinic is based on Stourbridge High Street, making it convenient for patients searching for hearing aids near me, hearing tests near me, audiologists near me, and private hearing care across the West Midlands.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {areasServed.map((area, idx) => (
              <span key={idx} className="bg-gray-900 border border-gray-800 rounded-full px-5 py-3 text-gray-200 hover:border-red-600 transition-all">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Finance Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-y border-gray-800">

        <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-red-900/20 to-transparent p-12 rounded-3xl border border-red-900/50">

          <CreditCard className="w-16 h-16 text-red-500 mx-auto mb-6" />

          <h2 className="text-4xl font-bold mb-6">
            Affordable Private Hearing Aids for Everyone
          </h2>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Spread the cost of your private digital hearing aids with{" "}
            <span className="text-white font-bold underline decoration-red-500">
              0% Interest-Free Finance
            </span>.
          </p>

          <button
            onClick={() => navigate('/financing')}
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
          >
            Explore Finance Options
          </button>

        </div>

      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <HelpCircle className="w-14 h-14 text-red-500 mx-auto mb-5" />
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Hearing Aids & Hearing Tests FAQs
            </h2>
            <p className="text-lg text-gray-300">
              Helpful answers for patients considering private hearing aids, hearing tests and hearing care in Stourbridge.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-red-900 to-black text-center">

        <div className="max-w-3xl mx-auto">

          <Headphones className="w-16 h-16 text-red-500 mx-auto mb-8" />

          <h2 className="text-5xl font-bold mb-6">
            Ready to Hear Clearly?
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Book your free hearing test in Stourbridge today and get expert advice on the best private hearing aids for your hearing, lifestyle and budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-red-700 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-xl transition-all shadow-2xl"
            >
              Book My Free Test
            </button>

            <a
              href="tel:01384476306"
              className="bg-red-600 text-white hover:bg-red-700 px-10 py-4 rounded-xl font-bold text-xl transition-all shadow-xl"
            >
              01384 476 306
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}
