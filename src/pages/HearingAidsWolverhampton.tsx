
import React from 'react';
import {
  Ear,
  Stethoscope,
  Star,
  ShieldCheck,
  MapPin,
  ChevronDown,
  CheckCircle2,
  Phone,
  Home,
  Car,
  Bus,
  ArrowRight,
  CalendarCheck,
  Navigation,
  Headphones,
  HelpCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.stourbridgehearing.co.uk';
const PAGE_URL = `${SITE_URL}/hearing-aids-wolverhampton`;
const PHONE_DISPLAY = '01384 476 306';
const PHONE_LINK = 'tel:+441384476306';

const services = [
  {
    title: 'Microsuction Ear Wax Removal',
    description:
      'Professional earwax assessment and microsuction for people experiencing blocked ears or wax-related hearing difficulties. Treatment is provided when clinically suitable.',
    icon: Ear,
    features: [
      'Ear health assessment before treatment',
      'Microsuction rather than water irrigation',
      'Advice about earwax management',
      'Guidance on preparation before your visit',
    ],
  },
  {
    title: 'Hearing Tests and Assessments',
    description:
      'Understand your hearing with a professional assessment and advice about the next steps for your hearing health.',
    icon: Stethoscope,
    features: [
      'Hearing checks and hearing assessments',
      'Discussion of your hearing concerns',
      'Advice about hearing difficulties',
      'Recommendations based on your needs',
    ],
  },
  {
    title: 'Digital Hearing Aids',
    description:
      'Explore modern hearing aid options and receive personalised advice to help you find a solution that suits your hearing needs and lifestyle.',
    icon: Headphones,
    features: [
      'Digital hearing aid options',
      'Rechargeable and Bluetooth-enabled models',
      'Discreet hearing aid styles',
      'Fitting, adjustments and ongoing aftercare',
    ],
  },
  {
    title: 'Hearing Aid Support',
    description:
      'Get help with hearing aid maintenance, adjustments and servicing to keep your devices working as intended.',
    icon: ShieldCheck,
    features: [
      'Hearing aid cleaning and maintenance',
      'Advice about wax filters and domes',
      'Fitting and adjustment support',
      'Ongoing hearing care advice',
    ],
  },
];

const faqs = [
  {
    q: 'Where can I get ear wax removal near Wolverhampton?',
    a: 'Stourbridge Hearing Centre provides professional microsuction earwax removal at 59 High Street, Stourbridge, DY8 1DE. Contact the clinic to discuss availability and arrange an appointment.',
  },
  {
    q: 'How much does microsuction ear wax removal cost?',
    a: 'Please contact Stourbridge Hearing Centre for the current price and to confirm what is included in your appointment.',
  },
  {
    q: 'Is microsuction suitable for everyone?',
    a: 'Microsuction is a commonly used method of professional earwax removal, but it is not suitable for everyone. Your ears and medical history should be assessed before treatment.',
  },
  {
    q: 'Do I need to prepare before earwax removal?',
    a: 'Ask the clinic whether ear drops are appropriate before your appointment. Tell the team about previous ear surgery, a known perforated eardrum, ear pain, discharge or an active ear infection before treatment.',
  },
  {
    q: 'Can I book a hearing test if I live in Wolverhampton?',
    a: 'Yes. Contact Stourbridge Hearing Centre to enquire about hearing checks and assessments at the Stourbridge clinic.',
  },
  {
    q: 'Do you provide hearing aids?',
    a: 'The clinic offers digital hearing aid services, including advice about suitable options, fitting and ongoing support. Contact the team to discuss available models.',
  },
  {
    q: 'Are home visits available in Wolverhampton?',
    a: 'Home visits are offered in selected areas, subject to availability and clinical suitability. Contact the clinic to confirm whether a visit is possible at your address.',
  },
  {
    q: 'How do I get to Stourbridge Hearing Centre from Wolverhampton?',
    a: 'The clinic is at 59 High Street, Stourbridge, DY8 1DE. Use the map on this page for directions. Travel time depends on your starting point, route and traffic conditions.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'Use the Book an Appointment button to visit the contact page or call 01384 476 306.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Hearing Care in Wolverhampton',
      item: PAGE_URL,
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
};

export default function HearingAidsWolverhampton() {
  const navigate = useNavigate();

  const bookAppointment = () => navigate('/contact');

  return (
    <main className="min-h-screen bg-black text-white">
      <Helmet>
        <title>
          Ear Wax Removal Wolverhampton | Hearing Tests &amp; Hearing Aids
        </title>

        <meta
          name="description"
          content="Looking for ear wax removal near Wolverhampton? Explore professional microsuction, hearing assessments and hearing aids at Stourbridge Hearing Centre."
        />

        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ear Wax Removal Wolverhampton | Stourbridge Hearing Centre"
        />
        <meta
          property="og:description"
          content="Explore microsuction earwax removal, hearing assessments and hearing aid services at Stourbridge Hearing Centre."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="Stourbridge Hearing Centre" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ear Wax Removal Wolverhampton | Stourbridge Hearing Centre"
        />
        <meta
          name="twitter:description"
          content="Microsuction earwax removal, hearing assessments and hearing aids for patients travelling from Wolverhampton."
        />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* HERO: BACKGROUND IMAGE AND PROMOTIONAL BADGE */}
      <section className="relative isolate overflow-hidden bg-[#650b20] px-4 py-14 sm:px-6 lg:px-8 lg:py-20 xl:py-24">
        <div className="absolute inset-0 -z-20">
          <img
            src="/wolverhamptom.jpeg"
            alt=""
            fetchPriority="high"
            className="h-full w-full object-cover object-[65%_center]"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#650b20] via-[#650b20]/95 to-[#650b20]/35 lg:via-[#650b20]/90 lg:to-[#650b20]/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-5 w-5 shrink-0 text-red-200" />
              <span className="text-sm font-semibold text-white">
                Independent Hearing Care Near Wolverhampton
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ear Wax Removal, Hearing Tests &amp; Hearing Aids Near
              Wolverhampton
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-red-50 sm:text-lg">
              Professional, friendly hearing care from fully qualified
              audiologists. We offer microsuction ear wax removal, hearing
              assessments, digital hearing aids and personalised care for
              patients travelling from Wolverhampton and nearby areas.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={bookAppointment}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-red-500 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-red-600 sm:px-7"
              >
                <CalendarCheck className="h-5 w-5 shrink-0" />
                Book An Appointment
                <ArrowRight className="h-5 w-5 shrink-0" />
              </button>

              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/80 bg-black/10 px-6 py-4 font-bold text-white transition hover:bg-white hover:text-red-900 sm:px-7"
              >
                <Phone className="h-5 w-5 shrink-0" />
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <p className="mt-5 flex items-center gap-2 text-sm text-red-100">
              <MapPin className="h-4 w-4 shrink-0" />
              Based at 59 High Street, Stourbridge, DY8 1DE
            </p>
          </div>

          {/* PROMOTIONAL BADGE IMAGE */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src="/hearing-care-badge.png"
              alt="Same day appointments available. Fully qualified audiologists."
              loading="eager"
              className="h-auto w-full max-w-[300px] object-contain drop-shadow-2xl sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px]"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-gray-200 bg-white px-4 py-5 text-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
          {[
            { icon: CalendarCheck, text: 'Appointments Available' },
            { icon: ShieldCheck, text: 'Qualified Audiologists' },
            { icon: CheckCircle2, text: 'Independent Local Clinic' },
            { icon: Star, text: 'Personalised Hearing Care' },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center justify-center gap-3 lg:border-r lg:border-gray-200 lg:last:border-r-0"
            >
              <Icon className="h-8 w-8 shrink-0 text-red-800 sm:h-9 sm:w-9" />
              <span className="text-sm font-semibold sm:text-base">
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-black px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">
              Local Hearing Care
            </p>

            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Professional Hearing Care for Wolverhampton Patients
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              Find out more about earwax removal, hearing assessments and
              hearing aid services available at our independent Stourbridge
              clinic.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              Earwax build-up, changes in hearing and difficulties following
              conversations can affect everyday life. Getting the right advice
              starts with understanding your symptoms and identifying the
              appropriate next step.
            </p>

            <p>
              Stourbridge Hearing Centre welcomes patients travelling from
              Wolverhampton and surrounding communities. Our services include
              professional earwax assessment and removal, hearing checks,
              hearing aid advice, fittings and ongoing support.
            </p>

            <p>
              Our clinic is in Stourbridge rather than Wolverhampton itself.
              Contact us to discuss your needs, current appointment
              availability and the service most appropriate for you.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Blocked ears and earwax concerns',
              'Changes in hearing',
              'Hearing assessment enquiries',
              'Digital hearing aid options',
              'Hearing aid maintenance',
              'Personalised hearing care advice',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gray-800 bg-gray-900 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="bg-gradient-to-b from-gray-900 to-black px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">
              Our Services
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Hearing and Ear Care Services Near Wolverhampton
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              Explore our services and contact the clinic to find out which
              appointment is right for you.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const sectionId = [
                'ear-wax-removal',
                'hearing-tests',
                'hearing-aids',
                'hearing-aid-support',
              ][index];

              return (
                <article
                  key={service.title}
                  id={sectionId}
                  className="rounded-3xl border border-gray-800 bg-gray-900 p-7 transition-all duration-300 hover:border-red-500 sm:p-9"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-2xl bg-red-500/10 p-4">
                      <Icon className="h-9 w-9 text-red-500" />
                    </div>

                    <h3 className="text-2xl font-bold sm:text-3xl">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mb-6 leading-relaxed text-gray-400">
                    {service.description}
                  </p>

                  <h4 className="mb-4 text-lg font-semibold text-white">
                    What the service can include
                  </h4>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={bookAppointment}
                    className="mt-8 inline-flex items-center gap-2 font-bold text-red-400 transition-colors hover:text-red-300"
                  >
                    Enquire About This Service
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-gray-800 bg-black/50 p-6 text-gray-400">
            <p className="leading-relaxed">
              <strong className="text-white">Please note:</strong> The
              appropriate treatment depends on your individual circumstances
              and clinical assessment. Contact the clinic for details of
              available services, appointment arrangements and current prices.
            </p>
          </div>
        </div>
      </section>

      {/* APPOINTMENT PREPARATION */}
      <section className="bg-black px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">
              Before Your Appointment
            </p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              What to Know Before Your Visit
            </h2>

            <p className="mb-7 leading-relaxed text-gray-400">
              A little preparation can help the clinic understand your
              concerns and determine the most appropriate appointment.
            </p>

            <ul className="space-y-5">
              {[
                'Explain your symptoms and how long you have experienced them.',
                'Mention previous ear surgery, perforations, pain or discharge.',
                'Ask the clinic whether ear drops are recommended before treatment.',
                'Bring your hearing aids and any relevant hearing test information.',
                'Confirm appointment time, service cost and travel arrangements.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                  <span className="leading-relaxed text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 sm:p-10">
            <div className="mb-5 inline-flex rounded-2xl bg-red-500/10 p-4">
              <CalendarCheck className="h-10 w-10 text-red-500" />
            </div>

            <h3 className="mb-4 text-2xl font-bold">
              Ready to Arrange a Visit?
            </h3>

            <p className="mb-7 leading-relaxed text-gray-400">
              Speak to the team about your symptoms, the service you need and
              the next available appointment.
            </p>

            <button
              type="button"
              onClick={bookAppointment}
              className="w-full rounded-xl bg-red-700 px-6 py-4 font-bold text-white transition-colors hover:bg-red-600"
            >
              Contact the Clinic
            </button>

            <a
              href={PHONE_LINK}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-6 py-4 font-bold text-white transition-colors hover:border-red-500 hover:text-red-400"
            >
              <Phone className="h-5 w-5" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* HOME VISITS */}
      <section
        id="home-visits"
        className="bg-gradient-to-b from-gray-900 to-black px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">
              Domiciliary Audiology
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Home Visit Hearing Care Near Wolverhampton
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              Home visits may be suitable for people who find it difficult to
              travel to the clinic. Availability depends on your location,
              the service required and clinical suitability.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 sm:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-2xl bg-red-500/10 p-4">
                  <Home className="h-9 w-9 text-red-500" />
                </div>

                <h3 className="text-2xl font-bold">Services at Home</h3>
              </div>

              <ul className="space-y-4 text-gray-300">
                {[
                  'Ear health checks',
                  'Microsuction earwax removal where suitable',
                  'Hearing aid servicing and adjustments',
                  'Hearing care advice',
                  'Support for patients with limited mobility',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/home-visits"
                className="mt-8 inline-flex items-center gap-2 font-bold text-red-400 hover:text-red-300"
              >
                Explore Our Home Visit Service
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            
          </div>
        </div>
      </section>

      {/* LOCATION AND DIRECTIONS */}
      <section
        id="directions"
        className="bg-black px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">
              Find Our Clinic
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Directions to Stourbridge Hearing Centre
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              Our hearing clinic is located on Stourbridge High Street and
              welcomes patients travelling from Wolverhampton and surrounding
              West Midlands communities.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 shadow-2xl">
            <div className="h-[350px] w-full sm:h-[450px]">
              <iframe
                title="Map and directions to Stourbridge Hearing Centre"
                src="https://www.google.com/maps?q=59%20High%20Street%2C%20Stourbridge%2C%20DY8%201DE&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-800 bg-black/40 p-6">
                <MapPin className="mb-4 h-7 w-7 text-red-500" />

                <h3 className="mb-3 text-xl font-bold">Clinic Address</h3>

                <p className="leading-relaxed text-gray-400">
                  Stourbridge Hearing Centre
                  <br />
                  59 High Street
                  <br />
                  Stourbridge
                  <br />
                  DY8 1DE
                </p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-black/40 p-6">
                <Car className="mb-4 h-7 w-7 text-red-500" />

                <h3 className="mb-3 text-xl font-bold">Travelling by Car</h3>

                <p className="mb-4 leading-relaxed text-gray-400">
                  Use the map to plan your journey and check current traffic
                  conditions. Please confirm nearby parking arrangements
                  before travelling.
                </p>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=59%20High%20Street%2C%20Stourbridge%2C%20DY8%201DE"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-red-400 hover:text-red-300"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-black/40 p-6 sm:col-span-2 lg:col-span-1">
                <Bus className="mb-4 h-7 w-7 text-red-500" />

                <h3 className="mb-3 text-xl font-bold">Public Transport</h3>

                <p className="leading-relaxed text-gray-400">
                  Check local bus and train connections to Stourbridge before
                  your visit. Routes and journey times vary depending on your
                  starting location.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm leading-relaxed text-gray-500">
            Patients from Wolverhampton, Bilston, Sedgley, Dudley,
            Kingswinford and nearby areas can contact the clinic to plan
            their visit.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gradient-to-b from-gray-900 to-black px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">
              Patient-Focused Care
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Why Consider Stourbridge Hearing Centre?
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              Practical information, personalised advice and hearing care
              services to help you make an informed decision.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: 'Professional Care',
                description:
                  'Discuss your ear health and hearing concerns with the clinic team.',
              },
              {
                icon: Ear,
                title: 'Microsuction',
                description:
                  'Ask about professional earwax assessment and removal where suitable.',
              },
              {
                icon: Star,
                title: 'Personalised Advice',
                description:
                  'Explore hearing aid options and support suited to your needs.',
              },
              {
                icon: Phone,
                title: 'Direct Contact',
                description:
                  'Confirm prices, appointment times and service availability before booking.',
              },
            ].map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-3xl border border-gray-800 bg-gray-900 p-7 text-center transition-all duration-300 hover:border-red-500"
              >
                <Icon className="mx-auto mb-5 h-11 w-11 text-red-500" />

                <h3 className="mb-3 text-xl font-bold">{title}</h3>

                <p className="leading-relaxed text-gray-400">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-gray-800 bg-black/50 p-6">
            <p className="leading-relaxed text-gray-400">
              <strong className="text-white">Our approach:</strong> Your
              symptoms, medical history and hearing needs matter. Contact the
              clinic to discuss the service you require and whether an
              appointment is appropriate for you.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-black px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Explore More Hearing Care Services
            </h2>

            <p className="text-lg text-gray-400">
              Find further information about our clinic and home visit services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="/"
              className="group rounded-2xl border border-gray-800 bg-gray-900 p-7 transition-colors hover:border-red-500"
            >
              <h3 className="mb-3 text-xl font-bold group-hover:text-red-400">
                Stourbridge Hearing Centre
                <ArrowRight className="ml-2 inline h-5 w-5" />
              </h3>

              <p className="leading-relaxed text-gray-400">
                Explore the clinic's hearing tests, hearing aids, earwax
                removal and other hearing care services.
              </p>
            </a>

            <a
              href="/home-visits"
              className="group rounded-2xl border border-gray-800 bg-gray-900 p-7 transition-colors hover:border-red-500"
            >
              <h3 className="mb-3 text-xl font-bold group-hover:text-red-400">
                Home Visit Hearing Care
                <ArrowRight className="ml-2 inline h-5 w-5" />
              </h3>

              <p className="leading-relaxed text-gray-400">
                Learn about domiciliary audiology, home hearing care and
                the areas covered by the mobile service.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faqs"
        className="bg-gradient-to-b from-gray-900 to-black px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <HelpCircle className="mx-auto mb-5 h-10 w-10 text-red-500" />

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="text-lg leading-relaxed text-gray-400">
              Answers to common questions about earwax removal, hearing tests,
              hearing aids and appointments near Wolverhampton.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group overflow-hidden rounded-2xl border border-gray-800 bg-black/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-base font-semibold transition-colors hover:text-red-400 sm:p-6 sm:text-lg">
                  <span>{faq.q}</span>

                  <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
                </summary>

                <div className="px-5 pb-6 leading-relaxed text-gray-400 sm:px-6">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-red-700 px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-black sm:text-4xl lg:text-5xl">
            Need Help With Your Hearing?
          </h2>

          <p className="mx-auto mb-9 max-w-3xl text-lg leading-relaxed text-red-50 sm:text-xl">
            Contact Stourbridge Hearing Centre to discuss earwax removal,
            hearing assessments, hearing aids or home visit availability
            for patients travelling from Wolverhampton.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={bookAppointment}
              className="rounded-xl bg-white px-9 py-4 text-lg font-bold text-red-700 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-100"
            >
              Book an Appointment
            </button>

            <a
              href={PHONE_LINK}
              className="rounded-xl border-2 border-white px-9 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-red-700"
            >
              <Phone className="mr-2 inline h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <p className="mt-7 text-sm text-red-100">
            Stourbridge Hearing Centre · 59 High Street, Stourbridge, DY8 1DE
          </p>
        </div>
      </section>
    </main>
  );
}
