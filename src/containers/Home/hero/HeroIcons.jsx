import React from "react";

export function ScrollIcon({ color = "currentColor" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="10"
        y="12"
        width="44"
        height="40"
        rx="10"
        fill={color}
        opacity="0.25"
      />
      <rect
        x="18"
        y="20"
        width="28"
        height="24"
        rx="8"
        fill={color}
        opacity="0.35"
      />
      <path
        d="M26 36L32 30L38 36"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

export function MessageProgrammingIcon({ color = "currentColor" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 18C14 14.686 16.686 12 20 12H44C47.314 12 50 14.686 50 18V36C50 39.314 47.314 42 44 42H30L20 50V42H20C16.686 42 14 39.314 14 36V18Z"
        fill={color}
        opacity="0.25"
      />
      <path
        d="M26 24L20 30L26 36"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M38 24L44 30L38 36"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M34 22L30 38"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

export function PenToolIcon({ color = "currentColor" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 44L44 20"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path d="M18 46L22 42L26 46L22 50L18 46Z" fill={color} opacity="0.35" />
      <path
        d="M38 18L46 26"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

export function DriverIcon({ color = "currentColor" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="16"
        y="14"
        width="32"
        height="28"
        rx="6"
        fill={color}
        opacity="0.25"
      />
      <rect
        x="20"
        y="18"
        width="24"
        height="14"
        rx="4"
        fill={color}
        opacity="0.35"
      />
      <path
        d="M26 48H38"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

export function CloudConnectionIcon({ color = "currentColor" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 40C17.582 40 14 36.418 14 32C14 27.582 17.582 24 22 24C23.47 24 24.846 24.397 26.028 25.09C27.564 20.99 31.516 18 36.2 18C42.419 18 47.4 22.87 47.4 28.9V29.3C49.999 30.268 52 32.758 52 35.7C52 39.47 48.97 42.5 45.2 42.5H22.8C22.53 42.5 22.265 42.488 22 42.46V40Z"
        fill={color}
        opacity="0.25"
      />
      <path
        d="M26 46H38"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M22 52H42"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

export function FavoriteChartIcon({ color = "currentColor" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 44V34"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M28 44V26"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M40 44V30"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M50 26L52 30L56 30L53 33L54 37L50 35L46 37L47 33L44 30L48 30L50 26Z"
        fill={color}
        opacity="0.35"
      />
    </svg>
  );
}

export function LockIcon({ color = "currentColor" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="18"
        y="30"
        width="28"
        height="22"
        rx="10"
        fill={color}
        opacity="0.25"
      />
      <path
        d="M24 30V26C24 21.582 27.582 18 32 18C36.418 18 40 21.582 40 26V30"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M32 38V44"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}
