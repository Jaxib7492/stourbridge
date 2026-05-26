import React from 'react';
import {
  Ear,
  Stethoscope,
  Star,
  Clock,
  ShieldCheck,
  MapPin,
  ChevronDown,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsDudley() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* SEO */}
      <Helmet>
        <title>
          Ear Wax Removal & Hearing Aids Dudley | Microsuction & Hearing Tests
        </title>

        <meta
          name="description"
          content="Professional ear wax removal, microsuction, hearing tests, and hearing aids in Dudley. Same day appointments available at Stourbridge Hearing Centre."
        />

        <meta
          name="keywords"
          content="
          Ear Wax Removal Dudley,
          Microsuction Dudley,
          Hearing Aids Dudley,
          Hearing Tests Dudley,
          Ear Cleaning Dudley,
          Audiologist Dudley,
          Blocked Ears Dudley,
          Hearing Clinic Dudley,
          Ear Syringing Dudley,
          Hearing Care Dudley
        "
        />

        <link
          rel="canonical"
          href="https://www.stourbridgehearing.co.uk/hearing-aids-dudley"
        />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-black text-center">

        <div className="max-w-6xl mx-auto">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-8">
            <CheckCircle2 className="w-5 h-5 text-red-300" />
            <span className="text-sm font-semibold">
              Trusted By 100+ Local Patients
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-8">
            Ear Wax Removal & Hearing Aids in Dudley
          </h1>

          <p className="text-xl text-red-50 max-w-4xl mx-auto leading-relaxed">
            Safe microsuction ear wax removal, professional hearing tests,
            modern hearing aids, and personalised audiology care for patients
            across Dudley and surrounding areas.
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
              Safe Microsuction Ear Wax Removal in Dudley
            </h2>

            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Professional ear wax removal and hearing care services for Dudley
              patients using modern microsuction technology.
            </p>
          </div>

          <p>
            We provide professional ear wax removal near Dudley using
            microsuction, one of the safest and most effective methods of
            removing excess ear wax.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">

            {[
              'Reduced hearing',
              'Ear discomfort',
              'Tinnitus',
              'Dizziness',
              'Earache',
              'Pressure in the ears',
              'Hearing aid issues',
              'Blocked ears',
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

          <p>
            Our microsuction treatment uses specialist equipment to gently
            remove ear wax without the need for water irrigation.
          </p>

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
                Ear Wax Removal Dudley
              </h2>
            </div>

            <div className="space-y-5 text-gray-400 leading-relaxed">

              <p>
                Our quick look ear check service allows our audiology team to
                examine your ears and advise whether ear wax removal or further
                hearing assessment may be required.
              </p>

              <h3 className="text-xl font-semibold text-white">
                Why Choose Microsuction?
              </h3>

              <ul className="space-y-3">
                {[
                  'Safe and gentle procedure',
                  'Suitable for sensitive ears',
                  'Quick treatment appointments',
                  'No messy water syringing',
                  'Recommended by healthcare professionals',
                  'Immediate hearing improvement for many patients',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

          {/* Hearing Aids */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-red-500 transition-all duration-300">

            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-500/10 p-4 rounded-2xl">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>

              <h2 className="text-3xl font-bold">
                Hearing Tests & Hearing Aids Dudley
              </h2>
            </div>

            <div className="space-y-5 text-gray-400 leading-relaxed">

              <p>
                We provide professional hearing tests for adults experiencing
                hearing difficulties, tinnitus, or hearing changes.
              </p>

              <h3 className="text-xl font-semibold text-white">
                Modern Hearing Aid Solutions
              </h3>

              <ul className="space-y-3">
                {[
                  'Invisible hearing aids',
                  'Rechargeable hearing aids',
                  'Bluetooth hearing aids',
                  'Discreet in-ear devices',
                  'Custom hearing solutions',
                  'Free hearing aid demonstrations',
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

      {/* GOOGLE REVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Trusted Local Reputation
            </h2>

            <p className="text-gray-400 text-lg">
              Over 100 positive Google reviews from happy patients across
              Dudley and surrounding areas.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">

            <img
              src="dudley-review.png"
              alt="Google review from Dudley patient"
              className="w-full h-auto object-cover"
            />

          </div>

        </div>
      </section>

      {/* SAME DAY APPOINTMENTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">

        <div className="max-w-5xl mx-auto">

          <div className="bg-red-600 rounded-3xl p-10 shadow-2xl">

            <h2 className="text-4xl font-bold mb-6 text-center">
              Same Day Emergency Ear Wax Removal Appointments
            </h2>

            <div className="space-y-6 text-red-50 text-lg leading-relaxed">

              <p>
                We understand that blocked ears and sudden hearing loss can be
                extremely uncomfortable and distressing.
              </p>

              <p>
                Recently, a patient travelled from Dudley after experiencing
                severe blockage in both ears caused by impacted ear wax.
              </p>

              <p>
                Our team arranged a same day emergency appointment to assess
                and safely remove the ear wax using microsuction treatment.
              </p>

              <p>
                Following treatment, the patient experienced immediate relief
                and significant improvement in hearing clarity and comfort.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold mb-5">
              Visit Stourbridge Hearing Centre
            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Conveniently located for patients travelling from Dudley,
              Brierley Hill, Halesowen, Kingswinford, Sedgley, Tipton,
              and surrounding areas.
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
                <h3 className="text-xl font-bold text-red-500 mb-4">
                  Nearby Parking
                </h3>

                <p className="text-gray-400">
                  Tesco Extra parking with 1 hour free parking available plus
                  additional parking spaces behind B&M.
                </p>
              </div>

              <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-red-500 mb-4">
                  Local Access
                </h3>

                <p className="text-gray-400">
                  Easily accessible from Dudley town centre with nearby bus
                  routes and convenient transport links.
                </p>
              </div>

              <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-red-500 mb-4">
                  Fast Appointments
                </h3>

                <p className="text-gray-400">
                  Same day and urgent appointments available depending on
                  availability.
                </p>
              </div>

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
                q: 'How much does ear wax removal cost?',
                a: 'Please contact Stourbridge Hearing Centre directly for current pricing and appointment availability.',
              },
              {
                q: 'Is microsuction safe?',
                a: 'Yes. Microsuction is regarded as one of the safest methods of ear wax removal when performed by a trained professional.',
              },
              {
                q: 'How long does an appointment take?',
                a: 'Most ear wax removal appointments take approximately 20–30 minutes.',
              },
              {
                q: 'What hearing aids do you provide?',
                a: 'We provide invisible, rechargeable, Bluetooth-enabled, and custom digital hearing aids.',
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
            Book Your Dudley Appointment Today
          </h2>

          <p className="text-xl text-red-50 mb-10 leading-relaxed">
            Professional ear wax removal, hearing tests, and hearing aids with
            friendly expert care from Stourbridge Hearing Centre.
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