// src/Pages/About.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import bgVideo from "../assets/about_page_video.mp4";
import aboutPic from "../assets/about_page_pic.jpg";
import {
  FaSolarPanel,
  FaUsers,
  FaCheckCircle,
  FaLightbulb,
  FaLeaf,
  FaHandshake,
  FaCertificate,
  FaTrophy,
  FaHistory,
  FaArrowLeft,
  FaHome,
} from "react-icons/fa";
import websiteData from "../websiteData.json";

const About = () => {
  const {
    aboutCompany,
    aboutStats,
    coreValues,
    teamMembers,
    certifications,
    companyTimeline,
    awards,
  } = websiteData;

  const iconMap = {
    quality: <FaCheckCircle className="text-2xl sm:text-3xl md:text-4xl" />,
    satisfaction: <FaHandshake className="text-2xl sm:text-3xl md:text-4xl" />,
    sustainability: <FaLeaf className="text-2xl sm:text-3xl md:text-4xl" />,
    innovation: <FaLightbulb className="text-2xl sm:text-3xl md:text-4xl" />,
  };

  return (
    <>
      <Helmet>
        <title>
          About {aboutCompany.name} - Leading Solar Energy Provider in India
        </title>
        <meta name="description" content={aboutCompany.description} />
        <meta
          name="keywords"
          content="Arvi Solar, solar energy company, solar panel installation India, renewable energy, solar power"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`About ${aboutCompany.name}`} />
        <meta property="og:description" content={aboutCompany.description} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: aboutCompany.name,
            description: aboutCompany.description,
            foundingDate: aboutCompany.established,
            address: {
              "@type": "PostalAddress",
              addressLocality: aboutCompany.headquarters.split(",")[0],
              addressCountry: "IN",
            },
          })}
        </script>
      </Helmet>

      {/* Back Navigation */}
      <div className="sticky z-40 bg-white border-b py-2 sm:py-3 px-3 sm:px-4 md:px-6 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center gap-1.5 sm:gap-2 text-primary hover:text-secondary transition-colors font-semibold text-xs sm:text-sm md:text-base"
          >
            <FaArrowLeft className="text-xs sm:text-sm" />
            <span>Back to Home</span>
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-xs sm:text-sm"
          >
            <FaHome className="text-xs sm:text-sm" />
            <span className="hidden xs:inline">Home</span>
          </Link>
        </div>
      </div>

      {/* Hero Section - Fully Responsive */}
      <section className="relative overflow-hidden">
        {/* Background Video - Responsive */}
        <div className="relative w-full h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.6)" }}
          >
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-secondary/60 to-primary/70"></div>
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-3 xs:px-4 sm:px-6 md:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="font-heading font-extrabold text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6 leading-tight tracking-tight">
                <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  About {aboutCompany.name}
                </span>
              </h1>
              
              <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-4 sm:mb-6 opacity-90 px-2">
                {aboutCompany.tagline}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 text-xs xs:text-sm sm:text-base">
                <span className="px-3 xs:px-4 text-white py-1.5 xs:py-2 bg-white/20 backdrop-blur-sm rounded-full font-medium">
                  Est. {aboutCompany.established}
                </span>
                <span className="px-3 text-white xs:px-4 py-1.5 xs:py-2 bg-white/20 backdrop-blur-sm rounded-full font-medium">
                  📍 {aboutCompany.headquarters}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction - Responsive */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 px-3 xs:px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-darkBlue mb-3 sm:mb-4 md:mb-6">
                Who We Are
              </h2>
              <p className="text-textGray text-sm xs:text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {aboutCompany.description}
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                {/* Mission */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <FaCheckCircle className="text-accent text-base sm:text-lg md:text-xl flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <h3 className="font-bold text-darkBlue mb-1 text-sm sm:text-base md:text-lg">
                      Our Mission
                    </h3>
                    <p className="text-textGray text-xs sm:text-sm md:text-base">
                      {aboutCompany.mission}
                    </p>
                  </div>
                </div>
                
                {/* Vision */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <FaCheckCircle className="text-accent text-base sm:text-lg md:text-xl flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <h3 className="font-bold text-darkBlue mb-1 text-sm sm:text-base md:text-lg">
                      Our Vision
                    </h3>
                    <p className="text-textGray text-xs sm:text-sm md:text-base">
                      {aboutCompany.vision}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img 
                  src={aboutPic} 
                  alt="Arvi Solar" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Responsive Grid */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-[1400px] mx-auto px-3 xs:px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
            {aboutStats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <FaSolarPanel className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-primary mx-auto mb-2 sm:mb-3" />
                <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-darkBlue mb-1 sm:mb-2">
                  {stat.value}
                </h3>
                <p className="text-textGray text-xs xs:text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Responsive */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 px-3 xs:px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-darkBlue mb-2 sm:mb-3 md:mb-4">
              Our Core Values
            </h2>
            <p className="text-textGray text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{iconMap[value.icon]}</div>
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-darkBlue mb-2">
                  {value.title}
                </h3>
                <p className="text-textGray text-xs xs:text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Responsive */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 px-3 xs:px-4 sm:px-6 md:px-8 bg-lightBg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <FaHistory className="text-3xl sm:text-4xl text-primary mx-auto mb-2 sm:mb-3" />
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-darkBlue mb-2 sm:mb-3 md:mb-4">
              Our Journey
            </h2>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {companyTimeline.map((item, index) => (
              <div key={index} className="flex gap-3 sm:gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                  </div>
                  {index < companyTimeline.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/30 mt-2"></div>
                  )}
                </div>
                
                <div className="flex-1 pb-4 sm:pb-8">
                  <div className="bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-lg group-hover:shadow-xl transition-all">
                    <span className="inline-block px-2.5 xs:px-3 py-1 xs:py-1.5 bg-primary text-white rounded-full text-xs xs:text-sm font-bold mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-darkBlue mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-textGray text-xs xs:text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications - Responsive */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6 md:px-8 bg-gradient-to-b from-lightBg to-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <FaCertificate className="text-3xl sm:text-4xl text-primary mx-auto mb-2 sm:mb-3" />
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-darkBlue mb-2 sm:mb-3 md:mb-4">
              Certifications & Approvals
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 shadow-md hover:shadow-xl transition-all text-center"
              >
                <FaCertificate className="text-3xl xs:text-4xl sm:text-5xl text-accent mx-auto mb-2 sm:mb-3" />
                <p className="text-darkBlue font-semibold text-xs xs:text-sm sm:text-base">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards - Responsive */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <FaTrophy className="text-3xl sm:text-4xl text-accent mx-auto mb-2 sm:mb-3" />
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-darkBlue mb-2 sm:mb-3 md:mb-4">
              Awards & Recognition
            </h2>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg sm:rounded-xl p-4 xs:p-5 sm:p-6 flex items-start gap-3 sm:gap-4 hover:shadow-lg transition-all"
              >
                <FaTrophy className="text-2xl xs:text-3xl sm:text-4xl text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-darkBlue mb-1">
                    {award.title}
                  </h3>
                  <p className="text-textGray text-xs xs:text-sm sm:text-base">
                    {award.organization} • {award.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
