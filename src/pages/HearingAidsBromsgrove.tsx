import React from 'react';
import {
  Ear,
  Stethoscope,
  Star,
  Clock,
  ShieldCheck,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  CalendarCheck,
  HeartPulse,
  ChevronDown,
  Headphones,
  Home,
  BadgeCheck,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Keep your generated images in public/images/.
// These paths must match your actual image filenames.
const PAGE_IMAGES = {
  hero: '/hearing-care-hero-woman.jpeg',
  microsuction: '/microsuction-earwax-removal.jpeg',
  local: '/bromsgrove-local-area.jpeg',
  hearingAids: '/digital-hearing-aids.jpeg',
};

// SERVICE CARDS
const services = [
  {
    icon: Ear,
    eyebrow: 'EARWAX CARE',
    title: 'Water-Free Microsuction Earwax Removal',
    description:
      'Professional microsuction earwax removal in Bromsgrove. Microsuction uses a small suction probe to remove excess earwax while the ear canal is viewed directly. This water-free method may be appropriate following an assessment of your ears.',
    points: [
      'Direct-vision ear examination',
      'Water-free earwax removal',
      'Treatment tailored to your ear-health needs',
    ],
  },
  {
    icon: Stethoscope,
    eyebrow: 'HEARING ASSESSMENTS',
    title: 'Hearing Tests & Digital Hearing Aids',
    description:
      'Hearing assessments and advice about digital hearing aids in Bromsgrove. Discuss your hearing concerns with the team and explore hearing instruments that may suit your needs.',
    points: [
      'Hearing assessments and results explained',
      'Digital hearing instruments from leading brands',
      'Finance options on selected hearing aids, subject to terms',
    ],
  },
];

// WHY CHOOSE US
const benefits = [
  {
    icon: ShieldCheck,
    title: 'Qualified Audiology Care',
    description:
      'Care from qualified hearing-care practitioners, including HCPC-registered clinical audiologists, as applicable to your appointment.',
  },
  {
    icon: Clock,
    title: 'Prompt Appointment Options',
    description:
      'Same-day and next-day appointments may be available, depending on the current appointment schedule.',
  },
  {
    icon: Star,
    title: 'Independent, Multi-Brand Advice',
    description:
      'Explore digital hearing instruments from Oticon, Phonak, Starkey and ReSound, with personalised advice about your hearing needs.',
  },
  {
    icon: Home,
    title: 'Home Visits Available',
    description:
      'Ask about home visits if travelling to a clinic is difficult. Availability depends on your location and appointment requirements.',
  },
];

// FAQ CONTENT
const faqs = [
  {
    question: 'What is microsuction earwax removal?',
    answer:
      'Microsuction uses a small suction probe to remove excess earwax while the ear canal is viewed directly. It is a water-free method that does not use the water flushing technique associated with ear irrigation. Your suitability for treatment should be assessed before the procedure.',
  },
  {
    question: 'Where can I get ear wax removal in Bromsgrove?',
    answer:
      'Stourbridge Hearing Centre provides ear-care services for people in Bromsgrove and nearby areas. Contact the team to ask about microsuction earwax removal, assessment requirements and appointment availability.',
  },
  {
    question: 'What is the difference between microsuction and ear syringing?',
    answer:
      'Microsuction uses suction to remove earwax under direct vision, whereas ear irrigation uses water to help clear wax from the ear canal. The appropriate method depends on your ear health and clinical assessment.',
  },
  {
    question: 'Can earwax cause muffled hearing or blocked ears?',
    answer:
      'Yes. Excess earwax can contribute to muffled hearing, a blocked sensation or ear discomfort. However, these symptoms may have other causes, so an appropriate ear examination can help establish the next step.',
  },
  {
    question: 'Can I book a hearing test in Bromsgrove?',
    answer:
      'Stourbridge Hearing Centre provides hearing-care services for people in Bromsgrove and surrounding areas. Contact the team to discuss your hearing concerns and confirm hearing-assessment availability.',
  },
  {
    question: 'Where can I find hearing aids in Bromsgrove?',
    answer:
      'Stourbridge Hearing Centre provides hearing-care services, including hearing assessments and advice about digital hearing aids. Contact the team to discuss your requirements, available instruments and appointment options.',
  },
  {
    question: 'Which hearing aid brands are available?',
    answer:
      'The existing service information lists digital hearing instruments from Oticon, Phonak, Starkey and ReSound. Contact the team to confirm current availability and discuss which options may be suitable for you.',
  },
  {
    question: 'Are 0% APR finance options available for hearing aids?',
    answer:
      'The existing service information lists 0% APR finance options on selected hearing instruments, with plans over 3, 6, 10 or 12 months. Eligibility criteria and terms apply. Please contact the team to confirm the current options before making a decision.',
  },
  {
    question: 'Do you offer earwax removal home visits near Bromsgrove?',
    answer:
      'Home visits are available according to the existing service information. Contact Stourbridge Hearing Centre to confirm coverage for your location and discuss appointment availability.',
  },
  {
    question: 'Which areas around Bromsgrove do you serve?',
    answer:
      'The page is intended for people in Bromsgrove, Aston Fields, Catshill and Barnt Green. Contact the practice to confirm arrangements for your location.',
  },
];

// MAIN PAGE COMPONENT
export default function HearingAidsBromsgrove() {
  const navigate = useNavigate();

  const goToContact = () => navigate('/contact');

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Helmet>
        <title>
          Ear Wax Removal Bromsgrove | Microsuction & Hearing Aids
        </title>

        <meta
          name="description"
          content="Looking for ear wax removal in Bromsgrove? Explore professional microsuction, hearing tests and digital hearing aids at Stourbridge Hearing Centre. Ask about home visits and appointments."
        />

        <meta
          name="keywords"
          content="ear wax removal Bromsgrove, microsuction Bromsgrove, earwax removal Bromsgrove, ear wax suction Bromsgrove, blocked ears Bromsgrove, hearing tests Bromsgrove, hearing aids Bromsgrove, audiologist Bromsgrove, private hearing test Bromsgrove, digital hearing aids Bromsgrove, hearing care Bromsgrove, ear care clinic Bromsgrove, microsuction ear wax removal near me, ear wax removal Aston Fields, hearing aids Aston Fields, ear wax removal Catshill, hearing aids Catshill, ear wax removal Barnt Green, hearing care Worcestershire"
        />

        <link
          rel="canonical"
          href="https://www.stourbridgehearing.co.uk/hearing-aids-bromsgrove"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Ear Wax Removal Bromsgrove | Microsuction & Hearing Aids"
        />

        <meta
          property="og:description"
          content="Explore microsuction earwax removal, hearing assessments and digital hearing aids for Bromsgrove and nearby areas."
        />

        <meta
          property="og:url"
          content="https://www.stourbridgehearing.co.uk/hearing-aids-bromsgrove"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Ear Wax Removal Bromsgrove | Microsuction & Hearing Aids',
            url: 'https://www.stourbridgehearing.co.uk/hearing-aids-bromsgrove',
            description:
              'Information about microsuction earwax removal, hearing assessments, digital hearing aids and home visits for people in Bromsgrove and nearby areas.',
            about: [
              {
                '@type': 'Thing',
                name: 'Microsuction earwax removal',
              },
              {
                '@type': 'Thing',
                name: 'Hearing tests',
              },
              {
                '@type': 'Thing',
                name: 'Digital hearing aids',
              },
            ],
            areaServed: [
              { '@type': 'Place', name: 'Bromsgrove' },
              { '@type': 'Place', name: 'Aston Fields' },
              { '@type': 'Place', name: 'Catshill' },
              { '@type': 'Place', name: 'Barnt Green' },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-red-900/40 bg-black px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-red-200" />
          <div className="absolute -right-8 -top-12 h-56 w-56 rounded-full border border-red-200" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full border border-red-200" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          {/* HERO TEXT */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-200/25 bg-black/20 px-4 py-2 text-sm font-semibold tracking-wide text-red-100">
              <BadgeCheck className="h-4 w-4" />
              Independent hearing care • Bromsgrove
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Clearer Hearing.
              <span className="mt-1 block text-red-500">
                Better Living.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-red-50/90 sm:text-xl">
              Looking for ear wax removal in Bromsgrove, a hearing test or
              digital hearing aids? Stourbridge Hearing Centre offers
              personalised hearing-care services for Bromsgrove and
              surrounding areas.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={goToContact}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-4 text-base font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Book Your Appointment
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                Explore Our Services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-red-100/90">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-red-400" />
                HCPC-registered clinical audiology
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-red-400" />
                Home visits available
              </span>
            </div>
          </div>

          {/* HERO IMAGE AND FEATURE CARD */}
          <div className="relative min-h-[350px] overflow-hidden rounded-3xl border border-white/10 bg-gray-900 shadow-2xl sm:min-h-[430px]">
            <img
              src={PAGE_IMAGES.hero}
              alt="Woman smiling while enjoying clearer hearing"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/10" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <div className="rounded-2xl border border-white/10 bg-black/65 p-5 backdrop-blur-sm">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">
                      Hearing care, made clear
                    </p>

                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                      Care for your ears and hearing
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-red-600/20 p-3 text-red-200">
                    <HeartPulse className="h-7 w-7" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="rounded-xl bg-red-600/15 p-3 text-red-300">
                      <Ear className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="font-bold">
                        Microsuction earwax removal
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-300">
                        Water-free earwax care under direct vision, following
                        assessment.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="rounded-xl bg-red-600/15 p-3 text-red-300">
                      <Headphones className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="font-bold">
                        Hearing tests and hearing aids
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-300">
                        Hearing assessments and advice on digital hearing
                        instruments.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="rounded-xl bg-red-600/15 p-3 text-red-300">
                      <Home className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="font-bold">
                        Clinic and home visit options
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-gray-300">
                        Ask the team about the most suitable appointment for
                        you.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={goToContact}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-4 font-bold transition hover:bg-red-700"
                >
                  Speak to the Team
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-4 -left-4 -z-10 h-28 w-28 rounded-full bg-red-600/30 blur-2xl" />
          </div>
        </div>
      </section>

      {/* QUICK TRUST STRIP */}
      <section className="border-b border-white/10 bg-gray-950 px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 text-center sm:grid-cols-3 sm:gap-6">
          <div className="flex items-center justify-center gap-3 text-sm font-semibold text-gray-200">
            <ShieldCheck className="h-5 w-5 text-red-500" />
            Qualified audiology practitioners
          </div>

          <div className="flex items-center justify-center gap-3 text-sm font-semibold text-gray-200">
            <CalendarCheck className="h-5 w-5 text-red-500" />
            Prompt appointments subject to availability
          </div>

          <div className="flex items-center justify-center gap-3 text-sm font-semibold text-gray-200">
            <MapPin className="h-5 w-5 text-red-500" />
            Serving Bromsgrove and nearby areas
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-black px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-500">
              Local hearing care
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Clearer hearing starts with the right care
            </h2>

            <div className="mt-6 h-1 w-20 rounded-full bg-red-600" />
          </div>

          <div className="space-y-5 text-base leading-8 text-gray-300 sm:text-lg">
            <p>
              If you are looking for ear wax removal in Bromsgrove,
              Stourbridge Hearing Centre provides hearing-care services for
              people in Bromsgrove, Aston Fields, Catshill and Barnt Green.
              Our services include professional microsuction earwax removal,
              hearing assessments and advice on digital hearing aids.
            </p>

            <p>
              Excess earwax can sometimes cause blocked ears, muffled hearing,
              ear discomfort or a feeling of fullness. If you are experiencing
              these symptoms, an ear examination can help determine whether
              earwax is contributing to the problem and whether professional
              removal is appropriate.
            </p>

            <p>
              Microsuction earwax removal uses a small suction probe under
              direct vision to remove excess wax. Unlike ear irrigation, this
              technique does not involve flushing water into the ear canal.
              Your clinician should assess your ears and discuss the
              appropriate approach before treatment.
            </p>

            <p>
              Alongside earwax removal, we provide hearing assessments and
              advice about digital hearing aids. If you are finding
              conversations difficult, struggling to hear the television or
              noticing changes in your hearing, contact the team to discuss
              your hearing-care options.
            </p>

            <p>
              Home visits are also available according to the existing
              service information. Contact us to discuss your location,
              requirements and appointment availability.
            </p>

            <div className="flex items-start gap-3 rounded-2xl border border-red-900/60 bg-red-950/30 p-5 text-red-100">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-red-400" />

              <p className="font-semibold">
                Serving Bromsgrove, Aston Fields, Catshill and Barnt Green.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-gradient-to-b from-gray-950 via-gray-950 to-black px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-500">
              Our services
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Earwax Removal & Hearing Care in Bromsgrove
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Looking for microsuction earwax removal, a hearing test or
              digital hearing aids in Bromsgrove? Explore our services and
              contact the team to discuss your requirements.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              const isMicrosuction = service.title.includes('Microsuction');

              return (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-[1.75rem] border border-gray-800 bg-gray-900/70 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-red-700/70 hover:bg-gray-900"
                >
                  <img
                    src={
                      isMicrosuction
                        ? PAGE_IMAGES.microsuction
                        : PAGE_IMAGES.hearingAids
                    }
                    alt={
                      isMicrosuction
                        ? 'Professional microsuction earwax removal'
                        : 'Modern digital hearing aids'
                    }
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />

                  <div className="p-7 sm:p-9">
                    <div className="flex items-start gap-5">
                      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-400 transition group-hover:bg-red-600 group-hover:text-white">
                        <Icon className="h-8 w-8" />
                      </div>

                      <div>
                        <p className="text-xs font-bold tracking-[0.2em] text-red-400">
                          {service.eyebrow}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-6 leading-7 text-gray-300">
                      {isMicrosuction
                        ? 'Looking for professional microsuction earwax removal in Bromsgrove? Microsuction uses a small suction probe to remove excess earwax while the ear canal is viewed directly. It is a water-free method that may be appropriate following an assessment of your ears.'
                        : 'Our hearing-care service includes hearing assessments and advice about digital hearing aids. An assessment helps you understand your hearing and discuss the options that may suit your individual needs.'}
                    </p>

                    <p className="mt-4 leading-7 text-gray-300">
                      {isMicrosuction
                        ? 'Symptoms associated with excess earwax can include blocked ears, muffled hearing, discomfort and tinnitus. These symptoms can also have other causes, so an appropriate examination is important before treatment.'
                        : 'If you are searching for hearing aids in Bromsgrove, we can discuss instruments from Oticon, Phonak, Starkey and ReSound, as listed in our existing service information.'}
                    </p>

                    <p className="mt-4 leading-7 text-gray-300">
                      {isMicrosuction
                        ? 'If you are looking for earwax removal near Bromsgrove, Aston Fields, Catshill or Barnt Green, contact Stourbridge Hearing Centre to discuss the service and available appointments.'
                        : 'Ask the team about available hearing-aid options, fitting arrangements and aftercare. Selected hearing instruments may qualify for existing 0% APR finance options, subject to eligibility and applicable terms.'}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-gray-200"
                        >
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" />
                          <span className="leading-6">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={goToContact}
                      className="mt-8 inline-flex items-center gap-2 font-bold text-red-400 transition hover:text-red-300"
                    >
                      Ask About This Service
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* HEARING AID BRANDS AND FINANCE */}
          <div className="mt-7 rounded-2xl border border-red-900/50 bg-red-950/25 p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
                  Hearing aid brands
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  More Choice for Your Hearing
                </h3>

                <p className="mt-3 max-w-4xl leading-7 text-gray-300">
                  If you are exploring digital hearing aids in Bromsgrove,
                  the existing service information lists instruments from
                  Oticon, Phonak, Starkey and ReSound. Selected hearing
                  instruments may qualify for 0% APR finance options over
                  3, 6, 10 or 12 months. Contact the team to confirm current
                  availability, eligibility and terms.
                </p>
              </div>

              <button
                onClick={goToContact}
                className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-bold transition hover:bg-red-700"
              >
                Ask About Finance
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-black px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-500">
              Why choose us
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Personalised Hearing Care Near Bromsgrove
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              From earwax concerns to hearing-aid options, get in touch to
              discuss your needs with the team before arranging an
              appointment.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="flex gap-5 rounded-2xl border border-gray-800 bg-gray-950 p-6 transition hover:border-red-800/80 sm:p-7"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-600/10 text-red-500">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>

                    <p className="mt-3 leading-7 text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL AREA */}
      <section className="bg-black px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-7 overflow-hidden rounded-3xl border border-white/10 bg-gray-950 md:grid-cols-2">
          <img
            src={PAGE_IMAGES.local}
            alt="Bromsgrove town and local surroundings"
            className="h-64 w-full object-cover md:h-full md:min-h-72"
            loading="lazy"
          />

          <div className="p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Serving local communities
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Earwax Removal & Hearing Aids Near You
            </h2>

            <p className="mt-4 leading-7 text-gray-300">
              Our hearing-care services are available to people in
              Bromsgrove, Aston Fields, Catshill and Barnt Green. Whether
              you are looking for microsuction earwax removal, a hearing
              assessment or advice about digital hearing aids, contact our
              team to discuss your needs.
            </p>

            <p className="mt-4 leading-7 text-gray-300">
              Ask about home visits and available appointments to find out
              which arrangements may be suitable for your location.
            </p>

            <button
              onClick={goToContact}
              className="mt-6 rounded-lg bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>

      {/* LOCATION AND MAP */}
      <section className="bg-gradient-to-b from-gray-950 to-black px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-500">
                Find us
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Hearing Care for Bromsgrove and Nearby Areas
              </h2>
            </div>

            <p className="leading-7 text-gray-400">
              Stourbridge Hearing Centre provides hearing care, hearing aids
              and microsuction earwax removal. Contact us to confirm the most
              suitable clinic or home-visit arrangements for you.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-gray-800 bg-gray-900 shadow-2xl">
            <div className="relative h-[350px] sm:h-[450px] lg:h-[520px]">
              <iframe
                title="Stourbridge Hearing Centre location map"
                src="https://www.google.com/maps?q=Stourbridge%20Hearing%20Centre&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Stourbridge+Hearing+Centre"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-bold text-white shadow-xl transition hover:bg-red-700"
              >
                Get Directions
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-3 sm:p-7">
              <div className="rounded-2xl border border-gray-800 bg-black/40 p-5">
                <MapPin className="mb-3 h-6 w-6 text-red-500" />

                <h3 className="font-bold">Clinic Information</h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Contact Stourbridge Hearing Centre for details about
                  clinic appointments and hearing-care services.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-black/40 p-5">
                <Home className="mb-3 h-6 w-6 text-red-500" />

                <h3 className="font-bold">Home Visits Available</h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Home visits may be arranged for patients who are unable
                  to travel to the clinic.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-black/40 p-5">
                <Clock className="mb-3 h-6 w-6 text-red-500" />

                <h3 className="font-bold">Appointment Options</h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Same-day and next-day appointments may be available,
                  depending on the schedule.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              'Bromsgrove',
              'Aston Fields',
              'Catshill',
              'Barnt Green',
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-red-900/60 bg-red-950/30 px-4 py-2 text-sm font-semibold text-red-100"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-black px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-500">
              Helpful information
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Bromsgrove Hearing-Care FAQs
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-400">
              Answers to common questions about microsuction, blocked ears,
              hearing assessments, home visits and hearing-aid finance.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-800 bg-gray-950 p-5 transition open:border-red-900/70 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-bold sm:text-lg">
                  <span>{faq.question}</span>

                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-red-500 transition-transform group-open:rotate-180" />
                </summary>

                <p className="mt-4 max-w-3xl leading-7 text-gray-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-red-800 via-red-700 to-red-900 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white" />
          <div className="absolute -bottom-28 -left-12 h-80 w-80 rounded-full border border-white" />
        </div>

        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-100">
            Take the next step
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Looking for Ear Wax Removal or Hearing Aids in Bromsgrove?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-red-50/90 sm:text-xl">
            Contact Stourbridge Hearing Centre to ask about microsuction
            earwax removal, a hearing assessment, digital hearing aids or
            a home visit. Appointment times are subject to availability.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={goToContact}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-gray-950"
            >
              Book Now
              <ArrowUpRight className="h-5 w-5" />
            </button>

            <button
              onClick={goToContact}
              className="rounded-xl border-2 border-white/80 px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-red-800"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}