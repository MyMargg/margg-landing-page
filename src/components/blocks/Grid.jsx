// libs
import React, { useState, useCallback } from "react";
import styled from "styled-components";

// styles
import { Block } from "./style";

// components
import RoadmapBlock from "./RoadmapBlock";
import MentorshipBlock from "./MentorshipBlock";
import CommunityBlock from "./CommunityBlock";
import FocusTimerBlock from "./FocusTimerBlock";
import StreaksBlock from "./StreaksBlock";
import InterviewPrepBlock from "./InterviewPrepBlock";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  gap: 32px;
  width: 100%;
  max-width: 800px;
  height: 512px;
  opacity: 1;
  padding: 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    height: auto;
    gap: 16px;

    & > * {
      grid-column: span 1 !important;
      grid-row: auto !important;
      min-height: 200px;
    }
  }

  @media (max-width: 480px) {
    gap: 12px;

    & > * {
      min-height: 180px;
    }
  }
`;

const GridBlock = styled(Block)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  overflow: hidden;
  transition:
    transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.3s ease;
  will-change: transform;
  cursor: pointer;

  /* Desktop: hover to zoom */
  @media (min-width: 1001px) {
    &:hover {
      transform: scale(1.04);
      box-shadow: 0 8px 32px rgba(176, 149, 227, 0.15);
      z-index: 2;
    }
  }

  /* Mobile: tap to zoom via data attribute */
  &[data-tapped="true"] {
    transform: scale(1.04);
    box-shadow: 0 8px 32px rgba(176, 149, 227, 0.15);
    z-index: 2;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover,
    &[data-tapped="true"] {
      transform: none;
      box-shadow: none;
    }
  }
`;

// Row 1 - Block 1 (2x width)
const RoadmapWrapper = styled(GridBlock)`
  grid-column: span 6;
  height: 200px;
`;

// Row 1 - Block 2 (1x width)
const MentorshipWrapper = styled(GridBlock)`
  grid-column: span 3;
`;

// Row 1 - Block 3 (1x width)
const CommunityWrapper = styled(GridBlock)`
  grid-column: span 3;
`;

// Row 2, Column 1 - Block 1 (Focus Timer)
const FocusTimerWrapper = styled(GridBlock)`
  grid-column: span 4;
  min-height: 180px;
`;

// Row 2, Column 1 - Block 2 (Streaks)
const StreaksWrapper = styled(GridBlock)`
  grid-column: span 4;
  min-height: 60px;
`;

// Row 2, Column 2 - Single block (Interview Prep)
const InterviewPrepWrapper = styled(GridBlock)`
  grid-column: span 8;
  grid-row: span 2;
  min-height: 272px;
`;

const Grid = () => {
  const [tappedId, setTappedId] = useState(null);

  const handleTap = useCallback((id) => {
    // Only apply tap-zoom on mobile (≤1000px)
    if (typeof window !== "undefined" && window.innerWidth > 1000) return;
    setTappedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <GridContainer>
      {/* Row 1 */}
      <RoadmapWrapper
        data-tapped={tappedId === "roadmap"}
        onClick={() => handleTap("roadmap")}
      >
        <RoadmapBlock />
      </RoadmapWrapper>
      <MentorshipWrapper
        data-tapped={tappedId === "mentorship"}
        onClick={() => handleTap("mentorship")}
      >
        <MentorshipBlock />
      </MentorshipWrapper>
      <CommunityWrapper
        data-tapped={tappedId === "community"}
        onClick={() => handleTap("community")}
      >
        <CommunityBlock />
      </CommunityWrapper>

      {/* Row 2 */}
      <FocusTimerWrapper
        data-tapped={tappedId === "focusTimer"}
        onClick={() => handleTap("focusTimer")}
      >
        <FocusTimerBlock />
      </FocusTimerWrapper>
      <InterviewPrepWrapper
        data-tapped={tappedId === "interviewPrep"}
        onClick={() => handleTap("interviewPrep")}
      >
        <InterviewPrepBlock />
      </InterviewPrepWrapper>
      <StreaksWrapper
        data-tapped={tappedId === "streaks"}
        onClick={() => handleTap("streaks")}
      >
        <StreaksBlock />
      </StreaksWrapper>
    </GridContainer>
  );
};

export default Grid;
