import React from "react";
import styled from "styled-components";

import { Title } from "./style";
import { useContent } from "@content/ContentContext";
import Community from "@assets/grid/community.webp";

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
  const { community } = useContent("blocks");
  return (
    <Container>
      <Title>{community.title}</Title>
      <Image src={Community} alt="Margg peer learning community for collaborative education" width={1236} height={1136} loading="lazy" decoding="async" />
    </Container>
  );
};

export default CommunityBlock;
