import React from "react";

function About() {
  return (
    <div>
      {/* About Section */}
      <section>
        <div className="bg-blue-50 py-20 px-16 flex justify-center mt-[9%]">
          <div className="flex items-center max-w-6xl gap-10 flex-wrap">
            {/* Left side - image */}
            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Teamwork"
                className="w-full max-w-[450px] h-auto rounded-xl object-cover"
              />
            </div>

            {/* Right side - text */}
            <div className="flex-1 min-w-[280px]">
              <h2 className="text-3xl font-bold mb-5 text-blue-900">About Us</h2>
              <p className="text-lg text-blue-800 mb-4 leading-relaxed">
                Welcome to <b>Sisuni Tech</b> Learning and Development Center. We are your
                dedicated partners in unlocking your potential and fostering professional growth.
              </p>
              <p className="text-lg text-blue-800 mb-4 leading-relaxed">
                Sisuni is a reputable brand established in Kuwait and Dubai, 
                renowned for its successful import and export business. Building on this strong foundation,
                 Sisuni Tech has now expanded into the IT sector with a dynamic startup based in Bangalore, India.
              </p>
              <p className="text-lg text-blue-800 mb-4 leading-relaxed">
               Our mission is to equip you with the best tools and unparalleled opportunities to excel in your career journey.
                Whether you aim to enhance your skills, transition into a new field, or advance your career,
                Sisuni Tech is here to support you every step of the way
              </p>
              <p className="text-lg text-blue-800 mb-4 leading-relaxed">
                Join us and transform your professional future with <b>Sisuni Tech</b>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="flex flex-wrap py-40 px-40 bg-gray-50 h-[30%]">
        <div className="flex flex-row justify-between max-w-6xl mx-auto gap-10 flex-wrap">
          <div className="flex-1 min-w-[400px]">
            <span className="text-sm font-bold text-blue-600 uppercase">LEADERSHIP TEAM</span>
            <h2 className="text-3xl my-2">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over a century of combined expertise, our forward-thinking and diverse leadership
              team is shaping the future of digital innovation. United by vision and driven by
              results, we're pioneering new strategies to empower growth and transformation.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 flex-1 min-w-[400px] items-start">
            <div className="w-45 text-center">
              <img src="images/Sunitha.jpg" alt="Sunitha - CEO" className="w-full h-auto rounded-full object-cover" />
              <h3 className="mt-3 text-lg">Sunitha</h3>
              <p className="text-sm text-gray-500">Chief Executive Officer</p>
            </div>
            <div className="w-45 text-center">
              <img src="assets/siva-shankar.jpg" alt="Siva Shankar - MD" className="w-full h-auto rounded-full object-cover" />
              <h3 className="mt-3 text-lg">Siva Shankar</h3>
              <p className="text-sm text-gray-500">Managing Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Locations Section */}
      <section className="py-15 px-5 bg-gray-100 text-center font-sans">
        <h2 className="text-3xl mb-10 text-gray-800">Our Strategic Locations</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Kuwait Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm w-full transition-transform duration-300 hover:-translate-y-1">
            <div
              className="h-50 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://media.tacdn.com/media/attractions-splice-spp-674x446/09/ee/46/49.jpg')",
              }}
            ></div>
            <div className="p-5">
              <h3 className="mt-0 text-xl text-blue-600">Kuwait</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Strategically positioned in Kuwait, 
                we've been driving import and export operations across the Gulf for over 5+ years.
              </p>
              <a
                href="https://www.google.com/maps/place/Kuwait+Towers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-blue-600 no-underline font-bold hover:underline"
              >
                View on Map
              </a>
            </div>
          </div>

          {/* Dubai Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm w-full transition-transform duration-300 hover:-translate-y-1">
            <div
              className="h-50 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbH_t_o5wif5ZNxgKWPeuNBRXo-N5e4SLbQ&s')",
              }}
            ></div>
            <div className="p-5">
              <h3 className="mt-0 text-xl text-blue-600">Dubai</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Based in the heart of Dubai, our hub serves as a key gateway for connecting global markets through 
                agile logistics and over 5 years of proven excellence
              </p>
              <a
                href="https://www.google.com/maps/place/Burj+Khalifa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-blue-600 no-underline font-bold hover:underline"
              >
                View on Map
              </a>
            </div>
          </div>

          {/* India Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm w-full transition-transform duration-300 hover:-translate-y-1">
            <div
              className="h-50 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgAiRRxrojg5P_yr4ZB1yE6bIyWVLugwyqmg&s')",
              }}
            ></div>
            <div className="p-5">
              <h3 className="mt-0 text-xl text-blue-600">Bengaluru</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Strategically based in Bengaluru, India, Sisuni Tech is a rising IT startup with over 1+ year of experience in 
                delivering innovative solutions and empowering talent through technology-driven learning.
              </p>
              <a
                href="https://www.google.com/maps/place/bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-blue-600 no-underline font-bold hover:underline"
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