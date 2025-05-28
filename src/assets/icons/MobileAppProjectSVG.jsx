import React from 'react';

const MobileAppProjectSVG = ({ className = "w-full h-32" }) => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Phone frame */}
    <rect x="40" y="15" width="40" height="50" rx="6" fill="#fdf4ff" stroke="#e9d5ff" strokeWidth="2" />
    
    {/* Screen */}
    <rect x="45" y="20" width="30" height="40" rx="2" fill="#faf5ff" />
    
    {/* App icons */}
    <rect x="50" y="25" width="8" height="8" rx="2" fill="#e9d5ff" />
    <rect x="62" y="25" width="8" height="8" rx="2" fill="#e9d5ff" />
    <rect x="50" y="37" width="8" height="8" rx="2" fill="#e9d5ff" />
    <rect x="62" y="37" width="8" height="8" rx="2" fill="#e9d5ff" />
    
    {/* Home button */}
    <rect x="55" y="58" width="10" height="2" rx="1" fill="#a855f7" />
    
    {/* Decorative elements */}
    <circle cx="60" cy="10" r="2" fill="#a855f7" />
    <circle cx="55" cy="10" r="2" fill="#a855f7" />
    <circle cx="65" cy="10" r="2" fill="#a855f7" />
  </svg>
);

export default MobileAppProjectSVG; 