import React from 'react';
import {
  Ear,
  Stethoscope,
  Star,
  Clock,
  ShieldCheck,
  MapPin,
  ChevronDown,
  CheckCircle2,
  Phone,
  Home,
  Car,
  Bus,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsWolverhampton() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* SEO */}
      <Helmet>
        <title>
          Ear Wax Removal & Hearing Aids Wolverhampton | Microsuction & Hearing Tests
        </title>

        <meta
          name="description"
          content="Professional ear wax removal, microsuction, hearing tests, hearing aids, and home visit audiology services near Wolverhampton. Same day appointments available at Stourbridge Hearing Centre."
        />

        <meta
          name="keywords"
          content="
          Ear Wax Removal Wolverhampton,
          Microsuction Wolverhampton,
          Hearing Aids Wolverhampton,
          Hearing Tests Wolverhampton,
          Audiologist Wolverhampton,
          Blocked Ears Wolverhampton,
          Ear Cleaning Wolverhampton,
          Hearing Clinic Wolverhampton,
          Tinnitus Wolverhampton,
          Hearing Care Wolverhampton
        "
        />

        <link
          rel="canonical"
          href="https://www.stourbridgehearing.co.uk/hearing-aids-wolverhampton"
        />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-black text-center">

        <div className="max-w-6xl mx-auto">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-8">
            <CheckCircle2 className="w-5 h-5 text-red-300" />
            <span className="text-sm font-semibold">
              Trusted Audiology Services Near Wolverhampton
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-8">
            Ear Wax Removal, Hearing Tests & Hearing Aids in Wolverhampton
          </h1>

          <p className="text-xl text-red-50 max-w-4xl mx-auto leading-relaxed">
            Professional microsuction ear wax removal, free hearing tests,
            modern hearing aids, and personalised hearing care for patients
            travelling from Wolverhampton and surrounding areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-red-700 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Book Appointment
            </button>

            <a
              href="tel:01384476330"
              className="border-2 border-white text-white hover:bg-white hover:text-red-700 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Call 01384 476330
            </a>

          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">

        <div className="max-w-5xl mx-auto text-gray-300 text-lg leading-relaxed space-y-8">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-white mb-6">
              Professional Audiology Services Near Wolverhampton
            </h2>

            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Trusted hearing care, microsuction ear wax removal, hearing
              tests, and hearing aids for Wolverhampton patients.
            </p>

          </div>

          <p>
            At Stourbridge Hearing Centre, we provide professional ear wax
            removal, free hearing tests, hearing aids, and expert audiology
            services for patients travelling from Wolverhampton and surrounding
            areas.
          </p>

          <p>
            Our clinic supports patients experiencing blocked ears, hearing
            loss, tinnitus, ear discomfort, and communication difficulties
            using modern audiology equipment and personalised care.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">

            {[
              'Blocked ears',
              'Hearing loss',
              'Tinnitus',
              'Ear discomfort',
              'Communication difficulties',
              'Hearing aid support',
              'Same day appointments',
              'Professional hearing care',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-red-500" />
                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

          {/* Ear Wax Removal */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-red-500 transition-all duration-300">

            <div className="flex items-center gap-4 mb-8">

              <div className="bg-red-500/10 p-4 rounded-2xl">
                <Ear className="w-10 h-10 text-red-500" />
              </div>

              <h2 className="text-3xl font-bold">
                Ear Wax Removal Wolverhampton
              </h2>

            </div>

            <div className="space-y-5 text-gray-400 leading-relaxed">

              <p>
                We provide safe and effective microsuction ear wax removal for
                patients travelling from Wolverhampton.
              </p>

              <h3 className="text-xl font-semibold text-white">
                Symptoms of Impacted Ear Wax
              </h3>

              <ul className="space-y-3">

                {[
                  'Muffled hearing',
                  'Ear pain and discomfort',
                  'Tinnitus',
                  'Ear pressure',
                  'Dizziness',
                  'Difficulty wearing hearing aids',
                  'Temporary hearing loss',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}

              </ul>

              <p>
                Our microsuction treatment uses specialist equipment to gently
                remove excess ear wax safely and comfortably.
              </p>

            </div>

          </div>

          {/* Hearing Tests */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-red-500 transition-all duration-300">

            <div className="flex items-center gap-4 mb-8">

              <div className="bg-red-500/10 p-4 rounded-2xl">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>

              <h2 className="text-3xl font-bold">
                Hearing Tests & Hearing Aids Wolverhampton
              </h2>

            </div>

            <div className="space-y-5 text-gray-400 leading-relaxed">

              <p>
                We offer free hearing tests and modern hearing aid solutions
                tailored to your lifestyle and hearing needs.
              </p>

              <h3 className="text-xl font-semibold text-white">
                Hearing Aid Services Include
              </h3>

              <ul className="space-y-3">

                {[
                  'Digital hearing aid fitting',
                  'Invisible hearing aids',
                  'Rechargeable hearing aids',
                  'Bluetooth hearing aids',
                  'Aftercare and adjustments',
                  'Hearing aid servicing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* HOME VISITS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold mb-6">
              Home Visit Ear Wax Removal & Hearing Care in Wolverhampton
            </h2>

            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Professional audiology services in the comfort of your own home.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">

              <div className="flex items-center gap-4 mb-6">

                <div className="bg-red-500/10 p-4 rounded-2xl">
                  <Home className="w-10 h-10 text-red-500" />
                </div>

                <h3 className="text-2xl font-bold">
                  Home Visit Services
                </h3>

              </div>

              <div className="space-y-4 text-gray-400">

                {[
                  'Microsuction ear wax removal',
                  'Ear health checks',
                  'Hearing aid support',
                  'Hearing aid maintenance',
                  'Advice regarding hearing difficulties',
                  'Portable professional equipment',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>

            <div className="flex justify-center">
  <img
    src="wolverhampton-review.png"
    alt="Home visit ear wax removal review"
    className="rounded-3xl shadow-2xl object-contain"
  />
</div>

          </div>

        </div>

      </section>

      {/* MAP */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold mb-5">
              Directions & Parking Information
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Conveniently located for patients travelling from Wolverhampton,
              Bilston, Penn, Sedgley, Kingswinford, Dudley, and surrounding
              areas.
            </p>

          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">

            <div className="w-full h-[550px]">

              <iframe
                title="Stourbridge Hearing Centre Map"
                src="https://www.google.com/maps?q=Stourbridge%20Hearing%20Centre&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

            <div className="p-8 grid md:grid-cols-3 gap-6">

              <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-4">
                  <Car className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold text-white">
                    Parking Nearby
                  </h3>
                </div>

                <p className="text-gray-400">
                  Free 2-hour Tesco parking, 1-hour High Street parking,
                  and additional parking behind B&M close to the clinic.
                </p>

              </div>

              <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-4">
                  <Bus className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold text-white">
                    Public Transport
                  </h3>
                </div>

                <p className="text-gray-400">
                  Easily accessible from Wolverhampton Bus Station,
                  Bilston, Sedgley, Dudley, Kingswinford, and Stourbridge.
                </p>

              </div>

              <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">

                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-bold text-white">
                    Fast Access
                  </h3>
                </div>

                <p className="text-gray-400">
                  Around 25–35 minutes travel time from Wolverhampton
                  depending on traffic and route.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold mb-6">
              Why Patients from Wolverhampton Choose Us
            </h2>

            <p className="text-gray-400 text-lg">
              Trusted hearing care with friendly personalised support.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center">
              <ShieldCheck className="w-12 h-12 text-red-500 mx-auto mb-5" />
              <h3 className="text-xl font-bold mb-3">
                Professional Care
              </h3>
              <p className="text-gray-400">
                Safe microsuction and expert audiology support.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center">
              <Clock className="w-12 h-12 text-red-500 mx-auto mb-5" />
              <h3 className="text-xl font-bold mb-3">
                Same Day Appointments
              </h3>
              <p className="text-gray-400">
                Urgent appointments available depending on availability.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center">
              <Star className="w-12 h-12 text-red-500 mx-auto mb-5" />
              <h3 className="text-xl font-bold mb-3">
                Independent Advice
              </h3>
              <p className="text-gray-400">
                Personalised hearing aid recommendations and support.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center">
              <Phone className="w-12 h-12 text-red-500 mx-auto mb-5" />
              <h3 className="text-xl font-bold mb-3">
                Friendly Team
              </h3>
              <p className="text-gray-400">
                Experienced hearing care professionals ready to help.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            {[
              {
                q: 'How much does ear wax removal cost near Wolverhampton?',
                a: 'Please contact Stourbridge Hearing Centre directly for current pricing and appointment availability.',
              },
              {
                q: 'Is microsuction ear wax removal safe?',
                a: 'Yes. Microsuction is considered one of the safest and most effective methods of ear wax removal.',
              },
              {
                q: 'Do I need ear drops before microsuction?',
                a: 'Olive oil ear drops may help soften the wax before treatment. Our team can advise you before your appointment.',
              },
              {
                q: 'Do you provide hearing aids?',
                a: 'Yes. We provide modern digital hearing aids with personalised fitting and ongoing aftercare.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-black/50 border border-gray-800 rounded-2xl overflow-hidden"
              >

                <summary className="p-6 list-none flex justify-between items-center cursor-pointer text-lg font-semibold hover:text-red-500 transition-colors">

                  {faq.q}

                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />

                </summary>

                <div className="px-6 pb-6 text-gray-400">
                  {faq.a}
                </div>

              </details>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl font-black mb-6">
            Book Your Wolverhampton Appointment Today
          </h2>

          <p className="text-xl text-red-50 mb-10 leading-relaxed">
            Professional ear wax removal, hearing tests, hearing aids,
            and home visit audiology services near Wolverhampton.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-red-700 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Book Appointment
            </button>

            <a
              href="tel:01384476330"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-red-700 transition-all duration-300"
            >
              Call 01384 476330
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}