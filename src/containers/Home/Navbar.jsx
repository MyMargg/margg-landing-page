import React, { useCallback, useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import MarggLogo from "@assets/Margg.webp";
import "@styles/NavBar.css";
import { MAX_CONTENT_WIDTH, FONTS } from "@constants";
import { useContent } from "@content/ContentContext";

/* ━━ animations ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
`;

// Styled Components
const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  isolation: isolate;
  display: flex;
  justify-content: center;
  padding-top: 36px;
  transform: translateY(${(p) => (p.$hidden ? "-100%" : "0")});
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    padding-top: 16px;
  }

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

  @supports (color: color(display-p3 1 1 1)) {
    background: color(display-p3 1 1 1 / 0.1);
    box-shadow: 0 4px 24px 0 color(display-p3 0 0 0 / 0.25);
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: calc(100% - 32px);
    padding: 14px 20px;
    height: auto;
    border-radius: 18px;
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

  @media (max-width: 768px) {
    width: 100px;
    height: auto;
  }
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

/* ── desktop nav ── */

const NavigationMenu = styled.div`
  display: none;

  @media (min-width: 769px) {
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
  font-weight: ${(p) => (p.$active || p.$primary ? "600" : "300")};
  line-height: normal;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.5s ease-in-out;
  opacity: ${(p) => (p.$active || p.$primary ? "1" : "0.5")};
  position: relative;

  ${(p) =>
    p.$active &&
    css`
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -4px;
        height: 2px;
        border-radius: 1px;
        background: #b095e3;
      }
    `}

  &:hover {
    text-shadow: 0 0 1px currentColor;
    opacity: 1;
  }
`;

/* ── hamburger button ── */

const HamburgerBtn = styled.button`
  all: unset;
  display: none;
  cursor: pointer;
  position: relative;
  width: 28px;
  height: 20px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const HamburgerLine = styled.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  &:nth-child(1) {
    top: ${(p) => (p.$open ? "50%" : "0")};
    transform: ${(p) => (p.$open ? "translateY(-50%) rotate(45deg)" : "none")};
  }
  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${(p) => (p.$open ? 0 : 1)};
  }
  &:nth-child(3) {
    bottom: ${(p) => (p.$open ? "auto" : "0")};
    top: ${(p) => (p.$open ? "50%" : "auto")};
    transform: ${(p) => (p.$open ? "translateY(-50%) rotate(-45deg)" : "none")};
  }
`;

/* ── mobile drawer ── */

const MobileOverlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 49;
    background: rgba(9, 2, 21, 0.6);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    opacity: ${(p) => (p.$open ? 1 : 0)};
    pointer-events: ${(p) => (p.$open ? "auto" : "none")};
    transition: opacity 0.3s ease;
  }
`;

const MobileDrawer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 50;
    width: min(320px, 80vw);
    height: 100dvh;
    padding: 80px 32px 40px;
    box-sizing: border-box;
    background: linear-gradient(
      170deg,
      rgba(30, 15, 55, 0.98) 0%,
      rgba(13, 2, 23, 0.99) 100%
    );
    border-left: 1px solid rgba(176, 149, 227, 0.15);
    box-shadow: -8px 0 40px rgba(0, 0, 0, 0.5);
    transform: translateX(${(p) => (p.$open ? "0" : "100%")});
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
  }
`;

