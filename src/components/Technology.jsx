import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiLayers, FiShield, FiWind } from 'react-icons/fi';

const technologies = [
  {
    icon: <FiCpu />,
    title: 'Adaptive Sole Technology',
    description: 'Our proprietary sole design features a matrix of smart polymers that adapt in real-time to your movement, providing a perfect balance of cushioning and explosive energy return.',
  },
  {
    icon: <FiLayers />,
    title: 'Bio-Weave Upper',
    description: 'A revolutionary single-piece upper woven from recycled bio-polymers. It is breathable, incredibly strong, and molds to your foot for a sock-like fit.',
  },
  {
    icon: <FiWind />,
    title: 'Vortex Air Cushioning',
    description: 'Next-generation air units are strategically placed to absorb impact where you need it most. The vortex design dissipates energy efficiently, reducing strain on your joints.',
  },
  {
    icon: <FiShield />,
    title: 'Kinetic-Lock Frame',
    description: 'An internal, lightweight frame that provides crucial mid-foot support during lateral movements, locking you in for enhanced stability and confidence.',
  },
];

const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-black text-white">
      <div className="container mx-auto px-[100px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Future</span> on Your Feet</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Every pair of SHOEX is a testament to our commitment to innovation. We push the boundaries of material science and biomechanics to create footwear that anticipates your next move.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-[#030303] backdrop-blur-sm rounded-xl p-8 shadow-2xl relative overflow-hidden border border-gray-700/50 transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-heading">{tech.title}</h3>
                  <p className="text-gray-400">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
