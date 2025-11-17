import { FaCheckCircle, FaClock, FaShieldAlt, FaHeadset, FaChartLine, FaGlobeAmericas } from 'react-icons/fa';

const EasyToUse = () => {
  const features = [
    { icon: <FaCheckCircle />, title: 'Easy Installation', description: 'Simple setup process' },
    { icon: <FaClock />, title: 'Quick Setup', description: 'Get started in days' },
    { icon: <FaShieldAlt />, title: 'Secure System', description: 'Protected technology' },
    { icon: <FaHeadset />, title: '24/7 Support', description: 'Always available' },
    { icon: <FaChartLine />, title: 'Track Savings', description: 'Monitor your ROI' },
    { icon: <FaGlobeAmericas />, title: 'Eco Impact', description: 'Save the planet' },
  ];

  return (
    <section className="py-20 bg-lightBg px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-darkBlue mb-4">
            Easy to Use
          </h2>
          <p className="text-textGray text-lg">
            Our platform makes solar energy simple and accessible
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg card-shadow text-center hover:-translate-y-1 transition">
              <div className="text-4xl text-primary mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="text-xl font-heading font-bold text-darkBlue mb-2">
                {feature.title}
              </h4>
              <p className="text-textGray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EasyToUse;
