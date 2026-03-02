/**
 * RoadmapsPage – Lists all learning roadmaps with beautiful cards.
 * Each roadmap links to its detail page showing courses in
 * Starter-Kit / Levels / Add-Ons categories.
 */
import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FONTS, MEDIA_QUERIES } from "@constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
import roadmapsData from "@content/roadmaps.json";

/* ━━━━ Animations ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

/* ━━━━ Styled Components ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const PageWrap = styled.div`
  background: #090215;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  padding: 160px clamp(24px, 7vw, 120px) 60px;
  text-align: center;
  background:
    radial-gradient(900px circle at 50% 30%, rgba(176,149,227,0.15), transparent 60%),
    radial-gradient(600px circle at 20% 80%, rgba(80,19,192,0.12), transparent 60%),
    radial-gradient(600px circle at 80% 80%, rgba(176,149,227,0.08), transparent 60%),
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);

  ${MEDIA_QUERIES.mobile} {
    padding-top: 120px;
    padding-bottom: 40px;
  }
`;

const Breadcrumb = styled.nav`
  margin-bottom: 24px;
  font-family: ${FONTS.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

const H1 = styled.h1`
  font-family: ${FONTS.heading};
  font-size: clamp(40px, 7vw, 72px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${fadeInUp} 0.6s ease-out;
`;

const HeroSubtitle = styled.p`
  font-family: ${FONTS.body};
  font-size: clamp(16px, 2vw, 20px);
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto 16px;
  animation: ${fadeInUp} 0.6s ease-out 0.1s both;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 32px;
  animation: ${fadeInUp} 0.6s ease-out 0.2s both;

  ${MEDIA_QUERIES.mobile} {
    gap: 24px;
    flex-wrap: wrap;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-family: ${FONTS.heading};
  font-size: clamp(32px, 5vw, 48px);
  color: #B095E3;
  letter-spacing: 1px;
`;

const StatLabel = styled.div`
  font-family: ${FONTS.body};
  font-size: 13px;
  color: rgba(238,231,249,0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 4px;
`;

/* ── Roadmap Grid ── */

const GridSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px clamp(24px, 5vw, 80px) 100px;
`;

const SectionLabel = styled.p`
  font-family: ${FONTS.body};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #B095E3;
  text-align: center;
  margin: 0 0 12px;
`;

const SectionTitle = styled.h2`
  font-family: ${FONTS.heading};
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 400;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 48px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;

  ${MEDIA_QUERIES.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 28px;
  border-radius: 20px;
  border: 1px solid rgba(176,149,227,0.15);
  background: rgba(211,196,239,0.04);
  text-decoration: none;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: ${fadeInUp} 0.5s ease-out both;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${(props) => props.$color || "#B095E3"};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: rgba(176,149,227,0.4);
    background: rgba(211,196,239,0.08);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(80,19,192,0.2);

    &::before {
      opacity: 1;
    }
  }
`;

const CardIcon = styled.span`
  font-size: 40px;
  margin-bottom: 16px;
  display: block;
`;

const CardTitle = styled.h3`
  font-family: ${FONTS.heading};
  font-size: 28px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 8px;
`;

const CardDesc = styled.p`
  font-family: ${FONTS.body};
  font-size: 15px;
  color: rgba(238,231,249,0.65);
  line-height: 1.65;
  margin: 0 0 20px;
  flex: 1;
`;

const CardMeta = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const MetaBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${FONTS.body};
  font-size: 12px;
  color: rgba(238,231,249,0.5);
  background: rgba(176,149,227,0.1);
  padding: 6px 12px;
  border-radius: 8px;
  white-space: nowrap;
`;

const CategoryRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const CategoryTag = styled.span`
  font-family: ${FONTS.body};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 5px 10px;
  border-radius: 6px;
  border: 1px solid;
  white-space: nowrap;

  &.starter {
    color: #4CAF50;
    border-color: rgba(76,175,80,0.3);
    background: rgba(76,175,80,0.08);
  }
  &.levels {
    color: #2196F3;
    border-color: rgba(33,150,243,0.3);
    background: rgba(33,150,243,0.08);
  }
  &.addons {
    color: #FF9800;
    border-color: rgba(255,152,0,0.3);
    background: rgba(255,152,0,0.08);
  }
`;

