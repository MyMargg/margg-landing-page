import React from "react";
import styled from "styled-components";
import { MAX_CONTENT_WIDTH, FONTS } from "@constants";

const ContactSection = styled.section`
  scroll-margin-top: 100px;
  position: relative;
  width: 100%;
  overflow: hidden;

  --pad: clamp(24px, 7vw, 120px);
  padding: 140px var(--pad) 120px;

  background:
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%),
    radial-gradient(
      740px circle at 16% 6%,
      rgba(176, 149, 227, 0.22),
      transparent 62%
    ),
    radial-gradient(
      760px circle at 82% 58%,
      rgba(80, 19, 192, 0.22),
      transparent 62%
    );

  @media (max-width: 480px) {
    padding: 100px 20px 80px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: ${FONTS.heading};
  color: #ffffff;
  font-weight: 400;
  font-size: clamp(48px, 6vw, 72px);
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;

const Description = styled.p`
  margin: 0;
  font-family: ${FONTS.body};
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(16px, 1.8vw, 20px);
  line-height: 1.6;
  max-width: 600px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

const ContactItem = styled.a`
  color: rgba(255, 255, 255, 0.9);
  font-family: ${FONTS.body};
  font-size: clamp(18px, 2vw, 24px);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #b095e3;
    text-shadow: 0 0 8px rgba(176, 149, 227, 0.4);
  }
`;

export default function Contact() {
  return (
    <ContactSection id="contact" aria-label="contact">
      <Inner>
        <Title>GET IN TOUCH</Title>
        <Description>
          Have questions or want to learn more about our programs? We'd love to
          hear from you!
        </Description>
        <ContactInfo>
          <ContactItem href="mailto:info@margg.com">info@margg.com</ContactItem>
        </ContactInfo>
      </Inner>
    </ContactSection>
  );
}
