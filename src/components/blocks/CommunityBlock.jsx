import React from "react";
import styled from "styled-components";

import { Title } from "./style";
import Community from "@assets/grid/community.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  position: relative;
  height: 100%;
`;
const Image = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: scale(1.4);
`;
const CommunityBlock = () => {
  return (
    <Container>
      <Title>Community</Title>
      <Image src={Community} alt="community" />
    </Container>
  );
};

export default CommunityBlock;
