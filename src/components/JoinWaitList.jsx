import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// constants
import { FONTS, MEDIA_QUERIES } from "@constants";
import { useContent } from "@content/ContentContext";

/* ── scroll-triggered slide-up ─────────────────────────── */

const fadeUp = keyframes`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// components
import Input1 from "./Input1";
import { submitWaitlist } from "@services/contactApi";

// images
import PhoneScreenImg from "@assets/figma/phone-screen.webp";

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
  opacity: 0;

  ${(p) =>
    p.$inView &&
    css`
      animation: ${fadeUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none !important;
  }

  ${MEDIA_QUERIES.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    height: auto;
    padding: 40px 24px;
    gap: 20px;
    margin-left: 16px;
    margin-right: 16px;
    width: calc(100% - 32px);
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
    width: 100%;
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
    margin-bottom: 8px;
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

const JoinWaitList = ({ onSubmit, id }) => {
  const { title, subtitle, inputPlaceholder, buttonText } =
    useContent("joinWaitlist");
  const apiConfig = useContent("api");
  const [viewRef, inView] = useInView(0.15);

  const handleSubmit = onSubmit || ((email) => submitWaitlist(apiConfig, email));

  return (
    <WaitlistContainer id={id} ref={viewRef} $inView={inView}>
      <LeftColumn>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Input1
          placeholder={inputPlaceholder}
          buttonText={buttonText}
          onSubmit={handleSubmit}
        />
      </LeftColumn>
      <RightColumn>
        <PhoneScreenWrapper>
          <PhoneImage src={PhoneScreenImg} alt="Margg app interface showing roadmap-based learning features" width={1036} height={1248} loading="lazy" decoding="async" />
        </PhoneScreenWrapper>
      </RightColumn>
    </WaitlistContainer>
  );
};

export default JoinWaitList;
