import React from "react";
import styled from "styled-components";

// components
import { Title as _Title } from "./style";
import { useContent } from "@content/ContentContext";

import Flame from "@assets/grid/flame.png";
import Streak from "@assets/grid/streak.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  height: 100%;
  padding-left: 20px;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 1000px) {
    padding: 20px 16px;
    justify-content: flex-start;
  }
`;

const Image = styled.img`
  position: absolute;
  left: 30%;
  bottom: 0%;
  width: 50%;

  @media (max-width: 1000px) {
    position: relative;
    left: auto;
    bottom: auto;
    width: 60px;
    margin-top: auto;
    margin-bottom: 16px;
  }
`;

const Title = styled(_Title)`
  text-align: left;
`;

const Image2 = styled.img`
  width: 80%;
  position: absolute;
  right: -30px;
  top: 0;
  z-index: -1;

  @media (max-width: 1000px) {
    position: relative;
    right: auto;
    top: auto;
    width: 100%;
    margin-top: auto;
  }
`;

const StreaksBlock = () => {
  const { streaks } = useContent("blocks");
  return (
    <Container>
      <Title>{streaks.title}</Title>
      <Image2 src={Streak} alt="streak" />
    </Container>
  );
};

export default StreaksBlock;
