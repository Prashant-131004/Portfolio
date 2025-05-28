import React from 'react';

const ValuePassionSVG = ({ className = "w-full h-20" }) => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Heart shape */}
    <path d="M60 30 Q60 20 70 20 Q80 20 80 30 Q80 40 60 50 Q40 40 40 30 Q40 20 50 20 Q60 20 60 30" 
          fill="#fef2f2" stroke="#fecaca" strokeWidth="2" />
    
    {/* Inner heart details */}
    <path d="M60 35 Q60 30 65 30 Q70 30 70 35 Q70 40 60 45 Q50 40 50 35 Q50 30 55 30 Q60 30 60 35" 
          fill="#fee2e2" stroke="#fecaca" strokeWidth="1" />
    
    {/* Decorative elements */}
    <circle cx="60" cy="35" r="2" fill="#ef4444" />
    <circle cx="55" cy="32" r="1.5" fill="#ef4444" />
    <circle cx="65" cy="32" r="1.5" fill="#ef4444" />
    
    {/* Rays */}
    <path d="M60 15 L60 20" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M45 25 L50 25" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M75 25 L70 25" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default ValuePassionSVG; 