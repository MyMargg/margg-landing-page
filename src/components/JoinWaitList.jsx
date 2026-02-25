import React from "react";
import styled from "styled-components";

// constants
import { FONTS, MEDIA_QUERIES } from "@constants";
import { useContent } from "@content/ContentContext";

// components
import Input1 from "./Input1";

// images
import PhoneScreenImg from "@assets/figma/phone-screen.png";

const WaitlistContainer = styled.div`
  width: 960px;
  height: 240px;
  border-radius: 40px;
  border: 1px solid #b095e37a;
  background: #ffffff1a;
  box-shadow: 0px 4px 32px 0px #b095e366;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  padding-top: 20px;
  position: relative;
  margin: 0 auto;
  margin-bottom: 80px;
  margin-top: 160px;

  ${MEDIA_QUERIES.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    height: auto;
    padding: 32px 24px;
    gap: 24px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  width: 50%;
  align-items: flex-start;

  ${MEDIA_QUERIES.mobile} {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${FONTS.heading};
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  text-align: center;
  color: #ffffff;

  ${MEDIA_QUERIES.mobile} {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-family: ${FONTS.body};
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.34px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  ${MEDIA_QUERIES.mobile} {
    font-size: 16px;
    text-align: center;
  }
`;

const RightColumn = styled.div`
  position: relative;
  width: 253px;
  height: 240px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  width: 50%;

  ${MEDIA_QUERIES.mobile} {
    display: none;
  }
`;

const PhoneScreenWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 7px;
  height: 312px;
`;

const PhoneImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const JoinWaitList = ({ onSubmit }) => {
  const { title, subtitle, inputPlaceholder, buttonText } =
    useContent("joinWaitlist");

  return (
    <WaitlistContainer>
      <LeftColumn>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Input1
          placeholder={inputPlaceholder}
          buttonText={buttonText}
          onSubmit={onSubmit}
        />
      </LeftColumn>
      <RightColumn>
        <PhoneScreenWrapper>
          <PhoneImage src={PhoneScreenImg} alt="Phone Screen" />
        </PhoneScreenWrapper>
      </RightColumn>
    </WaitlistContainer>
  );
};

export default JoinWaitList;
