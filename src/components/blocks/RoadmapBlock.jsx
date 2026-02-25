import React from "react";
import styled from "styled-components";

// styles
import { Title, Subtext } from "./style";
import { useContent } from "@content/ContentContext";

// images
import Roadmap from "@assets/grid/roadmap.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  width: 80%;
`;

const RoadmapBlock = () => {
  const { roadmap } = useContent("blocks");
  return (
    <Container>
      <Title>{roadmap.title}</Title>
      <Image src={Roadmap} alt="roadmap" />
    </Container>
  );
};

export default RoadmapBlock;
