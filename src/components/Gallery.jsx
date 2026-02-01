import React from 'react';
import { motion } from 'framer-motion';

const shoes = [
  { name: 'Cosmic Glide', category: 'Running', img: '/frames/shoes/frame_010.webp', description: 'Engineered for speed and comfort, perfect for long-distance runners.' },
  { name: 'Urban Phantom', category: 'Lifestyle', img: '/frames/shoes/frame_020.webp', description: 'A stylish and versatile shoe for the modern city dweller.' },
  { name: 'Velocity Edge', category: 'Training', img: '/frames/shoes/frame_030.webp', description: 'Provides stability and support for high-intensity workouts.' },
  { name: 'Aura Flex', category: 'Yoga', img: '/frames/shoes/frame_040.webp', description: 'Lightweight and flexible, designed for maximum freedom of movement.' },
  { name: 'Zenith Trail', category: 'Hiking', img: '/frames/shoes/frame_060.webp', description: 'Durable and rugged, built to handle any terrain with ease.' },
  { name: 'Nova Pulse', category: 'Crossfit', img: '/frames/shoes/frame_070.webp', description: 'A responsive and durable shoe for all your crossfit needs.' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-black text-white">
      <div className="container mx-auto px-[100px]">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-4 font-heading">Our Signature Collection</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Each pair is a masterpiece of design and engineering, crafted to elevate your every step. Explore the collection.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {shoes.map((shoe, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-2xl group border border-gray-800/50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              <img src={shoe.img} alt={shoe.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.h3 
                  className="text-white text-3xl font-bold mb-2 font-heading"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {shoe.name}
                </motion.h3>
                <motion.p 
                  className="text-purple-300 font-semibold mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {shoe.category}
                </motion.p>
                <div className="h-px bg-white/20 w-1/4 mb-4"></div>
                <motion.p 
                  className="text-gray-300 text-sm mb-6 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {shoe.description}
                </motion.p>
                <motion.button 
                  className="px-6 py-2 text-sm bg-white/10 text-white rounded-full self-start opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/20"
                  whileHover={{ backgroundColor: '#ffffff20', scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Explore
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
