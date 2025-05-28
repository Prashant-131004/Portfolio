/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import ChefHatIcon from '../../assets/icons/ChefHatIcon';
import BuildingIcon from '../../assets/icons/BuildingIcon';
import RocketIcon from '../../assets/icons/RocketIcon';
import CoffeeIcon from '../../assets/icons/CoffeeIcon';
import CodeIcon from '../../assets/icons/CodeIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import AnimatedSection from '../AnimatedSection';
import VisionRestaurantSVG from '../../assets/icons/VisionRestaurantSVG';
import VisionStartupSVG from '../../assets/icons/VisionStartupSVG';
import VisionFamilySVG from '../../assets/icons/VisionFamilySVG';
import ValueCreativitySVG from '../../assets/icons/ValueCreativitySVG';
import ValueInnovationSVG from '../../assets/icons/ValueInnovationSVG';
import ValuePassionSVG from '../../assets/icons/ValuePassionSVG';

const Vision = () => {
  const visions = [
    {
      title: "Full-Stack SaaS Product",
      description: "Building a comprehensive SaaS solution that solves real-world challenges, combining elegant design with powerful functionality.",
      svg: <VisionStartupSVG className="w-full h-28 mx-auto transition-transform duration-500 group-hover:scale-110" />,
      color: "bg-[#e0e7ff]",
      features: [
        "User-Centric Design",
        "Scalable Architecture",
        "AI Integration",
        "Cross-Platform Solutions"
      ]
    },
    {
      title: "An Italian Restaurant",
      description: "Envisioning a sophisticated Italian restaurant in Gujarat, where culinary excellence meets elegant design. A place where technology enhances the dining experience.",
      svg: <VisionRestaurantSVG className="w-full h-28 mx-auto transition-transform duration-500 group-hover:scale-110" />,
      color: "bg-[#fef3c7]",
      features: [
        "Modern POS System",
        "Digital Menu Integration",
        "Online Reservations",
        "Customer Experience App"
      ]
    },
    {
      title: "Vinayaka Marbles Expansion",
      description: "Expanding Vinayaka Marbles into a leading regional brand while preserving its legacy. Implementing digital solutions to enhance operations and customer experience.",
      svg: <VisionFamilySVG className="w-full h-28 mx-auto transition-transform duration-500 group-hover:scale-110" />,
      color: "bg-[#f1f5f9]",
      features: [
        "Digital Inventory",
        "Customer Portal",
        "Project Management",
        "Virtual Showroom"
      ]
    }
  ];

  const values = [
    {
      title: "Creativity",
      description: "Pushing boundaries in both code and cuisine",
      svg: <ValueCreativitySVG className="w-full h-20 mx-auto transition-transform duration-500 group-hover:scale-110" />
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and ideas",
      svg: <ValueInnovationSVG className="w-full h-20 mx-auto transition-transform duration-500 group-hover:scale-110" />
    },
    {
      title: "Passion",
      description: "Pouring heart into everything I create",
      svg: <ValuePassionSVG className="w-full h-20 mx-auto transition-transform duration-500 group-hover:scale-110" />
    }
  ];

  return (
    <section id="vision" className="py-20 px-4 min-h-screen relative overflow-hidden w-full">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#f7f7fa] via-[#f4f4f2] to-[#e0e7ff] opacity-90" />
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#333333] mb-3 sm:mb-4">
              Future Vision
            </h2>
            <p className="text-sm sm:text-lg text-[#333333]/80 max-w-2xl mx-auto px-4">
              Where technology meets passion, and dreams become reality.
            </p>
          </div>
        </AnimatedSection>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {visions.map((vision, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className={`group relative rounded-3xl overflow-hidden shadow-xl border border-[#e5e7eb] ${vision.color} bg-white/80 backdrop-blur-md transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-[#a5b4fc] p-1`}>
                {/* Vision SVG */}
                <div className="relative flex flex-col items-center justify-center pt-8 pb-3 bg-gradient-to-b from-white via-[#f7f7fa] to-[#f4f4f2]">
                  <div className="transition-all duration-500 group-hover:drop-shadow-[0_4px_24px_rgba(99,102,241,0.15)] group-hover:scale-110">
                    {vision.svg}
                  </div>
                </div>
                {/* Vision Content */}
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">
                    {vision.title}
                  </h3>
                  <p className="text-[#333333]/80 mb-4">
                    {vision.description}
                  </p>
                  {/* Features */}
                  <ul className="space-y-3">
                    {vision.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        className="flex items-center gap-2 text-[#333333]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6272a4]" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Core Values */}
        <AnimatedSection delay={0.4}>
          <div className="group glass p-4 sm:p-8 rounded-3xl shadow-xl border border-[#e5e7eb] bg-white/80 backdrop-blur-md">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#333333] mb-6 sm:mb-8 text-center">
              Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.04 }}
                  className="group text-center rounded-2xl p-3 sm:p-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg border border-[#e5e7eb] bg-white/70"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4">
                    <div className="transition-all duration-500 group-hover:drop-shadow-[0_4px_24px_rgba(99,102,241,0.15)] group-hover:scale-110">
                      {value.svg}
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-[#333333] mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#333333]/80">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Quote */}
        <AnimatedSection delay={0.6}>
          <div className="mt-16 sm:mt-20 text-center">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-[#333333] italic">
              "Embracing the elite calmness with in"
            </blockquote>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#333333]/60">— Prashant</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Vision; 