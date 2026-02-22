import React from "react";
import styled from "styled-components";

// constants
import { MAX_CONTENT_WIDTH, MEDIA_QUERIES, FONTS } from "@constants";

// images
import MarggLogo from "@assets/Margg.png";
import FacebookIcon from "@assets/footer/FacebookIcon";
import TwitterIcon from "@assets/footer/TwitterIcon";
import LinkedInIcon from "@assets/footer/LinkedInIcon";
import LocationIcon from "@assets/footer/LocationIcon";
import PhoneIcon from "@assets/footer/PhoneIcon";
import MailIcon from "@assets/footer/MailIcon";

const FooterSection = styled.footer`
  position: relative;
  width: 100%;
  height: 460px;
  overflow: hidden;

  background: linear-gradient(
    360deg,
    rgba(31, 6, 70, 0.6) -5%,
    rgba(214, 195, 242, 0.6) 170.11%
  );

  /* Enhanced support for wide gamut displays */
  @supports (color: color(display-p3 1 1 1)) {
    background: linear-gradient(
      360deg,
      color(display-p3 0.11 0.027 0.263 / 0.6) -5%,
      color(display-p3 0.827 0.769 0.937 / 0.6) 170.11%
    );
  }

  ${MEDIA_QUERIES.mobile} {
    height: auto;
    min-height: 460px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 40px 24px;

  ${MEDIA_QUERIES.mobile} {
    gap: 20px;
    padding: 32px 20px;
  }
`;

const Box = styled.div`
  width: 960px;
  height: 203px;
  border-radius: 32px;
  border: 1px solid #ffffff4d;
  background: #ffffff1a;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0px 12px 32px 0px #00000040;

  backdrop-filter: blur(32px);

  ${MEDIA_QUERIES.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${MEDIA_QUERIES.mobile} {
    align-items: center;
  }
`;

const ContactTitle = styled.h2`
  margin: 0;
  font-family: ${FONTS.heading};
  font-size: 40px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0;
  color: #ffffff;

  ${MEDIA_QUERIES.mobile} {
    font-size: 32px;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContactItem = styled.div`
  margin: 0;
  font-family: ${FONTS.body};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 12px;

  ${MEDIA_QUERIES.mobile} {
    justify-content: center;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Logo = styled.img`
  width: 217px;
  height: 64px;
  opacity: 1;
  object-fit: contain;

  ${MEDIA_QUERIES.mobile} {
    width: 180px;
    height: auto;
  }
`;

const Tagline = styled.p`
  margin: 0;
  font-family: ${FONTS.body};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;

  ${MEDIA_QUERIES.mobile} {
    font-size: 14px;
  }
`;

const CopyrightBox = styled.div`
  width: 960px;
  height: 78px;
  border-radius: 32px;
  border: 1px solid #ffffff4d;
  background: #ffffff1a;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0px 12px 32px 0px #00000040;
  backdrop-filter: blur(32px);

  ${MEDIA_QUERIES.tablet} {
    width: 100%;
    max-width: 960px;
  }

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    height: auto;
    gap: 20px;
    padding: 20px 24px;
  }
`;

const CopyrightText = styled.p`
  margin: 0;
  font-family: ${FONTS.body};
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;

  ${MEDIA_QUERIES.mobile} {
    font-size: 12px;
    text-align: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SocialIcon = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  opacity: 0.7;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: FacebookIcon,
  },
  {
    name: "X (Twitter)",
    url: "https://twitter.com",
    icon: TwitterIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: LinkedInIcon,
  },
];
const Footer = () => {
  return (
    <FooterSection>
      <Inner>
        <Box>
          <LeftColumn>
            <ContactTitle>GET IN TOUCH WITH US</ContactTitle>
            <ContactInfo>
              <ContactItem>
                <IconWrapper>
                  <LocationIcon width={15} height={20} color="#B095E3" />
                </IconWrapper>
                Bangalore | Tirupati
              </ContactItem>
              <ContactItem>
                <IconWrapper>
                  <PhoneIcon width={18} height={18} color="#B095E3" />
                </IconWrapper>
                +91 7993559974
              </ContactItem>
              <ContactItem>
                <IconWrapper>
                  <MailIcon width={18} height={18} color="#B095E3" />
                </IconWrapper>
                info@margg.in
              </ContactItem>
            </ContactInfo>
          </LeftColumn>
          <RightColumn>
            <Logo src={MarggLogo} alt="Margg Logo" />
            <Tagline>Unlock the Road to Successful Career</Tagline>
          </RightColumn>
        </Box>
        <CopyrightBox>
          <CopyrightText>
            © {currentYear} Margg Private Limited. All Rights Reserved.
          </CopyrightText>
          <SocialIcons>
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <SocialIcon
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <IconComponent />
                </SocialIcon>
              );
            })}
          </SocialIcons>
        </CopyrightBox>
      </Inner>
    </FooterSection>
  );
};

export default Footer;
