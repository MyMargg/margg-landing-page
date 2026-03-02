import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// images
import Phone from "@assets/figma/phone-screen-2.webp";

// components
import Grid from "./Grid";

// constants
import { MEDIA_QUERIES } from "@constants";

/* ── scroll-triggered slide-up ─────────────────────────── */

const fadeUp = keyframes`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;

function useInView(threshold = 0.1) {
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

const SectionContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1600px;
  padding: 0 40px;
  margin-top: 80px;
  align-items: center;
  justify-content: center;

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    padding: 0 20px;
    gap: 24px;
    align-items: stretch;
  }
`;

const PhoneWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  opacity: 0;

  ${(p) =>
    p.$inView &&
    css`
      animation: ${fadeUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${MEDIA_QUERIES.mobile} {
    display: none;
  }
`;

const PhoneImage = styled.img`
  width: 270px;
  height: 576px;
  object-fit: contain;
  display: block;
`;

const GridWrapper = styled.div`
  min-width: 0;
  opacity: 0;

  ${(p) =>
    p.$inView &&
    css`
      animation: ${fadeUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }
`;

const GridSection = () => {
  const [viewRef, inView] = useInView(0.1);

  return (
    <SectionContainer ref={viewRef}>
      <PhoneWrapper $inView={inView}>
        <PhoneImage
          src={Phone}
          alt="Margg mobile app screenshot showing learning dashboard"
          width={1113}
          height={2340}
          loading="lazy"
          decoding="async"
        />
      </PhoneWrapper>
      <GridWrapper $inView={inView}>
        <Grid />
      </GridWrapper>
    </SectionContainer>
  );
};

export default GridSection;
