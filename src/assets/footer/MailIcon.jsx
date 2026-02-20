import React from "react";

/**
 * Mail Icon Component
 * @param {number} width - Width of the icon (default: 20)
 * @param {number} height - Height of the icon (default: 20)
 * @param {string} color - Color of the icon (default: "#B095E3")
 * @param {object} props - Additional SVG props
 */
const MailIcon = ({ width = 20, height = 20, color = "#B095E3", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.652 3.3335H3.33026C2.41439 3.3335 1.67337 4.0835 1.67337 5.00016L1.66504 15.0002C1.66504 15.9168 2.41439 16.6668 3.33026 16.6668H16.652C17.5679 16.6668 18.3172 15.9168 18.3172 15.0002V5.00016C18.3172 4.0835 17.5679 3.3335 16.652 3.3335ZM16.652 6.66683L9.99113 10.8335L3.33026 6.66683V5.00016L9.99113 9.16683L16.652 5.00016V6.66683Z"
      fill={color}
    />
  </svg>
);

export default MailIcon;
