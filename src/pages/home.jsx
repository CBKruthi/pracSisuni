import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
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
      <div className="home-hero">
        <div className="hero-text">
          <h1 style={{marginLeft: "1%"}}>
            Invest in Dreams,<br />
            Harvest Success
          </h1>
          <p style={{marginLeft: "1.5%"}}>Fuel the future by backing bold ideas today.</p>
        </div>
        <div className="hero-animation"><Globe /></div>
      </div>
     
     <section class="intro-section">
  <div class="intro-content">
    <h1>
      <span class="highlight">W</span>e work to turn ideas into reality —
      <br />
      delivering <span class="gradient">innovative services</span>
    </h1>
  </div>
</section>

      {/* Sections */}
      {sections.map((section, index) => (
        <div className="home" key={index}>
          <div className="home-left">
            <span className="tag">{section.tag}</span>
            <h1>
              {section.title.map((line, i) => (
                <span key={i} className={i === 1 ? "highlight" : ""}>{line}<br/></span>
              ))}
            </h1>
            <p className="description">{section.description}</p>

            <div className="features">
              {section.features.map((feature, idx) => (
                <div className={`feature-card ${feature.color}`} key={idx}>
                  <div className="icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="home-right">
            <img src={section.imgSrc} alt={section.imgAlt} />
          </div>
        </div>

      ))}

      {/* Why Choose Us */}
      <div className="why-choose">
        <h2>Why Choose <span className="highlight">Sisuni Tech</span></h2>
        <p className="why-subtitle">
          We combine innovation, expertise, and dedication to deliver exceptional results
        </p>

        <div className="why-cards">
          <div className="why-card"><div className="icon"><UserCheck size={28} /></div><h3>Expert Team</h3><p>Skilled professionals with years of experience</p></div>
          <div className="why-card"><div className="icon"><CheckCircle size={28} /></div><h3>Quality Assured</h3><p>Rigorous testing ensures reliable solutions</p></div>
          <div className="why-card"><div className="icon"><Handshake size={28} /></div><h3>Client-Focused</h3><p>Dedicated support tailored to your needs</p></div>
        </div>
      </div>

      <Link to="/about" className="btn">Know More →</Link>
    </section>
  );
};

export default Home;