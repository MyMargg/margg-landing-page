/**
 * RoadmapDetailPage – Shows a single roadmap with courses categorized into
 * Starter-Kit, Levels (beginner → intermediate → advanced), and Add-Ons.
 *
 * Visual flow connects courses with a vertical timeline to show progression.
 */
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { FONTS, MEDIA_QUERIES } from "@constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
import roadmapsData from "@content/roadmaps.json";

/* ━━━━ Animations ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
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
    radial-gradient(
      800px circle at 40% 20%,
      ${(p) => p.$glow || "rgba(176,149,227,0.15)"},
      transparent 60%
    ),
    radial-gradient(
      600px circle at 70% 80%,
      rgba(80, 19, 192, 0.12),
      transparent 60%
    ),
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
  color: rgba(238, 231, 249, 0.5);
  animation: ${fadeInUp} 0.5s ease-out;

  a {
    color: #b095e3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const HeroIcon = styled.span`
  font-size: 56px;
  display: block;
  margin-bottom: 16px;
  animation: ${fadeInUp} 0.5s ease-out 0.05s both;
`;

const H1 = styled.h1`
  font-family: ${FONTS.heading};
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  animation: ${fadeInUp} 0.5s ease-out 0.1s both;
`;

const HeroDesc = styled.p`
  font-family: ${FONTS.body};
  font-size: clamp(15px, 2vw, 18px);
  color: rgba(238, 231, 249, 0.7);
  line-height: 1.7;
  max-width: 640px;
  margin: 0 auto 24px;
  animation: ${fadeInUp} 0.5s ease-out 0.15s both;
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.5s ease-out 0.2s both;
`;

const MetaBadge = styled.span`
  font-family: ${FONTS.body};
  font-size: 14px;
  color: rgba(238, 231, 249, 0.6);
  background: rgba(176, 149, 227, 0.1);
  border: 1px solid rgba(176, 149, 227, 0.15);
  padding: 8px 16px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

/* ── Category Navigation ── */

const CategoryNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 24px clamp(24px, 5vw, 80px) 0;
  max-width: 900px;
  margin: 0 auto;
  flex-wrap: wrap;

  ${MEDIA_QUERIES.mobile} {
    gap: 6px;
  }
`;

const CategoryBtn = styled.button`
  font-family: ${FONTS.body};
  font-size: 14px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  white-space: nowrap;

  ${(p) =>
    p.$active &&
    p.$variant === "starter" &&
    css`
      background: rgba(76, 175, 80, 0.15);
      border-color: rgba(76, 175, 80, 0.4);
      color: #4caf50;
    `}
  ${(p) =>
    p.$active &&
    p.$variant === "levels" &&
    css`
      background: rgba(33, 150, 243, 0.15);
      border-color: rgba(33, 150, 243, 0.4);
      color: #2196f3;
    `}
  ${(p) =>
    p.$active &&
    p.$variant === "addons" &&
    css`
      background: rgba(255, 152, 0, 0.15);
      border-color: rgba(255, 152, 0, 0.4);
      color: #ff9800;
    `}
  ${(p) =>
    p.$active &&
    p.$variant === "all" &&
    css`
      background: rgba(176, 149, 227, 0.15);
      border-color: rgba(176, 149, 227, 0.4);
      color: #b095e3;
    `}
  ${(p) =>
    !p.$active &&
    css`
      border-color: rgba(176, 149, 227, 0.15);
      color: rgba(238, 231, 249, 0.5);
      &:hover {
        border-color: rgba(176, 149, 227, 0.3);
        color: rgba(238, 231, 249, 0.8);
      }
    `}

  ${MEDIA_QUERIES.mobile} {
    font-size: 12px;
    padding: 10px 16px;
  }
`;

/* ── Course Sections ── */

const ContentArea = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 48px clamp(24px, 5vw, 80px) 80px;
`;

const CategoryBlock = styled.section`
  margin-bottom: 64px;
  animation: ${fadeInUp} 0.4s ease-out;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`;

const CategoryDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;

  &.starter {
    background: #4caf50;
  }
  &.levels {
    background: #2196f3;
  }
  &.addons {
    background: #ff9800;
  }
`;

const CategoryTitle = styled.h2`
  font-family: ${FONTS.heading};
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
`;

const CategoryDesc = styled.p`
  font-family: ${FONTS.body};
  font-size: 14px;
  color: rgba(238, 231, 249, 0.5);
  margin: -20px 0 28px 28px;
