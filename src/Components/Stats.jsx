import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const statsRef = useRef(null);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const statsData = [
    { value: 5000, suffix: '+', label: 'Projects Completed' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 200, suffix: '+', label: 'Expert Team' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        onEnter: () => {
          statsData.forEach((stat, index) => {
            let startValue = 0;
            const duration = 2000;
            const increment = stat.value / (duration / 16);

            const counter = setInterval(() => {
              startValue += increment;
              if (startValue >= stat.value) {
                startValue = stat.value;
                clearInterval(counter);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(startValue);
                return newCounters;
              });
            }, 16);
          });
        },
        once: true
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={statsRef} className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <h3 className="text-5xl md:text-6xl font-heading font-bold mb-2">
                {counters[index]}{stat.suffix}
              </h3>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
