import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Web Development'
  },
  {
    title: 'Financial Dashboard',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'UI/UX Design'
  },
  {
    title: 'Healthcare App',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Mobile Development'
  },
  {
    title: 'Social Media Platform',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Web Development'
  },
  {
    title: 'Educational Portal',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'UI/UX Design'
  },
  {
    title: 'Fitness Tracking App',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Mobile Development'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Latest Work{' '}
            <span className="text-purple-500">✧</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our freshest creations that showcase the power of design innovation and digital excellence. 
            Explore our latest work and witness the impact we bring to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-purple-400 text-sm mb-2">{project.category}</p>
                  <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                  <button className="text-white flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    See Project
                    <span>→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;