import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="cta" className="py-24 bg-black text-white">
      <div className="container mx-auto px-[100px]">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-12 text-center shadow-lg border border-gray-700/50">
          <h2 className="text-4xl font-extrabold mb-4 font-heading">Ready to Elevate Your Style?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join the SHOEX revolution and experience the perfect blend of technology, comfort, and design. Explore our latest collection today.
          </p>
          <motion.button
            className="px-8 py-3 bg-white/10 text-white font-bold rounded-full shadow-md backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.1, backgroundColor: '#ffffff20' }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
