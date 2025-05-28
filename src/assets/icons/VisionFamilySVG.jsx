import React from 'react';

const VisionFamilySVG = ({ className = "w-full h-28" }) => (
  <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Building structure */}
    <rect x="30" y="25" width="60" height="35" rx="2" fill="#f0fdf4" stroke="#86efac" strokeWidth="2" />
    
    {/* Windows */}
    <rect x="40" y="35" width="10" height="10" rx="1" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
    <rect x="70" y="35" width="10" height="10" rx="1" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
    <rect x="40" y="50" width="10" height="10" rx="1" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
    <rect x="70" y="50" width="10" height="10" rx="1" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
    
    {/* Door */}
    <rect x="55" y="45" width="10" height="15" rx="1" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
    
    {/* Roof */}
    <path d="M25 25 L60 10 L95 25" stroke="#86efac" strokeWidth="2" fill="none" />
    
    {/* Decorative elements */}
    <circle cx="60" cy="15" r="2" fill="#22c55e" />
    <circle cx="55" cy="15" r="2" fill="#22c55e" />
    <circle cx="65" cy="15" r="2" fill="#22c55e" />
  </svg>
);

export default VisionFamilySVG; 