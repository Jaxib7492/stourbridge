import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

export function Blog() {
  const [activePost, setActivePost] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red-950 text-white py-16 px-4">

      <Helmet>
        <title>Blog | Stourbridge Hearing Centre</title>
      </Helmet>

      {/* ================= BLOG LIST ================= */}
      {!activePost ? (
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* BLOG 1 */}
          <div onClick={() => setActivePost("jim")}
            className="cursor-pointer bg-black/30 rounded-2xl overflow-hidden border border-red-800/40 hover:scale-[1.02] transition">
            <img src="processing.jpeg" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold">Jim’s Hearing Journey</h2>
              <p className="text-red-200 mt-2">From blocked ears to clear conversations.</p>
              <p className="mt-4 flex items-center gap-2">Read More <ArrowRight size={18} /></p>
            </div>
          </div>

          {/* BLOG 2 */}
          <div onClick={() => setActivePost("insect")}
            className="cursor-pointer bg-black/30 rounded-2xl overflow-hidden border border-red-800/40 hover:scale-[1.02] transition">
            <video className="w-full h-64 object-cover" muted>
              <source src="scope.mov" type="video/mp4" />
            </video>
            <div className="p-6">
              <h2 className="text-2xl font-bold">Live Insect Removed from Ear</h2>
              <p className="text-red-200 mt-2">Emergency same-day microsuction case.</p>
              <p className="mt-4 flex items-center gap-2">Read More <ArrowRight size={18} /></p>
            </div>
          </div>


          {/* BLOG 3 */}
          <div onClick={() => setActivePost("earinfection")}
            className="cursor-pointer bg-black/30 rounded-2xl overflow-hidden border border-red-800/40 hover:scale-[1.02] transition">
            <img
              src="ear-infection.png"
              className="w-full h-64 object-cover"
              alt="Professional ear infection assessment at Stourbridge Hearing Centre"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold">
                Ear Infections: Symptoms, Causes & Treatment
              </h2>
              <p className="text-red-200 mt-2">
                Learn the warning signs, available treatments, and when to seek professional ear care.
              </p>
              <p className="mt-4 flex items-center gap-2">
                Read More <ArrowRight size={18} />
              </p>
            </div>
          </div>

        </div>

      ) : (

      <div className="max-w-3xl mx-auto space-y-8">

        <button onClick={() => setActivePost(null)} className="text-red-300">
          ← Back
        </button>

        {/* ================= JIM FULL STORY ================= */}
        {activePost === "jim" && (
          <article className="bg-black/30 p-6 rounded-2xl border border-red-800/40 space-y-6">

            <h1 className="text-3xl font-bold">
              Jim’s Hearing Journey: From Blocked Ears to Clear Conversations.
            </h1>

            <p>
              Hearing problems don’t always happen suddenly. For many people, they develop slowly—so gradually that they’re easy to ignore at first. That was exactly the case for Jim, who came to Stourbridge Hearing Centre after struggling with blocked ears and difficulty hearing everyday conversations.
            </p>

            <h2 className="text-2xl font-bold">When Hearing Starts to Change</h2>
            <p>
              Jim first noticed something wasn’t quite right when conversations became harder to follow, especially in busy places. Voices sounded muffled, and he found himself turning the TV up more than usual.
            </p>
            <img src="processing.jpeg" />
            <p>
              Like many people, Jim assumed it was just part of getting older. But the feeling of blocked ears made him wonder if something else was going on.
            </p>

            <h2 className="text-2xl font-bold">A Simple Solution: Earwax Removal</h2>
            <p>
              Jim booked in for microsuction earwax removal in Stourbridge, hoping for a quick fix. The procedure was straightforward and comfortable. Using specialist equipment, we safely removed the built-up earwax—and the results were immediate. Jim noticed a clear improvement straight away.
            </p>
            <img src="processing1.jpeg" />
            <p>
              But although things sounded better, his hearing still wasn’t quite back to normal.
            </p>

            <h2 className="text-2xl font-bold">Looking Deeper with a Hearing Test</h2>
            <p>
              To get a clearer picture, we carried out a comprehensive hearing test at our Stourbridge clinic.
            </p>
            <img src="processing2.jpeg" />
            <p>
              The results showed mild to moderate hearing loss, particularly affecting the clarity of speech. This explained why Jim was still finding conversations difficult, even after his ears had been cleared.
            </p>

            <h2 className="text-2xl font-bold">Understanding the Next Steps</h2>
            <p>
              We talked Jim through his results in simple, easy-to-understand terms—what the hearing loss meant, how it was affecting him day-to-day, and what could be done to help.
            </p>
            <img src="processing3.jpeg" />
            <p>
              For Jim, this was a turning point. What he thought was something he just had to live with turned out to be something that could be improved.
            </p>

            <h2 className="text-2xl font-bold">A Life-Changing Difference with Hearing Aids</h2>
            <p>
              Jim decided to try modern digital hearing aids, fitted and tailored specifically to his hearing needs.
            </p>
            <img src="after-processing.jpeg" />
            <p>
              At his fitting appointment, we adjusted the devices for comfort and clarity and showed him how to use them in everyday situations.
            </p>
            <p className="font-semibold">The difference was immediate.</p>
            <p>
              Jim could hear conversations clearly again—even in noisier environments. Sounds felt more natural, and communication became easier and less tiring.
            </p>

            <h2 className="text-2xl font-bold">Ongoing Support Makes the Difference</h2>
            <p>
              Jim’s journey didn’t end there. With follow-up appointments and ongoing support, we made sure his hearing aids continued to perform at their best.
            </p>
            <img src="after-processing1.jpeg" />
            <p>
              Over time, Jim regained confidence in social situations and felt more like himself again.
            </p>

            <h2 className="text-2xl font-bold">What Jim’s Story Shows</h2>
            <p>
              Jim’s experience is something we see often at Stourbridge Hearing Centre. Hearing issues can start with something as simple as earwax build-up—but sometimes there’s more to it. The important thing is getting your hearing checked.
            </p>
            <img src="after-processing2.jpeg" />

            <h2 className="text-2xl font-bold">Take the First Step Towards Better Hearing</h2>
            <p>
              If you’ve noticed blocked ears, muffled hearing, or difficulty following conversations, it’s worth getting it looked at.
            </p>
            <img src="after-processing3.jpeg" />
            <p>
              Whether it’s earwax removal, a hearing test, or hearing aids in Stourbridge, help is available—and it can make a real difference.
            </p>
            <p>
              Book an appointment today and take the first step towards clearer hearing.
            </p>

          </article>
        )}

        {/* ================= SECOND FULL STORY ================= */}
        {activePost === "insect" && (
          <article className="bg-black/30 p-6 rounded-2xl border border-red-800/40 space-y-6">

            <h1 className="text-3xl font-bold">
              Live Insect Removed from Ear While Gardening – Same-Day Microsuction Appointment at Stourbridge Hearing Centre
            </h1>

            <video controls className="w-full">
              <source src="scope.mov" type="video/mp4" />
            </video>

            <p>
              A day spent gardening is usually relaxing and rewarding—but occasionally, unexpected things can happen.
            </p>

            <p>
              Recently, a patient contacted Stourbridge Hearing Centre after experiencing sudden discomfort, buzzing, and movement inside their ear while gardening. Concerned that an insect may have entered the ear canal, they sought urgent help.
            </p>

            <p>
              As an independent hearing clinic offering same-day ear care appointments, we understand how distressing this situation can be. We were able to see the patient promptly and provide immediate assessment and treatment.
            </p>

            <h2 className="text-2xl font-bold">Emergency Ear Care with Microsuction</h2>
            <p>
              On examination using specialist equipment, we confirmed the presence of a live insect in the ear canal. Using microsuction ear wax removal technology, the insect was carefully and safely removed under direct visualisation.
            </p>

            <p>
              Microsuction is considered one of the safest and most effective methods of ear cleaning and foreign body removal. Unlike ear syringing or irrigation, microsuction uses gentle suction and precise magnification, making it ideal for sensitive ear conditions and emergency ear care.
            </p>

            <p>
              The procedure was completed quickly and comfortably, and the patient experienced immediate relief.
            </p>

            <h2 className="text-2xl font-bold">Why Professional Ear Care Matters</h2>
            <p>
              If an insect or foreign object enters the ear, it is important not to attempt removal at home using cotton buds, tweezers, or water. Doing so can push the object deeper into the ear canal and potentially cause injury or infection.
            </p>

            <p>
              Seeking treatment from a qualified clinician ensures safe removal and reduces the risk of complications.
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Microsuction ear wax removal</li>
              <li>Emergency ear appointments</li>
              <li>Same-day ear care services</li>
              <li>Foreign body removal from the ear</li>
              <li>Professional hearing care and assessments</li>
            </ul>

            <p>
              Our experienced team is committed to delivering safe, effective, and compassionate care for every patient.
            </p>

            <p>
              Whether you have blocked ears, excess ear wax, hearing concerns, or require urgent ear treatment, we are here to help.
            </p>

            <p className="font-semibold">
              Need an urgent ear appointment?
            </p>

            <p>
              If you are experiencing ear discomfort or believe you have a foreign object in your ear, contact Stourbridge Hearing Centre for professional assessment and treatment.
            </p>

            <p>
              Same-day appointments available whenever possible.
            </p>

            <p className="text-sm text-red-300">
              Patient details have been anonymised to protect privacy.
            </p>

          </article>
        )}


        {/* ================= EAR INFECTIONS ARTICLE ================= */}
        {activePost === "earinfection" && (
          <article className="bg-black/30 p-6 rounded-2xl border border-red-800/40 space-y-6">

            <Helmet>
              <title>
                Ear Infections: Symptoms, Causes & Treatment | Stourbridge Hearing Centre
              </title>
              <meta
                name="description"
                content="Learn about ear infection symptoms, causes, treatment, hearing loss, and expert ear care in Stourbridge. Visit Stourbridge Hearing Centre for a free walk-in ear health check."
              />
            </Helmet>

            <h1 className="text-3xl font-bold">
              Ear Infections: Symptoms, Causes, Treatment & Expert Ear Care in Stourbridge
            </h1>

            <img
              src="ear-infection.jpg"
              className="w-full rounded-xl"
              alt="Ear infection examination and ear health care in Stourbridge"
            />

            <p>
              Ear infections are among the most common ear conditions affecting both children and adults.
              While many infections improve with appropriate treatment, others can cause persistent pain,
              temporary hearing loss, balance problems, or further complications if left untreated.
            </p>

            <p>
              Recognising the symptoms early and seeking professional advice can help prevent long-term
              problems, relieve discomfort, and protect your hearing.
            </p>

            <h2 className="text-2xl font-bold">What Is an Ear Infection?</h2>

            <p>
              An ear infection occurs when bacteria, viruses, or fungi cause inflammation in one or more
              parts of the ear. The symptoms and recommended treatment depend on which area of the ear
              is affected.
            </p>

            <h3 className="text-xl font-bold">Outer Ear Infection (Otitis Externa)</h3>

            <p>
              An outer ear infection affects the ear canal and is commonly known as Swimmer&apos;s Ear.
              It may develop when water or moisture becomes trapped inside the ear canal, creating an
              environment in which bacteria or fungi can grow.
            </p>

            <p>
              Other possible causes include skin irritation, scratching inside the ear, excessive moisture,
              wearing certain in-ear devices, or using cotton buds.
            </p>

            <h3 className="text-xl font-bold">Middle Ear Infection (Otitis Media)</h3>

            <p>
              A middle ear infection develops behind the eardrum and is particularly common in children.
              It often occurs after a cold, flu, allergy flare-up, or sinus infection causes fluid to build
              up inside the middle ear.
            </p>

            <p>
              The trapped fluid can place pressure on the eardrum and lead to ear pain, reduced hearing,
              fever, or a feeling of fullness inside the ear.
            </p>

            <h3 className="text-xl font-bold">Inner Ear Infection (Labyrinthitis)</h3>

            <p>
              Inner ear infections are less common but can affect the structures responsible for balance
              and hearing. They may cause dizziness, vertigo, nausea, hearing changes, and difficulty
              maintaining balance.
            </p>

            <p>
              Severe dizziness or sudden changes in hearing should always be assessed promptly by an
              appropriate healthcare professional.
            </p>

            <h2 className="text-2xl font-bold">Common Symptoms of an Ear Infection</h2>

            <p>
              Ear infection symptoms can vary depending on the type and severity of the condition.
              Common warning signs include:
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Ear pain, tenderness, or discomfort</li>
              <li>A blocked, full, or pressurised sensation inside the ear</li>
              <li>Reduced, distorted, or muffled hearing</li>
              <li>Fluid, pus, or discharge coming from the ear</li>
              <li>Itching or irritation inside the ear canal</li>
              <li>Ringing, buzzing, or other sounds in the ear</li>
              <li>Fever or feeling generally unwell</li>
              <li>Dizziness, vertigo, or balance problems</li>
              <li>Difficulty sleeping because of ear pain</li>
            </ul>

            <p>
              Children may also become unusually irritable, pull or rub their ears, cry more frequently,
              experience difficulty feeding, or have trouble sleeping.
            </p>

            <h2 className="text-2xl font-bold">What Causes Ear Infections?</h2>

            <p>
              Several illnesses, habits, and environmental factors can increase the likelihood of an
              ear infection. These include:
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Colds, flu, and other respiratory infections</li>
              <li>Sinus infections</li>
              <li>Seasonal or environmental allergies</li>
              <li>Swimming or trapped water inside the ears</li>
              <li>Excessive earwax build-up</li>
              <li>Using cotton buds or inserting objects into the ear</li>
              <li>Smoking or exposure to second-hand smoke</li>
              <li>Skin conditions affecting the ear canal</li>
              <li>A weakened immune system</li>
            </ul>

            <p>
              Avoiding cotton buds is especially important. Cotton buds often push earwax deeper into the
              ear canal and may scratch the delicate skin, increasing the risk of blockage, irritation,
              infection, or eardrum injury.
            </p>

            <h2 className="text-2xl font-bold">How Are Ear Infections Diagnosed?</h2>

            <p>
              A healthcare professional will normally examine the ear canal and eardrum using an otoscope
              or high-definition ear camera. This detailed examination can help identify visible signs of:
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Redness or inflammation</li>
              <li>Swelling inside the ear canal</li>
              <li>Fluid behind the eardrum</li>
              <li>Earwax build-up</li>
              <li>Discharge or visible infection</li>
              <li>Damage or irritation inside the ear canal</li>
              <li>Changes affecting the eardrum</li>
            </ul>

            <p>
              If your hearing has been affected, a professional hearing assessment may also be recommended
              after the infection has been treated or once the ear is safe to test.
            </p>

            <h2 className="text-2xl font-bold">Ear Infection Treatment</h2>

            <p>
              Treatment depends on the location, cause, and severity of the infection. A healthcare
              professional should advise you on the most appropriate treatment for your symptoms.
            </p>

            <h3 className="text-xl font-bold">Antibiotics</h3>

            <p>
              Some bacterial middle ear infections may require antibiotics. However, not every ear
              infection needs antibiotic treatment, and many mild infections improve naturally.
              Antibiotics should only be taken when prescribed by a qualified healthcare professional.
            </p>

            <h3 className="text-xl font-bold">Medicated Ear Drops</h3>

            <p>
              Outer ear infections are often treated with medicated ear drops. Depending on the cause,
              these may contain antibiotic, antifungal, anti-inflammatory, or combined medication.
            </p>

            <p>
              Do not use ear drops unless they have been recommended for your condition, particularly
              if there is a possibility of a perforated eardrum.
            </p>

            <h3 className="text-xl font-bold">Pain Relief</h3>

            <p>
              Paracetamol or ibuprofen may help reduce ear pain and fever while the infection heals,
              provided these medicines are suitable for you. Always follow the instructions on the
              packaging or advice from a pharmacist or healthcare professional.
            </p>

            <h3 className="text-xl font-bold">Keeping the Ear Dry</h3>

            <p>
              If you have an outer ear infection or Swimmer&apos;s Ear, keeping the ear dry is important.
              Avoid swimming and take care when showering until the infection has fully cleared.
            </p>

            <h3 className="text-xl font-bold">Professional Earwax Removal</h3>

            <p>
              Excessive earwax can sometimes block the ear, trap moisture, and make examination or
              treatment more difficult. Where clinically appropriate, professional earwax removal may
              help relieve blockage and allow the ear canal and eardrum to be examined more clearly.
            </p>

            <p>
              Earwax should not be removed at home using cotton buds, hairpins, tweezers, or other objects.
              These methods can push wax deeper, injure the ear canal, or damage the eardrum.
            </p>

            <h2 className="text-2xl font-bold">Can an Ear Infection Cause Hearing Loss?</h2>

            <p>
              Yes. Temporary hearing loss is common during an ear infection because inflammation,
              swelling, earwax, or fluid can prevent sound from travelling normally through the ear.
            </p>

            <p>
              In many cases, hearing returns once the infection and any remaining fluid have cleared.
              However, repeated or untreated infections can increase the risk of lasting hearing damage
              or other complications.
            </p>

            <p>
              If your hearing does not return to normal after treatment, arrange a professional hearing
              test to identify whether any hearing loss remains.
            </p>

            <h2 className="text-2xl font-bold">When Should You Seek Medical Advice?</h2>

            <p>
              You should contact your GP, NHS 111, or another appropriate healthcare service if you
              experience:
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Severe or worsening ear pain</li>
              <li>Symptoms that last longer than 48 hours</li>
              <li>Sudden or significant hearing loss</li>
              <li>Fluid, pus, or blood coming from the ear</li>
              <li>Recurring ear infections</li>
              <li>Severe dizziness, vertigo, or balance problems</li>
              <li>A high temperature or signs of serious illness</li>
              <li>Swelling around or behind the ear</li>
              <li>Symptoms that continue or return after treatment</li>
            </ul>

            <p>
              Babies, very young children, people with weakened immune systems, and anyone experiencing
              severe symptoms should receive appropriate medical advice promptly.
            </p>

            <h2 className="text-2xl font-bold">How to Reduce the Risk of Ear Infections</h2>

            <p>
              Although not every ear infection can be prevented, the following steps may help reduce your risk:
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>Dry your ears carefully after swimming, bathing, or showering</li>
              <li>Avoid using cotton buds or inserting objects into your ears</li>
              <li>Manage allergies and sinus problems appropriately</li>
              <li>Wash your hands regularly</li>
              <li>Avoid smoking and exposure to second-hand smoke</li>
              <li>Do not share earphones, earbuds, or hearing devices</li>
              <li>Keep hearing aids and ear moulds clean and dry</li>
              <li>Have excessive earwax assessed and professionally removed when necessary</li>
            </ul>

            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

            <h3 className="text-xl font-bold">Can an ear infection clear up on its own?</h3>

            <p>
              Some mild ear infections improve without antibiotics. However, persistent, recurring,
              severe, or worsening symptoms should always be assessed by a healthcare professional.
            </p>

            <h3 className="text-xl font-bold">Is it safe to fly with an ear infection?</h3>

            <p>
              Flying can worsen ear pain because changes in cabin pressure place additional pressure on
              the middle ear. If you have an active ear infection, severe congestion, or significant ear
              pain, seek medical advice before travelling.
            </p>

            <h3 className="text-xl font-bold">Can adults get ear infections?</h3>

            <p>
              Yes. Although middle ear infections are more common in children, adults can develop outer,
              middle, or inner ear infections.
            </p>

            <h3 className="text-xl font-bold">
              Should I use cotton buds if my ears feel blocked?
            </h3>

            <p>
              No. Cotton buds often push earwax further into the ear and may damage the ear canal or
              eardrum. A professional ear examination is a safer way to identify whether the blockage
              is caused by wax, infection, inflammation, or another problem.
            </p>

            <h3 className="text-xl font-bold">Can earwax cause an ear infection?</h3>

            <p>
              Earwax normally protects the ear. However, excessive or impacted earwax can sometimes trap
              moisture, irritate the ear canal, or prevent an ear problem from being properly examined.
              Professional assessment can determine whether earwax removal is appropriate.
            </p>

            <h2 className="text-2xl font-bold">Why Choose Stourbridge Hearing Centre?</h2>

            <p>
              At Stourbridge Hearing Centre, we understand that ear pain, blocked ears, discharge,
              dizziness, or changes in your hearing can be worrying. That is why we provide a convenient
              walk-in ear health service six days a week, with no appointment required.
            </p>

            <p>
              Using high-definition video otoscopy, we can carefully examine your ear canal and eardrum
              for visible signs of earwax build-up, inflammation, irritation, infection, or other ear
              health concerns.
            </p>

            <p>
              We can also show you the images from your ear examination and explain our findings in clear,
              easy-to-understand language.
            </p>

            <p>
              If we identify a concern that requires medical treatment, we will explain what we have found
              and guide you towards your GP, pharmacist, NHS service, or another appropriate healthcare
              professional. Where earwax is causing blockage, we can advise whether professional
              microsuction earwax removal is suitable.
            </p>

            <h3 className="text-xl font-bold">Why Visit Us?</h3>

            <ul className="list-disc ml-6 space-y-2">
              <li>Walk-in ear health checks available six days a week</li>
              <li>High-definition ear camera examinations</li>
              <li>Friendly and experienced hearing care professionals</li>
              <li>Clear advice tailored to your symptoms</li>
              <li>Guidance on whether you should see your GP or another healthcare professional</li>
              <li>Professional earwax removal assessment and treatment where appropriate</li>
              <li>Hearing tests and expert hearing care in Stourbridge</li>
              <li>Free, no-obligation ear health assessments</li>
            </ul>

            <p>
              Whether you are experiencing ear pain, blocked ears, reduced hearing, earwax build-up,
              tinnitus, or symptoms that may be linked to an ear infection, our team is here to help.
            </p>

            <h2 className="text-2xl font-bold">Book Your Free Ear Health Check Today</h2>

            <p>
              Do not ignore ear pain, blocked ears, discharge, dizziness, or changes in your hearing.
              Early assessment can help identify the cause, prevent complications, and protect your
              hearing.
            </p>

            <p>
              Visit Stourbridge Hearing Centre for a free walk-in ear health check, available six days
              a week. We will examine your ears, explain what we can see, and guide you towards the most
              appropriate next step quickly, professionally, and with no obligation.
            </p>

            <p className="font-semibold">
              Contact Stourbridge Hearing Centre or visit our walk-in clinic for professional ear care
              and expert hearing advice.
            </p>

            <p className="text-sm text-red-300">
              This article provides general information and does not replace medical advice, diagnosis,
              or treatment from a qualified healthcare professional.
            </p>

          </article>
        )}


      </div>

      )}

    </div>
  );
}