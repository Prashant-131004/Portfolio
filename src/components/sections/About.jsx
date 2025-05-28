/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Code2, ChefHat, Building2, Linkedin, Github, Instagram } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const About = () => {
  const timelineItems = [
    {
      title: "Education",
      description: "Completed B.Sc. in Information Technology with CGPA 9.05",
      icon: <Code2 className="w-6 h-6" />,
      color: "bg-[#6272a4]/10",
    },
    {
      title: "Developer",
      description: "Frontend Developer specializing in React and modern web technologies",
      icon: <Code2 className="w-6 h-6" />,
      color: "bg-[#f26c63]/10",
    },
    {
      title: "Entrepreneur",
      description: "Aspiring to launch innovative ventures and expand family business",
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-[#b6babd]/10",
    },
  ];

  const storyCards = [
    {
      title: "Why I Love Code",
      description: "Passionate about building beautiful, responsive user interfaces that feel alive. I believe in the power of clean code and elegant design.",
      icon: <Code2 className="w-8 h-8" />,
      color: "bg-[#6272a4]/10",
    },
    {
      title: "My Dream Restaurant",
      description: "Envisioning a luxury Italian restaurant in Gujarat, combining my love for cooking with entrepreneurial spirit.",
      icon: <ChefHat className="w-8 h-8" />,
      color: "bg-[#f26c63]/10",
    },
    {
      title: "Family Business",
      description: "Drawing inspiration from Vinayaka Marbles, learning the art of business and the importance of quality craftsmanship.",
      icon: <Building2 className="w-8 h-8" />,
      color: "bg-[#b6babd]/10",
    },
  ];

  const letterAnimation = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  };

  const TypingText = ({ text, className, delay = 0 }) => {
    const typingSpeed = 0.015; // Speed per character

    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
        className={className}
      >
        <div className="relative">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.01,
                delay: delay + (index * typingSpeed)
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="about" className="py-8 sm:py-16 px-2 sm:px-4 min-h-screen relative overflow-hidden w-full">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#f7f7fa] via-[#f4f4f2] to-[#e0e7ff] opacity-90" />
      
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <AnimatedSection>
          <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-[#333333] mb-2 sm:mb-4 text-center">
            About Me
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="glass p-4 sm:p-10 rounded-3xl shadow-2xl border-2 border-transparent bg-white/80 backdrop-blur-md transition-all duration-300 max-w-4xl mx-auto mb-6 sm:mb-14 relative group cursor-pointer"
            style={{ boxShadow: '0 8px 40px 0 rgba(99,102,241,0.10), 0 1.5px 8px 0 rgba(99,102,241,0.08)' }}
            whileHover={{
              boxShadow: '0 12px 48px 0 rgba(99,102,241,0.16), 0 2px 12px 0 rgba(99,102,241,0.12)',
              borderColor: '#a5b4fc',
              scale: 1.015
            }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300" style={{ background: 'linear-gradient(120deg, #a5b4fc22 0%, #f26c6322 100%)' }} />
            <div className="relative text-center z-10">
              <TypingText 
                text={`Hi, I'm Prashant Gami a passionate frontend developer from Gujarat, India. I recently completed my B.Sc. in Information Technology with a 9.05 CGPA. I love turning ideas into intuitive digital experiences that make life easier and more beautiful.

From building tech projects to dreaming of launching a luxury Italian restaurant and growing my family's marble too, my journey is about combining creativity, technology, and entrepreneurship.

I believe in building with heart, precision, and purpose always striving to learn, adapt, and create impact.`}
                className="text-xs sm:text-lg font-medium text-[#4a5568] max-w-3xl mx-auto px-2 leading-relaxed tracking-wide whitespace-pre-line"
                delay={0.2}
              />
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection delay={0.2}>
          <div className="mb-8 sm:mb-16">
            <div className="relative">
              {/* Timeline Line */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 sm:w-1 bg-[#6272a4]/20"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              {/* Timeline Items */}
              <div className="space-y-10 sm:space-y-16">
                {timelineItems.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.18}>
                    <motion.div 
                      className={`relative group flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.18 }}
                    >
                      <div className="w-full sm:w-1/2 px-2 sm:px-8 mb-2 sm:mb-0 flex justify-center">
                        <motion.div 
                          className={`relative glass p-3 sm:p-6 rounded-xl sm:rounded-3xl shadow-md sm:shadow-xl border-2 border-transparent bg-white/80 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:border-[#a5b4fc] ${item.color} max-w-xs w-full break-words group`}
                          whileHover={{
                            boxShadow: '0 12px 48px 0 rgba(99,102,241,0.16), 0 2px 12px 0 rgba(99,102,241,0.12)',
                            borderColor: '#a5b4fc',
                            scale: 1.015
                          }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <div className="absolute inset-0 rounded-xl sm:rounded-3xl pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300" style={{ background: 'linear-gradient(120deg, #a5b4fc22 0%, #f26c6322 100%)' }} />
                          <div className="relative z-10">
                            <div className="flex items-center gap-2 sm:gap-4 mb-1 sm:mb-3">
                              <motion.div 
                                className="p-1.5 sm:p-2 rounded-full bg-white/80 text-[#6272a4]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                              >
                                {item.icon}
                              </motion.div>
                              <h3 className="text-base sm:text-xl font-semibold text-[#333333] whitespace-normal">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-xs sm:text-base text-[#333333]/80 whitespace-normal break-words">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                      <motion.div 
                        className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.3, delay: index * 0.18 }}
                      >
                        <div className="w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-[#6272a4]" />
                      </motion.div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Story Cards */}
        <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {storyCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.18 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`relative group glass p-3 sm:p-6 rounded-xl sm:rounded-3xl shadow-md sm:shadow-xl border-2 border-transparent bg-white/80 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:border-[#a5b4fc] ${card.color} max-w-xs w-full mx-auto break-words`}
              >
                <div className="absolute inset-0 rounded-xl sm:rounded-3xl pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300" style={{ background: 'linear-gradient(120deg, #a5b4fc22 0%, #f26c6322 100%)' }} />
                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4"
                    whileHover={{ x: 2 }}
                    whileTap={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="p-1.5 sm:p-3 rounded-full bg-white/80 text-[#333333]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.icon}
                    </motion.div>
                    <h3 className="text-base sm:text-xl font-semibold text-[#333333] whitespace-normal">
                      {card.title}
                    </h3>
                  </motion.div>
                  <p className="text-xs sm:text-base text-[#333333]/80 whitespace-normal break-words">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About; 