`;

/* ── Sub-Level grouping within Levels ── */

const SubLevel = styled.div`
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SubLevelHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  padding-left: 4px;
`;

const SubLevelDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
`;

const SubLevelTitle = styled.h3`
  font-family: ${FONTS.heading};
  font-size: clamp(18px, 3vw, 24px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin: 0;
`;

const SubLevelCount = styled.span`
  font-family: ${FONTS.body};
  font-size: 12px;
  color: rgba(238, 231, 249, 0.35);
  margin-left: 4px;
`;

/* ── Timeline Course Cards ── */

const Timeline = styled.div`
  position: relative;
  padding-left: 32px;

  &::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(
      180deg,
      rgba(176, 149, 227, 0.4) 0%,
      rgba(176, 149, 227, 0.15) 100%
    );
    border-radius: 1px;
  }
`;

const TimelineNode = styled.div`
  position: relative;
  margin-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    left: -32px;
    top: 28px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid;
    background: #090215;
    z-index: 1;
  }

  &.starter::before {
    border-color: #4caf50;
  }
  &.beginner::before {
    border-color: #29b6f6;
  }
  &.intermediate::before {
    border-color: #42a5f5;
  }
  &.advanced::before {
    border-color: #1565c0;
  }
  &.add-on::before {
    border-color: #ff9800;
  }
`;

const CourseCard = styled(Link)`
  display: block;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(176, 149, 227, 0.12);
  background: rgba(211, 196, 239, 0.03);
  text-decoration: none;
  transition: all 0.35s ease;

  &:hover {
    border-color: rgba(176, 149, 227, 0.35);
    background: rgba(211, 196, 239, 0.07);
    transform: translateX(4px);
    box-shadow: 0 8px 32px rgba(80, 19, 192, 0.12);
  }
`;

const CardTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 8px;

  ${MEDIA_QUERIES.mobile} {
    flex-direction: column;
    gap: 8px;
  }
`;

const CourseTitle = styled.h3`
  font-family: ${FONTS.heading};
  font-size: clamp(20px, 3vw, 26px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin: 0;
`;

const LevelBadge = styled.span`
  font-family: ${FONTS.body};
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 4px 10px;
  border-radius: 6px;
  white-space: nowrap;
  flex-shrink: 0;

  &.starter-kit {
    color: #4caf50;
    background: rgba(76, 175, 80, 0.12);
    border: 1px solid rgba(76, 175, 80, 0.25);
  }
  &.beginner {
    color: #29b6f6;
    background: rgba(41, 182, 246, 0.12);
    border: 1px solid rgba(41, 182, 246, 0.25);
  }
  &.intermediate {
    color: #42a5f5;
    background: rgba(66, 165, 245, 0.12);
    border: 1px solid rgba(66, 165, 245, 0.25);
  }
  &.advanced {
    color: #1565c0;
    background: rgba(21, 101, 192, 0.15);
    border: 1px solid rgba(21, 101, 192, 0.3);
  }
  &.add-on {
    color: #ff9800;
    background: rgba(255, 152, 0, 0.12);
    border: 1px solid rgba(255, 152, 0, 0.25);
  }
`;

const CourseDesc = styled.p`
  font-family: ${FONTS.body};
  font-size: 14px;
  color: rgba(238, 231, 249, 0.6);
  line-height: 1.65;
  margin: 0 0 16px;
`;

const SectionsList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const SectionTag = styled.span`
  font-family: ${FONTS.body};
  font-size: 12px;
  color: rgba(238, 231, 249, 0.45);
  background: rgba(176, 149, 227, 0.06);
  border: 1px solid rgba(176, 149, 227, 0.1);
  padding: 4px 10px;
  border-radius: 6px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const Duration = styled.span`
  font-family: ${FONTS.body};
  font-size: 13px;
  color: rgba(238, 231, 249, 0.4);
`;

const ViewLink = styled.span`
  font-family: ${FONTS.body};
  font-size: 13px;
  color: #b095e3;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.3s ease;

  ${CourseCard}:hover & {
    gap: 10px;
  }
`;

/* ── Other Roadmaps ── */

const OtherSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 80px) 100px;
`;

const OtherTitle = styled.h2`
  font-family: ${FONTS.heading};
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 32px;
`;

const OtherGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
`;

const OtherCard = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: 14px;
  border: 1px solid rgba(176, 149, 227, 0.12);
  background: rgba(211, 196, 239, 0.03);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(176, 149, 227, 0.35);
    background: rgba(211, 196, 239, 0.07);
    transform: translateY(-2px);
  }
