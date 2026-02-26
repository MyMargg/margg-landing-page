// libs
import React from "react";
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
      min-height: 140px;
    }
  }
`;

const GridBlock = styled(Block)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  overflow: hidden;
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
  return (
    <GridContainer>
      {/* Row 1 */}
      <RoadmapWrapper>
        <RoadmapBlock />
      </RoadmapWrapper>
      <MentorshipWrapper>
        <MentorshipBlock />
      </MentorshipWrapper>
      <CommunityWrapper>
        <CommunityBlock />
      </CommunityWrapper>

      {/* Row 2 */}
      <FocusTimerWrapper>
        <FocusTimerBlock />
      </FocusTimerWrapper>
      <InterviewPrepWrapper>
        <InterviewPrepBlock />
      </InterviewPrepWrapper>
      <StreaksWrapper>
        <StreaksBlock />
      </StreaksWrapper>
    </GridContainer>
  );
};

export default Grid;
