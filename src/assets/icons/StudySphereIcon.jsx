import React from 'react';

const StudySphereIcon = ({ className = "w-full h-32" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Minimal brain hemispheres */}
    <circle cx="28" cy="38" r="8" stroke="#a78bfa" strokeWidth="2.5" fill="#f3e8ff" />
    <circle cx="36" cy="38" r="8" stroke="#a78bfa" strokeWidth="2.5" fill="#f3e8ff" />
    {/* Minimal graduation cap */}
    <rect x="26" y="24" width="12" height="4" fill="#6366f1" />
    <rect x="30" y="20" width="4" height="4" fill="#a78bfa" />
    <line x1="32" y1="24" x2="32" y2="28" stroke="#6366f1" strokeWidth="1.5" />
  </svg>
);

export default StudySphereIcon; 