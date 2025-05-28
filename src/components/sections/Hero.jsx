/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import AnimatedSection from '../AnimatedSection';
import { Linkedin, Github, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="py-24 sm:py-32 relative flex items-center justify-center overflow-hidden w-full">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#f7f7fa] via-[#f4f4f2] to-[#e0e7ff] opacity-90" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#6272a4]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f26c63]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-7xl mx-auto">
        <AnimatedSection>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-[#333333] mb-3 sm:mb-6">
            Prashant Gami
          </h1>
          <div className="h-12 sm:h-20 md:h-24 mb-4 sm:mb-8">
            <span className="text-lg sm:text-2xl md:text-4xl font-medium">
              <span className="bg-gradient-to-r from-[#5b8cff] via-[#a259c6] to-[#f26c63] bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    'Crafting seamless experiences.',
                    1000,
                    'Building ideas into reality.',
                    1000,
                  ]}
                  wrapper="span"
                  speed={35}
                  cursor={true}
                  repeat={Infinity}
                  className="type-animation-hero"
                />
              </span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-3 mt-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#6272a4] text-white text-xs sm:text-sm font-medium transition-all duration-200 shadow-md border-none hover:bg-[#4a5a8a] min-w-[90px] sm:min-w-[120px] max-w-xs"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#6272a4] text-white text-xs sm:text-sm font-medium transition-all duration-200 shadow-md border-none hover:bg-[#4a5a8a] min-w-[90px] sm:min-w-[120px] max-w-xs"
            >
              Get in Touch
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero; 