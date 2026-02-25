import React from "react";
import { Title } from "./style";
import styled from "styled-components";
import { useContent } from "@content/ContentContext";

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
  const { mentorship } = useContent("blocks");
  return (
    <Container>
      <Title>{mentorship.title}</Title>
      <Image src={Mentorship} alt="mentorship" />
    </Container>
  );
};

export default MentorshipBlock;
