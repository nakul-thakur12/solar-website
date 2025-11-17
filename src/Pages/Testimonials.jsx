import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaStar } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonialsRef = useRef(null);
  const cardsRef = useRef([]);

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      text: 'Amazing service! The installation was smooth and the team was very professional. Already saved 40% on my energy bill!',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      text: 'Excellent experience from start to finish. The solar system has exceeded our expectations and ROI is great.',
      rating: 5
    },
    {
      id: 3,
      name: 'Mike Davis',
      role: 'Industrial Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      text: 'Professional team, high quality work. They designed a perfect system for our facility. Highly recommended!',
      rating: 5
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 70%',
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={testimonialsRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who switched to solar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={el => cardsRef.current[index] = el}
              className="bg-gradient-to-br from-light to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-2 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <FaStar key={i} className="text-accent text-lg" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-heading font-bold text-secondary">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
