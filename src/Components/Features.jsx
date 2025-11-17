// src/components/Features.jsx
import { 
  FaLightbulb, 
  FaTint, 
  FaLeaf, 
  FaBolt,
  FaSolarPanel,
  FaCheckCircle 
} from 'react-icons/fa';
import websiteData from '../websiteData.json';

// React Icons mapping
const reactIconMap = {
  FaLightbulb,
  FaTint,
  FaLeaf,
  FaBolt,
  FaSolarPanel,
  FaCheckCircle
};

const Features = () => {
  const { features } = websiteData;

  // Function to render icon based on type
  const renderIcon = (feature) => {
    if (feature.iconType === 'svg') {
      // SVG from public folder
      return (
        <img 
          src={feature.icon} 
          alt={`${feature.title} icon`}
          className="w-12 h-12 object-contain"
        />
      );
    } else if (feature.iconType === 'react-icon') {
      // React Icon
      const IconComponent = reactIconMap[feature.icon];
      return IconComponent ? <IconComponent className="text-4xl" /> : null;
    }
    return null;
  };

  return (
    <section id="features" className="py-20 bg-lightBg px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-darkBlue mb-4">
            Why Choose Arvi E Solar?
          </h2>
          <p className="text-textGray text-base sm:text-lg max-w-2xl mx-auto">
            Experience the best solar energy solutions with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="group relative bg-white rounded-xl card-shadow hover:shadow-2xl transition-all duration-500 text-center cursor-pointer overflow-hidden hover:-translate-y-2 p-6 md:p-8"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-blue-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="flex justify-center mb-4 text-primary group-hover:text-white transition-colors duration-500">
                  {renderIcon(feature)}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-heading font-bold text-darkBlue group-hover:text-white mb-3 transition-colors duration-500">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-textGray group-hover:text-white transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
