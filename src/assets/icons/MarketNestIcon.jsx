import React from 'react';

const StudySphereIcon = ({ className = "w-full h-32" }) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id="brainGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f3e8ff" />
        <stop offset="100%" stopColor="#d8b4fe" />
      </radialGradient>
    </defs>
    <circle cx="28" cy="38" r="8" fill="url(#brainGradient)" stroke="#a78bfa" strokeWidth="2.5" />
    <circle cx="36" cy="38" r="8" fill="url(#brainGradient)" stroke="#a78bfa" strokeWidth="2.5" />
    <polygon points="32,20 24,24 40,24" fill="#6366f1" />
    <line x1="32" y1="24" x2="32" y2="28" stroke="#6366f1" strokeWidth="1.5" />
    <circle cx="32" cy="28" r="1.2" fill="#4f46e5" />
  </svg>
);

export default StudySphereIcon;
