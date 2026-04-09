import React from 'react';
import { Ear, Stethoscope, Volume2, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



export default function HearingAidsRedditch() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
        <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Hearing Aids - Redditch</h1>
      <p>Professional hearing aids services in Redditch. Safe, precise, and effective.</p>
    </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-4">
          <p>
            We provide professional earwax removal in Redditch using safe and effective microsuction techniques.
          </p>
          <p>
            Blocked ears can cause discomfort, hearing loss, and irritation. Our clinic offers fast and reliable treatment.
          </p>
          <p>
            Patients travel from across Redditch for trusted ear care and expert service.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Microsuction */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Ear className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-bold text-red-500">
                Microsuction Ear Wax Removal
              </h2>
            </div>
            <p className="text-gray-300">
              Microsuction is the gold standard for earwax removal. It is safe, precise, and does not involve water, making it ideal for sensitive ears.
            </p>
          </div>

          {/* Hearing */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-bold text-red-500">
                Hearing Tests & Hearing Aids
              </h2>
            </div>
            <p className="text-gray-300">
              We offer free hearing tests in Redditch along with modern digital hearing aids and full aftercare services.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 flex items-start gap-3">
              <Star className="text-red-500 w-6 h-6 mt-1" />
              Experienced audiologist-led clinic
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 flex items-start gap-3">
              <Star className="text-red-500 w-6 h-6 mt-1" />
              Quick appointments available
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 flex items-start gap-3">
              <Star className="text-red-500 w-6 h-6 mt-1" />
              Independent, patient-focused care
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 flex items-start gap-3">
              <Star className="text-red-500 w-6 h-6 mt-1" />
              Trusted hearing services across Redditch
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            FAQs
          </h2>

          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white">Is microsuction safe?</h3>
              <p>Yes, it is one of the safest methods available.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Do I need ear drops before my appointment?</h3>
              <p>In some cases, we may recommend it.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">How long does treatment take?</h3>
              <p>Usually between 15–30 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Book Your Appointment Today
        </h2>
        <button
          onClick={() => navigate('/contact')}
          className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
        >
          Book Now
        </button>
      </section>

    </div>
  );
}