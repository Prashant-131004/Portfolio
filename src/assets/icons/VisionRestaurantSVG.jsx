import React from 'react';

const VisionRestaurantSVG = ({ className = "w-full h-28" }) => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Plate */}
    <circle cx="60" cy="45" r="25" fill="#fef3c7" stroke="#fbbf24" strokeWidth="2" />
    <circle cx="60" cy="45" r="20" fill="#fef9c3" />
    
    {/* Food elements */}
    <path d="M50 40 Q60 35 70 40" stroke="#d97706" strokeWidth="2" fill="none" />
    <path d="M45 45 Q60 40 75 45" stroke="#d97706" strokeWidth="2" fill="none" />
    <path d="M50 50 Q60 45 70 50" stroke="#d97706" strokeWidth="2" fill="none" />
    
    {/* Utensils */}
    <path d="M35 30 L35 60" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />
    <path d="M85 30 L85 60" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />
    
    {/* Decorative elements */}
    <circle cx="60" cy="45" r="2" fill="#d97706" />
    <circle cx="55" cy="42" r="1.5" fill="#d97706" />
    <circle cx="65" cy="48" r="1.5" fill="#d97706" />
  </svg>
);

export default VisionRestaurantSVG; 