const ArrowIcon = styled.span`
  font-family: ${FONTS.body};
  font-size: 14px;
  color: #B095E3;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.3s ease;

  ${Card}:hover & {
    gap: 14px;
  }
`;

/* ── CTA Section ── */

const CTASection = styled.section`
  text-align: center;
  padding: 60px clamp(24px, 7vw, 120px) 100px;
  background:
    radial-gradient(600px circle at 50% 50%, rgba(80,19,192,0.12), transparent 60%);
`;

const CTATitle = styled.h2`
  font-family: ${FONTS.heading};
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 16px;
`;

const CTADesc = styled.p`
  font-family: ${FONTS.body};
  font-size: 16px;
  color: rgba(238,231,249,0.65);
  max-width: 560px;
  margin: 0 auto 32px;
  line-height: 1.7;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #5013C0;
  font-family: ${FONTS.body};
  font-size: 18px;
  font-weight: 700;
  border-radius: 14px;
  border: 1px solid #D3C4EF;
  box-shadow: 0 4px 24px rgba(176,149,227,0.5);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 32px rgba(176,149,227,0.65);
  }
`;

/* ━━━━ Component ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const { roadmaps } = roadmapsData;

const totalCourses = roadmaps.reduce(
  (sum, r) => sum + r.starterKit.length + r.levels.length + r.addOns.length,
  0
);

export default function RoadmapsPage() {
  return (
    <PageWrap>
      <Navbar />

      <HeroSection>
        <Breadcrumb>
          <Link to="/">Home</Link> / <span>Roadmaps</span>
        </Breadcrumb>
        <H1>Learning Roadmaps</H1>
        <HeroSubtitle>
          Structured, roadmap-based learning paths designed to take you from
          beginner to job-ready. Each roadmap is divided into Starter-Kit,
          progressive Levels, and specialized Add-Ons.
        </HeroSubtitle>
        <StatRow>
          <StatItem>
            <StatNumber>{roadmaps.length}</StatNumber>
            <StatLabel>Roadmaps</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{totalCourses}+</StatNumber>
            <StatLabel>Courses</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>3</StatNumber>
            <StatLabel>Categories</StatLabel>
          </StatItem>
        </StatRow>
      </HeroSection>

      <GridSection>
        <SectionLabel>Choose your path</SectionLabel>
        <SectionTitle>Explore All Roadmaps</SectionTitle>

        <Grid>
          {roadmaps.map((roadmap, idx) => (
            <Card
              key={roadmap.id}
              to={`/roadmap/${roadmap.slug}`}
              $color={roadmap.color}
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <CardIcon>{roadmap.icon}</CardIcon>
              <CardTitle>{roadmap.name}</CardTitle>
              <CardDesc>{roadmap.description}</CardDesc>

              <CardMeta>
                <MetaBadge>⏱ {roadmap.duration}</MetaBadge>
                <MetaBadge>📚 {roadmap.totalCourses} courses</MetaBadge>
              </CardMeta>

              <CategoryRow>
                <CategoryTag className="starter">
                  {roadmap.starterKit.length} Starter-Kit
                </CategoryTag>
                <CategoryTag className="levels">
                  {roadmap.levels.length} Levels
                </CategoryTag>
                <CategoryTag className="addons">
                  {roadmap.addOns.length} Add-Ons
                </CategoryTag>
              </CategoryRow>

              <ArrowIcon>Explore roadmap →</ArrowIcon>
            </Card>
          ))}
        </Grid>
      </GridSection>

      <CTASection>
        <CTATitle>Ready to Start Learning?</CTATitle>
        <CTADesc>
          Join thousands of learners building real skills with Margg's
          structured roadmaps. Pick your path and start today.
        </CTADesc>
        <CTAButton href="/#contact-learner">Join the Waitlist</CTAButton>
      </CTASection>

      <Footer />
    </PageWrap>
  );
}
