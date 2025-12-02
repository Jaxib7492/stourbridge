import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AftercarePage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need an appointment for cleaning?',
      answer: 'No — our walk-in cleaning and maintenance service is open 6 days a week. Just pop in.'
    },
    {
      question: 'Is the quick-look ear check really free?',
      answer: 'Yes, absolutely! We offer a complimentary quick-look ear check to check for earwax — especially useful if sounds are muffled or your hearing aids don\'t seem as clear. No appointment required.'
    },
    {
      question: 'How often should I come for aftercare?',
      answer: 'We recommend visiting every 3-6 months for routine cleaning and checks. However, you can pop in anytime you need support or if something doesn\'t feel quite right.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Aftercare You Can Rely On
              </h1>
              <p className="text-xl text-gray-100 mb-10 leading-relaxed">
                Enjoy lifetime aftercare with professional fine-tuning, adjustments, and regular hearing checks to keep you hearing your best.
              </p>

              <div className="space-y-4 mb-10">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book Aftercare Check
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto ml-0 sm:ml-4 bg-transparent border-2 border-white hover:bg-white hover:text-red-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Walk In Today
                </button>
              </div>

              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl mb-8"
              >
                Free Quick-Look Ear Check
              </button>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-black bg-opacity-40 border border-gray-600 rounded-lg text-sm text-gray-100">
                  HCPC-registered clinicians
                </span>
                <span className="px-4 py-2 bg-black bg-opacity-40 border border-gray-600 rounded-lg text-sm text-gray-100">
                  Same-week appointments
                </span>
                <span className="px-4 py-2 bg-black bg-opacity-40 border border-gray-600 rounded-lg text-sm text-gray-100">
                  Independent & local
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 rounded-2xl p-8">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                  <span className="text-gray-300 text-center">Cleaning</span>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                  <span className="text-gray-300 text-center">Fine-tuning</span>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                  <span className="text-gray-300 text-center">Hearing Checks</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                  <span className="text-gray-300 text-center">Wax Check</span>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                  <span className="text-gray-300 text-center">Domes & Filters</span>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                  <span className="text-gray-300 text-center">On-going Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
                What's Included in Your Aftercare
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded bg-teal-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Lifetime aftercare — scheduled reviews to keep performance optimised.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded bg-teal-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Professional fine-tuning & comfort adjustments for your listening environments.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded bg-teal-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Routine cleaning: domes, wax filters, microphones and receivers.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded bg-teal-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    6-monthly hearing checks to monitor changes and update your settings when needed.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded bg-teal-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Connectivity help: pairing to phones and apps, tips & troubleshooting.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Arrange an Aftercare Visit
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Ask a Question
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                Walk-In Cleaning & Maintenance
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Open <span className="font-bold text-white">6 days a week</span> — no appointment needed. Pop in for quick cleaning, filter changes, tube checks and comfort adjustments.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-black bg-opacity-40 border border-gray-600 rounded-lg p-6">
                  <p className="text-gray-400 text-sm mb-2">Mon – Sat</p>
                  <p className="text-white text-lg font-semibold">9:30 AM – 5:00 PM</p>
                </div>
                <div className="bg-black bg-opacity-40 border border-gray-600 rounded-lg p-6">
                  <p className="text-gray-400 text-sm mb-2">Location</p>
                  <p className="text-white text-lg font-semibold">59 High St, Stourbridge DY8 1DE</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => window.open('https://www.google.com/maps/search/59+High+St,+Stourbridge+DY8+1DE', '_blank')}
                  className="bg-white hover:bg-gray-100 text-red-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Directions
                </button>
                <a
                  href="tel:01384476306"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call 01384 476 306
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Free Quick-Look Ear Check
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Not sure if wax is the problem? Drop in for a <span className="font-bold text-white">complimentary quick look</span> to check for earwax — especially useful if sounds are muffled or your hearing aids don't seem as clear.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">Visual check for wax and blockage</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">Advice on next steps if wax is present</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">No appointment required</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Pop In This Week
                </button>
                <button
                  onClick={() => navigate('/earwax-removal')}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Earwax Removal Info
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 overflow-hidden">
                <img
                  src="/image.png"
                  alt="Otoscopy ear examination procedure"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-400 text-sm text-center mt-4">
                Ideal first step if hearing seems dull or hearing aids sound blocked.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
            How Aftercare Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="text-6xl font-bold text-red-600 mb-4">1</div>
              <h3 className="text-2xl font-bold text-white mb-4">Check & Clean</h3>
              <p className="text-gray-300 leading-relaxed">
                We inspect microphones, receivers and vents, then clean or replace domes and wax filters.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="text-6xl font-bold text-red-600 mb-4">2</div>
              <h3 className="text-2xl font-bold text-white mb-4">Fine-Tune</h3>
              <p className="text-gray-300 leading-relaxed">
                We adjust settings for comfort and clarity across your day-to-day listening.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="text-6xl font-bold text-red-600 mb-4">3</div>
              <h3 className="text-2xl font-bold text-white mb-4">Review</h3>
              <p className="text-gray-300 leading-relaxed">
                We plan follow-ups and share tips for getting the very best from your hearing aids.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Arrange Aftercare
            </button>
            <a
              href="tel:01384476306"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Call 01384 476 306
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            Aftercare FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
                >
                  <span className="text-xl font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer.split('**').map((part, i) =>
                        i % 2 === 0 ? part : <span key={i} className="font-bold text-white">{part}</span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate('/contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ask a Question
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 via-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready for Your Aftercare Visit?
          </h2>
          <p className="text-xl text-white mb-10">
            Book an appointment or simply walk in during opening hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Aftercare Check
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
