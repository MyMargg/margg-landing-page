import React, { useState, useMemo, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import {
  CloudConnectionIcon,
  DriverIcon,
  FavoriteChartIcon,
  LockIcon,
  MessageProgrammingIcon,
  PenToolIcon,
  ScrollIcon,
} from "./HeroIcons";
import { FONTS } from "@constants";
import { useContent } from "@content/ContentContext";

// Import grid utilities
import {
  calculateInitialLayout,
  applyHover,
} from "@components/blocks/grid/calculateLayout";

/**
 * Auto-cycle configuration – defaults used when content is not yet loaded
 */
const FALLBACK_CYCLE_INTERVAL = 3000;
const FALLBACK_DEFAULT_TILE_ID = 1;

/**
 * Grid Container - CSS Grid with 3 rows x 4 columns
 * Uses CSS Grid for deterministic positioning
 */
const TilePanel = styled.div`
  width: min(576px, 50%);
  // flex: 1 1 576px;

  /* CSS Grid setup */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 120px);
  gap: 32px;

  align-self: flex-start;

  @media (max-width: 1024px) {
    flex-basis: 100%;
  }

  @media (max-width: 640px) {
    width: 476px;
    grid-template-rows: repeat(3, 104px);
  }

  @media (max-width: 480px) {
    width: 100%;
    grid-template-rows: auto;
    gap: 14px;
  }
`;

/**
 * Grid Item - Uses Framer Motion for layout animations
 * Positioning controlled via inline gridRow and gridColumn
 */
const TileButton = styled(motion.div)`
  appearance: none;
  border: 0;
  background: transparent;
  border-radius: 12px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: visible;
  position: relative;

  /* Fill the grid cell completely - width auto-adjusts based on column span */
  width: 100%;
  height: 100%;

  /* Grid positioning applied via inline styles */

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: ${(props) =>
      props.$isExpanded
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(255, 255, 255, 0.1)"};
    backdrop-filter: blur(10px);
    box-shadow: ${(props) =>
      props.$isExpanded
        ? "0px 4px 32px 0px rgba(176, 149, 227, 0.25)"
        : "none"};
    transform: scale(1);
    transition:
      background 220ms ease,
      box-shadow 220ms ease;
  }

  &:hover {
    z-index: 100;
  }

  &:hover::before {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 32px 0px rgba(176, 149, 227, 0.25);
  }

  @media (max-width: 480px) {
    cursor: default;
  }
`;

const TileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$isExpanded ? "flex-start" : "center")};
  gap: ${(props) => (props.$isExpanded ? "16px" : "0")};
  width: ${(props) => (props.$isExpanded ? "100%" : "auto")};
  padding: ${(props) => (props.$isExpanded ? "0 20px" : "0")};
  transition: none;
`;

const IconWrap = styled.div`
  width: 64px;
  height: 64px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 64px;
    height: 64px;
    display: block;
  }

  @media (max-width: 640px) {
    width: 52px;
    height: 52px;

    svg {
      width: 52px;
      height: 52px;
    }
  }
`;

const TileTitle = styled.div`
  font-family: ${FONTS.body};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
  display: ${(props) => (props.$isExpanded ? "block" : "none")};
  opacity: ${(props) => (props.$isExpanded ? "1" : "0")};
  transform: translateX(${(props) => (props.$isExpanded ? "0" : "20px")});
  max-width: 140px;
  overflow: hidden;
  transition:
    opacity 250ms ease,
    transform 250ms ease;
  white-space: normal;
  word-wrap: break-word;

  @media (max-width: 640px) {
    font-size: 12px;
    max-width: 120px;
  }
