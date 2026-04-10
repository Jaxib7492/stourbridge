import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const faqs = [
    {
      question: 'Do you offer hearing tests in Stourbridge and nearby areas?',
      answer:
        'Yes, we provide professional hearing tests in Stourbridge for patients across the local area including Dudley, Halesowen, and Brierley Hill. Each assessment is carried out by an experienced hearing care professional and tailored to individual needs.',
    },
    {
      question: 'Which areas do you cover around Stourbridge?',
      answer:
        'We are based in Stourbridge and regularly serve patients from Dudley, Halesowen, Brierley Hill, Kingswinford, Hagley, Bromsgrove, Kidderminster, and Wolverhampton within a 20-mile radius.',
    },
    {
      question: 'Can I get a hearing test or ear wax removal near me?',
      answer:
        'Yes. Our Stourbridge clinic offers hearing tests, microsuction ear wax removal, hearing aid support, and home visits where appropriate.',
    },
    {
      question: 'Do you offer home visits for hearing services?',
      answer:
        'Yes, we provide home visits for patients who are unable to attend the clinic. Services include hearing assessments and hearing aid support.',
    },
    {
      question: 'Who are home visits suitable for?',
      answer:
        'Home visits are suitable for elderly patients, individuals with limited mobility, care home residents, and anyone preferring a home appointment.',
    },
    {
      question: 'Do you provide ear wax removal (microsuction) in Stourbridge?',
      answer:
        'Yes, we offer safe microsuction ear wax removal in Stourbridge and surrounding areas including Dudley and Halesowen.',
    },
    {
      question: 'What is microsuction ear wax removal?',
      answer:
        'Microsuction is a modern, safe technique that uses gentle suction under direct vision to remove ear wax without water.',
    },
    {
      question: 'Is ear wax removal safe?',
      answer:
        'Yes, it is very safe when carried out by trained professionals after proper ear examination.',
    },
    {
      question: 'How do I know if I need ear wax removal?',
      answer:
        'Symptoms include blocked ears, reduced hearing, tinnitus, or discomfort. We can assess your ears and advise accordingly.',
    },
    {
      question: 'How long does an ear wax removal or hearing appointment take?',
      answer:
        'Appointments usually take 15–30 minutes depending on the treatment required.',
    },
    {
      question: 'Do you provide hearing aids in Stourbridge?',
      answer:
        'Yes, we provide modern hearing aids tailored to your hearing needs, lifestyle, and budget.',
    },
    {
      question: 'What happens after a hearing test?',
      answer:
        'We explain your results clearly and guide you through any next steps without pressure.',
    },
    {
      question: 'Do I need a referral for a hearing test?',
      answer:
        'No referral is required. You can book directly with us.',
    },
    {
      question: 'How often should I have my hearing checked?',
      answer:
        'We recommend every 1–2 years or sooner if you notice changes.',
    },
    {
      question: 'Why choose Stourbridge Hearing Centre?',
      answer:
        'We offer professional, honest advice, longer appointments, and full aftercare support.',
    },
    {
      question: 'Do you offer services in nearby towns like Dudley or Halesowen?',
      answer:
        'Yes, we serve Dudley, Halesowen, Brierley Hill, Kingswinford, and nearby areas with both clinic visits and home visits.',
    },
    {
      question: 'How do I book an appointment?',
      answer:
        'You can book directly by contacting our clinic via phone or website.',
    },
    {
      question: 'Do you offer free hearing aid checks and walk-in services?',
      answer:
        'Yes, we offer free hearing aid checks and walk-in cleaning services 6 days a week.',
    },
    {
      question: 'What are common signs your hearing aids need cleaning or repair?',
      answer:
        'Signs include muffled sound, whistling, or reduced performance.',
    },
    {
      question: 'Do you serve patients outside Stourbridge?',
      answer:
        'Yes, we serve patients across the West Midlands including surrounding towns within a 20-mile radius.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 🔍 FILTER LOGIC FOR SEARCH
  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-5xl mx-auto text-center">

          <div className="flex justify-center mb-6">
            <div className="bg-black/30 p-4 rounded-full">
              <HelpCircle className="w-10 h-10 text-red-400" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Search or browse answers about hearing tests, ear wax removal, hearing aids, and home visits.
          </p>

          {/* 🔍 SEARCH BAR */}
          <div className="mt-10 max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              type="text"
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/40 border border-gray-700 text-white focus:outline-none focus:border-red-500"
            />
          </div>

        </div>
      </section>

      {/* FAQ LIST */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto space-y-4">

          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-black/30 transition-all"
                >
                  <span className="text-white font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-red-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-40 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">
              No results found for your search.
            </p>
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 via-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Still have questions?
          </h2>

          <p className="text-xl text-white mb-8">
            Contact our team for professional help anytime.
          </p>

          <a
            href="/contact"
            className="inline-block bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>

        </div>
      </section>

    </div>
  );
}