import React from 'react';
import {
  Ear,
  Stethoscope,
  Star,
  Clock,
  ShieldCheck,
  MapPin,
  ChevronDown,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsRedditch() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* SEO */}
      <Helmet>
        <title>
          Ear Wax Removal & Hearing Aids Redditch | Microsuction & Hearing Tests
        </title>

        <meta
          name="description"
          content="Professional ear wax removal, microsuction, hearing tests, and hearing aids in Redditch. Expert audiology care and urgent appointments available at Stourbridge Hearing Centre."
        />

        <meta
          name="keywords"
          content="
          Ear Wax Removal Redditch,
          Microsuction Redditch,
          Hearing Aids Redditch,
          Hearing Tests Redditch,
          Ear Cleaning Redditch,
          Audiologist Redditch,
          Blocked Ears Redditch,
          Hearing Clinic Redditch,
          Ear Syringing Redditch,
          Hearing Care Redditch,
          Earwax Removal Redditch,
          Private Hearing Test Redditch,
          Hearing Aid Centre Redditch,
          Tinnitus Assessment Redditch,
          Ear Wax Microsuction Redditch
        "
        />

        <link
          rel="canonical"
          href="https://www.stourbridgehearing.co.uk/hearing-aids-redditch"
        />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hearing Aids & Ear Wax Removal in Redditch
          </h1>

          {/* SUBTITLE */}
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Professional hearing assessments, hearing aids and safe microsuction
            ear wax removal for patients in Redditch and surrounding areas.
            Expert audiology care, precise technology and convenient appointments
            at Stourbridge Hearing Centre.
          </p>

          {/* BUTTON */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Book Your Appointment
            </button>
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-white mb-4">
              Visit Stourbridge Hearing Centre
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional hearing aid services, hearing tests and microsuction
              ear wax removal for patients travelling from Redditch and
              surrounding Worcestershire areas.
            </p>

          </div>

          {/* MAP CARD */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">

            {/* MAP */}
            <div className="relative w-full h-[550px]">

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

              {/* GET DIRECTIONS BUTTON */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Stourbridge+Hearing+Centre"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-2xl font-bold shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Directions
              </a>

            </div>

            {/* INFO SECTION */}
            <div className="p-8 grid md:grid-cols-3 gap-6">

              {/* LOCATION */}
              <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-red-500 mb-3">
                  Clinic Location
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Stourbridge Hearing Centre provides professional hearing care,
                  hearing aids, hearing tests and microsuction ear wax removal
                  services.
                </p>
              </div>

              {/* HOME VISITS */}
              <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-red-500 mb-3">
                  Home Visits Available
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Comfortable at-home appointments available for patients
                  unable to travel to the clinic.
                </p>
              </div>

              {/* FAST BOOKINGS */}
              <div className="bg-black/40 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-red-500 mb-3">
                  Fast Appointments
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Same-day and next-day bookings available depending on
                  availability.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">

          <p>
            Stourbridge Hearing Centre provides professional ear wax removal
            in Redditch using safe and effective microsuction techniques.
            Our clinical ear care service provides an alternative to traditional
            ear syringing and can help patients experiencing blocked ears,
            reduced hearing and ear discomfort.
          </p>

          <p>
            Our independent clinic is led by experienced audiologists dedicated
            to patient-focused care. From comprehensive diagnostic hearing
            tests to the fitting of discreet, modern hearing aids, we offer a
            full range of hearing and ear care services to patients from
            Redditch and surrounding areas.
          </p>

          <div className="flex items-center gap-2 text-red-500 font-semibold pt-4">
            <MapPin className="w-5 h-5" />
            <span>
              Serving Redditch, Bromsgrove, Studley, and Alvechurch.
            </span>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Microsuction */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group shadow-lg">

            <div className="flex items-center gap-4 mb-6">

              <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                <Ear className="w-10 h-10 text-red-500" />
              </div>

              <h2 className="text-2xl font-bold text-white italic">
                Microsuction Ear Wax Removal Redditch
              </h2>

            </div>

            <p className="text-gray-400 leading-relaxed">
              Microsuction is a precise method for clearing earwax blockages.
              Unlike syringing, it uses no water, making it suitable for many
              patients who require professional ear wax removal and clinical
              ear care.
            </p>

          </div>

          {/* Hearing Aids */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group shadow-lg">

            <div className="flex items-center gap-4 mb-6">

              <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>

              <h2 className="text-2xl font-bold text-white italic">
                Hearing Tests & Hearing Aids Redditch
              </h2>

            </div>

            <p className="text-gray-400 leading-relaxed">
              We offer hearing assessments and fit modern rechargeable,
              Bluetooth-enabled hearing aids from leading hearing aid brands,
              helping patients find a hearing solution suited to their needs.
            </p>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-center">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold mb-16">
            Why Choose Our Redditch Hearing Service
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-red-500 mb-4" />

              <h3 className="font-bold mb-2">
                Audiologist Led
              </h3>

              <p className="text-gray-400 text-sm">
                Expert clinical care from qualified professionals.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-red-500 mb-4" />

              <h3 className="font-bold mb-2">
                Quick Access
              </h3>

              <p className="text-gray-400 text-sm">
                Urgent appointments often available within 24-48 hours.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-red-500 mb-4" />

              <h3 className="font-bold mb-2">
                Independent
              </h3>

              <p className="text-gray-400 text-sm">
                Unbiased advice across all major hearing aid brands.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-red-500 mb-4" />

              <h3 className="font-bold mb-2">
                Local Service
              </h3>

              <p className="text-gray-400 text-sm">
                Proudly serving Redditch and surrounding Worcestershire
                communities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12 italic">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden shadow-sm">

              <summary className="p-6 text-lg font-semibold cursor-pointer list-none flex justify-between items-center group-hover:text-red-500 transition-colors">

                How much does ear wax removal cost?

                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />

              </summary>

              <div className="px-6 pb-6 text-gray-400">
                Our microsuction service is competitively priced. Please
                contact us for the latest rates and current availability
                in Redditch.
              </div>

            </details>

            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden shadow-sm">

              <summary className="p-6 text-lg font-semibold cursor-pointer list-none flex justify-between items-center group-hover:text-red-500 transition-colors">

                Is the hearing test really free?

                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />

              </summary>

              <div className="px-6 pb-6 text-gray-400">
                Yes, we provide a full diagnostic hearing assessment free of
                charge with no obligation to purchase a hearing aid.
              </div>

            </details>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold mb-6 italic">
            Book Your Redditch Hearing Appointment
          </h2>

          <p className="text-xl mb-10 opacity-90">
            Professional ear wax removal, hearing tests and hearing aids from
            Stourbridge Hearing Centre.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-red-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Book My Appointment
            </button>

            <a
              href="tel:01384476306"
              className="bg-black text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
            >
              Call 01384 476 306
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}