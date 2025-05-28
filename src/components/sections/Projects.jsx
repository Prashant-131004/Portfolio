/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import CodeIcon from '../../assets/icons/CodeIcon';
import LayoutIcon from '../../assets/icons/LayoutIcon';
import SmartphoneIcon from '../../assets/icons/SmartphoneIcon';
import GithubIcon from '../../assets/icons/GithubIcon';
import ExternalLinkIcon from '../../assets/icons/ExternalLinkIcon';
import AnimatedSection from '../AnimatedSection';
import PortfolioProjectSVG from '../../assets/icons/PortfolioProjectSVG';
import MobileAppProjectSVG from '../../assets/icons/MobileAppProjectSVG';
import EcommerceProjectSVG from '../../assets/icons/EcommerceProjectSVG';
import HouseShieldIcon from '../../assets/icons/HouseShieldIcon';
import BrainCapIcon from '../../assets/icons/BrainCapIcon';

const HomeSecureSVG = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 mx-auto transition-transform duration-500 group-hover:scale-105">
    <defs>
      <linearGradient id="homeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#dbeafe" />
        <stop offset="100%" stopColor="#bfdbfe" />
      </linearGradient>
    </defs>
    <path d="M32 4L4 24v32h56V24L32 4z" fill="url(#homeGrad)" stroke="#94a3b8" strokeWidth="2" />
    <rect x="24" y="32" width="16" height="20" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" rx="2" />
    <circle cx="32" cy="42" r="2" fill="#64748b" />
  </svg>
);

const StudySphereSVG = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 mx-auto transition-transform duration-500 group-hover:scale-105">
    <defs>
      <linearGradient id="studyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e9d5ff" />
        <stop offset="100%" stopColor="#c4b5fd" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="28" fill="url(#studyGrad)" stroke="#a78bfa" strokeWidth="1.5" />
    <path d="M20 24h24v4H20zM20 32h18v4H20zM20 40h12v4H20z" fill="#fef9ff" />
  </svg>
);

const MarketNestSVG = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-32 mx-auto transition-transform duration-500 group-hover:scale-105">
    <defs>
      <linearGradient id="marketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ccfbf1" />
        <stop offset="100%" stopColor="#99f6e4" />
      </linearGradient>
    </defs>
    <rect x="8" y="16" width="48" height="32" fill="url(#marketGrad)" rx="6" stroke="#5eead4" strokeWidth="1.5" />
    <path d="M16 40L24 28L32 36L40 24L48 32" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="40" r="2" fill="#0f766e" />
    <circle cx="24" cy="28" r="2" fill="#0f766e" />
    <circle cx="32" cy="36" r="2" fill="#0f766e" />
    <circle cx="40" cy="24" r="2" fill="#0f766e" />
    <circle cx="48" cy="32" r="2" fill="#0f766e" />
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, interactive portfolio website built with React and Tailwind CSS, featuring smooth animations and a beautiful UI.",
      svg: <PortfolioProjectSVG className="w-full h-32 mx-auto transition-transform duration-500 group-hover:scale-105" />,
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
      category: "Web Development",
      icon: <LayoutIcon className="w-6 h-6" />,
    },
    {
      title: "Mobile App",
      description: "A cross-platform mobile application built with React Native, featuring real-time updates and offline functionality.",
      svg: <MobileAppProjectSVG className="w-full h-32 mx-auto transition-transform duration-500 group-hover:scale-105" />,
      techStack: ["React Native", "Firebase", "Redux", "TypeScript"],
      github: "https://github.com/yourusername/mobile-app",
      live: "https://yourapp.com",
      category: "Mobile Development",
      icon: <SmartphoneIcon className="w-6 h-6" />,
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product management, and secure payment integration.",
      svg: <EcommerceProjectSVG className="w-full h-32 mx-auto transition-transform duration-500 group-hover:scale-105" />,
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://yourecommerce.com",
      category: "Web Development",
      icon: <CodeIcon className="w-6 h-6" />,
    },
    {
      title: "HomeSecure",
      description: "A next-gen home automation and security platform built with React, Node.js, and Raspberry Pi integration.",
      svg: <HomeSecureSVG />,
      techStack: ["React", "Node.js", "MongoDB", "WebSockets", "Tailwind"],
      github: "https://github.com/yourusername/homesecure",
      live: "https://homesecure.com",
      category: "IoT & Web App",
      icon: <HouseShieldIcon className="w-6 h-6" />,
    },
    {
      title: "StudySphere",
      description: "A personalized learning assistant that analyzes your study habits and suggests custom revision plans.",
      svg: <StudySphereSVG />,
      techStack: ["React Native", "Firebase", "TensorFlow.js", "OpenAI API", "Redux"],
      github: "https://github.com/yourusername/studysphere",
      live: "https://studysphere.com",
      category: "AI-Powered Mobile App",
      icon: <BrainCapIcon className="w-6 h-6" />,
    },
    {
      title: "MarketNest",
      description: "A full-stack analytics platform for sellers to track product performance and monitor customer behavior.",
      svg: <MarketNestSVG />,
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "GPT"],
      github: "https://github.com/yourusername/marketnest",
      live: "https://marketnest.com",
      category: "Analytics Web App",
      icon: <CodeIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 px-4 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#f7f7fa] via-[#f4f4f2] to-[#e0e7ff] opacity-90" />
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333333] mb-3 sm:mb-4">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-[#333333]/80 max-w-2xl mx-auto px-2">
              A showcase of my recent work and personal projects.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="group relative h-full">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e5e7eb] bg-white/80 backdrop-blur-md transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-[#a5b4fc] p-1 flex flex-col h-[480px] sm:h-[520px] md:h-[540px] lg:h-[560px] w-full">
                  <div className="relative flex flex-col items-center justify-center pt-14 sm:pt-16 pb-2 sm:pb-3 bg-gradient-to-b from-white via-[#f7f7fa] to-[#f4f4f2]">
                    <div className="transition-all duration-500 group-hover:drop-shadow-[0_4px_24px_rgba(99,102,241,0.15)] group-hover:scale-110">
                      {project.svg}
                    </div>
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/90 border border-[#e0e7ef] text-[#333333] text-xs sm:text-sm font-medium shadow-sm">
                        {project.icon}
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 justify-between p-4 sm:p-7">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#333333] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#333333]/80 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 sm:px-3 py-1 rounded-full bg-[#e0e7ef] border border-[#cbd5e1] text-[#6272a4] text-xs sm:text-sm font-medium shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 sm:gap-4 mt-auto">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#6272a4] text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-md border-none hover:bg-[#4a5a8a] flex-1"
                      >
                        <GithubIcon className="w-3.5 sm:w-4 h-3.5 sm:h-4" color="#fff" />
                        GitHub
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#6272a4] text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-md border-none hover:bg-[#4a5a8a] flex-1"
                      >
                        <ExternalLinkIcon className="w-3.5 sm:w-4 h-3.5 sm:h-4" color="#fff" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
