import React from "react";
import styled from "styled-components";

import StatsCards from "../../components/StatsCards";

const AnalyticsSection = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 1;

  /* Let Analytics background sit behind the hero's rounded corners */
  --hero-bottom-radius: clamp(56px, 6vw, 120px);
  margin-top: calc(-1 * var(--hero-bottom-radius));

  /* keep consistent spacing with hero */
  --pad: clamp(24px, 7vw, 120px);

  padding: calc(clamp(56px, 7vh, 96px) + var(--hero-bottom-radius)) var(--pad)
    clamp(56px, 8vh, 110px);

  /* screenshot-like band: solid purple lift (not transparent over the dark page bg) */
  background: linear-gradient(180deg, #3c2a60 0%, #4b3577 52%, #3c2a60 100%);

  @media (max-width: 480px) {
    padding: 48px 20px 72px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  /* Don’t hard-center the whole page; this only limits the stats row width for readability */
`;

export default function Analytics() {
  const items = [
    { value: "43+", label: "University\nPartners" },
    { value: "12K+", label: "Students\nEnrolled" },
    { value: "35", label: "Outstanding\nMentors" },
    { value: "7.5K", label: "Student\nPlacements" },
  ];

  return (
    <AnalyticsSection aria-label="analytics">
      <Inner>
        <StatsCards items={items} />
      </Inner>
    </AnalyticsSection>
  );
}
