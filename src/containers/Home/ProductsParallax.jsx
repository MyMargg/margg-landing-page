import React, { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";

import { ParallaxLayer, ParallaxSection } from "../../components/ParallaxSection";

const clamp01 = (n) => Math.min(1, Math.max(0, n));
const lerp = (a, b, t) => a + (b - a) * t;

const Scene = styled(ParallaxSection)`
  --scene-radius: clamp(28px, 4.4vw, 64px);
  margin-top: calc(-1 * var(--scene-radius));

  .parallaxSticky {
    border-top-left-radius: var(--scene-radius);
    border-top-right-radius: var(--scene-radius);
  }
`;

const Sticky = styled.div`
  position: relative;
  height: 100%;
  background: #090215;
`;

const BackgroundWash = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
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
`;

const Content = styled.div`
  position: relative;
  z-index: 2;

  --pad: clamp(24px, 7vw, 120px);
  padding: 170px var(--pad) 110px;

  @media (max-width: 480px) {
    padding: 140px 20px 86px;
  }
`;

const Layout = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.1fr 0.95fr 1.2fr;
  gap: clamp(18px, 3vw, 56px);
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 22px;
  }
`;

const StickyCol = styled.div`
  position: sticky;
  top: 140px;
  align-self: start;

  @media (max-width: 980px) {
    position: relative;
    top: 0;
  }
`;

const LeftTitle = styled.h2`
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(40px, 5.4vw, 62px);
  line-height: 1.05;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  text-wrap: balance;
  max-width: 420px;

  @media (max-width: 980px) {
    max-width: 720px;
    text-align: center;
  }
`;

const PhoneWrap = styled.div`
  width: min(520px, 100%);
  display: flex;
  justify-content: center;

  @media (max-width: 980px) {
    width: min(420px, 100%);
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
  background: #070110;
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
    z-index: 2;
  }
`;

const Screens = styled.div`
  position: absolute;
  inset: 0;
`;

const Screen = styled.div`
  position: absolute;
  inset: 0;
  transform: translate3d(0, 0, 0);
  opacity: 0;
  will-change: transform, opacity;
  transition: opacity 180ms linear;
`;

const ScreenOne = styled(Screen)`
  background:
    radial-gradient(820px circle at 55% 8%, rgba(255, 255, 255, 0.16), transparent 55%),
    radial-gradient(720px circle at 82% 74%, rgba(176, 149, 227, 0.28), transparent 60%),
    radial-gradient(680px circle at 38% 92%, rgba(80, 19, 192, 0.24), transparent 60%),
    linear-gradient(180deg, rgba(14, 4, 26, 0.82) 0%, rgba(7, 1, 16, 1) 100%);
`;

const ScreenTwo = styled(Screen)`
  background:
    radial-gradient(780px circle at 40% 16%, rgba(255, 255, 255, 0.14), transparent 56%),
    radial-gradient(720px circle at 68% 74%, rgba(80, 19, 192, 0.28), transparent 62%),
    radial-gradient(540px circle at 30% 92%, rgba(176, 149, 227, 0.22), transparent 60%),
    linear-gradient(180deg, rgba(10, 2, 22, 0.86) 0%, rgba(7, 1, 16, 1) 100%);
`;

const ScreenThree = styled(Screen)`
  background:
    radial-gradient(820px circle at 62% 12%, rgba(255, 255, 255, 0.15), transparent 56%),
    radial-gradient(720px circle at 78% 64%, rgba(176, 149, 227, 0.24), transparent 62%),
    radial-gradient(560px circle at 26% 86%, rgba(80, 19, 192, 0.26), transparent 60%),
    linear-gradient(180deg, rgba(10, 2, 22, 0.86) 0%, rgba(7, 1, 16, 1) 100%);
`;

const ScreenGloss = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0) 26%,
    rgba(255, 255, 255, 0.08) 52%,
    rgba(255, 255, 255, 0) 78%
  );
  opacity: 0.75;
  mix-blend-mode: screen;
`;

const Right = styled.div`
  position: relative;
  display: grid;
  gap: 48px;

  @media (max-width: 980px) {
    gap: 22px;
  }
`;

const Step = styled.div`
  min-height: 58vh;
  display: grid;
  align-content: center;
  gap: 10px;

  will-change: transform, opacity;
