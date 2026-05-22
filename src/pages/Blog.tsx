import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

export function Blog() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-red-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* SEO */}
      <Helmet>
        <title>Jim’s Hearing Journey | Stourbridge Hearing Centre</title>
        <meta
          name="description"
          content="Read Jim’s story of transforming his hearing from blocked ears to clear conversations at Stourbridge Hearing Centre."
        />
        <link rel="canonical" href="https://www.stourbridgehearing.co.uk/blog" />
      </Helmet>

      <article className="max-w-3xl mx-auto space-y-12 bg-black bg-opacity-30 p-6 sm:p-10 rounded-2xl border border-red-800/40 shadow-2xl backdrop-blur-sm">
        
        {/* HEADER */}
        <header className="space-y-6 text-center sm:text-left border-b border-red-800/40 pb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Jim’s Hearing Journey: From Blocked Ears to Clear Conversations
          </h1>
          <p className="text-xl text-red-100 leading-relaxed font-light">
            Hearing problems don’t always happen suddenly. For many people, they develop slowly—so
            gradually that they’re easy to ignore at first. That was exactly the case for Jim, who came to
            Stourbridge Hearing Centre after struggling with blocked ears and difficulty hearing everyday
            conversations.
          </p>
        </header>

        {/* CONTENT SECTIONS */}
        <div className="space-y-10 text-red-50 text-lg leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">When Hearing Starts to Change</h2>
            <p>
              Jim first noticed something wasn’t quite right when conversations became harder to follow,
              especially in busy places. Voices sounded muffled, and he found himself turning the TV up
              more than usual.
            </p>
            <div className="my-6 rounded-xl overflow-hidden border border-red-800/20 max-h-96">
              <img 
                src="processing.jpeg" 
                alt="Patient discussing initial hearing concerns" 
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              Like many people, Jim assumed it was just part of getting older. But the feeling of blocked
              ears made him wonder if something else was going on.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">A Simple Solution: Earwax Removal</h2>
            <p>
              Jim booked in for microsuction earwax removal in Stourbridge, hoping for a quick fix.
              The procedure was straightforward and comfortable. Using specialist equipment, we safely
              removed the built-up earwax—and the results were immediate. Jim noticed a clear
              improvement straight away.
            </p>
            <div className="my-6 rounded-xl overflow-hidden border border-red-800/20 max-h-96">
              <img 
                src="processing1.jpeg" 
                alt="Earwax removal procedure via safe microsuction tool" 
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              But although things sounded better, his hearing still wasn’t quite back to normal.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Looking Deeper with a Hearing Test</h2>
            <p>
              To get a clearer picture, we carried out a comprehensive hearing test at our Stourbridge
              clinic.
            </p>
            <div className="my-6 rounded-xl overflow-hidden border border-red-800/20 max-h-96">
              <img 
                src="processing2.jpeg" 
                alt="Comprehensive diagnostic hearing assessment" 
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              The results showed mild to moderate hearing loss, particularly affecting the clarity of speech.
              This explained why Jim was still finding conversations difficult, even after his ears had been
              cleared.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Understanding the Next Steps</h2>
            <p>
              We talked Jim through his results in simple, easy-to-understand terms—what the hearing
              loss meant, how it was affecting him day-to-day, and what could be done to help.
            </p>
            <div className="my-6 rounded-xl overflow-hidden border border-red-800/20 max-h-96">
              <img 
                src="processing3.jpeg" 
                alt="Audiologist explaining hearing evaluation graphics" 
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              For Jim, this was a turning point. What he thought was something he just had to live with
              turned out to be something that could be improved.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">A Life-Changing Difference with Hearing Aids</h2>
            <p>
              Jim decided to try modern digital hearing aids, fitted and tailored specifically to his hearing
              needs.
            </p>
            <div className="my-6 rounded-xl overflow-hidden border border-red-800/20 max-h-96">
              <img 
                src="after-processing.jpeg" 
                alt="Precision fitting and calibration of slim digital hearing aids" 
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              At his fitting appointment, we adjusted the devices for comfort and clarity and showed him
              how to use them in everyday situations.
            </p>
            <p className="font-semibold text-white bg-red-500/20 inline-block px-3 py-1 rounded">
              The difference was immediate.
            </p>
            <p>
              Jim could hear conversations clearly again—even in noisier environments. Sounds felt more
              natural, and communication became easier and less tiring.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Ongoing Support Makes the Difference</h2>
            <p>
              Jim’s journey didn’t end there. With follow-up appointments and ongoing support, we made
              sure his hearing aids continued to perform at their best.
            </p>
            <div className="my-6 rounded-xl overflow-hidden border border-red-800/20 max-h-96">
              <img 
                src="after-processing1.jpeg" 
                alt="Patient attending a regular care and cleaning follow-up check" 
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              Over time, Jim regained confidence in social situations and felt more like himself again.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">What Jim’s Story Shows</h2>
            <p>
              Jim’s experience is something we see often at Stourbridge Hearing Centre. Hearing issues
              can start with something as simple as earwax build-up—but sometimes there’s more to it.
              The important thing is getting your hearing checked.
            </p>
            <div className="my-6 rounded-xl overflow-hidden border border-red-800/20 max-h-96">
              <img 
                src="after-processing2.jpeg" 
                alt="Smiling patient communicating comfortably in social setting" 
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          <section className="space-y-4 pt-4 border-t border-red-800/40">
            <h2 className="text-2xl font-bold text-white">Take the First Step Towards Better Hearing</h2>
            <p>
              If you’ve noticed blocked ears, muffled hearing, or difficulty following conversations, it’s worth
              getting it looked at.
            </p>
            <div className="my-6 rounded-xl overflow-hidden border border-red-800/20 max-h-96">
              <img 
                src="after-processing3.jpeg" 
                alt="Stourbridge hearing clinic welcoming environment" 
                className="w-full h-full object-cover"
              />
            </div>
            <p>
              Whether it’s earwax removal, a hearing test, or hearing aids in Stourbridge, help is
              available—and it can make a real difference.
            </p>
            <p>
              Book an appointment today and take the first step towards clearer hearing.
            </p>
          </section>

        </div>

        {/* CALL TO ACTION */}
        <div className="pt-6 text-center sm:text-left">
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-950 font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg group"
          >
            Book Appointment Today
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

      </article>
    </div>
  );
}