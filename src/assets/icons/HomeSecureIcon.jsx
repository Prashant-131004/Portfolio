import React from 'react';

const HomeSecureIcon = ({ className = "w-full h-32" }) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="houseGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
      <linearGradient id="shieldGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <polyline points="16,32 32,18 48,32" stroke="url(#houseGradient)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="22" y="32" width="20" height="14" rx="3" stroke="url(#houseGradient)" strokeWidth="3" fill="none" />
    <path d="M32 32 L38 36 Q38 44 32 46 Q26 44 26 36 L32 32 Z" stroke="url(#shieldGradient)" strokeWidth="2" fill="#fef3c7" />
    <rect x="30" y="37" width="4" height="5" rx="1.5" fill="#fcd34d" />
    <path d="M32 37 V35.5" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default HomeSecureIcon;
