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

      </div>

      )}

    </div>
  );
}