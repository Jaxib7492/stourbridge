import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, HelpCircle as EarIcon, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const faqs = [
    // --- EAR WAX REMOVAL FAQS ---
    {
      category: 'Ear Wax Removal',
      question: 'Where Can I Get Professional Ear Wax Removal in Stourbridge?',
      answer:
        'If you are looking for professional ear wax removal in Stourbridge, our qualified Audiologist provides safe and effective microsuction ear wax removal for patients experiencing blocked ears, reduced hearing, tinnitus, ear discomfort, or a feeling of fullness in the ear. Many patients travel to us from Dudley, Halesowen, Kingswinford, Brierley Hill, Kidderminster, Bromsgrove, and across the West Midlands for expert ear care and same-day appointments where available.',
    },
    {
      category: 'Ear Wax Removal',
      question: 'What Is Microsuction Ear Wax Removal and Why Is It Recommended?',
      answer:
        'Microsuction ear wax removal is one of the safest and most effective methods of ear cleaning available today. Using a specialist medical suction device, excess ear wax is removed without water, making it a preferred alternative to traditional ear syringing. Benefits include immediate improvement in hearing, safe and precise treatment, suitability for most patients, reduced risk of infection, and a comfortable, quick procedure.',
    },
    {
      category: 'Ear Wax Removal',
      question: 'Can Ear Wax Cause Temporary Hearing Loss?',
      answer:
        'Yes. Impacted ear wax is one of the most common causes of temporary hearing loss. A blocked ear canal can prevent sound from reaching the eardrum properly, resulting in muffled hearing, tinnitus symptoms, ear pressure, and discomfort. Professional microsuction ear wax removal can often restore hearing immediately.',
    },
    {
      category: 'Ear Wax Removal',
      question: "I'm Not Sure If I Have Ear Wax Build-Up. Can You Check?",
      answer:
        'Yes. If you are experiencing blocked ears, reduced hearing, tinnitus, ear discomfort, or a feeling of fullness in your ears, our Quick Look Ear Check Service can help determine whether ear wax is causing your symptoms. Many people search for ear wax removal in Stourbridge without knowing if excess ear wax is actually the cause of their hearing difficulties. During your appointment, our experienced Audiologist will examine your ears and provide professional advice on whether professional ear wax removal is required, your ears are free from wax build-up, a hearing test or assessment may be beneficial, or further medical advice is recommended.',
    },

    // --- HEARING TEST FAQS ---
    {
      category: 'Hearing Tests',
      question: 'Where Can I Book a Hearing Test in Stourbridge?',
      answer:
        'We provide professional hearing tests in Stourbridge for adults concerned about hearing loss, tinnitus, speech clarity, or age-related hearing changes. Our comprehensive hearing assessments help identify hearing problems early and provide personalised recommendations for hearing care, hearing aids, tinnitus management, or further investigation if required.',
    },
    {
      category: 'Hearing Tests',
      question: 'What Happens During a Professional Hearing Assessment?',
      answer:
        'A hearing assessment is a painless and non-invasive examination of your hearing health. During your appointment, our Audiologist will discuss your hearing concerns, examine your ears, perform detailed hearing tests, assess speech understanding, explain your results clearly, recommend suitable treatment options, and demonstrate the sound quality check of hearing aids so you can make an informed decision.',
    },
    {
      category: 'Hearing Tests',
      question: 'Do You Offer Hearing Tests in Stourbridge and Nearby Areas?',
      answer:
        'Yes. We provide professional hearing tests in Stourbridge and comprehensive hearing assessments for patients throughout the West Midlands, Worcestershire, and surrounding areas. Our services include comprehensive hearing assessments, free hearing checks, hearing aid consultations, tinnitus assessments, configurations and adjustments, ear health examinations, and follow-up fittings. Many patients visit us from Dudley, Halesowen, Kingswinford, Brierley Hill, Kidderminster, Bromsgrove, Hagley, Wolverhampton, Worcester, Wombourne, Sedgley, and surrounding areas for independent hearing care.',
    },
    {
      category: 'Hearing Tests',
      question: 'What Are the Early Signs of Hearing Loss?',
      answer:
        'Common symptoms of hearing loss include frequently asking people to repeat themselves, difficulty hearing conversations in noisy places, turning the television volume higher, missing parts of conversations, difficulty hearing on the telephone, and feeling tired after social situations. If you notice these symptoms, booking a hearing test can help identify the cause and prevent further deterioration.',
    },

    // --- HEARING AID FAQS ---
    {
      category: 'Hearing Aids',
      question: 'Which Hearing Aids Do You Offer in Stourbridge?',
      answer:
        'We supply a wide range of hearing aids from leading manufacturers including Phonak, Starkey, Oticon, Widex, and Bernafon. Available options include AI hearing aids, Bluetooth hearing aids, rechargeable hearing aids, invisible hearing aids, and custom hearing aids. As an independent hearing clinic, we recommend hearing devices based entirely on your individual hearing needs, lifestyle, and budget.',
    },
    {
      category: 'Hearing Aids',
      question: 'Which Hearing Aid Brand Is Best?',
      answer:
        'There is no single best hearing aid brand. The most suitable hearing aid depends on your hearing loss profile, lifestyle requirements, listening environments, and personal preferences. Our Audiologist will guide you through the latest hearing aid technology configurations and recommend the most appropriate solution for your individual needs.',
    },
    {
      category: 'Hearing Aids',
      question: 'Can Hearing Aids Help Me Hear Better in Noisy Places?',
      answer:
        "Yes. Modern digital hearing aids are specifically designed to improve speech understanding and communication in challenging listening environments such as restaurants, family gatherings, meetings, social events, and busy public places. They use intelligent sound processing and artificial intelligence (AI) to focus on speech coming from specific directions, enhance speech clarity, and reduce background noise automatically to improve listening comfort.",
    },
    {
      category: 'Hearing Aids',
      question: 'How Do I Clean My Hearing Aids?',
      answer:
        'Regular hearing aid cleaning is essential for maintaining sound quality, preventing faults, and extending your device lifespan. We offer a professional hearing aid cleaning and maintenance service six days a week. During a clean and check appointment, our Audiologist can remove ear wax and debris, replace wax guards and filters, check tubing/domes, clean microphones, assess performance, and provide expert maintenance advice.',
    },
    {
      category: 'Hearing Aids',
      question: 'Do you offer hearing aid aftercare?',
      answer:
        'Absolutely. We believe ongoing aftercare is one of the most important aspects of successful hearing aid use. Our hearing aid aftercare services include professional cleaning, system performance checks, programming adjustments, software updates, lifestyle advice, technical troubleshooting, and ongoing routine hearing reviews to ensure long-term performance.',
    },
    {
      category: 'Hearing Aids',
      question: 'Do You Repair Hearing Aids Purchased Elsewhere?',
      answer:
        'Yes. We provide professional hearing aid repairs for many privately purchased hearing aids, even if they were not supplied by our clinic. Our Audiologist can assess the device and recommend a solution. Before proceeding, we can contact the manufacturer to confirm warranty status, available repair options, estimated costs, and expected turnaround times to provide a cost-effective outcome.',
    },
    {
      category: 'Hearing Aids',
      question: 'Which Hearing Aid Brands Do You Provide?',
      answer:
        "As an independent hearing clinic, we provide access to some of the world's leading brands including Phonak, Starkey, Oticon, Widex, and Bernafon. Because we are not restricted to one manufacturer, we offer completely impartial advice to match your specific hearing loss, lifestyle, listening environments, and budget across rechargeable, Bluetooth, AI, or custom configurations.",
    },
    {
      category: 'Hearing Aids',
      question: 'What Should I Do If My Hearing Aid Stops Working?',
      answer:
        'First, complete a few simple checks: verify the battery or charging status, examine wax guards and filters for blockages, check tubing and domes, look for moisture build-up inside the device, and check volume/programme settings. If the issue persists, bring it to our clinic for professional troubleshooting, maintenance, or specialist factory repair liaison.',
    },
    {
      category: 'Hearing Aids',
      question: 'Do You Support NHS and Private Hearing Aid Users?',
      answer:
        'Yes. We are pleased to support both NHS hearing aid users and private hearing aid users with a wide range of services including maintenance, cleaning, system troubleshooting, accessories, and overall hearing health advice. For private hearing aids, we can often provide programming, updates, adjustments, and repairs depending on the specific model.',
    },
    {
      category: 'Hearing Aids',
      question: 'What are common signs your hearing aids need cleaning or repair?',
      answer:
        'You may require professional hearing aid servicing if you notice reduced overall volume, distorted or crackling sound, intermittent performance, whistling or feedback, blocked microphone inlets, excessive battery drain, or sudden difficulty hearing clear conversations.',
    },
    {
      category: 'Hearing Aids',
      question: 'Do you offer free hearing aid checks and walk-in services?',
      answer:
        'Yes. We provide free hearing aid checks and welcome patients who require cleaning, maintenance, basic troubleshooting, wax guard replacements, or minor adjustments. Our walk-in support and cleaning service is available 6 days a week.',
    },
    {
      category: 'Hearing Aids',
      question: 'Do You Provide Hearing Aid Batteries and Accessories?',
      answer:
        'Yes. We stock a comprehensive range of components including traditional hearing aid batteries, rechargeable system power accessories, replacement wax guards and filters, standard/custom domes, advanced cleaning products, drying systems and dehumidifiers, and comprehensive maintenance kits to maximize performance.',
    },

    // --- TINNITUS FAQS ---
    {
      category: 'Tinnitus',
      question: 'What Is Tinnitus?',
      answer:
        'Tinnitus is the perception of sound when no external sound source is present. People commonly describe it as a ringing, buzzing, humming, hissing, clicking, or whistling in one or both ears. It can vary significantly in loudness, frequency, and impact from person to person.',
    },
    {
      category: 'Tinnitus',
      question: 'What Causes Tinnitus?',
      answer:
        'Tinnitus can be associated with underlying hearing loss, ear wax blockages, prolonged loud noise exposure, heightened stress and anxiety, ear infections, certain medications, or natural age-related changes in the auditory system. A professional evaluation can help identify potential management paths.',
    },
    {
      category: 'Tinnitus',
      question: 'Can Hearing Aids Help Reduce Tinnitus?',
      answer:
        'Many patients find that hearing aids substantially reduce the impact of tinnitus by improving access to everyday environmental sounds, which naturally masks and reduces awareness of internal noises. Many premium digital hearing aids also feature built-in, dedicated tinnitus management programmes and sound therapy options.',
    },

    // --- LOCAL AUDIOLOGY FAQS ---
    {
      category: 'Local Audiology',
      question: 'Do You Provide Hearing Services Outside Stourbridge?',
      answer:
        'Yes. We regularly help clinic and home visit patients from across the West Midlands and Worcestershire, including Dudley, Halesowen, Kingswinford, Brierley Hill, Kidderminster, Bromsgrove, Hagley, Wolverhampton, Worcester, Wombourne, and Sedgley.',
    },
    {
      category: 'Local Audiology',
      question: 'Do You Offer Home Visit Hearing Tests and Ear Wax Removal?',
      answer:
        'Yes. Our home visit audiology service is specifically configured for elderly patients, care home residents, individuals with mobility difficulties, those recovering from surgery, or anyone who simply prefers receiving care in the comfort of their own home. Home services include diagnostic evaluations, ear wax removal, fittings, repairs, and tinnitus advice.',
    },
    {
      category: 'Local Audiology',
      question: 'Why Choose Stourbridge Hearing Centre?',
      answer:
        'Patients choose us because we provide professional microsuction ear wax removal, comprehensive hearing tests, fully independent and impartial hearing aid advice, specialized tinnitus assessments, convenient home visit options, complete device repairs, custom fit hearing protection, same-day slots where available, and consistently high-rated patient care.',
    },
    {
      category: 'Local Audiology',
      question: 'Do You Take Ear Impressions for Hearing Aid Moulds and Custom Hearing Solutions?',
      answer:
        'Yes. We provide professional ear impression services using safe, precise techniques to capture individual ear anatomy. This is essential for custom hearing aid earmoulds, discreet custom hearing aids, industrial noise protection, musician earplugs, in-ear monitors, and specialized communication earpieces.',
    },
    {
      category: 'Local Audiology',
      question: 'Do You Provide Ear Impressions for Custom Hearing Protection?',
      answer:
        "Yes. We take precise impressions for high-performance custom hearing protection, including: Custom Shooting Ear Protection (impact filters for clay/game shooters), Musician Earplugs (flat attenuation to preserve frequency balance without distortion), Motorcyclist Earplugs (attenuating wind noise), Industrial Protection, Custom Swimming Earplugs (to prevent swimmer's ear), and Custom Sleeping Earplugs (moulded specifically for shift workers and light sleepers seeking all-night comfort from snoring or traffic noise).",
    },
    {
      category: 'Local Audiology',
      question: 'Where can I park when visiting Stourbridge Hearing Centre?',
      answer:
        'Visiting the clinic is highly convenient with several parking options within brief walking distance. These include up to 2 hours of free parking at Tesco Extra, up to 1 hour of free parking directly on the High Street in front of the clinic, as well as parking spaces at the B&M car park and the Rye Market car park.',
    },
    {
      category: 'Local Audiology',
      question: 'Can I get a same-day appointment?',
      answer:
        'Yes. We frequently accommodate same-day appointments for urgent requirements like microsuction ear wax removal, immediate hearing checks, tinnitus management advice, or device repairs. We highly recommend calling our clinical team as early in the morning as possible to secure these high-demand emergency slots.',
    },
    {
      category: 'Local Audiology',
      question: 'Do you offer walk-in hearing aid support?',
      answer:
        'Yes. We provide a walk-in hearing aid support service six days a week. Patients can drop in without a formal appointment for fast hearing aid cleaning, filter or tubing replacements, battery advice, basic system troubleshooting, and performance checks to resolve minor issues quickly.',
    },
    {
      category: 'Local Audiology',
      question: 'Can I bring a family member or carer to my appointment?',
      answer:
        'Absolutely. We strongly encourage patients to attend appointments with a family member, friend, or trusted carer. Having someone accompany you can be incredibly helpful when discussing test results, evaluating communication options, or understanding your tailored treatment plan.',
    },
    {
      category: 'Local Audiology',
      question: 'Why do patients travel to Stourbridge Hearing Centre?',
      answer:
        "Patients choose to travel to us because we provide access to a fully qualified Audiologist, clinical microsuction ear wax removal, completely unbiased hearing aid recommendations from leading global brands, specialized tinnitus management protocols, walk-in technical support, custom ear moulding, and same-day scheduling—all backed by more than 100 five-star Google reviews.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase()) ||
      faq.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Metadata */}
      <Helmet>
        <title>Hearing Aid, Hearing Test, Ear Wax Removal & Tinnitus FAQs | Stourbridge Hearing Centre</title>
        <meta name="description" content="Find comprehensive answers to your questions about clinical microsuction ear wax removal, private hearing tests, premium digital hearing aid brands, and tinnitus support." />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/faqs" />
      </Helmet>

      {/* HERO */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-black/30 p-4 rounded-full">
              <HelpCircle className="w-10 h-10 text-red-400" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hearing Aid, Hearing Test, Ear Wax Removal & Tinnitus FAQs
          </h1>

          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Stourbridge Hearing Centre — Professional answers to common questions regarding independent audiology, diagnostic assessments, ear cleaning, and custom protection.
          </p>

          {/* 🔍 SEARCH BAR */}
          <div className="mt-10 max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by keyword, service, or brand (e.g., microsuction, Starkey, sleep)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-6">
              {filteredFAQs.map((faq, index) => {
                // Determine if this item marks the start of a new section group visually when not searching
                const showCategoryHeader = !search && (index === 0 || faqs[index - 1].category !== faq.category);

                return (
                  <div key={index} className="space-y-3">
                    {showCategoryHeader && (
                      <h2 className="text-2xl font-bold text-red-500 pt-6 pb-2 border-b border-gray-800 tracking-wide uppercase text-sm">
                        {faq.category} FAQs
                      </h2>
                    )}
                    <div
                      className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-md hover:border-gray-600 transition-all"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-black/20 transition-all focus:outline-none"
                      >
                        <span className="text-white font-semibold text-lg pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-red-400 flex-shrink-0 transition-transform duration-300 ${
                            openIndex === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <div
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                          openIndex === index ? 'max-h-[800px] pb-6 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-xl text-gray-400">
                No results found matching your query.
              </p>
              <button 
                onClick={() => setSearch('')}
                className="mt-4 text-red-500 font-semibold hover:underline"
              >
                Clear search criteria and view all questions
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-700 via-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Still have questions about your hearing care?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90 max-w-2xl mx-auto">
            Our expert clinical team and qualified Audiologist are here to provide tailored care. Reach out today to schedule an appointment.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black hover:bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}