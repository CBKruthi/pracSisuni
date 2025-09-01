import React from "react";
import "./Culture.css";
import teamImg from "../assets/team.webp";   
import growthImg from "../assets/growth.png";
import workImg from "../assets/workspace.png";
import eventsImg from "../assets/events.png";

const Culture = () => {
  return (
    <div className="culture-page-container">
      {/* Hero Section */}
      <section className="culture-hero-section">
        <div className="culture-hero-content">
          <h1 className="culture-hero-title animate-fade">
            Our Culture at Sisuni Technologies
          </h1>
          <p className="culture-hero-subtitle animate-slide">
            Innovation, collaboration, and integrity — empowering our team to
            create and thrive.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="culture-values-section">
        <h2 className="culture-section-title animate-fade">Our Core Values</h2>
        <div className="culture-values-grid">
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
            <div key={title} className="culture-value-card animate-up">
              <h3 className="culture-value-title">{title}</h3>
              <p className="culture-value-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work Environment */}
      <section className="culture-work-section">
        <div className="culture-split">
          <div className="culture-text animate-slide">
            <h2 className="culture-section-title">Work Environment</h2>
            <p className="culture-section-text">
              Our office is designed to foster creativity and productivity. Open
              spaces, collaboration zones, and quiet areas give our team the
              freedom to work in the best way for them.
            </p>
          </div>
          <img src={workImg} alt="workspace" className="culture-image animate-fade" />
        </div>
      </section>

      {/* Team & Collaboration */}
      <section className="culture-work-section">
        <div className="culture-split">
           <img src={teamImg} alt="Team" className="culture-image animate-fade" />
          <div className="culture-text animate-slide">
            <h2 className="culture-section-title">Team & Collaboration</h2>
            <p className="culture-section-text">
              We believe in the power of diverse teams. Our people-first approach
          ensures every voice is heard and valued. Regular team meetings and
          cross-functional projects keep collaboration strong.
            </p>
          </div>
         
        </div>
      </section>
      
      {/* Employee Growth */}
      <section className="culture-growth-section">
        <div className="culture-split reverse">
          <img
            src={growthImg}
            alt="Employee Growth"
            className="culture-image animate-fade"
          />
          <div className="culture-text animate-slide">
            <h2 className="culture-section-title">Employee Growth & Learning</h2>
            <p className="culture-section-text">
              From workshops and mentorship programs to certifications and
              conferences, we invest in your professional development at every
              stage of your career.
            </p>
          </div>
        </div>
      </section>

      {/* Events & Activities */}
      <section className="culture-events-section">
        <h2 className="culture-section-title">Events & Activities</h2>
        <div className="culture-events-box animate-up">
          <img src={eventsImg} alt="Events" className="culture-events-img" />
          <p className="culture-section-text">
            Team lunches, hackathons, wellness days, and community service — we
            balance hard work with fun and engagement.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="culture-cta-section">
        <h2 className="culture-cta-title animate-fade">Join Our Team</h2>
        <p className="culture-cta-text animate-up">
          Interested in being part of a thriving culture? Check out our{" "}
          <a href="/careers" className="culture-cta-link">
            Careers Page
          </a>{" "}
          or contact us at{" "}
          <a
            href="mailto:careers@sisunitech.com"
            className="culture-cta-link"
          >
            careers@sisunitech.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default Culture;