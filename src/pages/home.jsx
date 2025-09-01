import React from "react";
import { Link } from "react-router-dom";
import Globe from "../component/Globe";

// Import section images
import webImg from "../assets/web.jpg";
import cyberImg from "../assets/cybersecurity.jpg";
import iotImg from "../assets/iot.jpg";
import aiImg from "../assets/ai.jpg";

// Import creative icons from lucide-react
import {
  Code,
  Layout,
  ShieldCheck,
  Lock,
  FileCheck,
  Users,
  Home as HomeIcon,
  Factory,
  Rss,
  BarChart3,
  MessageCircle,
  Eye,
  Bot,
  UserCheck,
  CheckCircle,
  Handshake
} from "lucide-react";

const sections = [
  {
    tag: "TRANSFORMING IDEAS INTO POWERFUL WEB SOLUTIONS",
    title: ["From vision", "to apps that amaze"],
    description:
      "Businesses evolve continuously to survive, grow, sustain, and thrive, and we are here to serve you from shaping your initial idea to creating web apps that delight your customers. Collaborating with our domain experts and leveraging cutting-edge technologies, we envision and design futuristic web apps that streamline your complex core systems.",
    features: [
      { icon: <Layout size={28} />, title: "Slick Websites", description: "Crafting digital experiences that captivate", color: "blue" },
      { icon: <Code size={28} />, title: "Smooth Web Apps", description: "Flawless user journey with speed and usability", color: "orange" },
    ],
    imgAlt: "Developer Setup",
    imgSrc: webImg,
  },
  {
    tag: "CYBERSECURITY PROJECTS & SOLUTIONS",
    title: ["Comprehensive", "security solutions"],
    description:
      "Protect your digital assets with end-to-end cybersecurity services. From identifying vulnerabilities to ensuring compliance with global security standards, we help safeguard your business from threats and provide proactive measures for long-term resilience.",
    features: [
      { icon: <ShieldCheck size={28} />, title: "Security Audits", description: "Identify and eliminate vulnerabilities", color: "blue" },
      { icon: <Lock size={28} />, title: "Data Encryption", description: "Ensure confidentiality with advanced encryption", color: "blue" },
      { icon: <FileCheck size={28} />, title: "Compliance Management", description: "Meet global security standards", color: "orange" },
      { icon: <Users size={28} />, title: "Security Training", description: "Empower employees to prevent cyber risks", color: "orange" },
    ],
    imgAlt: "Cybersecurity Solutions",
    imgSrc: cyberImg,
  },
  {
    tag: "IOT PROJECTS",
    title: ["IoT-based", "Projects & Automation"],
    description:
      "Smart automation systems that connect and optimize processes across homes, industries, and enterprises. Our IoT solutions leverage sensor networks, real-time monitoring, and intelligent analytics to deliver seamless connectivity and efficiency.",
    features: [
      { icon: <HomeIcon size={28} />, title: "Smart Home & Office", description: "Convenience, comfort, and security through connected devices", color: "blue" },
      { icon: <Factory size={28} />, title: "Industrial IoT", description: "Optimizing operations, predictive maintenance", color: "orange" },
      { icon: <Rss size={28} />, title: "Sensor Monitoring", description: "Accurate data collection and control", color: "blue" },
      { icon: <BarChart3 size={28} />, title: "Real-time Analytics", description: "Transforming IoT data into actionable insights", color: "orange" },
    ],
    imgAlt: "IoT Automation",
    imgSrc: iotImg,
  },
  {
    tag: "AI & ML",
    title: ["AI and", "Machine Learning Services"],
    description:
      "Intelligent solutions that learn and adapt to enhance efficiency across industries. Our AI and ML services empower businesses with automation, smarter decision-making, and data-driven insights that continuously evolve and improve over time.",
    features: [
      { icon: <BarChart3 size={28} />, title: "Predictive Analytics", description: "Anticipate trends and improve outcomes", color: "blue" },
      { icon: <MessageCircle size={28} />, title: "Natural Language Processing", description: "Process human language intelligently", color: "orange" },
      { icon: <Eye size={28} />, title: "Computer Vision", description: "Extract insights from images and videos", color: "blue" },
      { icon: <Bot size={28} />, title: "Chatbots & Assistants", description: "Automated support and engagement", color: "orange" },
    ],
    imgAlt: "AI and ML Services",
    imgSrc: aiImg,
  },
];

