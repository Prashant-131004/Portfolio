import React from 'react';

const MenuIcon = ({ className = "w-6 h-6", color = "#fff" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="none" />
      <path d="M12 6V18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M6 12H18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default MenuIcon; 