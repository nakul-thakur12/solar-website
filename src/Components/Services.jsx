// src/components/Services.jsx
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import websiteData from '../websiteData.json';
import { serviceImageMap } from '../utils/Imageimports';

const Services = () => {
  const { services } = websiteData;

  return (
    <section id="services" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-heading font-bold text-darkBlue mb-3 sm:mb-4 px-4">
            Our Services
          </h2>
          <p className="text-textGray text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Comprehensive solar energy solutions for your needs
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center"
            >
              {/* Image Container - Centered with 90% Height */}
              <div 
                className={`w-full ${
                  index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-100">
                  {/* Fixed aspect ratio container */}
                  <div 
                    className="relative w-full flex items-center justify-center" 
                    style={{ paddingBottom: '66.67%' }}
                  >
                    {/* Image centered with 90% height */}
                    <img 
                      src={serviceImageMap[service.image]} 
                      alt={service.title}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-[90%] object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{
                        maxWidth: '95%',
                        maxHeight: '90%',
                      }}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div 
                className={`w-full ${
                  index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                  <h3 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-darkBlue leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-textGray text-sm xs:text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 pt-2">
                    {service.features.map((feature, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-2 sm:gap-2.5 md:gap-3 group/item"
                      >
                        <div className="mt-0.5 sm:mt-1 bg-accent/10 p-1 sm:p-1.5 rounded-full group-hover/item:bg-accent/20 transition-colors flex-shrink-0">
                          <FaCheckCircle className="text-accent text-sm sm:text-base md:text-lg" />
                        </div>
                        <span className="text-darkBlue font-medium text-xs xs:text-sm sm:text-sm md:text-base leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className="group mt-4 sm:mt-5 md:mt-6 px-5 xs:px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base">
                    Learn More
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