const Home = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="flex items-center justify-between px-[8%] py-24 bg-gradient-to-br from-[#020024] via-gray-900 to-gray-900 text-white min-h-screen relative z-0 overflow-hidden">
        <div className="max-w-[600px] ml-5 z-10">
          <h1 className="text-6xl leading-tight font-bold mr-20 bg-gradient-to-r from-hero-blue to-hero-green bg-clip-text text-transparent mb-4 ml-[1%]">
            Invest in Dreams,<br />
            Harvest Success
          </h1>
          <p className="text-xl text-light-blue ml-6 mb-16 leading-relaxed ml-[1.5%]">Fuel the future by backing bold ideas today.</p>
        </div>
        <div className="w-[550px] h-[500px] flex-shrink-0 relative z-10 flex justify-center items-center">
          <div className="absolute w-[400px] h-[400px] bg-hero-blue bg-opacity-40 rounded-full -top-12 -left-24 blur-[120px] -z-10"></div>
          <div className="absolute w-[300px] h-[300px] bg-hero-green bg-opacity-30 rounded-full -bottom-12 -right-12 blur-[120px] -z-10"></div>
          <Globe />
        </div>
      </div>
     
      {/* Intro Section */}
      <section className="flex items-center justify-center min-h-[80vh] mt-[48rem] bg-gradient-to-br from-gray-50 to-blue-100 text-center">
        <div className="intro-content">
          <h1 className="font-poppins text-4xl font-bold text-gray-800 leading-relaxed max-w-4xl mx-auto relative animate-fade-up">
            <span className="text-5xl text-blue-600 font-extrabold animate-bounce-custom inline-block">W</span>e work to turn ideas into reality —
            <br />
            delivering <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-green-400 bg-clip-text text-transparent font-extrabold">innovative services</span>
          </h1>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, index) => (
        <div className="flex items-center justify-between px-[5%] py-16 bg-white gap-8 flex-wrap mb-16" key={index}>
          <div className="flex-1 min-w-[280px]">
            <span className="inline-block text-card-blue text-base font-bold mb-5 relative cursor-pointer group">
              {section.tag}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-card-blue transition-all duration-300 group-hover:w-full"></span>
            </span>
            <h1 className="text-4xl font-bold leading-tight mb-5">
              {section.title.map((line, i) => (
                <span key={i} className={i === 1 ? "text-sky-400" : ""}>{line}<br/></span>
              ))}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-[600px]">{section.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {section.features.map((feature, idx) => (
                <div className="flex flex-col items-start p-4 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg" key={idx}>
                  <div className={`text-2xl mb-2 p-3 rounded-xl ${
                    feature.color === 'blue' 
                      ? 'bg-blue-50 text-card-blue' 
                      : 'bg-orange-50 text-card-orange'
                  }`}>
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 text-center min-w-[280px]">
            <img 
              src={section.imgSrc} 
              alt={section.imgAlt} 
              className="max-w-full h-auto rounded-xl shadow-lg transition-all duration-500 transform scale-105 hover:scale-100 hover:shadow-xl"
            />
          </div>
        </div>
      ))}

      {/* Why Choose Us */}
      <div className="py-20 px-[5%] text-center bg-blue-50 mb-12">
        <h2 className="text-3xl font-bold mb-2">Why Choose <span className="text-sky-400">Sisuni Tech</span></h2>
        <p className="text-sm text-gray-600 mb-12 max-w-[700px] mx-auto">
          We combine innovation, expertise, and dedication to deliver exceptional results
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-3xl mb-3"><UserCheck size={28} /></div>
            <h3 className="text-lg mb-2 font-semibold">Expert Team</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Skilled professionals with years of experience</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-3xl mb-3"><CheckCircle size={28} /></div>
            <h3 className="text-lg mb-2 font-semibold">Quality Assured</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Rigorous testing ensures reliable solutions</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-3xl mb-3"><Handshake size={28} /></div>
            <h3 className="text-lg mb-2 font-semibold">Client-Focused</h3>
            <p className="text-sm text-gray-600 leading-relaxed">Dedicated support tailored to your needs</p>
          </div>
        </div>
      </div>

      <Link to="/about" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">Know More →</Link>
    </section>
  );
};

export default Home;