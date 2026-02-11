import React from "react";
import styled from "styled-components";

import {
  CloudConnectionIcon,
  DriverIcon,
  FavoriteChartIcon,
  LockIcon,
  MessageProgrammingIcon,
  PenToolIcon,
  ScrollIcon,
} from "./HeroIcons";

const TilePanel = styled.div`
  width: min(576px, 100%);
  flex: 1 1 576px;
  display: flex;
  flex-direction: column;
  gap: clamp(18px, 2.8vw, 32px);

  align-self: flex-start;

  @media (max-width: 1024px) {
    flex-basis: 100%;
  }
`;

const TileRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(104px, 120px));
  gap: clamp(16px, 2.8vw, 32px);
  align-items: center;
  justify-content: end;

  @media (max-width: 1024px) {
    justify-content: start;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    justify-content: stretch;
  }
`;

const TileRowFour = styled(TileRow)`
  grid-template-columns: repeat(4, minmax(104px, 120px));

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const TileButton = styled.button`
  appearance: none;
  border: 0;
  background: transparent;
  border-radius: 12px;
  width: 120px;
  height: 120px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: visible;
  position: relative;
  z-index: 1;

  transition: transform 220ms ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: none;
    transform: scale(1);
    transition: background 220ms ease, box-shadow 220ms ease;
  }

  &:hover,
  &:focus-visible,
  &:focus {
    outline: none;
    z-index: 10;
    transform: translateY(-2px);
  }

  &:hover::before,
  &:focus-visible::before,
  &:focus::before {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 32px 0px rgba(176, 149, 227, 0.25);
  }

  &:focus-visible::before {
    box-shadow: 0px 4px 32px 0px rgba(176, 149, 227, 0.25),
      0 0 0 2px rgba(211, 196, 239, 0.55);
  }

  @media (max-width: 640px) {
    width: 104px;
    height: 104px;
  }
`;

const IconOnlyTile = styled(TileButton)`
  &::before {
    transform: scale(1) !important;
  }
`;

const FlexIconOnlyTile = styled(IconOnlyTile)`
  flex: 1 0 0;
  height: 120px;
  min-width: 0;

  @media (max-width: 640px) {
    height: 104px;
  }
`;

const IconWrap = styled.div`
  width: 64px;
  height: 64px;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;

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

const TileIconSlot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 220ms ease;
  z-index: 1;

  ${TileButton}:hover &,
  ${TileButton}:focus-visible &,
  ${TileButton}:focus & {
    transform: translate(-50%, -50%) scale(1.03);
  }
`;

const TilePopover = styled.div`
  position: absolute;
  left: 50%;
  top: calc(100% + 12px);
  transform: translate(-50%, -6px);

  width: 260px;
  max-width: min(280px, calc(100vw - 40px));
  padding: 14px 16px;
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(211, 196, 239, 0.22);
  backdrop-filter: blur(14px);
  box-shadow: 0px 24px 70px rgba(0, 0, 0, 0.45);

  opacity: 0;
  pointer-events: none;
  transition: opacity 180ms ease, transform 180ms ease;
  z-index: 25;

  ${TileButton}:hover &,
  ${TileButton}:focus-visible &,
  ${TileButton}:focus & {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: translate(-50%, 0);
  }
`;

const TilePopoverTitle = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  color: #ffffff;
`;

const TilePopoverDesc = styled.div`
  margin-top: 6px;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.78);
`;

function Tile({ ariaLabel, title, description, icon, isFlex = false }) {
  const Comp = isFlex ? FlexIconOnlyTile : TileButton;

  return (
    <Comp aria-label={ariaLabel}>
      <TileIconSlot>
        <IconWrap>{icon}</IconWrap>
      </TileIconSlot>
      <TilePopover>
        <TilePopoverTitle>{title}</TilePopoverTitle>
        <TilePopoverDesc>{description}</TilePopoverDesc>
      </TilePopover>
    </Comp>
  );
}

export default function HeroTiles({ tileColor }) {
  return (
    <TilePanel aria-label="intro tiles">
      <TileRow>
        <Tile
          ariaLabel="Frontend Developer"
          title="Frontend Developer"
          description="Build modern UI with React, component systems, and responsive layouts."
          icon={<ScrollIcon color={tileColor} />}
        />

        <Tile
          ariaLabel="Programming Essentials"
          title="Programming Essentials"
          description="Learn core concepts, clean code, and problem-solving techniques."
          icon={<MessageProgrammingIcon color={tileColor} />}
          isFlex
        />

        <Tile
          ariaLabel="UI Design Fundamentals"
          title="UI Design Fundamentals"
          description="Design trends, spacing systems, and accessible UI patterns."
          icon={<PenToolIcon color={tileColor} />}
          isFlex
        />
      </TileRow>

      <TileRowFour>
        <Tile
          ariaLabel="Driver"
          title="Driver"
          description="Start strong with fundamentals and hands-on practice."
          icon={<DriverIcon color={tileColor} />}
        />
        <Tile
          ariaLabel="Cloud Connection"
          title="Cloud Connection"
          description="Deploy apps, understand environments, and ship confidently."
          icon={<CloudConnectionIcon color={tileColor} />}
        />
        <Tile
          ariaLabel="Analytics"
          title="Analytics"
          description="Track progress, measure outcomes, and improve faster."
          icon={<FavoriteChartIcon color={tileColor} />}
        />
        <Tile
          ariaLabel="Security"
          title="Security"
          description="Learn safe patterns, auth basics, and secure-by-default UI."
          icon={<LockIcon color={tileColor} />}
        />
      </TileRowFour>

      <TileRowFour>
        <Tile
          ariaLabel="Analytics"
          title="Analytics"
          description="Track progress, measure outcomes, and improve faster."
          icon={<FavoriteChartIcon color={tileColor} />}
        />
        <Tile
          ariaLabel="Driver"
          title="Driver"
          description="Start strong with fundamentals and hands-on practice."
          icon={<DriverIcon color={tileColor} />}
        />
        <Tile
          ariaLabel="Security"
          title="Security"
          description="Learn safe patterns, auth basics, and secure-by-default UI."
          icon={<LockIcon color={tileColor} />}
        />
        <Tile
          ariaLabel="Cloud Connection"
          title="Cloud Connection"
          description="Deploy apps, understand environments, and ship confidently."
          icon={<CloudConnectionIcon color={tileColor} />}
        />
      </TileRowFour>
    </TilePanel>
  );
}
