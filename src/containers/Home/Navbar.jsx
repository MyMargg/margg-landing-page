import React from "react";
import styled from "styled-components";
import MarggLogo from "@assets/Margg.png";
import "@styles/NavBar.css";
import { MAX_CONTENT_WIDTH, FONTS } from "@constants";

// Styled Components
const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  isolation: isolate;
  display: flex;
  justify-content: center;
  padding-top: 36px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 140px;
    pointer-events: none;
    z-index: -1;
    background: linear-gradient(
      180deg,
      rgba(9, 2, 21, 0.98) 0%,
      rgba(9, 2, 21, 0.7) 55%,
      rgba(9, 2, 21, 0) 100%
    );
  }
`;

const NavbarContent = styled.nav`
  display: flex;
  width: 85%;
  max-width: ${MAX_CONTENT_WIDTH};
  margin-top: 0;
  height: 72px;
  padding: 16px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);

  /* Enhanced support for wide gamut displays */
  @supports (color: color(display-p3 1 1 1)) {
    background: color(display-p3 1 1 1 / 0.1);
    box-shadow: 0 4px 24px 0 color(display-p3 0 0 0 / 0.25);
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 0.75rem 1rem;
    height: auto;
  }
`;

const NavbarInner = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const LogoSection = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LogoTop = styled.div`
  display: flex;
  align-items: flex-start;
`;

const SkillImage = styled.img`
  width: 132.156px;
  height: 40.141px;
  flex-shrink: 0;
`;

const GigImage = styled.img`
  width: 38.699px;
  height: 27.483px;
  flex-shrink: 0;
`;

const VectorImage = styled.img`
  width: 79.181px;
  height: 5.559px;
  flex-shrink: 0;
`;

const NavigationMenu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const MenuList = styled.div`
  display: flex;
  align-items: baseline;
  gap: 40px;
`;

const MenuLink = styled.a`
  color: white;
  font-family: ${FONTS.body};
  font-size: 16px;
  font-weight: ${(props) => (props.primary ? "600" : "300")};
  line-height: normal;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.primary ? "1" : "0.5")};

  &:hover {
    text-shadow: 0 0 1px currentColor;
    opacity: 1;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarInner>
          {/* Logo Section */}
          <LogoSection>
            {/* <LogoTop>
              <SkillImage src={SkillLogo} alt="Skill" />
              <GigImage src={GigLogo} alt="Gig" />
            </LogoTop> */}
            {/* <VectorImage src={VectorLogo} alt="Vector" /> */}
            <SkillImage src={MarggLogo} alt="Margg" />
          </LogoSection>

          <NavigationMenu>
            <MenuList>
              <MenuLink href="#" primary={true}>
                Home
              </MenuLink>
              <MenuLink href="#">Our Products</MenuLink>
              <MenuLink href="#">Contact Us</MenuLink>
            </MenuList>
          </NavigationMenu>
        </NavbarInner>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
