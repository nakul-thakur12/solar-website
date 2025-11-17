import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPhone, FaClipboardList, FaHardHat, FaLeaf } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  const steps = [
    {
      icon: FaPhone,
      number: '01',
      title: 'Free Consultation',
      description: 'Contact our experts for a free consultation and site assessment'
    },
    {
      icon: FaClipboardList,
      number: '02',
      title: 'Custom Quote',
      description: 'Receive a detailed proposal tailored to your specific needs'
    },
    {
      icon: FaHardHat,
      number: '03',
      title: 'Professional Installation',
      description: 'Our certified technicians install your solar system'
    },
    {
      icon: FaLeaf,
      number: '04',
      title: 'Monitor & Enjoy',
      description: 'Start saving money and reducing your carbon footprint'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated line connecting steps
      gsap.from('.step-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none'
        },
        width: 0,
        duration: 1.5,
        ease: 'power2.inOut'
      });

      // Animate each step
      stepsRef.current.forEach((step, index) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none'
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to transform your energy consumption
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent step-line" style={{ width: '0%' }}></div>

          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => stepsRef.current[index] = el}
              className="relative text-center"
            >
              {/* Step Number Circle */}
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white relative z-10">
                <div className="w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center">
                  <step.icon className="text-3xl text-primary mb-2" />
                  <span className="text-2xl font-heading font-bold text-primary">{step.number}</span>
                </div>
              </div>

              <h3 className="text-2xl font-heading font-bold text-secondary mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