`;

const OtherIcon = styled.span`
  font-size: 32px;
  flex-shrink: 0;
`;

const OtherInfo = styled.div``;

const OtherName = styled.h3`
  font-family: ${FONTS.heading};
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 4px;
`;

const OtherMeta = styled.span`
  font-family: ${FONTS.body};
  font-size: 12px;
  color: rgba(238, 231, 249, 0.4);
`;

/* ── CTA ── */

const CTASection = styled.section`
  text-align: center;
  padding: 60px clamp(24px, 7vw, 120px) 80px;
  background: radial-gradient(
    500px circle at 50% 50%,
    rgba(80, 19, 192, 0.12),
    transparent 60%
  );
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 16px 40px;
  background: #fff;
  color: #5013c0;
  font-family: ${FONTS.body};
  font-size: 18px;
  font-weight: 700;
  border-radius: 14px;
  border: 1px solid #d3c4ef;
  box-shadow: 0 4px 24px rgba(176, 149, 227, 0.5);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 32px rgba(176, 149, 227, 0.65);
  }
`;

/* ━━━━ Helper ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const LEVEL_LABELS = {
  "starter-kit": "Starter Kit",
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  "add-on": "Add-On",
};

function CourseCardItem({ course }) {
  // Create a course-slug for linking to the course detail page
  const courseSlug = course.slug;
  const levelClass = course.level;

  return (
    <TimelineNode className={levelClass}>
      <CourseCard to={`/course/${courseSlug}`}>
        <CardTopRow>
          <CourseTitle>{course.title}</CourseTitle>
          <LevelBadge className={levelClass}>
            {LEVEL_LABELS[course.level] || course.level}
          </LevelBadge>
        </CardTopRow>
        <CourseDesc>{course.description}</CourseDesc>
        {course.sections?.length > 0 && (
          <SectionsList>
            {course.sections.map((s, i) => (
              <SectionTag key={i}>{s}</SectionTag>
            ))}
          </SectionsList>
        )}
        <CardFooter>
          <Duration>⏱ {course.duration}</Duration>
          <ViewLink>View course →</ViewLink>
        </CardFooter>
      </CourseCard>
    </TimelineNode>
  );
}

/* ━━━━ Component ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const { roadmaps } = roadmapsData;

export default function RoadmapDetailPage() {
  const { roadmapSlug } = useParams();
  const roadmap = roadmaps.find((r) => r.slug === roadmapSlug);
  const [filter, setFilter] = useState("all");

  if (!roadmap) {
    return (
      <PageWrap>
        <Navbar />
        <HeroSection>
          <H1>Roadmap Not Found</H1>
          <HeroDesc>The roadmap you're looking for doesn't exist.</HeroDesc>
          <CTAButton href="/roadmaps">Browse All Roadmaps</CTAButton>
        </HeroSection>
        <Footer />
      </PageWrap>
    );
  }

  const otherRoadmaps = roadmaps.filter((r) => r.slug !== roadmapSlug);
  const showStarter = filter === "all" || filter === "starter";
  const showLevels = filter === "all" || filter === "levels";
  const showAddOns = filter === "all" || filter === "addons";

  return (
    <PageWrap>
      <Navbar />

      <HeroSection $glow={`${roadmap.color}22`}>
        <Breadcrumb>
          <Link to="/">Home</Link> / <Link to="/roadmaps">Roadmaps</Link> /{" "}
          <span>{roadmap.shortName}</span>
        </Breadcrumb>
        <HeroIcon>{roadmap.icon}</HeroIcon>
        <H1>{roadmap.name}</H1>
        <HeroDesc>{roadmap.description}</HeroDesc>
        <MetaRow>
          <MetaBadge>⏱ {roadmap.duration}</MetaBadge>
          <MetaBadge>📚 {roadmap.totalCourses} courses</MetaBadge>
          <MetaBadge>🟢 {roadmap.starterKit.length} Starter-Kit</MetaBadge>
          <MetaBadge>🔵 {roadmap.levels.length} Levels</MetaBadge>
          <MetaBadge>🟠 {roadmap.addOns.length} Add-Ons</MetaBadge>
        </MetaRow>
      </HeroSection>

      {/* Category filter */}
      <CategoryNav>
        <CategoryBtn
          $active={filter === "all"}
          $variant="all"
          onClick={() => setFilter("all")}
        >
          All Courses
        </CategoryBtn>
        <CategoryBtn
          $active={filter === "starter"}
          $variant="starter"
          onClick={() => setFilter("starter")}
        >
          Starter-Kit ({roadmap.starterKit.length})
        </CategoryBtn>
        <CategoryBtn
          $active={filter === "levels"}
          $variant="levels"
          onClick={() => setFilter("levels")}
        >
          Levels ({roadmap.levels.length})
        </CategoryBtn>
        <CategoryBtn
          $active={filter === "addons"}
          $variant="addons"
          onClick={() => setFilter("addons")}
        >
          Add-Ons ({roadmap.addOns.length})
        </CategoryBtn>
      </CategoryNav>

      <ContentArea>
        {/* Starter Kit */}
        {showStarter && roadmap.starterKit.length > 0 && (
          <CategoryBlock>
            <CategoryHeader>
              <CategoryDot className="starter" />
              <CategoryTitle>Starter-Kit</CategoryTitle>
            </CategoryHeader>
            <CategoryDesc>
              Foundational courses to build your core skills before diving into
              the specialisation.
            </CategoryDesc>
            <Timeline>
              {roadmap.starterKit.map((course) => (
                <CourseCardItem key={course.id} course={course} />
              ))}
            </Timeline>
          </CategoryBlock>
        )}

        {/* Levels – grouped by beginner → intermediate → advanced */}
        {showLevels &&
          roadmap.levels.length > 0 &&
          (() => {
            const grouped = { beginner: [], intermediate: [], advanced: [] };
            roadmap.levels.forEach((c) => {
              if (grouped[c.level]) grouped[c.level].push(c);
            });
            const LEVEL_META = {
              beginner: { label: "Beginner", color: "#29B6F6" },
              intermediate: { label: "Intermediate", color: "#42A5F5" },
              advanced: { label: "Advanced", color: "#1565C0" },
            };
            return (
              <CategoryBlock>
                <CategoryHeader>
                  <CategoryDot className="levels" />
                  <CategoryTitle>Levels</CategoryTitle>
                </CategoryHeader>
                <CategoryDesc>
                  Progressive courses from beginner to advanced — each building
                  on the previous one.
                </CategoryDesc>
                {Object.entries(LEVEL_META).map(([key, { label, color }]) => {
                  const courses = grouped[key];
                  if (!courses || courses.length === 0) return null;
                  return (
                    <SubLevel key={key}>
                      <SubLevelHeader>
                        <SubLevelDot style={{ background: color }} />
                        <SubLevelTitle style={{ color }}>{label}</SubLevelTitle>
                        <SubLevelCount>
                          {courses.length} course{courses.length > 1 ? "s" : ""}
                        </SubLevelCount>
                      </SubLevelHeader>
                      <Timeline>
                        {courses.map((course) => (
                          <CourseCardItem key={course.id} course={course} />
                        ))}
                      </Timeline>
                    </SubLevel>
                  );
                })}
              </CategoryBlock>
            );
          })()}

        {/* Add-Ons */}
        {showAddOns && roadmap.addOns.length > 0 && (
          <CategoryBlock>
            <CategoryHeader>
              <CategoryDot className="addons" />
              <CategoryTitle>Add-Ons</CategoryTitle>
            </CategoryHeader>
            <CategoryDesc>
              Optional specialty courses to deepen expertise in niche areas.
            </CategoryDesc>
            <Timeline>
              {roadmap.addOns.map((course) => (
                <CourseCardItem key={course.id} course={course} />
              ))}
            </Timeline>
          </CategoryBlock>
        )}
      </ContentArea>

      {/* Other Roadmaps */}
      <OtherSection>
        <OtherTitle>Explore Other Roadmaps</OtherTitle>
        <OtherGrid>
          {otherRoadmaps.map((r) => (
            <OtherCard key={r.id} to={`/roadmap/${r.slug}`}>
              <OtherIcon>{r.icon}</OtherIcon>
              <OtherInfo>
                <OtherName>{r.shortName}</OtherName>
                <OtherMeta>
                  {r.totalCourses} courses · {r.duration}
                </OtherMeta>
              </OtherInfo>
            </OtherCard>
          ))}
        </OtherGrid>
      </OtherSection>

      <CTASection>
        <CTAButton href="/#contact-learner">Join the Waitlist</CTAButton>
      </CTASection>

      <Footer />
    </PageWrap>
  );
}
