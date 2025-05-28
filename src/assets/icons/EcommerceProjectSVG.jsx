import React from 'react';

const EcommerceProjectSVG = ({ className = "w-full h-32" }) => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Shopping bag */}
    <path d="M40 25 L40 55 C40 60 45 65 50 65 L70 65 C75 65 80 60 80 55 L80 25" 
          fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="2" />
    
    {/* Bag handles */}
    <path d="M45 25 C45 20 50 15 60 15 C70 15 75 20 75 25" 
          fill="none" stroke="#6ee7b7" strokeWidth="2" />
    
    {/* Products */}
    <rect x="45" y="35" width="10" height="15" rx="2" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="1" />
    <rect x="60" y="35" width="10" height="15" rx="2" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="1" />
    
    {/* Price tags */}
    <path d="M50 30 L55 30" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M65 30 L70 30" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Decorative elements */}
    <circle cx="60" cy="15" r="2" fill="#059669" />
    <circle cx="55" cy="15" r="2" fill="#059669" />
    <circle cx="65" cy="15" r="2" fill="#059669" />
  </svg>
);

export default EcommerceProjectSVG; 