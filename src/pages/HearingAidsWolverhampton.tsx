
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
  Clock,
  ClipboardCheck,
  Activity,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.stourbridgehearing.co.uk';
const PAGE_URL = `${SITE_URL}/hearing-aids-wolverhampton`;

const PHONE_DISPLAY = '01384 476 306';
const PHONE_LINK = 'tel:+441384476306';

const CLINIC_ADDRESS =
  '59 High Street, Stourbridge, DY8 1DE';

const services = [
  {
    id: 'ear-wax-removal',
    title: 'Professional Ear Wax Removal',
    subtitle: 'Microsuction Earwax Removal',
    description:
      'Experiencing blocked ears, muffled hearing or uncomfortable earwax build-up? Stourbridge Hearing Centre provides professional ear health assessments and microsuction earwax removal for patients travelling from Wolverhampton. Your ears are examined before treatment to determine whether removal is appropriate.',
    icon: Ear,
    features: [
      'Ear examination and assessment before treatment',
      'Professional microsuction earwax removal',
      'Water-free earwax removal method',
      'Advice about ear health and earwax management',
      'Individual assessment before proceeding',
    ],
  },
  {
    id: 'hearing-tests',
    title: 'Hearing Tests and Assessments',
    subtitle: 'Understand Your Hearing',
    description:
      'If you are struggling to follow conversations, turning up the television or finding it difficult to hear clearly, a hearing assessment can help you understand your hearing. We offer hearing checks and private hearing assessments at our Stourbridge clinic.',
    icon: Stethoscope,
    features: [
      'Professional hearing checks',
      'Private hearing assessments',
      'Discussion of hearing difficulties',
      'Advice about hearing health',
      'Recommendations based on your assessment',
    ],
  },
  {
    id: 'hearing-aids',
    title: 'Digital Hearing Aids',
    subtitle: 'Modern Hearing Solutions',
    description:
      'Explore modern digital hearing aids designed to support different levels of hearing loss, personal preferences and lifestyles. We provide advice about suitable hearing aid options, fittings and ongoing support for patients visiting from Wolverhampton.',
    icon: Headphones,
    features: [
      'Modern digital hearing aid options',
      'Rechargeable hearing aids',
      'Bluetooth-enabled hearing technology',
      'Discreet hearing aid styles',
      'Professional fitting and adjustments',
      'Ongoing aftercare and support',
    ],
  },
  {
    id: 'hearing-aid-support',
    title: 'Hearing Aid Repairs and Aftercare',
    subtitle: 'Ongoing Hearing Aid Support',
    description:
      'Hearing aids benefit from regular care and maintenance. Our clinic provides hearing aid support, including adjustments, servicing and advice to help you get the best from your hearing devices.',
    icon: ShieldCheck,
    features: [
      'Hearing aid cleaning and maintenance',
      'Wax filter and dome advice',
      'Hearing aid adjustments',
      'Servicing and repair support',
      'Ongoing hearing care advice',
    ],
  },
];

