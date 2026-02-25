import React from "react";
import styled from "styled-components";

// components
import { Title } from "./style";
import { useContent } from "@content/ContentContext";

// images
import InterviewPrep from "@assets/grid/interview-prep.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  height: 100%;
  padding-top: 30px;
  overflow: hidden;
  z-index: 0;
`;
const Image = styled.img`
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -40%;
  z-index: 1;
`;

const InterviewPrepBlock = () => {
  const { interviewPrep } = useContent("blocks");
  return (
    <Container>
      <Title>{interviewPrep.title}</Title>;
      <Image src={InterviewPrep} alt="screen left" />
    </Container>
  );
};

export default InterviewPrepBlock;
