import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Phone, Mail, Check } from 'lucide-react';

export function HomeVisitsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-600 to-red-500 p-4 rounded-xl flex-shrink-0">
              <Home className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-2">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white break-words">
                  Stourbridge Hearing Centre — Home Visit Hearing Care
                </h1>
                <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap self-start">
                  Home Visits • Stourbridge
                </span>
              </div>
              <p className="text-gray-300 text-base sm:text-lg">
                Expert aftercare & hearing services at the comfort of your home
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 rounded-2xl p-6 sm:p-8 mb-12">
            <p className="text-white text-base sm:text-lg mb-6 break-words">
              Can't make it to the clinic? Our experienced audiologist will visit you at home — offering safe microsuction earwax removal, hearing aid servicing, adjustments and ongoing aftercare with the same professional standards as our Stourbridge clinic.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                Book a Home Visit
              </button>
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all"
              >
                See services ↓
              </button>
            </div>
          </div>

          <div className="mt-10 mb-12 flex justify-center">
            <div className="w-full max-w-2xl bg-black rounded-2xl overflow-hidden shadow-xl border border-red-700">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/byKbXJViT_k?rel=0&modestbranding=1&showinfo=0&controls=1"
                  title="Home Visit Hearing Care"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>


          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div id="services" className="bg-black text-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Our Home Visit Services</h2>
              <div className="space-y-6">
                <div className="flex gap-3">
                  <span className="text-red-400 flex-shrink-0">◆</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Microsuction earwax removal</h3>
                    <p className="text-gray-300">— clinic-grade, gentle, and safe at home.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-red-400 flex-shrink-0">◆</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Hearing aid support & adjustments</h3>
                    <p className="text-gray-300">— cleaning, reprogramming, battery & fitting checks.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-red-400 flex-shrink-0">◆</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Aftercare & follow-up</h3>
                    <p className="text-gray-300">— troubleshooting, counselling and rehabilitation advice.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-red-400 flex-shrink-0">◆</span>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Care home visits</h3>
                    <p className="text-gray-300">— tailored appointments for residents and carers.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Who benefits?</h3>
                <p className="text-gray-300">
                  Ideal for people with limited mobility, those who find travel difficult, busy carers, or anyone who prefers care at home.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-2xl font-bold mb-4">What to expect</h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">1.</span>
                    <span>Pre-visit discussion by phone to understand needs and any access requirements.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">2.</span>
                    <span>Prompt arrival at the agreed time, fully equipped with portable clinical tools.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">3.</span>
                    <span>Clear aftercare instructions and written notes about any adjustments made.</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-black text-white rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Book your home visit</h2>
                <p className="text-gray-300 mb-6">
                  We cover Stourbridge and nearby areas. Appointments available weekdays; emergency visits considered where clinically appropriate.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    <Phone className="inline w-5 h-5 mr-2" />
                    Call to book
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    <Mail className="inline w-5 h-5 mr-2" />
                    Email us
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h3 className="text-xl font-bold mb-4">What to have ready</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Current hearing aids (if applicable)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>Any recent audiology reports or clinic letters</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>A well-lit, quiet space for the procedure</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h3 className="text-xl font-bold mb-4">Location</h3>
                  <p className="text-gray-300">
                    Stourbridge, West Midlands — home visits within surrounding postcode areas. Call to confirm availability for your address.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently asked questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Do you offer hearing tests in Stourbridge and nearby areas?</h3>
                <p className="text-gray-300 mb-4">
                  Yes, we provide professional hearing tests in Stourbridge for patients across the local area.
                  This includes those looking for a hearing test in Dudley, Halesowen, and Brierley Hill. Each
                  assessment is carried out by an experienced hearing care professional and tailored to your
                  individual needs.
                </p>

                <h3 className="text-2xl font-bold mb-4">Which areas do you cover around Stourbridge?</h3>
                <p className="text-gray-300 mb-4">
                  We are based in Stourbridge and regularly welcome patients from:<br />
                  ✅ Dudley<br />
                  ✅ Halesowen<br />
                  ✅ Brierley Hill<br />
                  ✅ Kingswinford<br />
                  ✅ Hagley<br />
                  ✅ Bromsgrove<br />
                  ✅ Kidderminster<br />
                  ✅ Wolverhampton<br /><br />
                  We also provide:<br />
                  ✅ Hearing tests in Dudley<br />
                  ✅ Ear wax removal in Halesowen<br />
                  ✅ Microsuction ear wax removal in Brierley Hill<br />
                  ✅ Hearing care services in Kingswinford and surrounding areas<br />
                  Our clinic serves patients within approximately a 20-mile radius.<br />
                </p><br />

                <h3 className="text-2xl font-bold mb-4">Why choose Stourbridge Hearing Centre?</h3>
                <p className="text-gray-300 mb-4">
                We are a local, independent hearing care provider focused on delivering personalised care.<br /><br />
                Our patients value:<br /><br />
                ✅ Professional and honest advice<br />
                ✅ Longer appointment times<br />
                ✅ Ongoing support and aftercare<br />
                ✅ A friendly and approachable service<br /><br />
                All assessments and treatments are carried out with care and attention to ensure safe,
                professional hearing care.
                </p><br />

                <h3 className="text-2xl font-bold mb-4">Do you offer services in nearby towns like Dudley or Halesowen?</h3>
                <p className="text-gray-300 mb-4">
                Yes, many of our patients visit us from Dudley, Halesowen, and Brierley Hill.<br /><br />
                We also support patients searching for:<br /><br />
                ✅ Hearing tests in Dudley<br />
                ✅ Ear wax removal in Halesowen<br />
                ✅ Microsuction in Brierley Hill<br /><br />
                Home visits are also available in these areas where appropriate.
                </p><br />


                <p className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold inline-block">
                  If you purchase a pair of hearing aids, we refund the cost of the home visit service.
                </p>
              </div>

              <div className="bg-black text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Can I get a hearing test or ear wax removal near me?</h3>
                <p className="text-gray-300">
                  Yes. If you are searching for a hearing test near you or ear wax removal near you, our
                  Stourbridge clinic is conveniently located for patients across the local area.<br /><br />
                  We provide:<br />
                  ✅ Hearing tests<br />
                  ✅ Ear wax removal (microsuction)<br />
                  ✅ Hearing aid support<br />
                  We also offer home visits where appropriate, making it easier to access professional hearing
                  care.
                </p>
                  <br />
                <h3 className="text-2xl font-bold mb-4">Do you offer home visits for hearing services?</h3>
                <p className="text-gray-300">
                  Yes, we provide a reliable home visit service for patients who are unable to attend our clinic.
                  Our qualified hearing care professional can carry out hearing assessments, provide advice,
                  and support hearing aid users in the comfort of their own home.
                </p>
                <br />
                <h3 className="text-2xl font-bold mb-4">Who are home visits suitable for?</h3>
                <p className="text-gray-300">
                  Home visits are particularly suitable for:<br /><br />
                  ✅ Elderly patients<br />
                  ✅ Individuals with limited mobility<br />
                  ✅ Care home residents<br />
                  ✅ Anyone who prefers a private, convenient appointment<br /><br />
                  We aim to make hearing care accessible, respectful, and stress-free.
                </p><br />

                <h3 className="text-2xl font-bold mb-4">How do I book an appointment?</h3>
                <p className="text-gray-300">
                  You can book an appointment by contacting our Stourbridge clinic directly. Our team will be
                  happy to help you arrange a convenient time.
                </p><br />

                <h3 className="text-2xl font-bold mb-4">Free Hearing Aid Check – No Appointment Needed</h3>
                <p className="text-gray-300">
                We offer a free, no-obligation hearing aid check at our Stourbridge clinic. If your hearing aids
                are not performing as they should, our experienced team can carry out a quick assessment
                and provide clear, honest advice.<br /><br />
                This includes:<br /><br />
                ✅ Checking overall performance<br />
                ✅ Identifying common issues such as blockages or wear<br />
                ✅ Simple adjustments where appropriate<br />
                </p><br />
                
                <h3 className="text-2xl font-bold mb-4">Local Hearing Care in Stourbridge and Surrounding Areas</h3>
                <p className="text-gray-300">
                Stourbridge Hearing Centre is ideally located to serve patients across Stourbridge, Dudley,
                Halesowen, Brierley Hill, Kingswinford, Hagley, and surrounding West Midlands areas.<br /><br />
                We are a trusted local provider of:<br /><br />
                ✅ Hearing tests<br />
                ✅ Ear wax removal (microsuction)<br />
                ✅ Hearing aids and aftercare<br />
                ✅ Home visit hearing services<br />
                </p><br />
                

              </div>

              <div className="bg-black text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Do you provide ear wax removal (microsuction) in Stourbridge?</h3>
                <p className="text-gray-300"><br />
                  Yes, we offer professional ear wax removal in Stourbridge using microsuction, one of the
                  safest and most effective methods available.<br />
                  We also regularly help patients looking for:<br />
                  ✅ Ear wax removal in Dudley<br />
                  ✅ Ear cleaning in Halesowen<br />
                  ✅ Microsuction near Brierley Hill
                </p>
                <br />

                <h3 className="text-2xl font-bold mb-4">What is microsuction ear wax removal?</h3>
                <p className="text-gray-300"><br />
                  Microsuction is a modern technique that uses gentle suction and specialist equipment to
                  safely remove excess ear wax. Unlike traditional methods, it does not involve water and
                  allows for precise treatment under direct observation.
                </p>
                <br />

                <h3 className="text-2xl font-bold mb-4">Is ear wax removal safe?</h3>
                <p className="text-gray-300"><br />
                  Yes, when carried out by a trained and experienced professional, microsuction is a very safe
                  procedure. We always assess your ears first to ensure the treatment is suitable for you.
                </p>
                <br />

                <h3 className="text-2xl font-bold mb-4">How do I know if I need ear wax removal?</h3>
                <p className="text-gray-300"><br />
                  You may benefit from ear wax removal if you experience:<br /><br />
                  ✅ Reduced or muffled hearing<br />
                  ✅ A blocked sensation in the ear<br />
                  ✅ Tinnitus (ringing in the ears)<br />
                  ✅ Discomfort or irritation<br /><br />
                  If you are unsure, we are happy to assess your ears and provide honest advice.
                </p>
                <br />

                <h3 className="text-2xl font-bold mb-4">Walk-In Hearing Aid Cleaning Service in Stourbridge Hearing Centre</h3>
                <p className="text-gray-300"><br />
                  We provide a convenient walk-in hearing aid cleaning service in Stourbridge Centre ,
                  available 6 days a week, so you can visit us without booking in advance.<br /><br />
                  Our cleaning service helps to:<br /><br />
                  ✅ Remove wax and debris build-up<br />
                  ✅ Improve sound quality<br />
                  ✅ Extend the life of your hearing aids<br />
                  In many cases, cleaning can be completed during a short visit while you wait.
                </p><br />

                <h3 className="text-2xl font-bold mb-4">Common Signs Your Hearing Aids Need Cleaning or Repair</h3>
                <p className="text-gray-300"><br />
                You may benefit from a visit if you notice:<br /><br />
                ✅ Reduced or muffled sound<br />
                ✅ Intermittent or distorted audio<br />
                ✅ Whistling (feedback)<br />
                ✅ Visible wax build-up<br />
                ✅ A general drop in performance<br />
                Addressing these issues early can help prevent further problems.<br />
                </p><br />



              </div>

              <div className="bg-black text-white rounded-2xl p-8">

                <h3 className="text-2xl font-bold mb-4">How long does an ear wax removal or hearing appointment take?</h3>
                <p className="text-gray-300 italic mb-4">
                  Most appointments take between 15 and 30 minutes, depending on the treatment required.
                  We always allow enough time to ensure safe and thorough care.
                </p><br />

                <h3 className="text-2xl font-bold mb-4">Do you provide hearing aids in Stourbridge?</h3>
                <p className="text-gray-300 italic mb-4">
                 Yes, we offer a range of modern hearing aids from leading manufacturers. As an
                independent provider, we can recommend the most suitable option based on your hearing
                needs, lifestyle, and budget.
                </p><br />

                <h3 className="text-2xl font-bold mb-4">What happens after a hearing test?</h3>
                <p className="text-gray-300 italic mb-4">
                After your hearing test, we will clearly explain your results and discuss any next steps. If
                treatment is needed, we will guide you through your options without any pressure.
                </p><br />

                <h3 className="text-2xl font-bold mb-4">Do I need a referral for a hearing test?</h3>
                <p className="text-gray-300 italic mb-4">
                No, you can book directly with us without needing a GP referral.
                </p><br />

                <h3 className="text-2xl font-bold mb-4">How often should I have my hearing checked?</h3>
                <p className="text-gray-300 italic mb-4">
                We generally recommend a hearing test every 1–2 years, or sooner if you notice any
                changes in your hearing.
                </p><br />


              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            Stourbridge Hearing Centre — Registered audiology & hearing care. | Phone: 01384 476 306 | Email: stourbridgehearingcentre@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
