import React from 'react';

const DatabaseIcon = ({ className = "w-6 h-6", color = "#6272a4" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="12"
        cy="5"
        rx="9"
        ry="3"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M21 16C21 17.6569 16.9706 19 12 19C7.02944 19 3 17.6569 3 16"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default DatabaseIcon; 