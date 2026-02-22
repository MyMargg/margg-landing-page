import React from "react";
import styled from "styled-components";

import { Subtext as _Subtext, Title as _Title } from "./style";

import FocusTimer from "@assets/grid/focus-timer.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
  position: relative;
  height: 100%;
  padding-right: 30px;
`;

const Image = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  width: 60%;
  transform: translateY(-50%);
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  position: absolute;
  right: 24px;
  transform: translateY(-50%);
  top: 50%;
`;
const Title = styled(_Title)`
  text-align: right;
  width: 50%;
`;

const FocusTimerBlock = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Focus Timer</Title>
      </TextContainer>
      <Image src={FocusTimer} alt="focus timer" />
    </Container>
  );
};

export default FocusTimerBlock;
