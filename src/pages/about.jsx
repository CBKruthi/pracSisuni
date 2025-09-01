import React from "react";
import "./about.css"; 

function About() {
  return (
    <div>
      {/* About Section */}
      <section>
        <div className="about-container">
          <div className="about-content">
            {/* Left side - image */}
            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Teamwork"
              />
            </div>

            {/* Right side - text */}
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Welcome to <b>Sisuni Tech</b> Learning and Development Center. We are your
                dedicated partners in unlocking your potential and fostering professional growth.
              </p>
              <p>
                Sisuni is a reputable brand established in Kuwait and Dubai, 
                renowned for its successful import and export business. Building on this strong foundation,
                 Sisuni Tech has now expanded into the IT sector with a dynamic startup based in Bangalore, India.
              </p>
              <p>
               Our mission is to equip you with the best tools and unparalleled opportunities to excel in your career journey.
                Whether you aim to enhance your skills, transition into a new field, or advance your career,
                Sisuni Tech is here to support you every step of the way
              </p>
              <p>
                Join us and transform your professional future with <b>Sisuni Tech</b>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="leadership-container">
        <div className="leadership-content">
          <div className="leadership-left">
            <span className="tag">LEADERSHIP TEAM</span>
            <h2>Meet Our Leadership Team</h2>
            <p>
              With over a century of combined expertise, our forward-thinking and diverse leadership
              team is shaping the future of digital innovation. United by vision and driven by
              results, we're pioneering new strategies to empower growth and transformation.
            </p>
          </div>
          <div className="leadership-right">
            <div className="team-member">
              <img src="images/Sunitha.jpg" alt="Sunitha - CEO" />
              <h3>Sunitha</h3>
              <p>Chief Executive Officer</p>
            </div>
            <div className="team-member">
              <img src="assets/siva-shankar.jpg" alt="Siva Shankar - MD" />
              <h3>Siva Shankar</h3>
              <p>Managing Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Locations Section */}
      <section className="location-cards">
        <h2>Our Strategic Locations</h2>
        <div className="cards-wrapper">
          {/* Kuwait Card */}
          <div className="location-card">
            <div
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://media.tacdn.com/media/attractions-splice-spp-674x446/09/ee/46/49.jpg')",
              }}
            ></div>
            <div className="card-content">
              <h3>Kuwait</h3>
              <p>
                Strategically positioned in Kuwait, 
                we've been driving import and export operations across the Gulf for over 5+ years.
              </p>
              <a
                href="https://www.google.com/maps/place/Kuwait+Towers"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                View on Map
              </a>
            </div>
          </div>

          {/* Dubai Card */}
          <div className="location-card">
            <div
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbH_t_o5wif5ZNxgKWPeuNBRXo-N5e4SLbQ&s')",
              }}
            ></div>
            <div className="card-content">
              <h3>Dubai</h3>
              <p>
                Based in the heart of Dubai, our hub serves as a key gateway for connecting global markets through 
                agile logistics and over 5 years of proven excellence
              </p>
              <a
                href="https://www.google.com/maps/place/Burj+Khalifa"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                View on Map
              </a>
            </div>
          </div>
          {/*india */}
          <div className="location-card">
            <div
              className="card-image"
              style={{
                backgroundImage:
                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgAiRRxrojg5P_yr4ZB1yE6bIyWVLugwyqmg&s')",
              }}
            ></div>
            <div className="card-content">
              <h3>Bengaluru</h3>
              <p>
                Strategically based in Bengaluru, India, Sisuni Tech is a rising IT startup with over 1+ year of experience in 
                delivering innovative solutions and empowering talent through technology-driven learning.
              </p>
              <a
                href="https://www.google.com/maps/place/bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;