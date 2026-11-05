
import React from 'react';
import {
  Ear,
  Stethoscope,
  Star,
  Clock,
  ShieldCheck,
  MapPin,
  ChevronDown,
  Activity,
  Headphones,
  Home,
  Wrench,
  Phone,
  CheckCircle2,
  CalendarDays,
  ArrowRight,
  Navigation,
  Heart,
  Info,
  Volume2,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const pageUrl =
  'https://www.stourbridgehearing.co.uk/hearing-aids-oldbury';

const imagePaths = {
  hero: '/oldbury-hearing-examination.jpeg',
  blockedEars: '/microsuction-earwax-removall.jpeg',
  hearingChanges: '/hearing-assessment.jpeg',
  hearingAid: '/digital-hearing-aid.jpeg',
  showcase: '/premium-hearing-aids.jpeg',
  clinic: '/stourbridge-clinic-reception.jpeg',
  couple: '/happy-senior-couple.jpeg',
};

const faqs = [
  {
    question: 'Do you provide ear wax removal for people in Oldbury?',
    answer:
      'Stourbridge Hearing Centre provides professional earwax care using microsuction. If you live in Oldbury, contact the team to confirm current appointment options and whether a home visit can be arranged for your address.',
  },
  {
    question: 'What is microsuction ear wax removal?',
    answer:
      'Microsuction is a method of removing earwax using gentle suction while the ear canal is viewed by a trained practitioner. Unlike ear syringing, it does not use water. The appropriate method depends on an examination of your ears and your medical history.',
  },
  {
    question: 'Can I book a hearing test near Oldbury?',
    answer:
      'You can contact Stourbridge Hearing Centre to ask about a hearing assessment and the most suitable appointment at the Stourbridge clinic. The team can explain the assessment, available appointment times and any costs before you book.',
  },
  {
    question: 'Do you supply digital hearing aids?',
    answer:
      'The centre offers advice on digital hearing aids and solutions selected around your hearing needs, lifestyle and budget. Ask the team about available styles, rechargeable options, Bluetooth features, fitting and aftercare.',
  },
  {
    question: 'Can I get a home hearing care appointment in Oldbury?',
    answer:
      'Home hearing care is offered by Stourbridge Hearing Centre in its service area. Please contact the clinic to confirm whether your specific Oldbury address is currently covered and which services can be provided at home.',
  },
  {
    question: 'Can earwax cause blocked ears or muffled hearing?',
    answer:
      'A build-up of earwax can cause a blocked feeling, discomfort or reduced hearing. These symptoms can also have other causes, so an ear examination is important before treatment. Seek urgent medical advice for sudden hearing loss, severe pain, discharge or significant dizziness.',
  },
  {
    question: 'How do I arrange an appointment?',
    answer:
      'Use the Book an Appointment link on this page to contact Stourbridge Hearing Centre. The team can discuss your symptoms, explain the available service and confirm appointment availability before you travel.',
  },
];

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Hearing Aids and Ear Wax Removal for Oldbury',
    url: pageUrl,
    description:
      'Information about microsuction earwax removal, hearing assessments, digital hearing aids and hearing care for people in Oldbury from Stourbridge Hearing Centre.',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `https://www.stourbridgehearing.co.uk${imagePaths.hero}`,
    },
    about: [
      { '@type': 'Thing', name: 'Microsuction earwax removal' },
      { '@type': 'Thing', name: 'Hearing tests' },
      { '@type': 'Thing', name: 'Digital hearing aids' },
      { '@type': 'Thing', name: 'Tinnitus advice' },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Stourbridge Hearing Centre',
      url: 'https://www.stourbridgehearing.co.uk/',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Hearing care and microsuction earwax removal for Oldbury',
    serviceType:
      'Microsuction earwax removal, hearing assessments, hearing aid advice and tinnitus support',
    description:
      'Hearing care information and appointment enquiries for people in Oldbury. Contact Stourbridge Hearing Centre to confirm service availability, location and appointment options.',
    areaServed: {
      '@type': 'City',
      name: 'Oldbury',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Sandwell, West Midlands',
      },
    },
    provider: {
      '@type': 'Organization',
      name: 'Stourbridge Hearing Centre',
      url: 'https://www.stourbridgehearing.co.uk/',
    },
    url: pageUrl,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.stourbridgehearing.co.uk/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Hearing Aids and Ear Wax Removal Oldbury',
        item: pageUrl,
      },
    ],
  },
];

