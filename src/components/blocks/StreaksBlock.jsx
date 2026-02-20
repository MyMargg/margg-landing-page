import React from "react";
import styled from "styled-components";

// components
import { Title as _Title } from "./style";

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
`;

const Image = styled.img`
  position: absolute;
  left: 30%;
  bottom: 0%;
  width: 50%;
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
`;

const StreaksBlock = () => {
  return (
    <Container>
      <Title>Streaks</Title>
      <Image2 src={Streak} alt="streak" />
    </Container>
  );
};

export default StreaksBlock;
