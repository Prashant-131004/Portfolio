import React from 'react';

const PortfolioProjectSVG = ({ className = "w-full h-32" }) => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Browser window */}
    <rect x="20" y="20" width="80" height="40" rx="4" fill="#f0f9ff" stroke="#7dd3fc" strokeWidth="2" />
    
    {/* Browser header */}
    <rect x="20" y="20" width="80" height="8" rx="4" fill="#e0f2fe" />
    
    {/* Browser controls */}
    <circle cx="26" cy="24" r="2" fill="#0ea5e9" />
    <circle cx="34" cy="24" r="2" fill="#0ea5e9" />
    <circle cx="42" cy="24" r="2" fill="#0ea5e9" />
    
    {/* Content elements */}
    <rect x="30" y="35" width="60" height="4" rx="2" fill="#bae6fd" />
    <rect x="30" y="43" width="40" height="4" rx="2" fill="#bae6fd" />
    <rect x="30" y="51" width="50" height="4" rx="2" fill="#bae6fd" />
    
    {/* Decorative elements */}
    <circle cx="60" cy="15" r="2" fill="#0ea5e9" />
    <circle cx="55" cy="15" r="2" fill="#0ea5e9" />
    <circle cx="65" cy="15" r="2" fill="#0ea5e9" />
  </svg>
);

export default PortfolioProjectSVG; 