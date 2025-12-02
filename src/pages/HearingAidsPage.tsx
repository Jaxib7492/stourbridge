import React from 'react';
import { CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HearingAidsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Private Hearing Aids
          </h1>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto">
            Hearing solutions, not just devices — fitted by independent audiologists.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book FREE Hearing Test
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Book Home Visit
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            Different Styles of Hearing Aids
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="aspect-square bg-gray-800 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/image copy copy copy copy copy copy.png"
                  alt="RIC Rechargeable Hearing Aids"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">RIC – Rechargeable</h3>
              <p className="text-gray-300 leading-relaxed">
                Discreet behind-the-ear style with a thin wire to the ear. Rechargeable and very popular.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="aspect-square bg-gray-800 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/image copy copy copy copy copy copy copy copy copy copy copy.png"
                  alt="IIC Invisible-in-Canal Hearing Aids"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">IIC – Invisible-in-Canal</h3>
              <p className="text-gray-300 leading-relaxed">
                Sits deep in the ear canal for maximum discretion — ideal if you don't want it seen.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="aspect-square bg-gray-800 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/image copy copy copy copy copy copy copy copy.png"
                  alt="CIC Completely-in-Canal Hearing Aids"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">CIC – Completely-in-Canal</h3>
              <p className="text-gray-300 leading-relaxed">
                Custom-moulded to your ear. Very discreet, natural sound, easy to insert.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="aspect-square bg-gray-800 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/image copy copy copy copy copy copy copy copy copy copy.png"
                  alt="ITC In-the-Canal Rechargeable Hearing Aids"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">ITC – Rechargeable</h3>
              <p className="text-gray-300 leading-relaxed">
                Slightly bigger for better handling and controls — now with rechargeable options.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="aspect-square bg-gray-800 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/image copy copy copy copy copy copy copy copy copy.png"
                  alt="ITE In-the-Ear Hearing Aids"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">ITE – In-the-Ear</h3>
              <p className="text-gray-300 leading-relaxed">
                One piece that sits in the ear. Great for a wide range of hearing losses.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="aspect-square bg-gray-800 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/image copy copy copy copy copy copy copy copy copy copy copy copy.png"
                  alt="Phone and Bluetooth Connectivity for Hearing Aids"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Phone / Bluetooth</h3>
              <p className="text-gray-300 leading-relaxed">
                Connect directly to your phone, TV, and other devices with modern Bluetooth technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-800 via-red-700 to-red-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Aftercare You Can Rely On
          </h2>
          <p className="text-xl text-white mb-4 leading-relaxed">
            Enjoy <span className="font-bold">lifetime aftercare</span> with professional fine-tuning, adjustments, and regular hearing checks to keep you hearing your best.
          </p>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Our <span className="font-bold">walk-in cleaning and maintenance service</span> is open 6 days a week — no appointment needed.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Ask a Question
          </button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            See real results from patients who've experienced better hearing with Stourbridge Hearing Centre. Add testimonial images or short videos here.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="aspect-video bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
                <video
                  controls
                  className="w-full h-full rounded-lg"
                >
                  <source src="/Client 3.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-gray-300 italic text-center">
                "I can finally hear clearly again! The service was amazing and the aftercare is brilliant."
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="aspect-video bg-gray-800 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/Client 1.jpeg"
                  alt="Happy patient at Stourbridge Hearing Centre"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-300 italic text-center">
                "So professional and kind — highly recommend Stourbridge Hearing Centre!"
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="aspect-video bg-gray-800 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/Client 2.jpeg"
                  alt="Happy patient with new hearing aids"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-300 italic text-center">
                "The new hearing aids have changed my life — thank you for such caring support."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            Why Choose Our Hearing Aids
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-red-500 mb-4 text-center">Latest Technology</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Discreet, rechargeable, Bluetooth-enabled options from leading brands.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-red-500 mb-4 text-center">Personalised Fitting</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Expertly adjusted for your hearing needs, lifestyle, and comfort.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-800 to-red-700 rounded-xl p-8 border border-red-600">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">
                Affordable Hearing for Everyone
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <CreditCard className="w-6 h-6 text-white" />
                <p className="text-xl font-bold text-white">Finance Available</p>
              </div>
              <p className="text-white text-center mb-6 leading-relaxed">
                Spread the cost with <span className="font-bold">flexible and interest-free plans</span> — making better hearing accessible to all.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => navigate('/financing')}
                  className="bg-white hover:bg-gray-100 text-red-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Find Out More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-950 via-red-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
            Trusted by the World's Leading Brands
          </h2>
          <p className="text-xl text-gray-200 text-center mb-12 max-w-3xl mx-auto">
            As an <span className="text-red-400 font-bold">independent audiologist</span>, we fit hearing aids from the top global manufacturers — giving you freedom of choice and the latest technology.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-4 w-32 h-20 flex items-center justify-center">
                <img
                  src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                  alt="Starkey"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-4 w-32 h-20 flex items-center justify-center">
                <img
                  src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                  alt="Phonak"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-4 w-32 h-20 flex items-center justify-center">
                <img
                  src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                  alt="Oticon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-4 w-32 h-20 flex items-center justify-center">
                <img
                  src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                  alt="Bernafon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-4 w-32 h-20 flex items-center justify-center">
                <img
                  src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                  alt="Signia"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-4 w-32 h-20 flex items-center justify-center">
                <img
                  src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                  alt="Widex"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 via-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Hear Better?
          </h2>
          <p className="text-xl text-white mb-10">
            Book your free hearing test and start your journey to better hearing today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book FREE Hearing Test
            </button>
            <a
              href="tel:01384476306"
              className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Call 01384 476 306
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
