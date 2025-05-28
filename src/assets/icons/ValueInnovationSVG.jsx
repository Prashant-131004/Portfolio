import React from 'react';

const ValueInnovationSVG = ({ className = "w-full h-20" }) => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Light bulb */}
    <path d="M60 20 L60 40" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 40 Q60 20 80 40" stroke="#0ea5e9" strokeWidth="2" fill="none" />
    <path d="M40 40 Q60 60 80 40" stroke="#0ea5e9" strokeWidth="2" fill="none" />
    
    {/* Rays of light */}
    <path d="M60 20 L50 10" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M60 20 L70 10" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M60 20 L60 5" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Base */}
    <rect x="55" y="40" width="10" height="5" rx="2" fill="#0ea5e9" />
    
    {/* Decorative elements */}
    <circle cx="60" cy="30" r="2" fill="#0ea5e9" />
    <circle cx="55" cy="35" r="1.5" fill="#0ea5e9" />
    <circle cx="65" cy="35" r="1.5" fill="#0ea5e9" />
  </svg>
);

export default ValueInnovationSVG; 