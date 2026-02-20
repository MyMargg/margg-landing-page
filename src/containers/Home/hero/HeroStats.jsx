import React from "react";
import styled from "styled-components";
import { FONTS } from "@constants";

const StatsRow = styled.div`
  position: absolute;
  left: var(--pad);
  right: var(--pad);
  bottom: clamp(18px, 5vh, 74px);
  z-index: 3;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 222px));
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 222px));
    justify-content: center;
  }

  /* Tablet + short-height screens: keep stats in flow to avoid clipping */
  @media (max-width: 768px), (max-height: 820px) {
    position: relative;
    left: auto;
    right: auto;
    bottom: auto;
    padding: 0 var(--pad);
    margin-top: clamp(28px, 4vh, 48px);
    grid-template-columns: repeat(2, minmax(0, 222px));
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
    margin-top: 28px;
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  position: relative;
  width: 222px;
  height: 220px;
  border-radius: 40px;
  padding: 32px;
  overflow: hidden;
  background: #eee7f9;
  box-shadow:
    0px 4px 32px 0px rgba(0, 0, 0, 0.25),
    0px 4px 32px 0px rgba(255, 255, 255, 0.25);

  transition:
    transform 240ms ease,
    box-shadow 240ms ease;

  &:hover {
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    box-shadow:
      inset 0px -8px 60px 0px #b095e3,
      inset 0px 12px 40px 0px #d3c4ef;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }
`;

const StatValue = styled.div`
  font-family: ${FONTS.heading};
  font-size: 80px;
  line-height: 1;
  color: #5013c0;
`;

const StatLabel = styled.div`
  margin-top: 8px;
  font-family: ${FONTS.body};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  color: #696767;
`;

const StatLabelTwoLine = styled(StatLabel)`
  white-space: pre-line;
`;

export default function HeroStats() {
  return (
    <StatsRow aria-label="stats">
      <StatCard>
        <StatValue>43+</StatValue>
        <StatLabel>University Partners</StatLabel>
      </StatCard>
      <StatCard>
        <StatValue>12K+</StatValue>
        <StatLabel>Students Enrolled</StatLabel>
      </StatCard>
      <StatCard>
        <StatValue>35</StatValue>
        <StatLabel>Outstanding Mentors</StatLabel>
      </StatCard>
      <StatCard>
        <StatValue>7.5K</StatValue>
        <StatLabelTwoLine>{`Student\nPlacements`}</StatLabelTwoLine>
      </StatCard>
    </StatsRow>
  );
}
