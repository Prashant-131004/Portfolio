import React from 'react';

const ColoredHtmlIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 2L5.5 19.5L12 22L18.5 19.5L20 2H4Z"
      fill="#E34F26"
      stroke="#E34F26"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 7H7.5L8 11H16L15.5 16L12 17.5L8.5 16L8 13"
      fill="white"
    />
  </svg>
);

export default ColoredHtmlIcon; 