const DrawerCloseBtn = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(176, 149, 227, 0.1);
  transition: background 0.2s;

  &:hover {
    background: rgba(176, 149, 227, 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DrawerLink = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: 14px;
  text-decoration: none;
  font-family: ${FONTS.body};
  font-size: 18px;
  font-weight: ${(p) => (p.$active || p.$primary ? "600" : "400")};
  color: #fff;
  opacity: ${(p) => (p.$active || p.$primary ? 1 : 0.7)};
  transition: all 0.2s ease;
  background: ${(p) =>
    p.$active
      ? "rgba(80, 19, 192, 0.2)"
      : p.$primary
        ? "rgba(80, 19, 192, 0.15)"
        : "transparent"};
  ${(p) =>
    p.$active &&
    css`
      border-left: 3px solid #b095e3;
    `};

  ${(p) =>
    p.$show &&
    css`
      animation: ${slideIn} 0.4s ease forwards;
      animation-delay: ${p.$delay || "0s"};
      opacity: 0;
    `}

  &:hover, &:active {
    background: rgba(176, 149, 227, 0.12);
    opacity: 1;
  }
`;

const DrawerLinkIcon = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(176, 149, 227, 0.1);
  flex-shrink: 0;
`;

const DrawerDivider = styled.div`
  height: 1px;
  background: rgba(176, 149, 227, 0.12);
  margin: 12px 0 16px;
`;

/* ── drawer link icons ── */

const NAV_ICONS = {
  Home: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z"
        stroke="#B095E3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Roadmaps: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        stroke="#B095E3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Our Products": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        stroke="#B095E3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Contact Us": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        stroke="#B095E3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

// Section IDs that map to nav hash links
const SECTION_IDS = ["home", "products", "contact-us"];

const Navbar = () => {
  const { logoAlt, links } = useContent("navbar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const drawerRef = useRef(null);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  /* ── scroll direction detection ── */
  useEffect(() => {
    const SCROLL_THRESHOLD = 10; // px of scroll before toggling
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        // Always show near the top
        setHidden(false);
      } else if (currentY - lastScrollY.current > SCROLL_THRESHOLD) {
        // Scrolling down → hide
        setHidden(true);
      } else if (lastScrollY.current - currentY > SCROLL_THRESHOLD) {
        // Scrolling up → show
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* lock body scroll when drawer is open */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* close on Escape */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ── scroll to top on route change (non-hash navigations) ── */
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);

  /* ── IntersectionObserver: track which section is in viewport ── */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    // Small delay to let DOM settle after navigation
    const timer = setTimeout(() => {
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);

  /* ── determine which link is active ── */
  const isActive = useCallback(
    (href) => {
      const path = location.pathname;
      // Route-based pages
      if (href === "/roadmaps")
        return path === "/roadmaps" || path.startsWith("/roadmap/");
      // On home page, use section-based detection
      if (path === "/" && href.startsWith("#")) {
        return activeSection === href.slice(1);
      }
      return false;
    },
    [location.pathname, activeSection],
  );

  const handleLogoClick = useCallback(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  }, [navigate, location.pathname]);

  const handleClick = useCallback(
    (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        setMenuOpen(false);
        if (location.pathname !== "/") {
          // Navigate home, then scroll
          navigate("/");
          setTimeout(() => {
            const el = document.getElementById(href.slice(1));
            if (el) {
              const navHeight = 72;
              const top =
                el.getBoundingClientRect().top + window.scrollY - navHeight;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }, 300);
        } else {
          setTimeout(() => {
            const el = document.getElementById(href.slice(1));
            if (el) {
              const navHeight =
                document.querySelector("nav")?.offsetHeight || 72;
              const top =
                el.getBoundingClientRect().top + window.scrollY - navHeight;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }, 100);
        }
      } else if (href?.startsWith("/")) {
        e.preventDefault();
        setMenuOpen(false);
        navigate(href);
      }
    },
    [navigate, location.pathname],
  );

  return (
    <>
      <NavbarContainer $hidden={hidden && !menuOpen}>
        <NavbarContent aria-label="Main navigation">
          <NavbarInner>
            {/* Logo */}
            <LogoSection
              onClick={handleLogoClick}
              style={{ cursor: "pointer" }}
            >
              <SkillImage
                src={MarggLogo}
                alt={logoAlt}
                loading="eager"
                fetchPriority="high"
              />
            </LogoSection>

            {/* Desktop nav */}
            <NavigationMenu>
              <MenuList>
                {links.map((link) => (
                  <MenuLink
                    key={link.label}
                    href={link.href}
                    $primary={link.primary ? true : undefined}
                    $active={isActive(link.href)}
                    onClick={handleClick}
                  >
                    {link.label}
                  </MenuLink>
                ))}
              </MenuList>
            </NavigationMenu>

            {/* Hamburger (mobile only) */}
            <HamburgerBtn
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <HamburgerLine $open={menuOpen} />
              <HamburgerLine $open={menuOpen} />
              <HamburgerLine $open={menuOpen} />
            </HamburgerBtn>
          </NavbarInner>
        </NavbarContent>
      </NavbarContainer>

      {/* Mobile overlay + drawer */}
      <MobileOverlay $open={menuOpen} onClick={() => setMenuOpen(false)} />
      <MobileDrawer $open={menuOpen} ref={drawerRef}>
        <DrawerCloseBtn
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg viewBox="0 0 16 16" fill="none">
            <path
              d="M12 4L4 12M4 4l8 8"
              stroke="#B095E3"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </DrawerCloseBtn>

        <DrawerNav>
          {links.map((link, i) => (
            <DrawerLink
              key={link.label}
              href={link.href}
              $primary={link.primary}
              $active={isActive(link.href)}
              $show={menuOpen}
              $delay={`${0.1 + i * 0.07}s`}
              onClick={handleClick}
            >
              <DrawerLinkIcon>
                {NAV_ICONS[link.label] || NAV_ICONS.Home}
              </DrawerLinkIcon>
              {link.label}
            </DrawerLink>
          ))}
        </DrawerNav>

        <DrawerDivider />
      </MobileDrawer>
    </>
  );
};

export default Navbar;
