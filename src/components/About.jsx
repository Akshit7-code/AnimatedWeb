import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAward, FiZap } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiAward className="text-blue-400" />,
      title: "Premium Materials",
      description: "We source only the finest, lightweight, and durable materials for a luxurious feel that stands the test of time."
    },
    {
      icon: <FiCheckCircle className="text-purple-400" />,
      title: "Comfort Engineering",
      description: "Designed for all-day wear, with advanced cushioning technology and an ergonomic footbed for unparalleled support."
    },
    {
      icon: <FiZap className="text-green-400" />,
      title: "Feather-Light Performance",
      description: "Experience unrestricted movement with our ultra-lightweight construction that doesn't compromise on stability or support."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="container mx-auto px-[100px]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-heading">The Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Movement</span></h2>
            <p className="text-lg text-gray-400 mb-8">
              SHOEX is born from the intersection of cutting-edge technology and artisanal craftsmanship. We believe a shoe should be an extension of your body—responsive, intuitive, and beautiful. 
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-200 font-heading">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
  className="relative flex items-center justify-center"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.05, rotate: -3 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: 'easeInOut' }}
>
  <img 
    src="/frames/shoes/bg.png" 
    alt="Floating Shoe" 
    className="w-full h-auto max-w-lg md:max-w-xl z-10 rounded-lg shadow-2xl shadow-purple-500/20"
  />
  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-purple-900 opacity-20 rounded-full blur-3xl"></div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
