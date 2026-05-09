import React from 'react';
import { Ear, Stethoscope, Star, Clock, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsDudley() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aids & Audiologist Dudley | Stourbridge Hearing Centre</title>
        <meta name="description" content="Expert hearing aids and earwax removal services for patients in Dudley. Book your professional hearing test and microsuction appointment today." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-dudley" />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hearing Aids & Hearing Care in Dudley
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Professional hearing services for Dudley residents. Safe, precise, and effective treatments from your local independent experts.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="mt-10 bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 shadow-2xl"
          >
            Book Your Dudley Appointment
          </button>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">
          <p>
            Stourbridge Hearing Centre provides professional **earwax removal and hearing care for the Dudley community** using safe microsuction techniques. 
            We are dedicated to offering a clinical, patient-first alternative to high-street chains.
          </p>
          <p>
            If you are experiencing hearing loss, tinnitus, or blocked ears in Dudley, our local clinic offers fast, 
            reliable treatment from expert audiologists using the latest diagnostic equipment.
          </p>
          <div className="flex items-center gap-2 text-red-500 font-semibold pt-4">
            <MapPin className="w-5 h-5" />
            <span>Serving Dudley, Sedgley, Tipton, and Gornal.</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Microsuction */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                <Ear className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Microsuction Wax Removal Dudley</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Microsuction is the gold standard for earwax removal. Ideally located for Dudley patients, 
              it is safe, precise, and involves no water, making it perfect for sensitive ears.
            </p>
          </div>

          {/* Hearing Aids */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                <Stethoscope className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Hearing Tests & Aids Dudley</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We offer comprehensive hearing assessments near Dudley along with the latest digital hearing aid 
              technology from brands like Oticon and Phonak, plus lifetime aftercare.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Stourbridge Hearing</h2>
          
          <div className="grid sm:grid-cols-2 gap-10 text-gray-300">
            <div className="flex gap-4">
              <ShieldCheck className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Independent Clinic</h3>
                <p>We provide unbiased advice, recommending the best hearing aids from the world's leading manufacturers.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Appointments</h3>
                <p>Avoid long wait times. We offer quick turnarounds for both hearing tests and urgent wax removal.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Aftercare</h3>
                <p>Our commitment doesn't end with a sale. We provide ongoing support to ensure your hearing stays clear.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Dudley Home Visits</h3>
                <p>Unable to get to our clinic? We offer professional home visit services across the Dudley area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Dudley Patient FAQs</h2>
          <div className="space-y-4">
            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                How do I know if I need earwax removal?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Symptoms include muffled hearing, a feeling of fullness in the ear, earache, or sudden tinnitus. Our team can perform a video otoscopy to show you the condition of your ear canal.
              </div>
            </details>

            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                Is a hearing test free?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Yes, we offer comprehensive initial hearing assessments for Dudley residents looking to improve their hearing with modern technology.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Reconnect with Dudley</h2>
          <p className="text-xl mb-10 opacity-90 text-red-50">Expert ear care and hearing aids are just a call away. Book your local appointment now.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-white text-red-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Book Your Appointment
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-700 transition-all"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}