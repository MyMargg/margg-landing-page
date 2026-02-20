import React from "react";
import styled from "styled-components";

// components
import { Title } from "./style";

// images
// import screenLeft from "@assets/grid/screen-left.png";
// import screenRight from "@assets/grid/screen-right.png";
// import Card1 from "@assets/grid/card-1.png";
// import Card2 from "@assets/grid/card-2.png";
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
  return (
    <Container>
      <Title>Interview Prep Materials</Title>;
      <Image src={InterviewPrep} alt="screen left" />
    </Container>
  );
};

export default InterviewPrepBlock;