`;

const FeatureTitle = styled.h3`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: clamp(16px, 2.4vw, 20px);
  font-weight: 700;
  color: #ffffff;
`;

const FeatureDesc = styled.p`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: clamp(13px, 1.7vw, 14px);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);
  max-width: 320px;
`;

export default function ProductsParallax() {
  const features = useMemo(
    () => [
      {
        title: "Roadmap Based Learning",
        desc: "Select a career path and we'll guide you through it!!",
      },
      {
        title: "Interview Material",
        desc: "Get access to premium interview prep material including notes, quizs and mock interviews led by industry leaders",
      },
      {
        title: "One-on-One Mentorship",
        desc: "Connect with mentors on video calls and get personalised coaching & doubt clearing sessions",
      },
    ],
    []
  );

  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const screenRefs = useRef([]);

  // Scroll-driven, rAF-smoothed UI updates (no React state updates).
  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;
    let lastTime = 0;

    const screenState = [0, 0, 0];
    const stepState = [0, 0, 0];

    const tick = (time) => {
      raf = window.requestAnimationFrame(tick);

      const vh = window.innerHeight || 1;
      const centerY = vh * 0.52;

      const dt = Math.min(64, Math.max(1, time - (lastTime || time)));
      lastTime = time;
      const smooth = 1 - Math.pow(1 - 0.16, dt / 16.67);

      // Determine which right-side step is closest to the viewport center.
      let bestI = 0;
      let bestScore = -Infinity;

      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const stepCenter = r.top + r.height / 2;
        const dist = Math.abs(stepCenter - centerY);

        // Score: 1 at center, down to 0 at ~0.6vh away
        const score = 1 - dist / (vh * 0.6);
        if (score > bestScore) {
          bestScore = score;
          bestI = i;
        }
      });

      // Apply smoothed opacity/transform to phone screens & steps.
      for (let i = 0; i < 3; i += 1) {
        const active = i === bestI ? 1 : 0;
        screenState[i] = lerp(screenState[i], active, smooth);
        stepState[i] = lerp(stepState[i], active, smooth);

        const screen = screenRefs.current[i];
        if (screen) {
          const o = screenState[i];
          const lift = (1 - o) * 10;
          const scale = 0.985 + o * 0.015;
          screen.style.opacity = String(o);
          screen.style.transform = `translate3d(0, ${lift}px, 0) scale(${scale})`;
        }

        const step = stepRefs.current[i];
        if (step) {
          const o = 0.55 + stepState[i] * 0.45;
          const y = 12 * (1 - stepState[i]);
          step.style.opacity = String(o);
          step.style.transform = `translate3d(0, ${y}px, 0)`;
        }
      }
    };

    raf = window.requestAnimationFrame(tick);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <Scene aria-label="our-products" height="300vh">
      <Sticky ref={sectionRef}>
        <ParallaxLayer speed={0.2} offset={0} className="parallaxFill">
          <BackgroundWash />
        </ParallaxLayer>

        <Content>
          <Layout>
            <StickyCol>
              <LeftTitle>
                WHY SKILLGIG IS
                <br />
                BETTER THAN OTHER
                <br />
                LEARNING APPS?
              </LeftTitle>
            </StickyCol>

            <StickyCol>
              <PhoneWrap>
                <PhoneFrame>
                  <PhoneScreen>
                    <Screens>
                      <ScreenOne
                        ref={(el) => {
                          screenRefs.current[0] = el;
                        }}
                        style={{ opacity: 1 }}
                      />
                      <ScreenTwo
                        ref={(el) => {
                          screenRefs.current[1] = el;
                        }}
                      />
                      <ScreenThree
                        ref={(el) => {
                          screenRefs.current[2] = el;
                        }}
                      />
                      <ScreenGloss />
                    </Screens>
                  </PhoneScreen>
                </PhoneFrame>
              </PhoneWrap>
            </StickyCol>

            <Right>
              {features.map((f, i) => (
                <Step
                  key={f.title}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  style={{ opacity: i === 0 ? 1 : 0.65 }}
                >
                  <FeatureTitle>{f.title}</FeatureTitle>
                  <FeatureDesc>{f.desc}</FeatureDesc>
                </Step>
              ))}
            </Right>
          </Layout>
        </Content>
      </Sticky>
    </Scene>
  );
}
