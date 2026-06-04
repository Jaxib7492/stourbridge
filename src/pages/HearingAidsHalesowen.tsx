import React from 'react';
import { Ear, Stethoscope, Star, Clock, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsHalesowen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aids & Ear Wax Removal Halesowen | Expert Audiologist</title>
        <meta name="description" content="Expert hearing aids and microsuction ear wax removal services in Halesowen. Professional ear care, free hearing tests, and quick appointments available." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-halesowen" />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hearing Aids & Earwax Removal in Halesowen | Free Hearing Checks & Same-Day Appointments
          </h1>

          {/* SUBTITLE */}
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Professional Hearing Care for Halesowen Residents. Providing expert hearing assessments and safe microsuction ear wax removal for the Halesowen community.
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

      {/* NEW OVERVIEW SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-b border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            If you're looking for hearing aids, earwax removal, tinnitus support, or a free hearing check in Halesowen, Stourbridge Hearing Centre is your trusted local hearing clinic. Our qualified Audiologist provides professional hearing care with same-day appointments available, helping patients across Halesowen and the surrounding areas hear better and feel more confident.
          </p>
          <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 px-6 py-3 rounded-full text-red-400 font-semibold">
            <Star className="w-5 h-5 text-red-500 fill-current" />
            <span>With 100+ five-star Google reviews and a strong reputation for patient care, we are proud to offer personalised hearing solutions tailored to your needs.</span>
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
              Professional hearing aid services and microsuction ear wax removal
              with expert care and advanced technology.
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
                  hearing aids, and microsuction ear wax removal services.
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
                  Same-day and next-day bookings available depending on availability.
                </p>
              </div>

            </div>

          </div>

          {/* NEW DIRECTIONS & PARKING INFO INTEGRATION */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Easy Directions from Halesowen</h3>
              <p className="text-gray-400 mb-4 font-semibold">Stourbridge Hearing Centre is conveniently located just a short drive from Halesowen.</p>
              <h4 className="text-red-500 font-semibold mb-2">By Car (From Halesowen town centre):</h4>
              <ol className="list-decimal list-inside text-gray-300 space-y-1 ml-2">
                <li>Follow the A458 towards Stourbridge.</li>
                <li>Continue along Hagley Road and Stourbridge Road.</li>
                <li>Follow signs for Stourbridge town centre.</li>
                <li>The clinic is easily accessible and conveniently located near local parking facilities.</li>
              </ol>
              <p className="text-gray-400 mt-4 italic text-sm">Typical journey time is approximately 10–15 minutes, depending on traffic.</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Parking Information</h3>
              <p className="text-gray-400 mb-4">We offer several convenient parking options nearby to make visiting us quick and stress-free:</p>
              <h4 className="text-red-500 font-semibold mb-2">Free Parking Available:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                <li>Tesco Extra – Up to 2 hours free parking</li>
                <li>High Street parking – Up to 1 hour free parking</li>
                <li>Parking directly in front of the clinic</li>
                <li>Additional parking available at the rear near B&amp;M</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">
          <p>
            We provide professional **earwax removal in Halesowen** using the highly-regarded microsuction technique. 
            This method is widely considered the safest way to clear blockages without the mess or discomfort of traditional water syringing.
          </p>
          <p>
            Blocked ears can lead to a sense of isolation and physical discomfort. Our local clinic offers a fast, clinical 
            alternative to long waiting lists, ensuring you receive expert care when you need it most.
          </p>
          <div className="flex items-center gap-2 text-red-500 font-semibold pt-4">
            <MapPin className="w-5 h-5" />
            <span>Serving Halesowen, Quinton, Cradley, and Romsley.</span>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SECTIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Hearing Services for Halesowen</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Microsuction & Earwax Removal */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <Ear className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Earwax Removal</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Blocked ears can affect your hearing, balance, and comfort. We provide safe and effective earwax removal using professional techniques (including microsuction) to quickly restore your hearing.
              </p>
              <h4 className="text-red-500 font-semibold mb-2">Benefits of professional earwax removal:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                <li>Immediate relief from blocked ears</li>
                <li>Improved hearing clarity</li>
                <li>Reduced ear discomfort</li>
                <li>Safe treatment by a qualified Audiologist</li>
                <li>Same-day appointments available</li>
              </ul>
            </div>

            {/* Hearing Aids */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <Stethoscope className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Hearing Aids</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                We offer expert advice, hearing assessments, hearing aid fittings, and ongoing support. Whether you're experiencing mild hearing loss or require advanced hearing technology, we can help you find the right solution.
              </p>
              <h4 className="text-red-500 font-semibold mb-2">Our hearing aid services include:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                <li>Comprehensive hearing assessments</li>
                <li>Latest digital hearing aids</li>
                <li>Hearing aid adjustments and repairs</li>
                <li>Ongoing aftercare and support</li>
              </ul>
            </div>

            {/* Free Hearing Checks */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <ShieldCheck className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Free Hearing Checks</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                If you have noticed changes in your hearing, our free hearing check can help identify any concerns early. A hearing assessment can determine whether further investigation or hearing aids may be beneficial.
              </p>
            </div>

            {/* Tinnitus Support */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <Clock className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Tinnitus Support</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Do you experience ringing, buzzing, or humming sounds in your ears? Our Audiologist provides professional tinnitus assessments and management advice to help you better understand and manage your symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 font-display">Why Choose Stourbridge Hearing Centre?</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Trusted Halesowen Audiology delivering premium independent care.</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
            <div className="flex gap-4 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <ShieldCheck className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Qualified Audiologist</h3>
                <p className="text-sm">Registered professionals with extensive experience in ear health.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <Clock className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Same-Day Appointments</h3>
                <p className="text-sm">Quick turnarounds for wax removal when you need urgent relief.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <Star className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Free Hearing Checks</h3>
                <p className="text-sm">Complimentary preliminary checks to ensure your ear health is tracked.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <Ear className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Professional Earwax Removal</h3>
                <p className="text-sm">Safe clinical clearing procedures using top tier equipment.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <Stethoscope className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Leading Manufacturers</h3>
                <p className="text-sm">From invisible aids to AI-powered tech from leading premium brands.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <ShieldCheck className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Tinnitus Support</h3>
                <p className="text-sm">Expert clinical assessments and practical management strategies.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <MapPin className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Home Visit Service</h3>
                <p className="text-sm">Convenient at-home clinical solutions brought straight to your door.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <Star className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">100+ 5-Star Reviews</h3>
                <p className="text-sm">Independent patient care proven by exceptional patient ratings.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <ShieldCheck className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Friendly, Personalised Care</h3>
                <p className="text-sm">Unbiased solutions configured uniquely around your individual health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW HOME VISIT HEARING SERVICES SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-3xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-white mb-4 text-center sm:text-left">Home Visit Hearing Services</h2>
          <p className="text-gray-400 mb-8 text-center sm:text-left">
            For patients who are unable to travel, we also offer a convenient home visit service throughout Halesowen and the surrounding areas.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-500 mb-3">Our home visits are ideal for:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Elderly patients</li>
                <li>Care home residents</li>
                <li>Patients with mobility difficulties</li>
                <li>Individuals who prefer treatment in the comfort of their own home</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-500 mb-3">Services available during home visits:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Earwax removal</li>
                <li>Hearing assessments</li>
                <li>Hearing aid support</li>
                <li>Hearing aid servicing and maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PATIENT REVIEWS & IMAGE SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">What Our Patients Say</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Our patients consistently rate us highly for our professional service, friendly approach, and excellent results.
          </p>
          
          {/* Integrated Review Image */}
          <div className="my-8 flex justify-center">
            <img 
              src="Halesowen.png" 
              alt="Halesowen Patient Reviews and Ratings" 
              className="max-w-full h-auto rounded-2xl shadow-xl border border-gray-800 md:max-w-xl"
            />
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto">
            With 100+ positive Google reviews, we are proud to have earned the trust of patients across Halesowen, Stourbridge, Dudley, and the surrounding areas. Patient satisfaction is at the heart of everything we do.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Halesowen Service FAQs</h2>
          <div className="space-y-4">
            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                Is microsuction safe for everyone?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Yes, microsuction is suitable for almost everyone, including people with perforated eardrums or narrow ear canals where other methods (like irrigation) might be risky.
              </div>
            </details>

            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                Do you offer home visits in Halesowen?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Absolutely. If you have mobility issues or simply prefer the comfort of your home, we provide a full home-visit service across the Halesowen area.
              </div>
            </details>

            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                How much does ear wax removal cost?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Our pricing is competitive and transparent. Please contact us for the latest rates for single or both ear treatments.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Book Your Hearing Appointment Today</h2>
          <p className="text-xl mb-2 opacity-90 text-red-50">Whether you need earwax removal in Halesowen, a free hearing check, hearing aids, tinnitus support, or a home visit appointment, our qualified Audiologist is here to help.</p>
          <p className="text-lg font-bold mb-10 text-white uppercase tracking-wider">Same-Day Appointments Available</p>
          <p className="text-sm mb-6 opacity-75 text-red-100 max-w-xl mx-auto">Contact Stourbridge Hearing Centre today and take the first step towards better hearing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-white text-red-700 px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Book Now
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-700 transition-all"
            >
              Call Clinic
            </button>
          </div>
        </div>
      </section>

      {/* KEYWORD FOOTER TRACKING (SEO Hidden/Subtle context container) */}
      <footer className="bg-black py-8 border-t border-gray-900 text-center">
        <p className="text-xs text-gray-600 max-w-4xl mx-auto px-4">
          Keywords: Earwax Removal Halesowen, Hearing Aids Halesowen, Free Hearing Check Halesowen, Tinnitus Treatment Halesowen, Audiologist Halesowen, Same Day Earwax Removal, Hearing Test Halesowen, Home Visit Audiologist Halesowen, Hearing Clinic Near Halesowen, Ear Care Services Halesowen.
        </p>
      </footer>
    </div>
  );
}