const faqs = [
  {
    q: 'Where can I get professional ear wax removal near Wolverhampton?',
    a: 'Stourbridge Hearing Centre provides professional earwax assessment and microsuction earwax removal at 59 High Street, Stourbridge, DY8 1DE. We welcome patients travelling from Wolverhampton and nearby areas. Contact our team on 01384 476 306 to discuss the service and appointment availability.',
  },
  {
    q: 'Do you offer microsuction ear wax removal for Wolverhampton patients?',
    a: 'Yes. Patients travelling from Wolverhampton can enquire about microsuction earwax removal at our Stourbridge clinic. Microsuction uses gentle suction to remove earwax under visual guidance. Your ears will be assessed first to determine whether treatment is suitable.',
  },
  {
    q: 'How does microsuction ear wax removal work?',
    a: 'Microsuction is a professional earwax removal technique that uses a small suction device under direct visual guidance to remove excess earwax. Unlike ear irrigation, it does not involve flushing water into the ear canal. An assessment is important before deciding whether the procedure is appropriate.',
  },
  {
    q: 'How much does ear wax removal cost?',
    a: 'Earwax removal prices can depend on the treatment required and individual circumstances. Please call Stourbridge Hearing Centre on 01384 476 306 for our current prices and details of what is included in your appointment.',
  },
  {
    q: 'Can earwax build-up cause blocked ears and hearing difficulties?',
    a: 'Yes. Excess earwax can cause a blocked sensation, muffled hearing, ear discomfort and sometimes tinnitus. However, these symptoms can have other causes too. An ear examination can help establish whether earwax is contributing to your symptoms.',
  },
  {
    q: 'Do I need ear drops before microsuction?',
    a: 'Some patients may be advised to use suitable ear drops before their appointment to soften earwax. This is not appropriate for everyone, particularly where there may be an eardrum perforation or previous ear surgery. Contact the clinic for advice before using drops.',
  },
  {
    q: 'Can I book a hearing test near Wolverhampton?',
    a: 'Yes. Stourbridge Hearing Centre welcomes enquiries from Wolverhampton patients who would like a hearing check or private hearing assessment. Assessments take place at our Stourbridge clinic. Contact us to discuss the available appointments.',
  },
  {
    q: 'Do you provide private hearing aids?',
    a: 'Yes. We provide digital hearing aid services, including advice about modern hearing aid options, rechargeable devices, Bluetooth technology, fitting, adjustments and aftercare. Contact our team to discuss suitable options and available models.',
  },
  {
    q: 'Do you offer home visits in Wolverhampton?',
    a: 'Home visit hearing care may be available in selected areas, depending on the service required and clinical suitability. Please contact our team to confirm whether we can arrange a home visit at your address in Wolverhampton.',
  },
  {
    q: 'Where is Stourbridge Hearing Centre located?',
    a: 'Our independent hearing clinic is located at 59 High Street, Stourbridge, DY8 1DE. We are based in Stourbridge rather than Wolverhampton itself and welcome patients travelling from Wolverhampton and surrounding West Midlands communities.',
  },
  {
    q: 'How do I travel to your clinic from Wolverhampton?',
    a: 'Our clinic is at 59 High Street, Stourbridge, DY8 1DE. You can use the directions link on this page to plan your journey by car. Public transport options and journey times depend on your starting location and travel date.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'To enquire about earwax removal, hearing tests or hearing aids, call 01384 476 306 or visit our contact page to arrange an appointment. Our team can discuss the service you require and current availability.',
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
      name: 'Hearing Care Near Wolverhampton',
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
          Ear Wax Removal Near Wolverhampton | Microsuction & Hearing Aids
        </title>

        <meta
          name="description"
          content="Looking for ear wax removal near Wolverhampton? Stourbridge Hearing Centre offers professional microsuction, hearing tests and digital hearing aids at our Stourbridge clinic. Call 01384 476 306."
        />

        <meta
          name="keywords"
          content="ear wax removal Wolverhampton, ear wax removal near Wolverhampton, microsuction Wolverhampton, microsuction ear wax removal, hearing tests near Wolverhampton, hearing aids near Wolverhampton, private hearing assessment, digital hearing aids"
        />

        <link rel="canonical" href={PAGE_URL} />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ear Wax Removal Near Wolverhampton | Stourbridge Hearing Centre"
        />
        <meta
          property="og:description"
          content="Professional microsuction earwax removal, hearing tests and digital hearing aids for patients travelling from Wolverhampton to Stourbridge Hearing Centre."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="Stourbridge Hearing Centre" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ear Wax Removal Near Wolverhampton | Hearing Care"
        />
        <meta
          name="twitter:description"
          content="Discover professional microsuction, hearing assessments and hearing aid services at Stourbridge Hearing Centre."
        />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* HERO */}

      <section className="relative isolate overflow-hidden bg-[#650b20] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        <div className="absolute inset-0 -z-20">
          <img
            src="/wolverhamptom.jpeg"
            alt=""
            fetchPriority="high"
            className="h-full w-full object-cover object-[65%_center]"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#650b20] via-[#650b20]/95 to-[#650b20]/35 lg:via-[#650b20]/90 lg:to-[#650b20]/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.35fr_0.65fr]">

          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">

              <MapPin className="h-5 w-5 text-red-200" />

              <span className="text-sm font-semibold">
                Independent Hearing Care Near Wolverhampton
              </span>

            </div>

            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Ear Wax Removal Near Wolverhampton, Hearing Tests & Hearing Aids
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-red-50 sm:text-lg">
              Looking for professional ear wax removal near Wolverhampton?
              Stourbridge Hearing Centre welcomes patients travelling from
              Wolverhampton for microsuction earwax removal, hearing tests,
              private hearing assessments and modern digital hearing aids.
              Receive personalised hearing care at our independent clinic
              in Stourbridge.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <button
                type="button"
                onClick={bookAppointment}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-red-500 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-red-600"
              >
                <CalendarCheck className="h-5 w-5" />
                Book An Appointment
                <ArrowRight className="h-5 w-5" />
              </button>

              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/80 px-6 py-4 font-bold text-white transition hover:bg-white hover:text-red-900"
              >
                <Phone className="h-5 w-5" />
                Call {PHONE_DISPLAY}
              </a>

            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-red-100">
              <MapPin className="h-4 w-4" />
              59 High Street, Stourbridge, DY8 1DE
            </p>

          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <img
              src="/hearing-care-badge.png"
              alt="Hearing care at Stourbridge Hearing Centre"
              loading="eager"
              className="h-auto w-full max-w-[340px] object-contain drop-shadow-2xl lg:max-w-[420px]"
            />
          </div>

        </div>
      </section>

      {/* TRUST BAR */}

      <section className="border-b border-gray-200 bg-white px-4 py-6 text-gray-900 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">

          {[
            {
              icon: CalendarCheck,
              text: 'Appointment Enquiries',
            },
            {
              icon: ShieldCheck,
              text: 'Professional Hearing Care',
            },
            {
              icon: CheckCircle2,
              text: 'Independent Clinic',
            },
            {
              icon: Star,
              text: 'Personalised Advice',
            },
          ].map(({ icon: Icon, text }) => (

            <div
              key={text}
              className="flex items-center justify-center gap-3"
            >
              <Icon className="h-8 w-8 shrink-0 text-red-800" />

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
              Hearing Care Near Wolverhampton
            </p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Professional Ear Wax Removal and Hearing Care for Wolverhampton Patients
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              Whether you are experiencing blocked ears, struggling to hear
              conversations or considering hearing aids, finding the right
              hearing care service is important.
            </p>

          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-300">

            <p>
              Excess earwax is a common cause of blocked ears and muffled
              hearing. You may notice that sounds seem quieter, your ears
              feel full or you need to ask people to repeat themselves.
              If earwax is responsible, professional assessment and
              appropriate removal may help improve your symptoms.
            </p>

            <p>
              At Stourbridge Hearing Centre, we offer professional
              microsuction earwax removal, hearing checks, private hearing
              assessments and digital hearing aid services. Patients travel
              to our clinic from Wolverhampton and surrounding areas for
              personalised hearing care.
            </p>

            <p>
              Our clinic is located at 59 High Street, Stourbridge,
              DY8 1DE, rather than in Wolverhampton itself. If you are
              comparing ear wax removal clinics near Wolverhampton,
              we encourage you to contact us to discuss your requirements,
              appointment availability and current prices before travelling.
            </p>

          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              'Blocked ears and excess earwax',
              'Muffled hearing and hearing difficulties',
              'Professional microsuction enquiries',
              'Private hearing assessments',
              'Digital and rechargeable hearing aids',
              'Hearing aid servicing and aftercare',
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

      {/* EAR WAX REMOVAL EXPLAINED */}

      <section className="bg-gradient-to-b from-gray-900 to-black px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">
              Professional Microsuction
            </p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Microsuction Ear Wax Removal Near Wolverhampton
            </h2>

            <p className="mb-5 text-lg leading-relaxed text-gray-400">
              Microsuction is a professional method of removing excess
              earwax using a small suction device under direct visual
              guidance. It is a water-free alternative to ear irrigation
              and is commonly used in professional ear care settings.
            </p>

            <p className="mb-5 leading-relaxed text-gray-400">
              Before any treatment, your ears should be examined to
              establish whether earwax is present and whether removal
              is appropriate. Not every blocked ear is caused by wax,
              and microsuction is not suitable for every patient.
            </p>

            <p className="leading-relaxed text-gray-400">
              If you live in Wolverhampton and are looking for
              professional earwax removal, contact our Stourbridge
              clinic to discuss your symptoms and appointment options.
            </p>

            <button
              type="button"
              onClick={bookAppointment}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-700 px-6 py-4 font-bold text-white transition hover:bg-red-600"
            >
              Enquire About Ear Wax Removal
              <ArrowRight className="h-5 w-5" />
            </button>

          </div>

          <div className="rounded-3xl border border-gray-800 bg-black p-8 sm:p-10">

            <div className="mb-6 rounded-2xl bg-red-500/10 p-4 inline-flex">
              <Ear className="h-10 w-10 text-red-500" />
            </div>

            <h3 className="mb-6 text-2xl font-bold">
              What Happens During an Earwax Appointment?
            </h3>

            <div className="space-y-6">

              {[
                {
                  title: 'Discuss Your Symptoms',
                  description:
                    'Explain your ear concerns, symptoms and relevant medical history.',
                },
                {
                  title: 'Ear Examination',
                  description:
                    'Your ears are examined to establish whether wax is present and assess suitability for treatment.',
                },
                {
                  title: 'Appropriate Treatment',
                  description:
                    'Where clinically suitable, professional microsuction may be used to remove excess earwax.',
                },
                {
                  title: 'Aftercare Advice',
                  description:
                    'Receive appropriate advice about ear health and managing future earwax build-up.',
                },
              ].map((step, index) => (

                <div key={step.title} className="flex gap-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 font-bold">
                    {index + 1}
                  </div>

                  <div>
                    <h4 className="mb-1 font-bold text-white">
                      {step.title}
                    </h4>

                    <p className="text-sm leading-relaxed text-gray-400">
                      {step.description}
                    </p>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* SYMPTOMS */}

      <section className="bg-black px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">
              Understanding Earwax Build-Up
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Could Excess Earwax Be Affecting Your Hearing?
            </h2>

            <p className="mx-auto max-w-3xl leading-relaxed text-gray-400">
              Earwax normally protects the ear canal, but excessive
              build-up can sometimes cause uncomfortable symptoms
              and temporary hearing difficulties.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              'A blocked or full sensation in the ears',
              'Muffled or reduced hearing',
              'Ear discomfort or irritation',
              'Difficulty following conversations',
              'Ringing or buzzing sensations',
              'Needing to turn up the television volume',
            ].map((symptom) => (

              <div
                key={symptom}
                className="flex items-start gap-3 rounded-2xl border border-gray-800 bg-gray-900 p-6"
              >
                <Activity className="mt-1 h-6 w-6 shrink-0 text-red-500" />

                <p className="leading-relaxed text-gray-300">
                  {symptom}
                </p>

              </div>

            ))}

          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-gray-500">
            These symptoms can have causes other than earwax. Sudden
            hearing loss requires urgent medical assessment rather than
            waiting for a routine earwax appointment.
          </p>

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
              Our Hearing Services
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Hearing Care Services Near Wolverhampton
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              From microsuction earwax removal to hearing assessments
              and digital hearing aids, explore the services available
              at Stourbridge Hearing Centre.
            </p>

          </div>

          <div className="grid gap-7 lg:grid-cols-2">

            {services.map((service) => {

              const Icon = service.icon;

              return (

                <article
                  key={service.id}
                  id={service.id}
                  className="rounded-3xl border border-gray-800 bg-gray-900 p-7 transition-all duration-300 hover:border-red-500 sm:p-9"
                >

                  <div className="mb-6 flex items-center gap-4">

                    <div className="rounded-2xl bg-red-500/10 p-4">
                      <Icon className="h-9 w-9 text-red-500" />
                    </div>

                    <div>

                      <h3 className="text-xl font-bold sm:text-2xl">
                        {service.title}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-red-400">
                        {service.subtitle}
                      </p>

                    </div>

                  </div>

                  <p className="mb-6 leading-relaxed text-gray-400">
                    {service.description}
                  </p>

                  <h4 className="mb-4 text-lg font-semibold text-white">
                    What the Service Includes
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

          <div className="mt-8 rounded-2xl border border-gray-800 bg-black/50 p-6">

            <p className="leading-relaxed text-gray-400">
              <strong className="text-white">Important:</strong>
              The appropriate hearing care service depends on your
              individual needs and clinical assessment. Contact our
              team for current prices, available appointments and
              further information.
            </p>

          </div>

        </div>
      </section>

      {/* HEARING TESTS */}

      <section className="bg-black px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">
              Hearing Assessments
            </p>

            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Professional Hearing Tests Near Wolverhampton
            </h2>

            <p className="mb-5 leading-relaxed text-gray-400">
              Hearing difficulties can develop gradually. You might
              notice problems following conversations in busy places,
              hearing the television or understanding people over
              the telephone.
            </p>

            <p className="mb-5 leading-relaxed text-gray-400">
              A professional hearing assessment can help identify
              changes in your hearing and provide information about
              suitable next steps.
            </p>

            <p className="leading-relaxed text-gray-400">
              Stourbridge Hearing Centre welcomes enquiries from
              Wolverhampton residents looking for hearing checks,
              private hearing assessments and advice about hearing
              health.
            </p>

            <button
              type="button"
              onClick={bookAppointment}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-700 px-6 py-4 font-bold text-white hover:bg-red-600"
            >
              Enquire About a Hearing Test
              <ArrowRight className="h-5 w-5" />
            </button>

          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 sm:p-10">

            <Stethoscope className="mb-6 h-12 w-12 text-red-500" />

            <h3 className="mb-5 text-2xl font-bold">
              When Should You Consider a Hearing Test?
            </h3>

            <ul className="space-y-4">

              {[
                'You regularly ask people to repeat themselves.',
                'You struggle to follow conversations in groups.',
                'You find television dialogue difficult to understand.',
                'You have noticed changes in your hearing.',
                'You would like advice about hearing aid options.',
              ].map((item) => (

                <li key={item} className="flex items-start gap-3">

                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />

                  <span className="leading-relaxed text-gray-300">
                    {item}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </div>
      </section>

      {/* HEARING AIDS */}

      <section className="bg-gradient-to-b from-gray-900 to-black px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">
              Modern Hearing Technology
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Digital Hearing Aids Near Wolverhampton
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              Discover modern hearing aid technology and personalised
              hearing care at Stourbridge Hearing Centre.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                icon: Headphones,
                title: 'Digital Hearing Aids',
                description:
                  'Explore modern digital hearing solutions designed to support different hearing needs.',
              },
              {
                icon: Activity,
                title: 'Rechargeable Technology',
                description:
                  'Ask about rechargeable hearing aid options and convenient everyday use.',
              },
              {
                icon: ShieldCheck,
                title: 'Fitting and Aftercare',
                description:
                  'Receive support with hearing aid fitting, adjustments, maintenance and ongoing care.',
              },
            ].map(({ icon: Icon, title, description }) => (

              <article
                key={title}
                className="rounded-3xl border border-gray-800 bg-gray-900 p-8 text-center"
              >

                <Icon className="mx-auto mb-5 h-11 w-11 text-red-500" />

                <h3 className="mb-3 text-xl font-bold">
                  {title}
                </h3>

                <p className="leading-relaxed text-gray-400">
                  {description}
                </p>

              </article>

            ))}

          </div>

          <div className="mt-8 rounded-2xl border border-gray-800 bg-black/50 p-6 text-center">

            <p className="leading-relaxed text-gray-400">
              The most suitable hearing aid depends on your hearing
              assessment, preferences and lifestyle. Contact our
              clinic to discuss available devices and services.
            </p>

            <button
              type="button"
              onClick={bookAppointment}
              className="mt-5 font-bold text-red-400 hover:text-red-300"
            >
              Discuss Hearing Aids
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </button>

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
              Preparing for Your Ear Wax Removal Appointment
            </h2>

            <p className="mb-7 leading-relaxed text-gray-400">
              Sharing relevant information before your visit helps
              the clinic understand your symptoms and assess the
              most appropriate next step.
            </p>

            <ul className="space-y-5">

              {[
                'Explain your symptoms and how long you have experienced them.',
                'Mention any previous ear surgery or known eardrum perforation.',
                'Tell the clinician about ear pain, discharge or active infection.',
                'Ask whether ear drops are appropriate before your appointment.',
                'Confirm your appointment time and current service price.',
              ].map((item) => (

                <li key={item} className="flex items-start gap-3">

                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />

                  <span className="leading-relaxed text-gray-300">
                    {item}
                  </span>

                </li>

              ))}

            </ul>

          </div>

          <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 sm:p-10">

            <ClipboardCheck className="mb-6 h-12 w-12 text-red-500" />

            <h3 className="mb-4 text-2xl font-bold">
              Arrange Your Hearing Care Appointment
            </h3>

            <p className="mb-7 leading-relaxed text-gray-400">
              Speak to our team about earwax removal, hearing
              assessments or hearing aid services. We can discuss
              your requirements and current appointment availability.
            </p>

            <button
              type="button"
              onClick={bookAppointment}
              className="w-full rounded-xl bg-red-700 px-6 py-4 font-bold text-white hover:bg-red-600"
            >
              Contact the Clinic
            </button>

            <a
              href={PHONE_LINK}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-6 py-4 font-bold text-white hover:border-red-500 hover:text-red-400"
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
              If travelling to a hearing clinic is difficult, home
              visit hearing care may provide a convenient alternative.
              Availability depends on your location and the service
              required.
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 sm:p-10">

              <div className="mb-6 flex items-center gap-4">

                <div className="rounded-2xl bg-red-500/10 p-4">
                  <Home className="h-9 w-9 text-red-500" />
                </div>

                <h3 className="text-2xl font-bold">
                  Hearing Care at Home
                </h3>

              </div>

              <ul className="space-y-4 text-gray-300">

                {[
                  'Hearing care assessments where suitable',
                  'Hearing aid servicing and adjustments',
                  'Hearing care advice',
                  'Support for patients with limited mobility',
                  'Home visit availability enquiries',
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

            <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8 sm:p-10">

              <MapPin className="mb-6 h-11 w-11 text-red-500" />

              <h3 className="mb-4 text-2xl font-bold">
                Check Home Visit Availability
              </h3>

              <p className="mb-6 leading-relaxed text-gray-400">
                We welcome enquiries from Wolverhampton and
                surrounding communities. Contact our team with
                your postcode and the service you require so
                we can confirm whether a home visit is possible.
              </p>

              <button
                type="button"
                onClick={bookAppointment}
                className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-6 py-4 font-bold text-white hover:bg-red-600"
              >
                Enquire About Home Visits
                <ArrowRight className="h-5 w-5" />
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* LOCATION */}

      <section
        id="directions"
        className="bg-black px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">
              Find Our Hearing Clinic
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Visit Stourbridge Hearing Centre From Wolverhampton
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              Our independent hearing clinic is situated at 59 High
              Street in Stourbridge. We welcome patients travelling
              from Wolverhampton, Bilston, Sedgley, Dudley and other
              nearby West Midlands communities.
            </p>

          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 shadow-2xl">

            <div className="h-[350px] w-full sm:h-[450px]">

              <iframe
                title="Map showing Stourbridge Hearing Centre at 59 High Street, Stourbridge"
                src="https://www.google.com/maps?q=59%20High%20Street%2C%20Stourbridge%2C%20DY8%201DE&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

            <div className="grid gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-2xl border border-gray-800 bg-black/40 p-6">

                <MapPin className="mb-4 h-7 w-7 text-red-500" />

                <h3 className="mb-3 text-xl font-bold">
                  Clinic Address
                </h3>

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

                <h3 className="mb-3 text-xl font-bold">
                  Travelling by Car
                </h3>

                <p className="mb-4 leading-relaxed text-gray-400">
                  Plan your journey to our Stourbridge clinic
                  and check current traffic and parking
                  arrangements before travelling.
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

                <h3 className="mb-3 text-xl font-bold">
                  Public Transport
                </h3>

                <p className="leading-relaxed text-gray-400">
                  Check local bus and train connections to
                  Stourbridge before your appointment. Routes
                  and journey times depend on your starting point.
                </p>

              </div>

            </div>

          </div>

          <p className="mt-6 text-center text-sm leading-relaxed text-gray-500">
            We welcome enquiries from Wolverhampton, Bilston,
            Sedgley, Dudley, Kingswinford and surrounding areas.
          </p>

        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-gradient-to-b from-gray-900 to-black px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-400">
              Patient-Focused Hearing Care
            </p>

            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Why Choose Stourbridge Hearing Centre?
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
              Professional hearing services, individual attention
              and practical advice to help you make informed
              decisions about your ear and hearing health.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: ShieldCheck,
                title: 'Professional Care',
                description:
                  'Discuss your ear health and hearing concerns with our clinic team.',
              },
              {
                icon: Ear,
                title: 'Microsuction',
                description:
                  'Enquire about professional earwax assessment and removal where suitable.',
              },
              {
                icon: Star,
                title: 'Personalised Advice',
                description:
                  'Explore hearing aid options and support suited to your individual needs.',
              },
              {
                icon: Phone,
                title: 'Direct Contact',
                description:
                  'Speak to our team about prices, appointments and available services.',
              },
            ].map(({ icon: Icon, title, description }) => (

              <article
                key={title}
                className="rounded-3xl border border-gray-800 bg-gray-900 p-7 text-center transition-all duration-300 hover:border-red-500"
              >

                <Icon className="mx-auto mb-5 h-11 w-11 text-red-500" />

                <h3 className="mb-3 text-xl font-bold">
                  {title}
                </h3>

                <p className="leading-relaxed text-gray-400">
                  {description}
                </p>

              </article>

            ))}

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
              Find out more about our hearing clinic and
              available services.
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
                Explore hearing tests, digital hearing aids,
                microsuction earwax removal and professional
                hearing care at our Stourbridge clinic.
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
                Learn more about domiciliary audiology,
                home hearing care and availability in
                selected areas.
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
              Frequently Asked Questions About Ear Wax Removal and Hearing Care
            </h2>

            <p className="text-lg leading-relaxed text-gray-400">
              Find answers to common questions about microsuction,
              hearing tests, hearing aids and visiting our clinic
              from Wolverhampton.
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

      {/* FINAL CTA */}

      <section className="bg-red-700 px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-4xl">

          <h2 className="mb-6 text-3xl font-black sm:text-4xl lg:text-5xl">
            Looking for Ear Wax Removal Near Wolverhampton?
          </h2>

          <p className="mx-auto mb-9 max-w-3xl text-lg leading-relaxed text-red-50 sm:text-xl">
            Contact Stourbridge Hearing Centre to discuss
            professional microsuction earwax removal, hearing
            tests, private hearing assessments, digital hearing
            aids and home visit availability.
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
            Stourbridge Hearing Centre · 59 High Street,
            Stourbridge, DY8 1DE
          </p>

        </div>
      </section>

    </main>
  );
}
