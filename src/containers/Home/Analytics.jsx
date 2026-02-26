import React, { useRef, useCallback } from "react";
import styled, { keyframes } from "styled-components";

import StatsCards from "@components/StatsCards";
import { MAX_CONTENT_WIDTH, FONTS } from "@constants";
import { useContent } from "@content/ContentContext";

const AnalyticsSection = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 1;

  --hero-bottom-radius: clamp(56px, 6vw, 120px);
  margin-top: calc(-1 * var(--hero-bottom-radius));
  --pad: clamp(24px, 7vw, 120px);

  padding: calc(clamp(56px, 7vh, 96px) + var(--hero-bottom-radius)) var(--pad)
    clamp(56px, 8vh, 110px);

  background: linear-gradient(180deg, #3c2a60 0%, #4b3577 52%, #3c2a60 100%);

  @media (max-width: 1000px) {
    padding: 48px 20px 72px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  margin: 0 auto;

  @media (max-width: 1000px) {
    padding-top: 16px;
  }
`;

/* Spotlight rotates around letter edges — drop-shadow respects alpha, so only strokes/edges glow */
const orbitGlow = keyframes`
  0%   { filter: drop-shadow(-10px  -6px 14px rgba(200,170,255,0.85)) drop-shadow( 6px  8px 28px rgba(130,90,210,0.25)); }
  25%  { filter: drop-shadow(  8px  -8px 14px rgba(220,190,255,0.85)) drop-shadow(-6px  8px 28px rgba(150,110,230,0.25)); }
  50%  { filter: drop-shadow( 10px   6px 14px rgba(200,170,255,0.85)) drop-shadow(-6px -8px 28px rgba(130,90,210,0.25)); }
  75%  { filter: drop-shadow( -8px   8px 14px rgba(220,190,255,0.85)) drop-shadow( 6px -8px 28px rgba(150,110,230,0.25)); }
  100% { filter: drop-shadow(-10px  -6px 14px rgba(200,170,255,0.85)) drop-shadow( 6px  8px 28px rgba(130,90,210,0.25)); }
`;

const WordBase = styled.span`
  display: inline-block;
  font-family: ${FONTS.heading};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: clamp(52px, 9vw, 108px);
  line-height: 1;
  color: rgba(255, 255, 255, 0.92);
  animation: ${orbitGlow} 6s ease-in-out infinite;
  cursor: default;
  user-select: none;
  will-change: filter;
`;

/* Cursor-tracking wrapper — writes --gx/--gy CSS vars on mousemove */
function GlowWord({ children }) {
  const spanRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!spanRef.current) return;
    const rect = spanRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    // Vector FROM word-center TOWARD cursor → shadow projects toward cursor
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const ox = (dx / dist) * 14;
    const oy = (dy / dist) * 14;
    spanRef.current.style.animation = "none";
    spanRef.current.style.filter = [
      `drop-shadow(${ox}px ${oy}px 18px rgba(220,190,255,0.95))`,
      `drop-shadow(${ox * 0.4}px ${oy * 0.4}px 36px rgba(176,149,227,0.55))`,
    ].join(" ");
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!spanRef.current) return;
    spanRef.current.style.animation = "";
    spanRef.current.style.filter = "";
  }, []);

  return (
    <WordBase
      ref={spanRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </WordBase>
  );
}

const ComingSoonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px 0;
  gap: clamp(24px, 4vw, 64px);

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: clamp(8px, 3vw, 24px);
  }
`;

export default function Analytics() {
  const { stats, waitList } = useContent("analytics");

  return (
    <AnalyticsSection aria-label="analytics">
      <Inner>
        {waitList ? (
          <ComingSoonWrapper>
            <GlowWord>Coming</GlowWord>
            <GlowWord>Soon</GlowWord>
          </ComingSoonWrapper>
        ) : (
          <StatsCards items={stats} />
        )}
      </Inner>
    </AnalyticsSection>
  );
}
