import React from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact Stourbridge Hearing Centre
          </h1>
          <p className="text-xl text-gray-300">
            We're here to help with your hearing care. Reach out today — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-red-900/30 p-4 rounded-lg">
                  <MapPin className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-xl">Address</h3>
                  <p className="text-gray-300 leading-relaxed">
                    59 High St,<br />
                    Stourbridge<br />
                    DY8 1DE
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-red-900/30 p-4 rounded-lg">
                  <Phone className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-xl">Phone</h3>
                  <a href="tel:01384476306" className="text-gray-300 hover:text-red-400 transition-colors text-lg">
                    01384 476 306
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-red-900/30 p-4 rounded-lg">
                  <Mail className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-xl">Email</h3>
                  <a
                    href="mailto:stourbridgehearingcentre@gmail.com"
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    stourbridgehearingcentre@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="bg-red-900/30 p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-red-500" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-white mb-3 text-xl">Opening Hours</h3>
                  <div className="text-gray-300 space-y-1">
                    <p><span className="font-semibold text-white">Monday to Saturday:</span> 9:30 AM – 5:00 PM</p>
                    <p><span className="font-semibold text-white">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            We offer professional, independent hearing care — whether you need earwax removal, new hearing aids, or tinnitus management, we're here to help.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Earwax Removal
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Free Hearing Test
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Private Hearing Aids Demonstration
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Tinnitus Support
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Noise Protection
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 via-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Book Your Appointment Today
          </h2>
          <p className="text-xl text-white mb-10">
            Get in touch with our friendly audiology team and start your journey to better hearing today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Book Free Hearing Test
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Book Earwax Removal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
