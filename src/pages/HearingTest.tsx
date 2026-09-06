import React from 'react';
import {
  Ear,
  Headphones,
  Activity,
  ClipboardList,
  FileText,
  Clock,
  Phone,
  MapPin,
  Globe,
  CalendarDays,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function HearingTest() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* =========================================================
          SEO
      ========================================================= */}
      <Helmet>
        <title>
          Hearing Test at Stourbridge Hearing Centre | Professional Hearing Tests
        </title>

        <meta
          name="description"
          content="Professional hearing tests for medical reasons at Stourbridge Hearing Centre. Comprehensive hearing assessment with visual otoscopy, air conduction, bone conduction, masking and a full written report."
        />

        <link
          rel="canonical"
          href="https://www.stourbridgehearing.co.uk/hearing-test"
        />
      </Helmet>


      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-gradient-to-br from-red-950 via-black to-gray-950">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 min-h-[620px]">

            {/* =====================================================
                HERO LEFT
            ===================================================== */}
            <div className="px-6 sm:px-10 lg:px-14 py-14 lg:py-20 flex flex-col justify-center">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">

                <span className="text-red-500">
                  HEARING TEST
                </span>

                <br />

                <span className="text-white">
                  AT STOURBRIDGE
                </span>

                <br />

                <span className="text-white">
                  HEARING CENTRE
                </span>

              </h1>


              {/* RED LINE */}
              <div className="w-14 h-1 bg-red-600 mt-6 mb-5"></div>


              <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 leading-tight">
                Professional Hearing Tests
                <br />
                for Medical Reasons
              </h2>


              <p className="text-gray-300 text-base leading-relaxed max-w-xl mb-5">
                At Stourbridge Hearing Centre, we provide hearing tests for
                medical reasons with a full written report.
              </p>


              <p className="text-gray-300 text-base leading-relaxed max-w-xl mb-8">
                Our comprehensive hearing assessment helps identify the cause
                of your hearing difficulties and provides the information
                needed for medical referral, treatment or ongoing care.
              </p>


              {/* =================================================
                  HERO BUTTONS
              ================================================= */}
              <div className="flex flex-col sm:flex-row gap-3">

                {/* BOOK APPOINTMENT */}
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-bold text-sm transition-all duration-300 shadow-xl"
                >
                  <CalendarDays className="w-5 h-5" />

                  BOOK APPOINTMENT
                </button>


                {/* CALL */}
                <a
                  href="tel:01384476306"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-red-700 px-6 py-4 rounded-lg font-bold text-sm transition-all duration-300 shadow-xl"
                >

                  <Phone className="w-5 h-5" />

                  <span>
                    CALL TO DISCUSS
                    <br />

                    <span className="text-xs">
                      01384 476 306
                    </span>
                  </span>

                </a>

              </div>

            </div>


            {/* =====================================================
                HERO IMAGE
            ===================================================== */}
            <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">

              <img
                src="/HearingTestHero.jpg"
                alt="Professional hearing test at Stourbridge Hearing Centre"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* subtle dark overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          COMPREHENSIVE HEARING ASSESSMENT
      ========================================================= */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-950">

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-10">

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Comprehensive Hearing Assessment
            </h2>

            <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our hearing test is carried out by a qualified Audiologist using
              industry-standard equipment and techniques.
              <br />
              We carry out a full evaluation to ensure accurate and reliable
              results.
            </p>

          </div>


          {/* =====================================================
              ASSESSMENT CARDS
          ===================================================== */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">


            {/* VISUAL OTOSCOPY */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center hover:border-red-600 transition-all duration-300">

              <div className="h-14 flex items-center justify-center mb-4">

                <Ear className="w-10 h-10 text-red-500" />

              </div>

              <h3 className="font-bold text-white text-sm mb-3">
                Visual Otoscopy
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed">
                We examine your ears using a video otoscope to check the health
                of your ear canal and eardrum.
              </p>

            </div>


            {/* AIR CONDUCTION */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center hover:border-red-600 transition-all duration-300">

              <div className="h-14 flex items-center justify-center mb-4">

                <Headphones className="w-10 h-10 text-red-500" />

              </div>

              <h3 className="font-bold text-white text-sm mb-3">
                AC (Air Conduction)
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed">
                We test how well you hear sounds through the air using
                headphones.
              </p>

            </div>


            {/* BONE CONDUCTION */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center hover:border-red-600 transition-all duration-300">

              <div className="h-14 flex items-center justify-center mb-4">

                <Headphones className="w-10 h-10 text-red-500" />

              </div>

              <h3 className="font-bold text-white text-sm mb-3">
                BC (Bone Conduction)
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed">
                We test how well sound travels through the bones of your skull
                to your inner ear.
              </p>

            </div>


            {/* MASKING */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center hover:border-red-600 transition-all duration-300">

              <div className="h-14 flex items-center justify-center mb-4">

                <Activity className="w-10 h-10 text-red-500" />

              </div>

              <h3 className="font-bold text-white text-sm mb-3">
                Masking
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed">
                Masking is used when necessary to measure hearing in each ear
                accurately.
              </p>

            </div>


            {/* FULL PATIENT HISTORY */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center hover:border-red-600 transition-all duration-300">

              <div className="h-14 flex items-center justify-center mb-4">

                <ClipboardList className="w-10 h-10 text-red-500" />

              </div>

              <h3 className="font-bold text-white text-sm mb-3">
                Full Patient History
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed">
                We take a full medical and hearing history to understand your
                symptoms and medical needs.
              </p>

            </div>


            {/* FULL WRITTEN REPORT */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center hover:border-red-600 transition-all duration-300">

              <div className="h-14 flex items-center justify-center mb-4">

                <FileText className="w-10 h-10 text-red-500" />

              </div>

              <h3 className="font-bold text-white text-sm mb-3">
                Full Written Report
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed">
                You will receive a detailed report of your results for your GP
                or for medical referral if required.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ABOUT OUR HEARING TEST SERVICE
      ========================================================= */}
      <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 bg-black">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-3 mb-5">

                <div className="w-8 h-1 bg-red-600"></div>

                <h2 className="text-2xl font-bold text-white">
                  About Our Hearing Test Service
                </h2>

              </div>


              <div className="space-y-2.5">

                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-red-500 font-bold">
                    ✓
                  </span>
                  Hearing tests for medical reasons
                </div>


                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-red-500 font-bold">
                    ✓
                  </span>
                  Comprehensive assessment with full results
                </div>


                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-red-500 font-bold">
                    ✓
                  </span>
                  Visual otoscopy, AC, BC and masking
                </div>


                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-red-500 font-bold">
                    ✓
                  </span>
                  Full patient history taken
                </div>


                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-red-500 font-bold">
                    ✓
                  </span>
                  Detailed written report provided
                </div>


                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-red-500 font-bold">
                    ✓
                  </span>
                  Confidential and professional service
                </div>

              </div>

            </div>


            {/* APPOINTMENT DURATION */}
            <div className="bg-red-950/40 border border-red-900/60 rounded-xl p-7">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center flex-shrink-0">

                  <Clock className="w-9 h-9 text-red-500" />

                </div>


                <div>

                  <h3 className="text-lg font-bold text-red-500 mb-1">
                    Appointment Duration
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    Your appointment will last approximately{' '}
                    <strong className="text-red-400">
                      45 minutes.
                    </strong>
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CALL TO DISCUSS
      ========================================================= */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-950">

        <div className="max-w-7xl mx-auto">

          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">

            <div className="grid lg:grid-cols-3">


              {/* =================================================
                  LEFT CONTENT
              ================================================= */}
              <div className="p-7 sm:p-8">

                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-4">
                  Call to Discuss Your Needs
                  <br />
                  and Service Charge
                </h2>


                <div className="w-10 h-1 bg-red-600 mb-4"></div>


                <p className="text-sm text-gray-400 leading-relaxed">
                  We understand that everyone’s needs are different.
                  Please call us to discuss your specific requirements
                  and to find out the charge for this service.
                </p>

              </div>


              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}
              <div className="p-7 sm:p-8 border-t lg:border-t-0 lg:border-l lg:border-r border-gray-800">

                <div className="space-y-5">


                  {/* PHONE */}
                  <a
                    href="tel:01384476306"
                    className="flex items-center gap-4 group"
                  >

                    <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center">

                      <Phone className="w-5 h-5 text-red-500" />

                    </div>


                    <div>

                      <p className="text-xs text-gray-500 mb-0.5">
                        Phone
                      </p>

                      <p className="text-sm font-bold text-white group-hover:text-red-500 transition-colors">
                        01384 476 306
                      </p>

                    </div>

                  </a>


                  {/* ADDRESS */}
                  <div className="flex items-center gap-4">

                    


                    <div>

                      

                      <div className="flex items-center gap-4">
                        {/* Location Pin Icon Box */}
                        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-red-500" />
                        </div>

                        {/* Button */}
                        <button 
                          onClick={() => window.open('https://www.google.com/maps?q=59+High+St,+Stourbridge+DY8+1DE', '_blank')}
                          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-xl transition-colors whitespace-nowrap shadow-sm"
                        >
                          View on Google Maps
                        </button>
                      </div>

                    </div>

                  </div>


                  {/* WEBSITE */}
                  <div className="flex items-center gap-4">

                    <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center">

                      <Globe className="w-5 h-5 text-red-500" />

                    </div>


                    <div>

                      <p className="text-xs text-gray-500 mb-0.5">
                        Website
                      </p>

                      <p className="text-sm font-bold text-white">
                        www.stourbridgehearing.co.uk
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  OTOSCOPE IMAGE
              ================================================= */}
              <div className="relative min-h-[260px] lg:min-h-[300px] bg-black">

                <img
                  src="/otoscope.jpg"
                  alt="Ear examination using an otoscope"
                  className="absolute inset-0 w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          RED PRIORITY CTA
      ========================================================= */}
      <section className="bg-red-700">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="py-7 flex flex-col lg:flex-row items-center justify-between gap-6">


            {/* LEFT */}
            <div className="flex items-center gap-4">

              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">

                <Ear className="w-8 h-8 text-red-600" />

              </div>


              <div>

                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Your Hearing Health is Our Priority
                </h2>

                <p className="text-sm text-red-100 mt-1">
                  Professional care, accurate results and clear reports
                  you can trust.
                </p>

              </div>

            </div>


            {/* BUTTON */}
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-red-700 px-7 py-3.5 rounded-lg font-bold text-sm transition-all duration-300"
            >

              <CalendarDays className="w-5 h-5" />

              BOOK YOUR APPOINTMENT TODAY

            </button>

          </div>

        </div>

      </section>


      {/* =========================================================
          TRUST BAR
      ========================================================= */}
      <section className="bg-black border-b border-gray-800">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3">


            {/* EXPERT AUDIOLOGISTS */}
            <div className="p-6 sm:p-7 flex items-center gap-4 border-b md:border-b-0 md:border-r border-gray-800">

              <div className="w-12 h-12 rounded-full border border-gray-700 bg-gray-900 flex items-center justify-center flex-shrink-0">

                <ShieldCheck className="w-6 h-6 text-white" />

              </div>


              <div>

                <h3 className="text-xs font-bold text-white uppercase mb-1">
                  Expert Audiologists
                </h3>

                <p className="text-xs text-gray-500">
                  Qualified professionals with years of experience.
                </p>

              </div>

            </div>


            {/* CONFIDENTIAL */}
            <div className="p-6 sm:p-7 flex items-center gap-4 border-b md:border-b-0 md:border-r border-gray-800">

              <div className="w-12 h-12 rounded-full border border-gray-700 bg-gray-900 flex items-center justify-center flex-shrink-0">

                <ShieldCheck className="w-6 h-6 text-white" />

              </div>


              <div>

                <h3 className="text-xs font-bold text-white uppercase mb-1">
                  Confidential & Trusted
                </h3>

                <p className="text-xs text-gray-500">
                  Your privacy and comfort are our priority.
                </p>

              </div>

            </div>


            {/* PATIENT FOCUSED */}
            <div className="p-6 sm:p-7 flex items-center gap-4">

              <div className="w-12 h-12 rounded-full border border-gray-700 bg-gray-900 flex items-center justify-center flex-shrink-0">

                <Users className="w-6 h-6 text-white" />

              </div>


              <div>

                <h3 className="text-xs font-bold text-white uppercase mb-1">
                  Patient Focused Care
                </h3>

                <p className="text-xs text-gray-500">
                  We take the time to listen and support you.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}