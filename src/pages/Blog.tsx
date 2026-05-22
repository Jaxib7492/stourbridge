import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Quote,
  Ear,
  AudioLines,
  HeartHandshake,
  Check,
  ArrowRight,
} from 'lucide-react';

export function Blog() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* SEO */}
      <Helmet>
        <title>
          Jim’s Hearing Journey | Stourbridge Hearing Centre
        </title>

        <meta
          name="description"
          content="Read how Jim transformed his hearing journey from blocked ears to clear conversations with professional earwax removal, hearing tests, and digital hearing aids at Stourbridge Hearing Centre."
        />

        <link
          rel="canonical"
          href="https://www.stourbridgehearing.co.uk/blog"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900 overflow-hidden">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 bg-black bg-opacity-40 border border-gray-700 rounded-lg px-4 py-2 mb-6">
                <Quote className="w-4 h-4 text-red-400" />
                <span className="text-sm text-gray-200">
                  Real Patient Story
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Jim’s Hearing Journey:
                <span className="block text-red-300 mt-2">
                  From Blocked Ears to Clear Conversations
                </span>
              </h1>

              <p className="text-xl text-gray-100 leading-relaxed mb-10">
                Discover how professional earwax removal, hearing tests,
                and modern hearing aids helped Jim regain confidence
                and reconnect with everyday conversations.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">

                <button
                  onClick={() => navigate('/contact')}
                  className="bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book Hearing Consultation
                </button>

                <button
                  onClick={() => navigate('/hearing-aids')}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-red-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Hearing Aids Info
                </button>

              </div>

              <div className="flex flex-wrap gap-3">

                <span className="px-4 py-2 bg-black bg-opacity-40 border border-gray-700 rounded-lg text-sm text-gray-100">
                  Professional Hearing Tests
                </span>

                <span className="px-4 py-2 bg-black bg-opacity-40 border border-gray-700 rounded-lg text-sm text-gray-100">
                  Microsuction Earwax Removal
                </span>

                <span className="px-4 py-2 bg-black bg-opacity-40 border border-gray-700 rounded-lg text-sm text-gray-100">
                  Digital Hearing Aids
                </span>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-6">

              {/* IMAGE BLOCK */}
              <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">

                <img
                  src="/image.png"
                  alt="Patient hearing consultation"
                  className="w-full h-[500px] object-cover"
                />

              </div>

              {/* TILES */}
              <div className="bg-gradient-to-br from-black to-gray-900 border border-gray-700 rounded-2xl p-8">

                <div className="grid grid-cols-3 gap-4 mb-4">

                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                    <span className="text-gray-300 text-center">
                      Earwax Removal
                    </span>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                    <span className="text-gray-300 text-center">
                      Hearing Test
                    </span>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                    <span className="text-gray-300 text-center">
                      Hearing Aids
                    </span>
                  </div>

                </div>

                <div className="grid grid-cols-3 gap-4">

                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                    <span className="text-gray-300 text-center">
                      Better Clarity
                    </span>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                    <span className="text-gray-300 text-center">
                      Confidence
                    </span>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 flex items-center justify-center border border-gray-700 h-32">
                    <span className="text-gray-300 text-center">
                      Ongoing Support
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STORY SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT */}
            <div>

              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
                When Hearing Starts to Change
              </h2>

              <div className="space-y-6">

                {[
                  "Jim first noticed something wasn’t quite right when conversations became harder to follow in busy environments.",
                  "Voices sounded muffled and he often found himself increasing the TV volume.",
                  "At first, he assumed it was simply part of getting older.",
                  "However, the blocked sensation in his ears made him suspect there could be another cause."
                ].map((text, i) => (
                  <div key={i} className="flex gap-4">

                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded bg-teal-500 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {text}
                    </p>

                  </div>
                ))}

              </div>

              <div className="flex flex-wrap gap-4 mt-10">

                <button
                  onClick={() => navigate('/earwax-removal')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Earwax Removal
                </button>

                <button
                  onClick={() => navigate('/contact')}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Book Appointment
                </button>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <Ear className="w-8 h-8 text-red-500" />

                <h3 className="text-3xl font-bold text-white">
                  A Simple First Step
                </h3>

              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Jim booked a microsuction earwax removal appointment
                hoping for a quick solution.
              </p>

              <div className="space-y-5">

                {[
                  "Safe and comfortable microsuction procedure",
                  "Immediate improvement in hearing clarity",
                  "Blocked sensation disappeared quickly",
                  "Further testing revealed mild hearing loss"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">

                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />

                    <p className="text-gray-300">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

              <div className="mt-10">

                <button
                  onClick={() => navigate('/contact')}
                  className="bg-white hover:bg-gray-100 text-red-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Arrange Hearing Check
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* HEARING AIDS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            

            {/* RIGHT */}
            <div>

              <div className="flex items-center gap-3 mb-6">

                <HeartHandshake className="w-8 h-8 text-red-500" />

                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                  A Life-Changing Difference
                </h2>

              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                After a professional hearing assessment, Jim decided to try
                modern digital hearing aids tailored specifically to his needs.
              </p>

              <div className="space-y-5 mb-10">

                {[
                  "Improved speech clarity",
                  "Comfortable and discreet hearing aids",
                  "More confidence in social situations",
                  "Better communication in noisy places",
                  "Ongoing support and follow-up care"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">

                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />

                    <p className="text-gray-300 text-lg">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

              <div className="flex flex-wrap gap-4">

                <button
                  onClick={() => navigate('/hearing-aids')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Explore Hearing Aids
                </button>

                <button
                  onClick={() => navigate('/contact')}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Book Consultation
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 via-red-600 to-red-700">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Take the First Step Towards Better Hearing
          </h2>

          <p className="text-xl text-white mb-10 leading-relaxed">
            If you’ve noticed blocked ears, muffled hearing,
            or difficulty following conversations,
            professional help is available — and it can make
            a real difference.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <button
              onClick={() => navigate('/contact')}
              className="bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Appointment
            </button>

            <a
              href="tel:01384476306"
              className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2"
            >
              Call 01384 476 306

              <ArrowRight className="w-5 h-5" />
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}