import React from 'react';

const ChefHatIcon = ({ className = "w-6 h-6", color = "#6272a4" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 13C6 13 4 11 4 8C4 5 6 3 6 3C6 3 8 5 8 8C8 11 6 13 6 13Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 13C18 13 16 11 16 8C16 5 18 3 18 3C18 3 20 5 20 8C20 11 18 13 18 13Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C12 13 10 11 10 8C10 5 12 3 12 3C12 3 14 5 14 8C14 11 12 13 12 13Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 13V21H18V13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChefHatIcon; 