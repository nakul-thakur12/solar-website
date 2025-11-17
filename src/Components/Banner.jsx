// src/components/Banner.jsx
import bgVideo from "../assets/259949.mp4";
import { heroSection } from "../websiteData.json";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen relative overflow-hidden flex items-center justify-center"
    >
      {/* Background Video - Full Screen */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          filter: "brightness(0.7)",
        }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-primary/60 z-5"></div>

      {/* Main Content - Centered */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-white font-heading font-extrabold mb-4 sm:mb-5 md:mb-6 leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl animate-fadeInUp">
          {heroSection.title}
        </h1>

        {/* Subheading/Description */}
        <p
          className="text-gray-100 mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          {heroSection.subtitle}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8 justify-center animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <Link to="/query">
            <button className="w-full sm:w-auto px-6 md:px-8 lg:px-10 py-3 md:py-3.5 bg-white text-primary font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-sm md:text-base lg:text-lg">
              {heroSection.ctaPrimary}
            </button>
          </Link>

          <Link to="/about">
            <button className="w-full sm:w-auto px-6 md:px-8 lg:px-10 py-3 md:py-3.5 border-2 border-white text-white font-semibold rounded-lg shadow-xl backdrop-blur-sm bg-white/10 transition-all duration-300 hover:bg-white hover:text-primary text-sm md:text-base lg:text-lg">
              {heroSection.ctaSecondary}
            </button>
          </Link>
        </div>

        {/* Trust Badge */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="text-yellow-300 text-lg sm:text-xl md:text-2xl"
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-gray-100 text-xs sm:text-sm md:text-base font-medium">
            Trusted by {heroSection.reviewCount}+ customers |{" "}
            {heroSection.reviewRating} rating
          </span>
        </div>
      </div>

      {/* Scroll Indicator
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">
            Scroll Down
          </span>
          <div className="w-5 h-9 border-2 border-white/60 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Banner;
