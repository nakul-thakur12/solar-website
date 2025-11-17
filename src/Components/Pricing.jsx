// Enhanced version with more features
import { useState } from 'react';
import { FaCheck, FaStar, FaRocket, FaInfoCircle } from 'react-icons/fa';
import { plans } from "../websiteData.json";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('onetime'); // or 'monthly'

  return (
    <section id="pricing" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-lightBg to-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            Pricing Plans
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-heading font-bold text-darkBlue mb-3 sm:mb-4 px-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-textGray text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 mb-6">
            Flexible pricing options for every solar energy need
          </p>

         
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 sm:p-7 md:p-8 text-center transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "bg-gradient-to-br from-primary to-secondary text-white shadow-2xl scale-100 lg:scale-105 border-2 border-white"
                  : "bg-white shadow-lg hover:shadow-2xl border-2 border-gray-100"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-accent text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                    <FaStar className="text-yellow-300" />
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Icon */}
              <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                plan.featured 
                  ? 'bg-white/20 backdrop-blur-sm' 
                  : 'bg-primary/10'
              }`}>
                <FaRocket className={`text-2xl sm:text-3xl ${
                  plan.featured ? 'text-white' : 'text-primary'
                }`} />
              </div>

              {/* Plan Name */}
              <h3 className={`text-xl sm:text-2xl md:text-2xl font-heading font-bold mb-2 ${
                plan.featured ? "text-white" : "text-darkBlue"
              }`}>
                {plan.name}
              </h3>

              {/* Plan Description */}
              <p className={`text-xs sm:text-sm mb-4 ${
                plan.featured ? "text-white/90" : "text-textGray"
              }`}>
                {plan.description || "Perfect for your needs"}
              </p>

              {/* Price */}
              <div className="mb-6">
                <p className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
                  plan.featured ? "text-white" : "text-primary"
                }`}>
                  {plan.price}
                </p>
                <p className={`text-xs sm:text-sm mt-1 ${
                  plan.featured ? "text-white/80" : "text-textGray"
                }`}>
                  {plan.period || "one-time payment"}
                </p>
              </div>

              {/* Features List */}
              <ul className={`space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-left ${
                plan.featured ? "text-white" : "text-textGray"
              }`}>
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm group/item"
                  >
                    <FaCheck className={`flex-shrink-0 mt-0.5 sm:mt-1 ${
                      plan.featured 
                        ? 'text-white bg-white/20 rounded-full p-0.5' 
                        : 'text-accent'
                    }`} />
                    <span className="group-hover/item:translate-x-1 transition-transform">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                plan.featured
                  ? "bg-white text-primary hover:bg-gray-100 shadow-lg"
                  : "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-xl"
              }`}>
                {plan.featured ? 'Get Started Now' : 'Choose Plan'}
              </button>

              {/* Hover Effect */}
              {!plan.featured && (
                <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Money Back Guarantee
        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 sm:p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <FaInfoCircle className="text-primary text-2xl" />
            <h3 className="text-xl sm:text-2xl font-bold text-darkBlue">
              30-Day Money Back Guarantee
            </h3>
          </div>
          <p className="text-textGray text-sm sm:text-base max-w-2xl mx-auto mb-4">
            Not satisfied? Get a full refund within 30 days, no questions asked
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="px-6 py-2.5 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all text-sm sm:text-base shadow-md">
              Compare All Plans
            </button>
            <button className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all text-sm sm:text-base shadow-lg">
              Contact for Custom Quote
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;
