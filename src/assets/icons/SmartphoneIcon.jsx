import React from 'react';

const SmartphoneIcon = ({ className = "w-6 h-6", color = "#6272a4" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="2"
        width="12"
        height="20"
        rx="2"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M12 18H12.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SmartphoneIcon; 