import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;

  --pad: clamp(24px, 7vw, 120px);
  padding: 140px var(--pad) 0;

  background: linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%),
    radial-gradient(
      740px circle at 16% 6%,
      rgba(176, 149, 227, 0.22),
      transparent 62%
    ),
    radial-gradient(
      760px circle at 82% 58%,
      rgba(80, 19, 192, 0.22),
      transparent 62%
    ),
    radial-gradient(
      560px circle at 7% 35%,
      rgba(80, 19, 192, 0.18),
      transparent 60%
    ),
    radial-gradient(
      520px circle at 66% 88%,
      rgba(176, 149, 227, 0.16),
      transparent 60%
    );

  @media (max-width: 480px) {
    padding: 124px 20px 0;
  }
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(42px, 5.4vw, 64px);
  line-height: 1.05;
  text-transform: uppercase;
`;

const Description = styled.p`
  margin: 18px 0 0;
  max-width: 760px;

  font-family: "Inter", sans-serif;
  color: rgba(255, 255, 255, 0.82);
  font-weight: 400;
  font-size: clamp(14px, 1.8vw, 18px);
  line-height: 1.6;
`;

const Stack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhoneWrap = styled.div`
  width: min(560px, 100%);
  margin-top: clamp(22px, 5vh, 44px);
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    width: min(440px, 100%);
  }
`;

const PhoneFrame = styled.div`
  width: 100%;
  aspect-ratio: 9 / 19;
  border-radius: 46px;
  padding: 10px;

  background: linear-gradient(
    180deg,
    rgba(210, 173, 124, 0.9) 0%,
    rgba(133, 97, 60, 0.92) 45%,
    rgba(210, 173, 124, 0.88) 100%
  );

  box-shadow:
    0px 26px 90px rgba(0, 0, 0, 0.55),
    0px 0px 0px 1px rgba(255, 255, 255, 0.08);
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  overflow: hidden;
  background:
    radial-gradient(1200px circle at 30% 20%, rgba(255, 255, 255, 0.08), transparent 55%),
    radial-gradient(900px circle at 70% 75%, rgba(176, 149, 227, 0.16), transparent 60%),
    #070110;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 12px;
    transform: translateX(-50%);
    width: 120px;
    height: 28px;
    border-radius: 22px;
    background: rgba(0, 0, 0, 0.75);
  }
`;

const PhoneMock = styled.div`
  position: absolute;
  inset: 0;
  transform: translate3d(0, 0, 0);

  /* Dummy "screen" (no copyrighted wallpaper/video) */
  background:
    radial-gradient(640px circle at 35% 18%, rgba(255, 255, 255, 0.16), transparent 55%),
    radial-gradient(560px circle at 78% 72%, rgba(176, 149, 227, 0.28), transparent 60%),
    radial-gradient(520px circle at 52% 92%, rgba(80, 19, 192, 0.22), transparent 60%),
    linear-gradient(180deg, rgba(7, 1, 16, 0.86) 0%, rgba(7, 1, 16, 1) 100%);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0) 28%,
      rgba(255, 255, 255, 0.06) 54%,
      rgba(255, 255, 255, 0) 78%
    );
    opacity: 0.7;
    mix-blend-mode: screen;
    pointer-events: none;
  }
`;


export default function Supercharge() {
  return (
    <Section aria-label="supercharge">
      <Inner>
        <Stack>
          <Title>
            SUPERCHARGE
            <br />
            YOUR LEARNING POTENTIAL
          </Title>
          <Description>
            Escape the Ordinary &amp; enter a place where roadmaps are
            personalised &amp; interview material is just a click away
          </Description>

          <PhoneWrap>
            <PhoneFrame>
              <PhoneScreen>
                <PhoneMock />
              </PhoneScreen>
            </PhoneFrame>
          </PhoneWrap>
        </Stack>
      </Inner>
    </Section>
  );
}
