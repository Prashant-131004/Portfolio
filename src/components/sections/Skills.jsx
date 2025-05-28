/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import ReactLogo from "../../assets/Logos/React.png";
import JavaScriptLogo from "../../assets/Logos/JavaScript.png";
import HtmlLogo from "../../assets/Logos/HTML.png";
import TailwindLogo from "../../assets/Logos/Tailwind.png";
import GitLogo from "../../assets/Logos/git.png";
import NpmLogo from "../../assets/Logos/npm.png";
import FirebaseLogo from "../../assets/Logos/Firebase.png";
import SmartphoneIcon from "../../assets/icons/SmartphoneIcon";
import ZapIcon from "../../assets/icons/ZapIcon";
import BookOpenIcon from "../../assets/icons/BookOpenIcon";
import AnimatedSection from "../AnimatedSection";
import LeadershipLogo from "../../assets/Logos/Leadership.png";
import CreativeThinkingLogo from "../../assets/Logos/CreativeThinking.png";
import CommunicationLogo from "../../assets/Logos/Communication.png";
import NodeLogo from "../../assets/Logos/Node.png";

const Skills = () => {
  const skillCategories = [
    {
      title: "Proficient In",
      skills: [
        {
          name: "JavaScript",
          level: 90,
          icon: <img src={JavaScriptLogo} alt="JavaScript" className="w-7 h-7 object-contain rounded-full bg-white border" />,
        },
        {
          name: "React.js",
          level: 85,
          icon: <img src={ReactLogo} alt="React" className="w-7 h-7 object-contain rounded-full bg-white border" />,
        },
        {
          name: "HTML5/CSS3",
          level: 90,
          icon: <img src={HtmlLogo} alt="HTML" className="w-7 h-7 object-contain rounded-full bg-white border" />,
        },
        {
          name: "Git",
          level: 85,
          icon: <img src={GitLogo} alt="Git" className="w-7 h-7 object-contain rounded-full bg-white border" />,
        },
        {
          name: "Responsive Design",
          level: 90,
          icon: <img src={TailwindLogo} alt="Tailwind" className="w-7 h-7 object-contain rounded-full bg-white border" />,
        },
      ],
      color: "bg-[#6272a4]/10",
    },
    {
      title: "Currently Learning",
      skills: [
        {
          name: "React Native",
          level: 75,
          icon: <SmartphoneIcon className="w-7 h-7 rounded-full bg-white border p-1" />,
        },
        {
          name: "Node.js",
          level: 70,
          icon: <img src={NodeLogo} alt="Node.js" className="w-7 h-7 object-contain rounded-full bg-white border" />,
        },
        {
          name: "Firebase",
          level: 65,
          icon: <img src={FirebaseLogo} alt="Firebase" className="w-7 h-7 object-contain rounded-full bg-white border" />,
        },
        {
          name: "npm",
          level: 60,
          icon: <img src={NpmLogo} alt="npm" className="w-7 h-7 object-contain rounded-full bg-white border" />,
        },
      ],
      color: "bg-[#f26c63]/10",
    },
    {
      title: "Soft Skills",
      skills: [
        {
          name: "Leadership",
          level: 85,
          icon: <img src={LeadershipLogo} alt="Leadership" className="w-7 h-7 object-contain rounded-full bg-white border" />,
        },
        {
          name: "Creative Thinking",
          level: 90,
          icon: <img src={CreativeThinkingLogo} alt="Creative Thinking" className="w-7 h-7 object-contain rounded-full bg-white border" />,
        },
        {
          name: "Communication",
          level: 85,
          icon: <img src={CommunicationLogo} alt="Communication" className="w-7 h-7 object-contain rounded-full bg-white border" />,
        },
      ],
      color: "bg-[#b6babd]/10",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#f7f7fa] via-[#f4f4f2] to-[#e0e7ff] opacity-90" />
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">Skills & Expertise</h2>
            <p className="text-lg text-[#333333]/80 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and what I'm currently learning.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className={`glass p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e5e7eb] bg-white/80 backdrop-blur-md transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-[#a5b4fc] ${category.color} h-full`}>
                <h3 className="text-xl font-semibold text-[#333333] mb-6">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-full bg-white/80 text-[#333333]">{skill.icon}</div>
                          <span className="text-[#333333] font-medium">{skill.name}</span>
                        </div>
                        <span className="text-[#333333]/60 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 bg-white/50 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-full rounded-full ${
                            skill.level >= 90
                              ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                              : skill.level >= 80
                              ? "bg-gradient-to-r from-blue-400 to-blue-500"
                              : skill.level >= 70
                              ? "bg-gradient-to-r from-indigo-400 to-indigo-500"
                              : "bg-gradient-to-r from-purple-400 to-purple-500"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
