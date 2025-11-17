import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMapMarkerAlt, FaBolt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef([]);

  const projects = [
    {
      id: 1,
      title: 'Residential Solar Installation',
      location: 'California, USA',
      capacity: '8.5 kW',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
      category: 'Residential'
    },
    {
      id: 2,
      title: 'Commercial Solar Project',
      location: 'Texas, USA',
      capacity: '50 kW',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop',
      category: 'Commercial'
    },
    {
      id: 3,
      title: 'Industrial Solar Farm',
      location: 'Arizona, USA',
      capacity: '2 MW',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
      category: 'Industrial'
    },
    {
      id: 4,
      title: 'Community Solar Program',
      location: 'Florida, USA',
      capacity: '15 kW',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop',
      category: 'Community'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectsRef.current.forEach((project, index) => {
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
            Our Completed Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful solar installations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectsRef.current[index] = el}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className="absolute top-4 right-4 px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
                {project.category}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-heading font-bold mb-3">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaBolt className="text-accent" />
                    <span>{project.capacity}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
