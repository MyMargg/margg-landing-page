/**
 * Enhanced Grid Component with Hover Expansion
 *
 * Architecture:
 * - 3 rows x 4 columns CSS Grid
 * - Items expand to 2 columns on hover
 * - Cascading relocation to prevent overflow
 * - Precomputed layout states for instant transitions
 * - Framer Motion for smooth animations
 */

import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Layout utilities
import {
  precomputeAllLayouts,
  getLayoutForHover,
  DEFAULT_GRID_ITEMS,
} from "./grid/precomputeLayouts";

// Block components
import RoadmapBlock from "./RoadmapBlock";
import MentorshipBlock from "./MentorshipBlock";
import CommunityBlock from "./CommunityBlock";
import FocusTimerBlock from "./FocusTimerBlock";
import StreaksBlock from "./StreaksBlock";
import InterviewPrepBlock from "./InterviewPrepBlock";
import JobBoardBlock from "./JobBoardBlock";
import ProjectsBlock from "./ProjectsBlock";
import ResumeBlock from "./ResumeBlock";
import SkillsBlock from "./SkillsBlock";
import CertificationsBlock from "./CertificationsBlock";

// Styles
import { Block } from "./style";

/**
 * Grid Container
 * Fixed 3x4 grid with 12px gap
 */
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  max-width: 1200px;
  height: 600px;
  margin: 0 auto;
  position: relative;
`;

/**
 * Grid Item Wrapper
 * Uses inline styles for dynamic grid positioning
 */
const GridItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    z-index: 10;
  }
`;

/**
 * Block Wrapper
 * Applies block styling to each grid item
 */
const StyledBlock = styled(Block)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Component map for rendering
 */
const COMPONENT_MAP = {
  roadmap: RoadmapBlock,
  mentorship: MentorshipBlock,
  community: CommunityBlock,
  focusTimer: FocusTimerBlock,
  streaks: StreaksBlock,
  interviewPrep: InterviewPrepBlock,
  jobBoard: JobBoardBlock,
  projects: ProjectsBlock,
  resume: ResumeBlock,
  skills: SkillsBlock,
  certifications: CertificationsBlock,
};

const EnhancedGrid = () => {
  // Hover state
  const [hoveredId, setHoveredId] = useState(null);

  // Precompute all possible layouts once
  const precomputedLayouts = useMemo(() => {
    return precomputeAllLayouts(DEFAULT_GRID_ITEMS);
  }, []);

  // Get current layout based on hover state
  const currentLayout = useMemo(() => {
    return getLayoutForHover(precomputedLayouts, hoveredId);
  }, [precomputedLayouts, hoveredId]);

  // Event handlers
  const handleMouseEnter = (itemId) => {
    setHoveredId(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <GridContainer>
      {currentLayout.map((item) => {
        const Component = COMPONENT_MAP[item.id];

        return (
          <GridItem
            key={item.id}
            layout // Framer Motion magic - animates layout changes
            transition={{
              layout: {
                duration: 0.25,
                ease: "easeInOut",
              },
            }}
            style={{
              gridRow: item.row,
              gridColumn: `${item.col} / span ${item.span}`,
            }}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <StyledBlock>{Component && <Component />}</StyledBlock>
          </GridItem>
        );
      })}
    </GridContainer>
  );
};

export default EnhancedGrid;
