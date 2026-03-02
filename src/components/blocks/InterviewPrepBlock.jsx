import React from "react";
import styled from "styled-components";

// components
import { Title } from "./style";
import { useContent } from "@content/ContentContext";

// images
import InterviewPrep from "@assets/grid/interview-prep.webp";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  height: 100%;
  padding-top: 30px;
  overflow: hidden;
  z-index: 0;

  @media (max-width: 1000px) {
    padding: 20px 16px;
    align-items: flex-start;
  }
`;
const Image = styled.img`
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -40%;
  z-index: 1;

  @media (max-width: 1000px) {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none;
    width: 90%;
    margin: auto auto 0;
  }
`;

const InterviewPrepBlock = () => {
  const { interviewPrep } = useContent("blocks");
  return (
    <Container>
      <Title>{interviewPrep.title}</Title>
      <Image
        src={InterviewPrep}
        alt="Interview preparation materials and mock tests on Margg"
        width={1500}
        height={1136}
        loading="lazy"
        decoding="async"
      />
    </Container>
  );
};

export default InterviewPrepBlock;
