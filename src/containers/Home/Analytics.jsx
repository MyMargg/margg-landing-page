import React, { useRef, useCallback, useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

import StatsCards from "@components/StatsCards";
import { MAX_CONTENT_WIDTH, FONTS } from "@constants";
import { useContent } from "@content/ContentContext";

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION WRAPPER
   ═══════════════════════════════════════════════════════════════════════════ */

const AnalyticsSection = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 1;

  --hero-bottom-radius: clamp(56px, 6vw, 120px);
  margin-top: calc(-1 * var(--hero-bottom-radius));
  --pad: clamp(24px, 7vw, 120px);

  padding: calc(clamp(72px, 10vh, 130px) + var(--hero-bottom-radius)) var(--pad)
    calc(clamp(72px, 10vh, 130px) + 72px);

  background: linear-gradient(180deg, #3c2a60 0%, #4b3577 52%, #3c2a60 100%);

  @media (max-width: 1000px) {
    padding: calc(64px + var(--hero-bottom-radius)) 20px calc(80px + 72px);
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  margin: 0 auto;
  position: relative;

  @media (max-width: 1000px) {
    padding-top: 16px;
  }
`;

/* ═══════════════════════════════════════════════════════════════════════════
   AURORA BACKGROUND — organic morphing color blobs
   ═══════════════════════════════════════════════════════════════════════════ */

const auroraShift1 = keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(30px, -50px) scale(1.1); }
  50%  { transform: translate(-20px, 20px) scale(0.9); }
  75%  { transform: translate(50px, 30px) scale(1.05); }
  100% { transform: translate(0, 0) scale(1); }
`;

const auroraShift2 = keyframes`
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(-40px, 30px) scale(0.95); }
  50%  { transform: translate(30px, -40px) scale(1.1); }
  75%  { transform: translate(-20px, -20px) scale(1); }
  100% { transform: translate(0, 0) scale(1); }
`;

const auroraShift3 = keyframes`
  0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
  33%  { transform: translate(20px, -30px) scale(1.15) rotate(5deg); }
  66%  { transform: translate(-30px, 20px) scale(0.9) rotate(-3deg); }
  100% { transform: translate(0, 0) scale(1) rotate(0deg); }
`;

const AuroraCanvas = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const AuroraBlob = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  mix-blend-mode: screen;
  will-change: transform;
`;

const Blob1 = styled(AuroraBlob)`
  left: 15%;
  top: 20%;
  width: clamp(200px, 30vw, 500px);
  height: clamp(200px, 30vw, 500px);
  background: radial-gradient(
    circle,
    rgba(80, 19, 192, 0.4) 0%,
    transparent 70%
  );
  animation: ${auroraShift1} 12s ease-in-out infinite;
`;

const Blob2 = styled(AuroraBlob)`
  right: 10%;
  top: 30%;
  width: clamp(180px, 28vw, 450px);
  height: clamp(180px, 28vw, 450px);
  background: radial-gradient(
    circle,
    rgba(176, 149, 227, 0.3) 0%,
    transparent 70%
  );
  animation: ${auroraShift2} 15s ease-in-out infinite;
`;

const Blob3 = styled(AuroraBlob)`
  left: 40%;
  bottom: 10%;
  width: clamp(150px, 25vw, 400px);
  height: clamp(150px, 25vw, 400px);
  background: radial-gradient(
    circle,
    rgba(100, 50, 200, 0.25) 0%,
    transparent 70%
  );
  animation: ${auroraShift3} 18s ease-in-out infinite;
`;

/* ═══════════════════════════════════════════════════════════════════════════
   TEXTURE LAYERS — noise grain + grid lines + scan line
   ═══════════════════════════════════════════════════════════════════════════ */

const NoiseOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
`;

const gridFade = keyframes`
  0%, 100% { opacity: 0.03; }
  50%      { opacity: 0.06; }
`;

const GridLines = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgba(176, 149, 227, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(176, 149, 227, 0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(
    ellipse 60% 50% at 50% 50%,
    black 0%,
    transparent 100%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 60% 50% at 50% 50%,
    black 0%,
    transparent 100%
  );
  animation: ${gridFade} 8s ease-in-out infinite;
`;

const scanAnim = keyframes`
  0%   { top: -2px; opacity: 0; }
  10%  { opacity: 0.12; }
  90%  { opacity: 0.12; }
  100% { top: 100%; opacity: 0; }
`;

const ScanLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -2px;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(176, 149, 227, 0.35),
    transparent
  );
  animation: ${scanAnim} 4s linear infinite;
  pointer-events: none;
  z-index: 3;
`;

/* ═══════════════════════════════════════════════════════════════════════════
   CONSTELLATION PARTICLES — floating dots with glowing halos
   ═══════════════════════════════════════════════════════════════════════════ */

const floatParticle = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25%      { transform: translate(15px, -25px); }
  50%      { transform: translate(-10px, 15px); }
  75%      { transform: translate(20px, 10px); }
`;

const CONSTELLATION = [
  { x: 5, y: 15, size: 3, dur: 10, delay: 0, op: 0.4 },
  { x: 12, y: 72, size: 2, dur: 12, delay: 1.2, op: 0.3 },
  { x: 22, y: 35, size: 4, dur: 9, delay: 0.5, op: 0.5 },
  { x: 33, y: 85, size: 2, dur: 14, delay: 2.0, op: 0.25 },
  { x: 42, y: 12, size: 3, dur: 11, delay: 0.8, op: 0.35 },
  { x: 55, y: 78, size: 4, dur: 13, delay: 1.5, op: 0.45 },
  { x: 63, y: 28, size: 2, dur: 10, delay: 3.0, op: 0.3 },
  { x: 72, y: 60, size: 3, dur: 15, delay: 0.3, op: 0.4 },
  { x: 78, y: 18, size: 2, dur: 12, delay: 2.5, op: 0.25 },
  { x: 85, y: 45, size: 4, dur: 9, delay: 1.0, op: 0.5 },
  { x: 91, y: 80, size: 3, dur: 11, delay: 0.7, op: 0.35 },
  { x: 15, y: 50, size: 2, dur: 14, delay: 1.8, op: 0.3 },
  { x: 48, y: 42, size: 3, dur: 10, delay: 2.2, op: 0.4 },
  { x: 68, y: 90, size: 2, dur: 13, delay: 0.4, op: 0.25 },
  { x: 38, y: 55, size: 3, dur: 11, delay: 3.2, op: 0.35 },
  { x: 95, y: 25, size: 2, dur: 12, delay: 1.6, op: 0.3 },
  { x: 8, y: 88, size: 4, dur: 15, delay: 0.9, op: 0.45 },
  { x: 28, y: 8, size: 2, dur: 10, delay: 2.8, op: 0.3 },
];

const ConstellationDot = styled.span`
  position: absolute;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  border-radius: 50%;
  background: rgba(176, 149, 227, ${(p) => p.$op});
  left: ${(p) => p.$x}%;
  top: ${(p) => p.$y}%;
  animation: ${floatParticle} ${(p) => p.$dur}s ease-in-out infinite;
  animation-delay: ${(p) => p.$delay}s;
  pointer-events: none;
  box-shadow: 0 0 ${(p) => p.$size * 3}px
    rgba(176, 149, 227, ${(p) => p.$op * 0.5});
`;

/* ═══════════════════════════════════════════════════════════════════════════
   HORIZONTAL SWEEP LIGHT
   ═══════════════════════════════════════════════════════════════════════════ */

const sweepLine = keyframes`
  0%   { left: -20%; opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { left: 120%; opacity: 0; }
`;

const SweepLight = styled.div`
  position: absolute;
  top: 50%;
  width: 200px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(176, 149, 227, 0.5) 50%,
    transparent 100%
  );
  animation: ${sweepLine} 7s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
`;

/* ═══════════════════════════════════════════════════════════════════════════
   INTERACTIVE CURSOR GLOW
   ═══════════════════════════════════════════════════════════════════════════ */

const CursorGlow = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  --mx: 50%;
  --my: 50%;

  &::after {
    content: "";
    position: absolute;
    left: var(--mx);
    top: var(--my);
    width: 180px;
    height: 180px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(176, 149, 227, 0.14) 0%,
      rgba(80, 19, 192, 0.04) 40%,
      transparent 70%
    );
    transition:
      left 0.12s ease-out,
      top 0.12s ease-out;
  }
`;

/* ═══════════════════════════════════════════════════════════════════════════
   3D PERSPECTIVE TILT — content tilts subtly with cursor
   ═══════════════════════════════════════════════════════════════════════════ */

const PerspectiveWrapper = styled.div`
  perspective: 1200px;
  position: relative;
  z-index: 2;
  /* Prevent layout shift before content renders */
  min-height: 200px;
`;

const TiltContent = styled.div`
  transform-style: preserve-3d;
  transition: transform 0.15s ease-out;
  will-change: transform;
`;

/* ═══════════════════════════════════════════════════════════════════════════
   COMING SOON WRAPPER — glassmorphic breathing border
   ═══════════════════════════════════════════════════════════════════════════ */

const borderBreathe = keyframes`
  0%, 100% { opacity: 0.08; }
  50%      { opacity: 0.18; }
`;

const ComingSoonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 56px 32px;
  z-index: 2;

  @media (max-width: 1000px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 32px 12px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 24px;
    border: 1px solid rgba(176, 149, 227, 0.12);
    background: rgba(75, 53, 119, 0.06);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    animation: ${borderBreathe} 5s ease-in-out infinite;
    pointer-events: none;
  }
`;

/* ═══════════════════════════════════════════════════════════════════════════
   CORNER BRACKETS — decorative edge marks
   ═══════════════════════════════════════════════════════════════════════════ */

const cornerFade = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

const Corner = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  border-color: rgba(176, 149, 227, 0.18);
  border-style: solid;
  border-width: 0;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  animation: ${cornerFade} 0.6s ease-out 2.6s forwards;

  ${(p) =>
    p.$pos === "tl" &&
    css`
      top: 8px;
      left: 8px;
      border-top-width: 1px;
      border-left-width: 1px;
    `}
  ${(p) =>
    p.$pos === "tr" &&
    css`
      top: 8px;
      right: 8px;
      border-top-width: 1px;
      border-right-width: 1px;
    `}
  ${(p) =>
    p.$pos === "bl" &&
    css`
      bottom: 8px;
      left: 8px;
      border-bottom-width: 1px;
      border-left-width: 1px;
    `}
  ${(p) =>
    p.$pos === "br" &&
    css`
      bottom: 8px;
      right: 8px;
      border-bottom-width: 1px;
      border-right-width: 1px;
    `}
`;

/* ═══════════════════════════════════════════════════════════════════════════
   LETTER ANIMATIONS — 3D flip entrance + shimmer + glow breathing
   ═══════════════════════════════════════════════════════════════════════════ */

const letterReveal3D = keyframes`
  0%   {
    opacity: 0;
    transform: translateY(60px) rotateX(90deg) scale(0.5);
    filter: blur(12px);
  }
  60%  {
    opacity: 0.85;
    transform: translateY(-6px) rotateX(-8deg) scale(1.02);
    filter: blur(1px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg) scale(1);
    filter: blur(0);
  }
`;

const shimmer = keyframes`
  0%   { background-position: -300% center; }
  100% { background-position: 300% center; }
`;

const glowBreathe = keyframes`
  0%, 100% {
    text-shadow:
      0 0 20px rgba(176, 149, 227, 0.3),
      0 0 40px rgba(80, 19, 192, 0.12),
      0 0 80px rgba(80, 19, 192, 0.04);
  }
  50% {
    text-shadow:
      0 0 30px rgba(176, 149, 227, 0.5),
      0 0 60px rgba(80, 19, 192, 0.2),
      0 0 120px rgba(80, 19, 192, 0.08);
  }
`;

const gentleFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(12px, 2.5vw, 40px);
  transform-style: preserve-3d;
  width: 100%;
`;

const TitleH2 = styled.h2`
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
`;

const Letter = styled.span`
  display: inline-block;
  font-family: ${FONTS.heading};
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1;
  cursor: default;
  user-select: none;
  position: relative;
  transform-style: preserve-3d;

  /* Rich animated gradient */
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(211, 196, 239, 1) 20%,
    rgba(176, 149, 227, 1) 40%,
    rgba(255, 255, 255, 0.95) 50%,
    rgba(176, 149, 227, 1) 60%,
    rgba(211, 196, 239, 1) 80%,
    rgba(255, 255, 255, 0.9) 100%
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  opacity: 0;
  transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  ${(p) =>
    p.$animate &&
    css`
      animation:
        ${letterReveal3D} 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${p.$delay}s
          forwards,
        ${shimmer} 6s linear ${p.$delay + 0.9}s infinite,
        ${glowBreathe} 4s ease-in-out ${p.$delay + 0.9}s infinite,
        ${gentleFloat} ${3.5 + (p.$delay % 1.5)}s ease-in-out ${p.$delay + 0.9}s
          infinite;
    `}

  &:hover {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(90deg, #fff 0%, #d3c4ef 50%, #fff 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation:
      ${shimmer} 1.5s linear infinite,
      ${glowBreathe} 1s ease-in-out infinite;
    text-shadow:
      0 0 40px rgba(176, 149, 227, 0.8),
      0 0 80px rgba(80, 19, 192, 0.3);
    transform: scale(1.12) translateY(-3px);
  }
`;

const BigLetter = styled(Letter)`
  font-size: clamp(64px, 12vw, 160px);
  letter-spacing: 0.06em;

  @media (max-width: 480px) {
    font-size: clamp(40px, 10vw, 64px);
  }
`;

const SmallLetter = styled(Letter)`
  font-size: clamp(28px, 4.5vw, 56px);
  letter-spacing: 0.18em;
  -webkit-text-fill-color: rgba(211, 196, 239, 0.65);
  background: none;
  animation: ${(p) =>
    p.$animate
      ? css`
          ${letterReveal3D} 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${p.$delay}s forwards
        `
      : "none"};

  &:hover {
    -webkit-text-fill-color: rgba(211, 196, 239, 1);
    background: none;
    transform: scale(1.1) translateY(-2px);
  }
`;

/* ═══════════════════════════════════════════════════════════════════════════
   SUBTITLE — letter-spacing cinematic reveal
   ═══════════════════════════════════════════════════════════════════════════ */

const subtitleReveal = keyframes`
  0%   { opacity: 0; transform: translateY(20px); letter-spacing: 0.6em; }
  100% { opacity: 1; transform: translateY(0); letter-spacing: 0.3em; }
`;

const Subtitle = styled.p`
  margin: clamp(24px, 3.5vw, 48px) 0 0;
  font-family: ${FONTS.body};
  font-size: clamp(13px, 1.6vw, 18px);
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(211, 196, 239, 0.55);
  text-align: center;
  opacity: 0;
  animation: ${subtitleReveal} 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2s forwards;
`;

/* ═══════════════════════════════════════════════════════════════════════════
   DECORATIVE ELEMENTS — divider + diamond + pulse dots
   ═══════════════════════════════════════════════════════════════════════════ */

const lineExpand = keyframes`
  0%   { width: 0; opacity: 0; }
  100% { width: clamp(50px, 10vw, 140px); opacity: 1; }
`;

const DividerGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: clamp(20px, 2.5vw, 36px);
`;

const DividerLine = styled.span`
  display: inline-block;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(176, 149, 227, 0.4) 50%,
    transparent 100%
  );
  animation: ${lineExpand} 1.2s ease-out 2.4s forwards;
  width: 0;
  opacity: 0;
`;

const diamondReveal = keyframes`
  0%   { opacity: 0; transform: rotate(45deg) scale(0); }
  100% { opacity: 1; transform: rotate(45deg) scale(1); }
`;

const diamondPulse = keyframes`
  0%, 100% { opacity: 0.4; transform: rotate(45deg) scale(1); }
  50%      { opacity: 1; transform: rotate(45deg) scale(1.4); }
`;

const Diamond = styled.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  background: rgba(176, 149, 227, 0.7);
  transform: rotate(45deg) scale(0);
  opacity: 0;
  animation:
    ${diamondReveal} 0.5s ease-out 2.5s forwards,
    ${diamondPulse} 3s ease-in-out 3s infinite;
  box-shadow: 0 0 8px rgba(176, 149, 227, 0.4);
`;

/* Pulsing loading dots */
const pulseDot = keyframes`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50%      { opacity: 0.8; transform: scale(1.2); }
`;

const dotsFade = keyframes`
  0%   { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const PulseDotsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: clamp(32px, 4vw, 56px);
  opacity: 0;
  animation: ${dotsFade} 0.8s ease-out 2.8s forwards;
`;

const PulseDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(176, 149, 227, 0.6);
  animation: ${pulseDot} 1.5s ease-in-out infinite;
  animation-delay: ${(p) => p.$delay}s;
  box-shadow: 0 0 6px rgba(176, 149, 227, 0.3);
`;

/* ═══════════════════════════════════════════════════════════════════════════
   HOOKS — cursor glow, 3D tilt, IntersectionObserver
   ═══════════════════════════════════════════════════════════════════════════ */

function useMouseGlow(ref) {
  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      ref.current.style.setProperty("--mx", `${x}%`);
      ref.current.style.setProperty("--my", `${y}%`);
    },
    [ref],
  );
  return handleMouseMove;
}

function use3DTilt(ref) {
  const handleTiltMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      ref.current.style.transform = `rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
    },
    [ref],
  );

  const handleTiltLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  }, [ref]);

  return { handleTiltMove, handleTiltLeave };
}

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* ═══════════════════════════════════════════════════════════════════════════
   STAGGERED WORD — splits text into individually animated letters
   ═══════════════════════════════════════════════════════════════════════════ */

function StaggeredWord({ text, Component, baseDelay = 0, animate = true }) {
  return (
    <span
      style={{
        display: "inline-flex",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
      }}
    >
      {text.split("").map((ch, i) => (
        <Component
          key={`${ch}-${i}`}
          $animate={animate}
          $delay={baseDelay + i * 0.07}
        >
          {ch}
        </Component>
      ))}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

export default function Analytics() {
  const { stats, waitList } = useContent("analytics");
  const cursorRef = useRef(null);
  const tiltRef = useRef(null);
  const handleCursorMove = useMouseGlow(cursorRef);
  const { handleTiltMove, handleTiltLeave } = use3DTilt(tiltRef);
  const [viewRef, inView] = useInView(0.2);

  const handleMouseMove = useCallback(
    (e) => {
      handleCursorMove(e);
      handleTiltMove(e);
    },
    [handleCursorMove, handleTiltMove],
  );

  return (
    <AnalyticsSection
      ref={viewRef}
      aria-label="analytics"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleTiltLeave}
    >
      <Inner>
        {waitList ? (
          <>
            {/* Aurora morphing background */}
            <AuroraCanvas>
              <Blob1 />
              <Blob2 />
              <Blob3 />
            </AuroraCanvas>

            {/* Texture layers */}
            <GridLines />
            <NoiseOverlay />
            <SweepLight />
            <ScanLine />

            {/* Cursor glow */}
            <CursorGlow ref={cursorRef} />

            {/* Constellation particles */}
            {CONSTELLATION.map((p, i) => (
              <ConstellationDot
                key={i}
                $x={p.x}
                $y={p.y}
                $size={p.size}
                $dur={p.dur}
                $delay={p.delay}
                $op={p.op}
              />
            ))}

            {/* 3D perspective tilt wrapper */}
            <PerspectiveWrapper>
              <TiltContent ref={tiltRef}>
                <ComingSoonWrapper>
                  {/* Corner brackets */}
                  <Corner $pos="tl" />
                  <Corner $pos="tr" />
                  <Corner $pos="bl" />
                  <Corner $pos="br" />

                  {/* "WE ARE COMING SOON" — semantic heading */}
                  <TitleH2>
                  <TitleRow>
                    <StaggeredWord
                      text="WE"
                      Component={SmallLetter}
                      baseDelay={0.1}
                      animate={inView}
                    />
                    <span style={{ width: "clamp(8px,1.5vw,20px)" }} />
                    <StaggeredWord
                      text="ARE"
                      Component={SmallLetter}
                      baseDelay={0.3}
                      animate={inView}
                    />
                  </TitleRow>

                  {/* "COMING SOON" — 3D flip entrance */}
                  <TitleRow style={{ marginTop: "clamp(4px, 0.8vw, 12px)" }}>
                    <StaggeredWord
                      text="COMING"
                      Component={BigLetter}
                      baseDelay={0.5}
                      animate={inView}
                    />
                    <StaggeredWord
                      text="SOON"
                      Component={BigLetter}
                      baseDelay={0.9}
                      animate={inView}
                    />
                  </TitleRow>
                  </TitleH2>

                  <Subtitle>Something extraordinary is on its way</Subtitle>

                  <DividerGroup>
                    <DividerLine />
                    <Diamond />
                    <DividerLine />
                  </DividerGroup>

                  {/* Pulsing loading dots */}
                  <PulseDotsRow>
                    <PulseDot $delay={0} />
                    <PulseDot $delay={0.3} />
                    <PulseDot $delay={0.6} />
                  </PulseDotsRow>
                </ComingSoonWrapper>
              </TiltContent>
            </PerspectiveWrapper>
          </>
        ) : (
          <StatsCards items={stats} />
        )}
      </Inner>
    </AnalyticsSection>
  );
}