const services = [
  {
    icon: Ear,
    number: '01',
    title: 'Microsuction Ear Wax Removal',
    description:
      'Excess earwax can contribute to blocked ears, discomfort and muffled hearing. Microsuction uses controlled suction while the ear canal is viewed, without flushing water into the ear. A practitioner should first assess whether removal is suitable for you.',
    highlight:
      'If you need ear wax removal near Oldbury, contact us to discuss your symptoms and confirm appointment options.',
    image: imagePaths.blockedEars,
    alt: 'Professional microsuction earwax removal procedure',
  },
  {
    icon: Stethoscope,
    number: '02',
    title: 'Hearing Tests & Assessments',
    description:
      'A hearing assessment can help establish the type and degree of hearing difficulty and guide the next steps. Ask our team about available hearing checks, what the appointment includes and whether a full assessment is appropriate.',
    highlight:
      'We can discuss private hearing tests for Oldbury residents and confirm the location and cost before you arrange a visit.',
  },
  {
    icon: Headphones,
    number: '03',
    title: 'Digital Hearing Aids',
    description:
      'Modern digital hearing aids are available in different styles and with features that may include rechargeable batteries, Bluetooth connectivity and discreet designs. The right choice depends on your hearing results, preferences and budget.',
    highlight:
      'Get independent advice about hearing aids in Oldbury, fitting options and ongoing support from our hearing care team.',
    image: imagePaths.hearingAid,
    alt: 'Modern digital behind-the-ear hearing aid',
  },
  {
    icon: Activity,
    number: '04',
    title: 'Tinnitus Advice & Hearing Support',
    description:
      'Tinnitus is often described as ringing, buzzing or other sounds heard without an external source. Hearing assessment and tailored advice may help you understand your options and manage its impact.',
    highlight:
      'Contact us to ask about tinnitus advice and hearing support available through the centre.',
  },
  {
    icon: Wrench,
    number: '05',
    title: 'Hearing Aid Care & Adjustments',
    description:
      'If your hearing aids are not performing as expected, ask about servicing, troubleshooting, adjustments and accessories. Regular care can help keep your devices comfortable and working as intended. Confirm the support available for your make and model when you contact us.',
  },
  {
    icon: Home,
    number: '06',
    title: 'Home Visit Hearing Care',
    description:
      'Home appointments can be helpful for people who find travel difficult or prefer care in familiar surroundings. Stourbridge Hearing Centre has a home-visit service; please check directly whether your Oldbury postcode is covered and which treatments can be carried out at home.',
    link: 'https://www.stourbridgehearing.co.uk/home-visits',
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Qualified Hearing Professionals',
    description:
      "The centre's website describes care from qualified, HCPC-registered audiologists. Ask which clinician will see you and what their professional registration covers.",
  },
  {
    icon: Ear,
    title: 'Modern Microsuction',
    description:
      'Learn whether microsuction is suitable for your ears after an examination and discussion of your medical history.',
  },
  {
    icon: Star,
    title: 'Personalised Hearing Aid Advice',
    description:
      'Discuss hearing aid styles, useful features, fitting and aftercare based on your hearing needs and lifestyle.',
  },
  {
    icon: Clock,
    title: 'Appointment Information Before You Travel',
    description:
      'Contact the team to confirm appointment times, prices, location and whether home visits are available for your Oldbury address.',
  },
];

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-3">
      <span className="h-px w-8 bg-red-500" />
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-400">
        {children}
      </span>
    </div>
  );
}

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
      <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}{' '}
        {highlight && <span className="text-red-500">{highlight}</span>}
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function ImageCard({ image, alt, icon: Icon, title, description }) {
  return (
    <article className="group relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition-all duration-500 hover:-translate-y-2 hover:border-red-500/70 hover:shadow-[0_20px_60px_rgba(220,0,22,0.15)]">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/5" />
      <div className="absolute inset-x-0 bottom-0 p-7 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-red-400/40 bg-red-600 shadow-[0_0_25px_rgba(220,0,22,0.45)]">
          <Icon size={22} className="text-white" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="mx-auto max-w-xs text-sm leading-6 text-gray-300">
          {description}
        </p>
      </div>
    </article>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#171717] to-[#090909] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-red-500/70 hover:shadow-[0_15px_45px_rgba(220,0,22,0.10)] sm:p-8">
      <div className="absolute right-5 top-4 text-5xl font-black text-white/[0.035]">
        {service.number}
      </div>

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-red-500/20 bg-red-600/10 transition-all duration-300 group-hover:bg-red-600 group-hover:shadow-[0_0_25px_rgba(220,0,22,0.3)]">
        <Icon
          size={27}
          className="text-red-500 transition-colors group-hover:text-white"
        />
      </div>

      {service.image && (
        <div className="mb-6 h-44 overflow-hidden rounded-xl">
          <img
            src={service.image}
            alt={service.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <h3 className="mb-4 text-xl font-bold leading-snug text-white sm:text-2xl">
        {service.title}
      </h3>

      <p className="mb-5 flex-1 text-sm leading-7 text-gray-400 sm:text-base">
        {service.description}
      </p>

      {service.highlight && (
        <p className="border-l-2 border-red-600 pl-4 text-sm leading-7 text-gray-300">
          {service.highlight}
        </p>
      )}

      {service.link && (
        <a
          href={service.link}
          className="mt-5 inline-flex items-center gap-2 font-semibold text-red-400 transition-all hover:gap-3 hover:text-red-300"
        >
          Read about our home visit service
          <ArrowRight size={16} />
        </a>
      )}

      <div className="mt-7 h-px w-full bg-gradient-to-r from-red-600/70 via-red-600/10 to-transparent" />
    </article>
  );
}

function BenefitItem({ benefit }) {
  const Icon = benefit.icon;

  return (
    <div className="group flex gap-5 rounded-xl p-4 transition-colors duration-300 hover:bg-white/[0.035]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-600/10 transition-all group-hover:bg-red-600">
        <Icon size={24} className="text-red-500 group-hover:text-white" />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-white">
          {benefit.title}
        </h3>
        <p className="text-sm leading-7 text-gray-400">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}

export default function HearingAidsOldbury() {
  const navigate = useNavigate();

  const goToContact = () => navigate('/contact');

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white selection:bg-red-600 selection:text-white">
      <Helmet>
        <title>
          Ear Wax Removal & Hearing Aids Oldbury | Stourbridge Hearing Centre
        </title>

        <meta
          name="description"
          content="Looking for ear wax removal or hearing aids in Oldbury? Explore microsuction earwax removal, hearing assessments, digital hearing aid advice and home hearing care from Stourbridge Hearing Centre. Contact us to check availability."
        />

        <link rel="canonical" href={pageUrl} />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <meta
          name="keywords"
          content="ear wax removal Oldbury, microsuction Oldbury, earwax removal Oldbury, hearing aids Oldbury, hearing test Oldbury, private hearing test Oldbury, audiologist Oldbury, hearing care Oldbury, home visit audiologist Oldbury, tinnitus advice Oldbury, digital hearing aids Oldbury, blocked ears Oldbury"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ear Wax Removal & Hearing Aids Oldbury | Stourbridge Hearing Centre"
        />
        <meta
          property="og:description"
          content="Explore microsuction earwax removal, hearing assessments, digital hearing aids and hearing care options for Oldbury."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Stourbridge Hearing Centre" />
        <meta
          property="og:image"
          content={`https://www.stourbridgehearing.co.uk${imagePaths.hero}`}
        />
        <meta property="og:image:alt" content="Professional ear examination" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ear Wax Removal & Hearing Aids Oldbury"
        />
        <meta
          name="twitter:description"
          content="Microsuction earwax removal, hearing assessments and digital hearing aid advice for Oldbury."
        />
        <meta
          name="twitter:image"
          content={`https://www.stourbridgehearing.co.uk${imagePaths.hero}`}
        />

        {structuredData.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      {/* TOP HERO */}
      <section className="relative isolate min-h-[680px] overflow-hidden border-b border-red-600/50 bg-[#050505]">
        <div className="absolute inset-0 -z-20">
          <img
            src={imagePaths.hero}
            alt="Audiologist performing a professional ear examination"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center lg:object-right"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/95 to-black/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
        <div className="absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-red-700/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:px-10 lg:pb-28">
          <div className="mb-20 flex flex-wrap items-center justify-between gap-5">
            <a
              href="/"
              aria-label="Stourbridge Hearing Centre home"
              className="flex items-center gap-3"
            >
              
            </a>

            
          </div>

          <div className="max-w-[700px]">
            <SectionLabel>Independent Hearing Care • West Midlands</SectionLabel>

            <h1 className="mb-7 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Ear Wax Removal &
              <br />
              Hearing Aids in
              <span className="text-red-500"> Oldbury</span>
            </h1>

            <p className="max-w-xl text-base leading-8 text-gray-200 sm:text-lg">
              Looking for professional earwax removal or hearing care in
              Oldbury? Stourbridge Hearing Centre offers microsuction earwax
              removal, hearing assessments, digital hearing aid advice and
              personalised support. Contact our team to confirm the best
              appointment option for you.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={goToContact}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold text-white shadow-[0_8px_35px_rgba(220,0,22,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_12px_40px_rgba(220,0,22,0.45)]"
              >
                <CalendarDays size={19} />
                Book Your Appointment
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <a
                href="https://www.stourbridgehearing.co.uk/home-visits"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/60 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-red-500 hover:bg-red-600/10"
              >
                <Home size={18} />
                Explore Home Visits
              </a>
            </div>

            <p className="mt-6 flex items-start gap-2 text-xs leading-6 text-gray-300">
              <Info size={16} className="mt-0.5 shrink-0 text-red-400" />
              Ask us to confirm current availability and whether your Oldbury
              address is covered before travelling or booking.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      </section>

      {/* LOCAL INTRODUCTION */}
      <section className="relative bg-[#050505] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.7fr]">
          <div>
            <SectionLabel>Personalised Hearing Care</SectionLabel>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl">
              Hearing Care for
              <span className="text-red-500"> Oldbury</span> and Nearby
              Communities
            </h2>

            <p className="text-base leading-8 text-gray-400">
              Ear discomfort and changes in hearing can affect conversations,
              work and everyday life. Whether you are searching for
              <strong className="text-white">
                {' '}
                microsuction ear wax removal in Oldbury
              </strong>
              , a hearing test, or advice about hearing aids, start with a
              professional conversation about your needs. We will help you
              understand the options and confirm where and when an appointment
              is available.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-red-400">
              <CheckCircle2 size={19} />
              Professional hearing care enquiries
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <ImageCard
              image={imagePaths.blockedEars}
              alt="Close-up professional microsuction ear examination"
              icon={Ear}
              title="Blocked Ears"
              description="Find out whether earwax may be contributing to muffled hearing or a blocked-ear sensation."
            />

            <ImageCard
              image={imagePaths.hearingChanges}
              alt="Mature woman receiving a professional hearing assessment"
              icon={Activity}
              title="Hearing Changes"
              description="Ask about hearing assessments and the next steps if you are struggling to follow conversations."
            />

            <ImageCard
              image={imagePaths.hearingAid}
              alt="Modern digital hearing aid"
              icon={Headphones}
              title="Hearing Aid Advice"
              description="Explore hearing aid styles and features suited to your hearing needs, routine and budget."
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden border-y border-red-900/40 bg-gradient-to-b from-[#141010] via-[#090909] to-black px-5 py-24 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-red-700/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Expertise"
            title="Our Hearing Services for"
            highlight="Oldbury Customers"
            description="Explore the hearing care services available through Stourbridge Hearing Centre. Contact us first so we can confirm the right service, appointment location and current availability."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>

          {/* HEARING AID PRODUCT SHOWCASE */}
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-red-500/30 bg-[#100909] shadow-[0_15px_60px_rgba(220,0,22,0.08)]">
            <div className="grid items-center lg:grid-cols-[1fr_1.2fr]">
              <div className="relative z-10 p-8 sm:p-12 lg:p-14">
                <SectionLabel>Modern Hearing Technology</SectionLabel>

                <h3 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Find the Right
                  <span className="text-red-500"> Hearing Solution</span>
                  for Your Lifestyle
                </h3>

                <p className="mb-7 max-w-lg leading-8 text-gray-400">
                  Explore digital hearing aid styles and features that may
                  include rechargeable batteries, Bluetooth connectivity and
                  discreet designs. Ask our team about fitting, personalised
                  advice and ongoing aftercare.
                </p>

                <button
                  onClick={goToContact}
                  className="inline-flex items-center gap-3 rounded-full bg-red-600 px-7 py-4 font-bold text-white transition-all hover:bg-red-700"
                >
                  Discuss Hearing Aids
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="relative min-h-[320px] overflow-hidden lg:min-h-[440px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#100909] via-transparent to-transparent lg:z-10" />
                <img
                  src={imagePaths.showcase}
                  alt="Premium digital hearing aids displayed on a luxury product pedestal"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-black px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="group relative min-h-[400px] overflow-hidden rounded-[2rem] border border-red-600/40">
            <img
              src={imagePaths.clinic}
              alt="Professional hearing centre reception interior"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                <Heart size={15} className="text-red-500" />
                Independent Hearing Care
              </div>
            </div>
          </div>

          <div>
            <SectionLabel>Why Choose Us</SectionLabel>

            <h2 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              Why Choose
              <span className="text-red-500">
                {' '}
                Stourbridge
              </span>{' '}
              Hearing Centre?
            </h2>

            <p className="mb-9 leading-8 text-gray-400">
              Clear information, personal advice and hearing care options to
              help you make an informed decision.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <BenefitItem key={benefit.title} benefit={benefit} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="border-y border-red-900/40 bg-gradient-to-b from-[#171010] to-black px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Find Our Clinic"
            title="Stourbridge Hearing Centre –"
            highlight="Clinic Location"
            description="Our clinic is in Stourbridge, not Oldbury. If you are travelling from Oldbury, please check the route and confirm your appointment details with us before setting off."
          />

          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.5fr_0.75fr]">
            <div className="flex flex-col justify-center rounded-2xl border border-red-500/30 bg-[#111] p-7">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-600/10">
                <MapPin size={29} className="text-red-500" />
              </div>

              <h3 className="mb-4 text-xl font-bold text-white">
                Visiting the Clinic
              </h3>

              <p className="mb-6 text-sm leading-7 text-gray-400">
                The clinic is based in Stourbridge. Contact the team for the
                full address, directions and available appointment times.
              </p>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Stourbridge+Hearing+Centre"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 font-bold text-red-400 transition-colors hover:text-red-300"
              >
                Get Directions
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="group relative min-h-[350px] overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
              <iframe
                title="Map showing Stourbridge Hearing Centre"
                src="https://www.google.com/maps?q=Stourbridge%20Hearing%20Centre&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Stourbridge+Hearing+Centre"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-xl transition-all hover:bg-red-700"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-red-500/30 bg-[#111] p-7">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-600/10">
                <Home size={29} className="text-red-500" />
              </div>

              <h3 className="mb-4 text-xl font-bold text-white">
                Oldbury Home Visit Enquiries
              </h3>

              <p className="mb-6 text-sm leading-7 text-gray-400">
                Ask whether your Oldbury postcode is within the current home
                visit coverage and whether your required service can be
                provided at home.
              </p>

              <a
                href="https://www.stourbridgehearing.co.uk/home-visits"
                className="mt-auto inline-flex items-center gap-2 font-bold text-red-400 transition-colors hover:text-red-300"
              >
                Explore Home Visits
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.5fr]">
          <div>
            <SectionLabel>Frequently Asked Questions</SectionLabel>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl">
              Oldbury Hearing Care
              <span className="text-red-500"> FAQs</span>
            </h2>

            <p className="mb-7 leading-8 text-gray-400">
              Helpful answers about earwax removal, hearing tests and hearing
              aids for people in and around Oldbury.
            </p>

            <div className="mb-7 flex items-center gap-3 text-sm text-gray-300">
              <Volume2 size={20} className="text-red-500" />
              Clear answers about your hearing care options
            </div>

            <button
              onClick={goToContact}
              className="inline-flex items-center gap-3 rounded-full border border-red-500/60 px-6 py-3 font-semibold text-white transition-all hover:bg-red-600"
            >
              Ask Us a Question
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="space-y-3">
            {faqs.map(({ question, answer }, index) => (
              <details
                key={question}
                open={index === 0 ? undefined : false}
                className="group overflow-hidden rounded-xl border border-white/10 bg-[#111] transition-all duration-300 open:border-red-500/50 open:bg-[#171010]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-sm font-bold text-white transition-colors hover:text-red-400 sm:text-base">
                  <span className="flex items-start gap-4">
                    <span className="text-xs font-bold text-red-500">
                      0{index + 1}
                    </span>
                    {question}
                  </span>

                  <ChevronDown
                    size={20}
                    className="shrink-0 text-red-500 transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>

                <div className="border-t border-white/5 px-6 pb-6 pt-4 text-sm leading-8 text-gray-400">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden border-y border-red-500/40 bg-gradient-to-r from-[#3c0008] via-[#a00012] to-[#5a0009]">
        <div className="absolute inset-0 -z-20">
          <img
            src={imagePaths.couple}
            alt="Happy older couple enjoying life"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-left"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/20 via-[#75000b]/90 to-[#8d0011]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.5fr_0.8fr] lg:px-10">
          <div className="max-w-2xl lg:pl-44">
            <SectionLabel>Take the Next Step</SectionLabel>

            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Take the Next Step Towards Better Hearing
            </h2>

            <p className="text-base leading-8 text-red-50">
              Whether you need advice about blocked ears, a hearing assessment
              or digital hearing aids, speak to our team about the right next
              step and the options available to Oldbury residents.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-stretch">
            <button
              onClick={goToContact}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-red-700 shadow-xl transition-all hover:-translate-y-1 hover:bg-gray-100"
            >
              <CalendarDays size={19} />
              Book My Appointment
              <ArrowRight size={18} />
            </button>

            <a
              href="https://www.stourbridgehearing.co.uk/"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/80 px-7 py-4 font-bold text-white transition-all hover:bg-white hover:text-red-700"
            >
              Visit Our Website
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 border-b border-white/10 pb-8 text-center sm:flex-row sm:text-left">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-red-500/40 bg-red-600/10">
              <Ear size={25} className="text-red-500" />
            </div>
            <div className="font-bold leading-tight text-white">
              Stourbridge
              <br />
              Hearing Centre
            </div>
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="/" className="transition-colors hover:text-red-400">
              Home
            </a>
            <a
              href="/earwax-removal"
              className="transition-colors hover:text-red-400"
            >
              Ear Wax Removal
            </a>
            <a
              href="/hearing-aids"
              className="transition-colors hover:text-red-400"
            >
              Hearing Aids
            </a>
            <a
              href="/home-visits"
              className="transition-colors hover:text-red-400"
            >
              Home Visits
            </a>
            <a
              href="/contact"
              className="transition-colors hover:text-red-400"
            >
              Contact
            </a>
          </div>

          <button
            onClick={goToContact}
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-red-700"
          >
            <Phone size={16} />
            Contact Us
          </button>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 pt-7 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Stourbridge Hearing Centre. All rights
            reserved.
          </p>
          <p className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-red-500" />
            Independent • Professional • Trusted
          </p>
        </div>
      </footer>
    </main>
  );
}
