import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isInView = useInView(ref, { 
    once: true, 
    margin: isMobile ? "-50px" : "-100px",
    amount: isMobile ? 0.2 : 0.3
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 30 : 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.8 : 1.1,
        delay: isMobile ? delay * 0.7 : delay,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 