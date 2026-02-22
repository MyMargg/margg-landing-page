import React from "react";
import { Title } from "./style";
import styled from "styled-components";

import Mentorship from "@assets/grid/mentor.png";

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
  width: 52%;
`;
const MentorshipBlock = () => {
  return (
    <Container>
      <Title>One-on-One Mentorship</Title>
      <Image src={Mentorship} alt="mentorship" />
    </Container>
  );
};

export default MentorshipBlock;
