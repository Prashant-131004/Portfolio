import React from 'react';

const ValueCreativitySVG = ({ className = "w-full h-20" }) => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Paint brush */}
    <path d="M30 50 L50 30" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />
    <path d="M50 30 L70 20" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />
    
    {/* Paint strokes */}
    <path d="M40 40 Q45 35 50 40" stroke="#a78bfa" strokeWidth="2" fill="none" />
    <path d="M45 45 Q50 40 55 45" stroke="#a78bfa" strokeWidth="2" fill="none" />
    <path d="M50 50 Q55 45 60 50" stroke="#a78bfa" strokeWidth="2" fill="none" />
    
    {/* Color palette */}
    <circle cx="80" cy="40" r="15" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="2" />
    <circle cx="80" cy="40" r="10" fill="#ede9fe" />
    
    {/* Color dots */}
    <circle cx="75" cy="35" r="2" fill="#7c3aed" />
    <circle cx="85" cy="35" r="2" fill="#7c3aed" />
    <circle cx="80" cy="45" r="2" fill="#7c3aed" />
  </svg>
);

export default ValueCreativitySVG; 