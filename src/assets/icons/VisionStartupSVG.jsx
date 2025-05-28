import React from 'react';

const VisionStartupSVG = ({ className = "w-full h-28" }) => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Main device frame */}
    <rect x="30" y="20" width="60" height="40" rx="4" fill="#e0e7ff" stroke="#818cf8" strokeWidth="2" />
    
    {/* Screen content */}
    <rect x="35" y="25" width="50" height="30" rx="2" fill="#c7d2fe" />
    
    {/* Code-like elements */}
    <path d="M40 35 L45 35" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 40 L50 40" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" />
    <path d="M40 45 L48 45" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" />
    
    {/* Connection dots */}
    <circle cx="60" cy="15" r="2" fill="#818cf8" />
    <circle cx="55" cy="15" r="2" fill="#818cf8" />
    <circle cx="65" cy="15" r="2" fill="#818cf8" />
    
    {/* Decorative elements */}
    <path d="M25 30 L35 30" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M25 40 L35 40" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M25 50 L35 50" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default VisionStartupSVG; 