import React from 'react';
import { Ear, Stethoscope, Star, Clock, ShieldCheck, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingAidsKidderminster() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aids & Ear Wax Removal Kidderminster | Expert Audiology</title>
        <meta name="description" content="Professional hearing aids and clinical microsuction ear wax removal in Kidderminster. Independent care, free hearing tests, and local home visits available." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/hearing-aids-kidderminster" />
      </Helmet>

      {/* HERO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-center">
        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hearing Aids, Earwax Removal & Free Hearing Checks for Kidderminster Patients
          </h1>

          {/* SUBTITLE */}
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Trusted Audiologist Serving Kidderminster with Same-Day Appointments. Providing expert hearing assessments and safe microsuction ear wax removal for the Kidderminster community.
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

      {/* OVERVIEW SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-b border-gray-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            Looking for professional earwax removal in Kidderminster, expert hearing aids, a free hearing check, or support for tinnitus? Stourbridge Hearing Centre provides specialist hearing care for patients throughout Kidderminster and the surrounding Worcestershire area.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our qualified Audiologist delivers personalised hearing solutions, helping patients improve their hearing health with expert assessments, earwax removal, hearing aid fittings, tinnitus management, and ongoing hearing care.
          </p>
          <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 px-6 py-3 rounded-full text-red-400 font-semibold">
            <Star className="w-5 h-5 text-red-500 fill-current" />
            <span>With 100+ Google reviews and outstanding patient satisfaction, many Kidderminster residents choose Stourbridge Hearing Centre for fast access to professional hearing care and same-day appointments.</span>
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

          {/* DIRECTIONS & PARKING INTEGRATION */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Directions from Kidderminster</h3>
              <p className="text-gray-400 mb-4 font-semibold">Stourbridge Hearing Centre is conveniently located for patients travelling from Kidderminster.</p>
              <h4 className="text-red-500 font-semibold mb-2">By Car:</h4>
              <ol className="list-decimal list-inside text-gray-300 space-y-1 ml-2">
                <li>Leave Kidderminster via the A451 towards Stourbridge.</li>
                <li>Continue through Wolverley and Kingswinford towards Stourbridge.</li>
                <li>Follow signs for Stourbridge town centre.</li>
                <li>The clinic is easily accessible and located close to several convenient parking facilities.</li>
              </ol>
              <p className="text-gray-400 mt-4 italic text-sm">The journey typically takes around 20–25 minutes, depending on traffic. Many patients choose to travel from Kidderminster because they value our specialist audiology services, same-day availability, and highly rated patient care.</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Convenient Free Parking</h3>
              <p className="text-gray-400 mb-4">Visiting the clinic is easy thanks to several nearby parking options:</p>
              <h4 className="text-red-500 font-semibold mb-2">Free Parking Available:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                <li>Tesco Extra – Up to 2 hours free parking</li>
                <li>High Street parking – Up to 1 hour free parking</li>
                <li>Parking directly outside the clinic</li>
                <li>Additional parking available at the rear near B&amp;M</li>
              </ul>
              <p className="text-gray-400 mt-4 text-sm">These options make attending appointments convenient and stress-free.</p>
            </div>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-6">
          <p>
            We provide professional **earwax removal in Kidderminster** using the latest microsuction technology. 
            As an independent clinic, we pride ourselves on offering a more personal, clinical experience than high-street retailers.
          </p>
          <p>
            Blocked ears can cause significant distress, from physical discomfort to social withdrawal. 
            Our audiologist-led team offers fast, reliable treatment to restore your hearing and comfort.
          </p>
          <div className="flex items-center gap-2 text-red-500 font-semibold pt-4">
            <MapPin className="w-5 h-5" />
            <span>Serving Kidderminster, Bewdley, Stourport-on-Severn, and Cookley.</span>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES SECTIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Hearing Services for Kidderminster</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Professional Earwax Removal */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <Ear className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Earwax Removal Near Kidderminster</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Blocked ears can cause hearing difficulties, discomfort, tinnitus symptoms, dizziness, and a feeling of pressure in the ears. We provide safe and effective earwax removal performed by an experienced Audiologist using modern techniques designed to restore hearing quickly and comfortably.
              </p>
              <h4 className="text-red-500 font-semibold mb-2">Why Choose Professional Earwax Removal?</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2 mb-4">
                <li>Same-day appointments available</li>
                <li>Safe and gentle treatment</li>
                <li>Immediate improvement in hearing for many patients</li>
                <li>Suitable for hearing aid users</li>
                <li>Treatment provided by a qualified Audiologist</li>
                <li>Professional assessment of your ear health</li>
              </ul>
              <p className="text-sm italic text-gray-400">Many patients travel from Kidderminster specifically to avoid long waiting times and receive prompt professional care.</p>
            </div>

            {/* Hearing Aids */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <Stethoscope className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Hearing Aids for Kidderminster Patients</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                If you're struggling to hear conversations, increasing the television volume, asking people to repeat themselves, or finding noisy environments difficult, a professional hearing assessment can help identify the cause.
              </p>
              <h4 className="text-red-500 font-semibold mb-2">We offer:</h4>
              <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm ml-2">
                <ul className="list-disc list-inside space-y-1">
                  <li>Comprehensive assessments</li>
                  <li>Free hearing checks</li>
                  <li>Latest digital hearing aids</li>
                  <li>Fittings and programming</li>
                </ul>
                <ul className="list-disc list-inside space-y-1">
                  <li>Servicing and repairs</li>
                  <li>Ongoing aftercare & support</li>
                  <li>Rechargeable & Bluetooth aids</li>
                  <li>Custom hearing solutions</li>
                </ul>
              </div>
              <p className="text-sm mt-4 text-gray-400">Our Audiologist takes the time to understand your lifestyle and hearing needs to recommend the most suitable hearing solution.</p>
            </div>
          </div>

          {/* MANUFACTURERS FEATURE */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 sm:p-12 mb-12">
            <h3 className="text-3xl font-bold text-white text-center mb-4">Hearing Aids from Leading Manufacturers</h3>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
              At Stourbridge Hearing Centre, we are proud to offer hearing aids from some of the world's most trusted and respected manufacturers. As an independent hearing clinic, we are not tied to any one brand. This allows us to provide completely impartial advice and recommend the hearing aid that best suits your hearing loss, lifestyle, and budget.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-red-500 mb-2">Starkey Hearing Aids</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Starkey hearing aids feature innovative technology, rechargeable options, artificial intelligence features, fall detection, health tracking, and excellent speech clarity. Ideal for advanced tracking and premium performance.</p>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-red-500 mb-2">Phonak Hearing Aids</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Phonak hearing aids are renowned for exceptional speech understanding, Bluetooth connectivity, rechargeable technology, and solutions for mild to profound hearing loss across the globe.</p>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-red-500 mb-2">Oticon Hearing Aids</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Oticon hearing aids utilise advanced BrainHearing™ technology, designed to help the brain process sounds naturally and improve speech understanding, particularly in busy environments.</p>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-red-500 mb-2">Widex Hearing Aids</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Widex hearing aids are recognised for delivering exceptionally natural sound quality and excellent tinnitus management features, providing advanced therapeutic options.</p>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-red-500 mb-2">Bernafon Hearing Aids</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Bernafon hearing aids provide outstanding speech clarity, comfortable listening, and reliable performance. Their modern rechargeable configurations make them an ideal day-to-day choice.</p>
              </div>
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6 flex items-center justify-center text-center">
                <p className="text-gray-300 font-semibold text-sm px-2">Whether you look for discreet models, rechargeable systems, Bluetooth links, or specific tinnitus relief, we help you secure the ideal answer.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Hearing Checks */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <ShieldCheck className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Free Hearing Checks in Kidderminster</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Hearing loss often develops gradually, making it difficult to notice at first. Our free hearing check is an excellent way to assess your hearing and identify any changes before they begin to affect your daily life.
              </p>
              <h4 className="text-red-500 font-semibold mb-2">A hearing check can help determine whether:</h4>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2">
                <li>Earwax is affecting your hearing</li>
                <li>Further testing is required</li>
                <li>Hearing aids may be beneficial</li>
                <li>Additional hearing support is needed</li>
                <li>Tinnitus symptoms require further assessment</li>
              </ul>
              <p className="text-sm mt-4 text-gray-400 font-semibold">Early intervention can significantly improve hearing outcomes and quality of life.</p>
            </div>

            {/* Tinnitus Assessment & Management */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <Clock className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Tinnitus Assessment & Management</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Do you hear ringing, buzzing, humming, clicking, or whistling sounds in your ears? Tinnitus affects millions of people and can have a significant impact on sleep, concentration, and wellbeing.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our Audiologist provides professional tinnitus assessments, hearing evaluations, and practical management advice to help patients better understand and manage their symptoms.
              </p>
              <p className="text-gray-300 font-medium text-sm">
                We also offer specialized hearing aid configurations that may help reduce the impact of tinnitus for suitable patients.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Why Kidderminster Patients Choose Stourbridge Hearing Centre</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Trusted Local Audiology delivering premium independent care across Worcestershire.</p>
          
          <div className="grid sm:grid-cols-2 gap-10 text-gray-300">
            <div className="flex gap-4">
              <ShieldCheck className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Qualified Audiologist</h3>
                <p>All assessments, hearing aid consultations, and earwax removal appointments are carried out by an experienced Audiologist.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Same-Day Appointments Available</h3>
                <p>Need urgent earwax removal or hearing advice? We frequently offer same-day appointments for patients travelling from Kidderminster.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <ShieldCheck className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Independent Hearing Care</h3>
                <p>Unlike manufacturer-owned providers, we can recommend hearing aids from multiple leading brands to find the best solution for you.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Outstanding Reputation</h3>
                <p>With more than 100 positive Google reviews, we have built a reputation for professionalism, honesty, and excellent patient outcomes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Ear className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Personalised Service</h3>
                <p>We take the time to understand your hearing concerns and provide tailored recommendations rather than a one-size-fits-all approach.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-10 h-10 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Home Visit Service</h3>
                <p>For patients with limited mobility, we offer a comprehensive home visit service across Wyre Forest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOME VISIT HEARING SERVICES SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-3xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-white mb-4 text-center sm:text-left">Home Visit Hearing Services in Kidderminster</h2>
          <p className="text-gray-400 mb-8 text-center sm:text-left">
            For patients who cannot attend the clinic, we offer convenient home visit audiology services throughout Kidderminster and surrounding areas.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-500 mb-3">Our home visits are ideal for:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                <li>Elderly patients</li>
                <li>Care home residents</li>
                <li>Patients with mobility difficulties</li>
                <li>Individuals recovering from illness</li>
                <li>Anyone who prefers treatment in the comfort of their own home</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-500 mb-3">Services available during home visits:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                <li>Earwax removal</li>
                <li>Hearing assessments</li>
                <li>Free hearing checks</li>
                <li>Hearing aid fittings</li>
                <li>Hearing aid servicing and maintenance</li>
                <li>Tinnitus advice and support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PATIENT REVIEWS & IMAGE SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by Patients Across Worcestershire</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Our commitment to exceptional patient care has earned us more than 100 five-star Google reviews from patients across Kidderminster, Stourbridge, Bromsgrove, Dudley, Halesowen, and the wider Worcestershire area.
          </p>

          {/* Integrated Review Image */}
          <div className="my-8 flex justify-center">
            <img 
              src="Kidderminster.png" 
              alt="Kidderminster Patient Reviews and Ratings" 
              className="max-w-full h-auto rounded-2xl shadow-xl border border-gray-800 md:max-w-xl"
            />
          </div>

          <h4 className="text-red-500 font-semibold mb-3">Patients regularly recommend us for:</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-300 text-sm max-w-2xl mx-auto mb-6">
            <div className="bg-gray-900/50 p-2 border border-gray-800 rounded">Earwax removal</div>
            <div className="bg-gray-900/50 p-2 border border-gray-800 rounded">Hearing aids</div>
            <div className="bg-gray-900/50 p-2 border border-gray-800 rounded">Free hearing checks</div>
            <div className="bg-gray-900/50 p-2 border border-gray-800 rounded">Tinnitus support</div>
            <div className="bg-gray-900/50 p-2 border border-gray-800 rounded">Friendly service</div>
            <div className="bg-gray-900/50 p-2 border border-gray-800 rounded">Professional care</div>
            <div className="bg-gray-900/50 p-2 border border-gray-800 rounded">Honest advice</div>
            <div className="bg-gray-900/50 p-2 border border-gray-800 rounded">Excellent aftercare</div>
          </div>
          <p className="text-gray-400 max-w-xl mx-auto italic text-sm">
            Patient satisfaction remains at the heart of everything we do.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Kidderminster Patient FAQs</h2>
          <div className="space-y-4">
            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                How often should I have my hearing tested?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                We recommend a hearing check every two years if you are over 50, or annually if you already wear hearing aids.
              </div>
            </details>

            <details className="group bg-black/50 border border-gray-800 rounded-xl overflow-hidden cursor-pointer">
              <summary className="p-6 text-lg font-semibold list-none flex justify-between items-center group-hover:text-red-500 transition-colors">
                Is wax removal painful?
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Not at all. Microsuction is a gentle procedure. Most patients describe it as a cool breeze or a slight whistling sound in the ear.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-700 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Book Your Appointment Today</h2>
          <p className="text-xl mb-2 opacity-90 text-red-50">Whether you need earwax removal in Kidderminster, a free hearing check, hearing aids, tinnitus support, or a home visit appointment, Stourbridge Hearing Centre is here to help.</p>
          <p className="text-lg font-bold mb-8 text-white uppercase tracking-wider">Same-Day Appointments Available</p>
          <p className="text-sm mb-6 opacity-75 text-red-100 max-w-xl mx-auto">Contact our friendly team today and discover why so many Kidderminster residents trust Stourbridge Hearing Centre for their hearing healthcare needs.</p>
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
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* KEYWORD FOOTER TRACKING */}
      <footer className="bg-black py-8 border-t border-gray-900 text-center">
        <p className="text-xs text-gray-600 max-w-5xl mx-auto px-4">
          Keywords: Earwax Removal Kidderminster, Hearing Aids Kidderminster, Audiologist Kidderminster, Free Hearing Check Kidderminster, Tinnitus Treatment Kidderminster, Hearing Test Kidderminster, Same Day Earwax Removal Kidderminster, Starkey Hearing Aids Kidderminster, Phonak Hearing Aids Kidderminster, Oticon Hearing Aids Kidderminster, Widex Hearing Aids Kidderminster, Bernafon Hearing Aids Kidderminster, Home Visit Audiologist Kidderminster, Hearing Clinic Near Kidderminster, Professional Hearing Care Worcestershire.
        </p>
      </footer>
    </div>
  );
}