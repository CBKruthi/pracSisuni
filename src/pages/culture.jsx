import React from "react";
import teamImg from "../assets/team.webp";   
import growthImg from "../assets/growth.png";
import workImg from "../assets/workspace.png";
import eventsImg from "../assets/events.png";

const Culture = () => {
  return (
    <div className="font-poppins text-gray-800 leading-relaxed">
      {/* Hero Section */}
      <section className="mt-14 text-gray-900 text-center py-10 relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] rounded-full -top-36 -left-24 blur-[120px]"></div>
        <div className="culture-hero-content">
          <h1 className="text-5xl font-bold animate-fade-in">
            Our Culture at Sisuni Technologies
          </h1>
          <p className="text-xl mt-4 text-gray-900 animate-slide-in">
            Innovation, collaboration, and integrity — empowering our team to
            create and thrive.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-[8%] bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-dark-blue mb-4 animate-fade-in">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-8">
          {[
            {
              title: "Innovation",
              desc: "Constantly seeking new ways to solve problems and improve.",
            },
            {
              title: "Collaboration",
              desc: "Teamwork is at the heart of everything we do.",
            },
            {
              title: "Integrity",
              desc: "Acting with honesty and transparency in all dealings.",
            },
            {
              title: "Diversity",
              desc: "Embracing different perspectives and backgrounds.",
            },
            {
              title: "Growth",
              desc: "Prioritizing continuous learning and development.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 animate-fade-up">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work Environment */}
      <section className="culture-work-section">
        <div className="flex items-center gap-12 py-20 px-[8%] flex-wrap">
          <div className="flex-1 animate-slide-in">
            <h2 className="text-3xl font-bold text-dark-blue mb-4">Work Environment</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our office is designed to foster creativity and productivity. Open
              spaces, collaboration zones, and quiet areas give our team the
              freedom to work in the best way for them.
            </p>
          </div>
          <img src={workImg} alt="workspace" className="w-[450px] max-w-full rounded-2xl shadow-xl animate-fade-in" />
        </div>
      </section>

      {/* Team & Collaboration */}
      <section className="culture-work-section">
        <div className="flex items-center gap-12 py-20 px-[8%] flex-wrap">
           <img src={teamImg} alt="Team" className="w-[450px] max-w-full rounded-2xl shadow-xl animate-fade-in" />
          <div className="flex-1 animate-slide-in">
            <h2 className="text-3xl font-bold text-dark-blue mb-4">Team & Collaboration</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in the power of diverse teams. Our people-first approach
          ensures every voice is heard and valued. Regular team meetings and
          cross-functional projects keep collaboration strong.
            </p>
          </div>
        </div>
      </section>
      
      {/* Employee Growth */}
      <section className="culture-growth-section">
        <div className="flex items-center gap-12 py-20 px-[8%] flex-wrap flex-row-reverse">
          <img
            src={growthImg}
            alt="Employee Growth"
            className="w-[450px] max-w-full rounded-2xl shadow-xl animate-fade-in"
          />
          <div className="flex-1 animate-slide-in">
            <h2 className="text-3xl font-bold text-dark-blue mb-4">Employee Growth & Learning</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From workshops and mentorship programs to certifications and
              conferences, we invest in your professional development at every
              stage of your career.
            </p>
          </div>
        </div>
      </section>

      {/* Events & Activities */}
      <section className="py-20 px-[8%] text-center">
        <h2 className="text-3xl font-bold text-dark-blue mb-4">Events & Activities</h2>
        <div className="mt-8 animate-fade-up">
          <img src={eventsImg} alt="Events" className="w-full max-w-[700px] rounded-2xl mb-6 shadow-lg mx-auto" />
          <p className="text-lg text-gray-600 leading-relaxed">
            Team lunches, hackathons, wellness days, and community service — we
            balance hard work with fun and engagement.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-black text-center py-0">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in">Join Our Team</h2>
        <p className="text-lg animate-fade-up">
          Interested in being part of a thriving culture? Check out our{" "}
          <a href="/careers" className="text-cyan-400 font-semibold no-underline hover:underline">
            Careers Page
          </a>{" "}
          or contact us at{" "}
          <a
            href="mailto:careers@sisunitech.com"
            className="text-cyan-400 font-semibold no-underline hover:underline"
          >
            careers@sisunitech.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default About;