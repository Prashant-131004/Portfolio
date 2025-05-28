import React from 'react';

const BrainCapIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Brain */}
    <ellipse cx="12" cy="15" rx="7" ry="5" fill="#f3e8ff" stroke="#a78bfa" strokeWidth="1.2" />
    {/* Cap */}
    <rect x="7" y="6" width="10" height="3" rx="1" fill="#6366f1" />
    <polygon points="12,3 6,8 18,8" fill="#a78bfa" />
    <line x1="12" y1="9" x2="12" y2="12" stroke="#6366f1" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="0.8" fill="#6366f1" />
  </svg>
);

export default BrainCapIcon; 