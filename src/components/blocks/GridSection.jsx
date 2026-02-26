import React from "react";
import styled from "styled-components";

// images
import Phone from "@assets/figma/phone-screen-2.png";

// components
import Grid from "./Grid";

// constants
import { MEDIA_QUERIES } from "@constants";

const SectionContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  max-width: 1600px;
  padding: 0 40px;
  margin-top: 80px;
  align-items: center;
  justify-content: center;

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    padding: 0 20px;
    gap: 24px;
    align-items: stretch;
  }
`;

const PhoneWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;

  ${MEDIA_QUERIES.mobile} {
    display: none;
  }
`;

const PhoneImage = styled.img`
  width: 270px;
  height: 576px;
  object-fit: contain;
  display: block;
`;

const GridWrapper = styled.div`
  min-width: 0;
  flex: 1;
`;

const GridSection = () => {
  return (
    <SectionContainer>
      <PhoneWrapper>
        <PhoneImage src={Phone} alt="Phone Screen" />
      </PhoneWrapper>
      <GridWrapper>
        <Grid />
      </GridWrapper>
    </SectionContainer>
  );
};

export default GridSection;
