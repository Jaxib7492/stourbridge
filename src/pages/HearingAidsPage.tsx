import React from 'react';
import {
  CreditCard,
  CheckCircle2,
  Headphones,
  ShieldCheck,
  Zap
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function HearingAidsPage() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-black text-white">

      <Helmet>
        <title>
          Private Hearing Aids Stourbridge | Independent Audiologists
        </title>

        <meta
          name="description"
          content="Discover the latest digital hearing aids from leading brands like Phonak, Oticon, and Starkey. Benefit from free hearing tests, 0% finance, and lifetime aftercare."
        />

        <link
          rel="canonical"
          href="https://www.stourbridgehearing.co.uk/hearing-aids"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 overflow-hidden">

        <div className="max-w-6xl mx-auto text-center relative z-10">

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Private Hearing Aids
          </h1>

          <p className="text-xl sm:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-light">
            World-class hearing solutions, expertly fitted by independent audiologists in the heart of Stourbridge.
          </p>

          {/* YouTube Video */}
          <div className="mt-12 mb-16 flex justify-center">

            <div className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-red-700/50">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9ixmIbHQNLA?si=xSt1TlWtCpS8u5kh?rel=0&modestbranding=1&showinfo=0&controls=1"
                title="Stourbridge Hearing Aids Centre Client Review"
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

          </div>

        </div>

      </section>

      {/* Styles Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              The Latest Discreet Technology
            </h2>

            <div className="h-1 w-24 bg-red-600 mx-auto"></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "RIC – Rechargeable",
                img: "/image copy copy copy copy copy copy.png",
                desc: "Our most popular style. Discreet behind-the-ear design with Bluetooth and rechargeable batteries."
              },

              {
                title: "IIC – Invisible",
                img: "/image copy copy copy copy copy copy copy copy copy copy copy.png",
                desc: "Custom-made to sit deep in the ear canal. Virtually invisible to those around you."
              },

              {
                title: "CIC – Completely-in-Canal",
                img: "/image copy copy copy copy copy copy copy copy.png",
                desc: "Custom-moulded for a perfect fit. Natural sound quality with high-level discretion."
              },

              {
                title: "ITC – Rechargeable",
                img: "/image copy copy copy copy copy copy copy copy copy copy.png",
                desc: "Combines the benefits of custom in-the-ear aids with modern rechargeable technology."
              },

              {
                title: "ITE – In-the-Ear",
                img: "/image copy copy copy copy copy copy copy copy copy.png",
                desc: "Easy to handle with tactile controls. Ideal for those with dexterity concerns."
              },

              {
                title: "Bluetooth Connectivity",
                img: "/image copy copy copy copy copy copy copy copy copy copy copy copy.png",
                desc: "Stream phone calls, music, and TV audio directly to your hearing aids."
              }

            ].map((item, idx) => (

              <div
                key={idx}
                className="group bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-red-600 transition-all duration-500"
              >

                <div className="aspect-square bg-gray-900 rounded-xl mb-6 p-6 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">

                  <img
                    src={item.img}
                    alt={item.title}
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

      {/* Aftercare Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-800 to-red-600">

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <div className="flex-1 text-center md:text-left">

            <h2 className="text-4xl font-bold mb-6 italic text-white">
              Lifetime Support Included
            </h2>

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
                Free hearing aids sound quality Demonstration
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
        Manufacturers
      </h3>

      <div className="h-1 w-20 bg-red-600 mx-auto mt-3 rounded-full"></div>

    </div>

          <div className="flex flex-wrap justify-center items-center gap-6">

            {[
              "/a.png",
              "/b.png",
              "/c.png",
              "/d.png",
              "/e.png",
              "/f.png"
            ].map((logo, idx) => (

              <div
                key={idx}
                className="w-[120px] h-[70px] bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg"
              >

                <img
                  src={logo}
                  alt={`Brand ${idx + 1}`}
                  className="max-w-full max-h-full object-contain"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Finance Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-y border-gray-800">

        <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-red-900/20 to-transparent p-12 rounded-3xl border border-red-900/50">

          <CreditCard className="w-16 h-16 text-red-500 mx-auto mb-6" />

          <h2 className="text-4xl font-bold mb-6">
            Affordable Hearing for Everyone
          </h2>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Spread the cost with{" "}
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

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-red-900 to-black text-center">

        <div className="max-w-3xl mx-auto">

          <Headphones className="w-16 h-16 text-red-500 mx-auto mb-8" />

          <h2 className="text-5xl font-bold mb-6">
            Ready to Hear Clearly?
          </h2>

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