import React from 'react';
import { User, MapPin, Settings, Star, Clock, FileText, Ear, Heart, Stethoscope, Volume2, Music, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Stourbridge Hearing Centre
          </h1>
          <p className="text-xl text-gray-100">
            Your local independent hearing specialists — friendly, professional care you can trust.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
                Friendly. Professional. Independent.
              </h2>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  At Stourbridge Hearing Centre, we believe great hearing care is personal. Our <span className="font-bold text-white">HCPC-registered audiologists</span> take time to listen, understand your needs, and provide care that makes a real difference in your everyday life.
                </p>

                <p>
                  Whether you're visiting for gentle earwax removal, a free hearing test, or the latest private hearing aids — you'll always receive a warm welcome, expert guidance, and complete reassurance from start to finish.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 flex items-center justify-center min-h-[400px] overflow-hidden">
              <img
                src="/Clinic.jpeg"
                alt="Inside Stourbridge Hearing Centre reception area"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            Why Choose Stourbridge Hearing Centre?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">Experienced Audiologists</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Qualified, HCPC-registered audiologists with a gentle approach and years of experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">Independent & Local</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We're independent — recommending only what's best for you, not tied to any manufacturer.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">Lifetime Aftercare</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ongoing adjustments, cleaning, and check-ups to keep your hearing aids performing their best.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">Latest Technology</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Rechargeable, Bluetooth-enabled hearing aids with the latest innovations for clarity and comfort.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">Trusted by Patients</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Hundreds of satisfied patients — known for our professionalism, honesty, and personal service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">Same-Week Appointments</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We know hearing matters — that's why we offer quick, flexible appointment slots.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">Free Ear Check Service</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                A complimentary ear health check for peace of mind. Perfect if you're unsure whether you have earwax buildup or need further treatment.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Book Free Ear Check
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Ear className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">Earwax Removal</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Safe, gentle microsuction performed by qualified audiologists. No water, no mess — instant results and clearer hearing.
              </p>
              <button
                onClick={() => navigate('/earwax-removal')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Book Earwax Removal
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">Free Hearing Test</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Comprehensive hearing checks with honest, independent advice. Find out your hearing health today — with no pressure or obligation.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Book Your Free Test
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Volume2 className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">Private Hearing Aids</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Discreet, rechargeable and Bluetooth-enabled hearing aids from world-leading brands — custom fitted for comfort, clarity and style.
              </p>
              <button
                onClick={() => navigate('/hearing-aids')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Explore Hearing Aids
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">Noise Protection</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Custom earplugs and protection for work, music or swimming — tailored to fit comfortably and safeguard your hearing.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Request Fitting
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Music className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-500">Tinnitus Support</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Personalised tinnitus management and sound therapy to help reduce the impact of ringing in your ears and improve your comfort.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
            Patient Stories
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Real experiences from people we've helped — because great hearing care starts with trust.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <video
                  src="/Client 3.mp4"
                  className="w-full h-full object-contain"
                  controls
                  playsInline
                />
              </div>
              <div className="p-6">
                <p className="text-gray-300 italic mb-4">
                  "So kind and patient — I felt completely at ease during my visit."
                </p>
                <p className="text-red-500 font-semibold">– Patient Review</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <img
                  src="/Client 1.jpeg"
                  alt="Reception and friendly service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-300 italic mb-4">
                  "The team was amazing, they explained everything and made me feel reassured."
                </p>
                <p className="text-red-500 font-semibold">– Patient Review</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <img
                  src="/Client 2.jpeg"
                  alt="Inside clinic with patients"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-300 italic mb-4">
                  "Excellent service and aftercare — my hearing has never been clearer."
                </p>
                <p className="text-red-500 font-semibold">– Patient Review</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Your Visit
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 via-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Experience Hearing Care You Can Trust
          </h2>
          <p className="text-xl text-white mb-10">
            Book your Free hearing test and hearing aids demonstration with our friendly audiology team today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/hearing-aids')}
              className="bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Hearing Aids
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
