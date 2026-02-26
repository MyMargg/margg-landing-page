import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Adapted from Aceternity UI TextHoverEffect
 * motion.radialGradient is not supported in framer-motion;
 * we drive cx/cy directly via a DOM ref.
 */
export const TextHoverEffect = ({ text, duration = 0 }) => {
  const svgRef = useRef(null);
  const maskGradRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const uid = text.replace(/\s+/g, "-").toLowerCase();

  const handleMouseMove = (e) => {
    if (!svgRef.current || !maskGradRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    // Map cursor to SVG viewBox coords (0-300 x 0-100)
    const cx = ((e.clientX - rect.left) / rect.width) * 300;
    const cy = ((e.clientY - rect.top) / rect.height) * 100;
    maskGradRef.current.setAttribute("cx", cx);
    maskGradRef.current.setAttribute("cy", cy);
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ userSelect: "none", overflow: "visible", display: "block" }}
    >
      <defs>
        {/* Color gradient — visible only inside the reveal mask */}
        <radialGradient
          id={`textGradient-${uid}`}
          gradientUnits="userSpaceOnUse"
          cx="150"
          cy="50"
          r="80"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#d8b4fe" />
          <stop offset="60%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </radialGradient>

        {/* Reveal mask — cx/cy driven directly via DOM ref */}
        <radialGradient
          ref={maskGradRef}
          id={`revealMask-${uid}`}
          gradientUnits="userSpaceOnUse"
          cx="150"
          cy="50"
          r="70"
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>

        <mask id={`textMask-${uid}`}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#revealMask-${uid})`}
          />
        </mask>
      </defs>

      {/* Layer 1 — static dim outline, appears on hover */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        fill="transparent"
        stroke="rgba(255,255,255,0.15)"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="72"
        fontWeight="400"
        style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease" }}
      >
        {text}
      </text>

      {/* Layer 2 — animated stroke draw-in */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        fill="transparent"
        stroke="rgba(255,255,255,0.55)"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="72"
        fontWeight="400"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>

      {/* Layer 3 — gradient fill, revealed only through cursor mask */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        fill="transparent"
        stroke={`url(#textGradient-${uid})`}
        mask={`url(#textMask-${uid})`}
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="72"
        fontWeight="400"
      >
        {text}
      </text>

      {/* Layer 4 — solid white base so text is always readable */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="rgba(255,255,255,0.92)"
        stroke="none"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="72"
        fontWeight="400"
        style={{ pointerEvents: "none" }}
      >
        {text}
      </text>
    </svg>
  );
};

export default TextHoverEffect;