`;

/**
 * Individual Tile Component
 * Renders with grid positioning from layout state
 */
function Tile({
  ariaLabel,
  title,
  icon,
  gridRow,
  gridColumn,
  isExpanded,
  onMouseEnter,
  onMouseLeave,
  tileId,
}) {
  return (
    <TileButton
      aria-label={ariaLabel}
      $isExpanded={isExpanded}
      layout // Framer Motion magic
      transition={{
        layout: {
          duration: 0.25,
          ease: "easeInOut",
        },
      }}
      style={{
        gridRow: gridRow,
        gridColumn: gridColumn,
      }}
      onMouseEnter={() => onMouseEnter(tileId)}
      onMouseLeave={onMouseLeave}
    >
      <TileContent>
        <InnerWrapper $isExpanded={isExpanded}>
          <IconWrap>{icon}</IconWrap>
          <TileTitle $isExpanded={isExpanded}>{title}</TileTitle>
        </InnerWrapper>
      </TileContent>
    </TileButton>
  );
}

const iconComponents = {
  ScrollIcon,
  MessageProgrammingIcon,
  PenToolIcon,
  DriverIcon,
  CloudConnectionIcon,
  FavoriteChartIcon,
  LockIcon,
};

/**
 * Enhanced HeroTiles with CSS Grid + Framer Motion
 * Uses precomputed layout states for deterministic positioning
 */
export default function HeroTiles({ tileColor }) {
  const tilesConfig = useContent("hero").tiles ?? {};
  const AUTO_CYCLE_INTERVAL =
    tilesConfig.autoCycleIntervalMs ?? FALLBACK_CYCLE_INTERVAL;
  const DEFAULT_TILE_ID = tilesConfig.defaultTileId ?? FALLBACK_DEFAULT_TILE_ID;

  const allTilesData = useMemo(() => {
    const row1 = tilesConfig.row1 ?? [];
    const row2 = tilesConfig.row2 ?? [];
    const row3 = tilesConfig.row3 ?? [];
    return [...row1, ...row2, ...row3];
  }, [tilesConfig]);

  const MIN_TILE_ID = useMemo(
    () =>
      allTilesData.length ? Math.min(...allTilesData.map((t) => t.id)) : 1,
    [allTilesData],
  );
  const MAX_TILE_ID = useMemo(
    () =>
      allTilesData.length ? Math.max(...allTilesData.map((t) => t.id)) : 1,
    [allTilesData],
  );

  const [hoveredId, setHoveredId] = useState(DEFAULT_TILE_ID);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const intervalRef = useRef(null);

  // Combine all tiles data
  // (now derived from content context above)

  // Auto-cycle through random tiles
  useEffect(() => {
    const startAutoCycle = () => {
      intervalRef.current = setInterval(() => {
        if (!isUserHovering) {
          const randomId =
            Math.floor(Math.random() * (MAX_TILE_ID - MIN_TILE_ID + 1)) +
            MIN_TILE_ID;
          setHoveredId(randomId);
        }
      }, AUTO_CYCLE_INTERVAL);
    };

    // Start auto-cycling if user is not hovering
    if (!isUserHovering) {
      startAutoCycle();
    }

    // Cleanup interval on unmount or when user starts hovering
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isUserHovering]);

  // Precompute all possible layouts once
  const precomputedLayouts = useMemo(() => {
    const itemIds = allTilesData.map((tile) => tile.id);
    const layouts = {};

    // Default layout (no hover)
    const baseLayout = calculateInitialLayout(itemIds);
    layouts["default"] = baseLayout;

    // Compute layout for each possible hover
    itemIds.forEach((itemId) => {
      layouts[itemId] = applyHover(baseLayout, itemId);
    });

    return layouts;
  }, [allTilesData]);

  // Get current layout based on hover state
  const currentLayout = useMemo(() => {
    const key = hoveredId || "default";
    return precomputedLayouts[key] || precomputedLayouts["default"];
  }, [precomputedLayouts, hoveredId]);

  const handleMouseEnter = (tileId) => {
    setIsUserHovering(true);
    setHoveredId(tileId);
    // Clear auto-cycle interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    setHoveredId(DEFAULT_TILE_ID);
    setIsUserHovering(false);
    // Auto-cycle will restart via useEffect
  };

  return (
    <TilePanel aria-label="intro tiles">
      {currentLayout.map((layoutItem) => {
        const tileData = allTilesData.find((t) => t.id === layoutItem.id);
        if (!tileData) return null;

        const IconComponent = iconComponents[tileData.icon];
        const isExpanded = layoutItem.span === 2;

        return (
          <Tile
            key={layoutItem.id}
            tileId={layoutItem.id}
            ariaLabel={tileData.ariaLabel}
            title={tileData.title}
            icon={<IconComponent color={tileColor} />}
            gridRow={layoutItem.row}
            gridColumn={`${layoutItem.col} / span ${layoutItem.span}`}
            isExpanded={isExpanded}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </TilePanel>
  );
}
