import React from 'react';

const HouseShieldIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Shield */}
    <path d="M12 3 L20 7 V13 C20 17 16 20 12 21 C8 20 4 17 4 13 V7 L12 3 Z" fill="#fef9c3" stroke="#fbbf24" strokeWidth="1.5" />
    {/* House */}
    <rect x="8" y="11" width="8" height="5" rx="1" fill="#bbf7d0" stroke="#22c55e" strokeWidth="1" />
    <polygon points="12,8 7,12 17,12" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
  </svg>
);

export default HouseShieldIcon; 