/**
 * CourseDetailPage – Renders a detailed course page for any course
 * referenced in roadmaps.json. Generates rich content with sections,
 * learning outcomes, and FAQs.
 *
 * Routes: /course/:courseSlug
 */
import React from "react";
import { useParams, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FONTS, MEDIA_QUERIES } from "@constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
import roadmapsData from "@content/roadmaps.json";

/* ━━━━ Build a flat course lookup from roadmaps.json ━━━━━━━━━━━━━━━━━━━━ */

const allCourses = {};
const courseToRoadmaps = {};

roadmapsData.roadmaps.forEach((roadmap) => {
  const all = [
    ...roadmap.starterKit,
    ...roadmap.levels,
    ...roadmap.addOns,
  ];
  all.forEach((course) => {
    allCourses[course.slug] = {
      ...course,
      roadmapSlug: roadmap.slug,
      roadmapName: roadmap.name,
      roadmapIcon: roadmap.icon,
      roadmapColor: roadmap.color,
    };
    if (!courseToRoadmaps[course.slug]) {
      courseToRoadmaps[course.slug] = [];
    }
    courseToRoadmaps[course.slug].push({
      slug: roadmap.slug,
      name: roadmap.name,
      icon: roadmap.icon,
    });
  });
});

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
  padding: 160px clamp(24px, 7vw, 120px) 80px;
  text-align: center;
  background:
    radial-gradient(700px circle at 30% 20%, rgba(176,149,227,0.18), transparent 60%),
    radial-gradient(600px circle at 70% 80%, rgba(80,19,192,0.15), transparent 60%),
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);

  ${MEDIA_QUERIES.mobile} {
    padding-top: 120px;
    padding-bottom: 48px;
  }
`;

const HeroInner = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const Breadcrumb = styled.nav`
  margin-bottom: 24px;
  font-family: ${FONTS.body};
  font-size: 14px;
  color: rgba(238,231,249,0.5);
  animation: ${fadeInUp} 0.5s ease-out;

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

const LevelBadge = styled.span`
  display: inline-block;
  font-family: ${FONTS.body};
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding: 6px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  animation: ${fadeInUp} 0.5s ease-out 0.05s both;

  &.starter-kit {
    color: #4CAF50;
    background: rgba(76,175,80,0.15);
    border: 1px solid rgba(76,175,80,0.3);
  }
  &.beginner {
    color: #29B6F6;
    background: rgba(41,182,246,0.15);
    border: 1px solid rgba(41,182,246,0.3);
  }
  &.intermediate {
    color: #42A5F5;
    background: rgba(66,165,245,0.15);
    border: 1px solid rgba(66,165,245,0.3);
  }
  &.advanced {
    color: #1565C0;
    background: rgba(21,101,192,0.2);
    border: 1px solid rgba(21,101,192,0.35);
  }
  &.add-on {
    color: #FF9800;
    background: rgba(255,152,0,0.15);
    border: 1px solid rgba(255,152,0,0.3);
  }
`;

const H1 = styled.h1`
  font-family: ${FONTS.heading};
  font-size: clamp(36px, 6vw, 64px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: ${fadeInUp} 0.5s ease-out 0.1s both;
`;

const HeroDesc = styled.p`
  font-family: ${FONTS.body};
  font-size: 16px;
  color: rgba(238,231,249,0.75);
  line-height: 1.7;
  margin: 0 0 28px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeInUp} 0.5s ease-out 0.15s both;
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  animation: ${fadeInUp} 0.5s ease-out 0.2s both;
`;

const MetaTag = styled.span`
  font-family: ${FONTS.body};
  font-size: 13px;
  color: rgba(238,231,249,0.55);
  background: rgba(176,149,227,0.08);
  border: 1px solid rgba(176,149,227,0.12);
  padding: 6px 14px;
  border-radius: 8px;
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
  animation: ${fadeInUp} 0.5s ease-out 0.25s both;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 32px rgba(176,149,227,0.65);
  }
`;

/* ── Content ── */

const ContentSection = styled.main`
  max-width: 860px;
  margin: 0 auto;
  padding: 0 clamp(24px, 7vw, 120px) 80px;
`;

const SectionBlock = styled.section`
  margin-bottom: 56px;
  animation: ${fadeInUp} 0.4s ease-out;
`;

const H2 = styled.h2`
  font-family: ${FONTS.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Paragraph = styled.p`
  font-family: ${FONTS.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin: 0 0 16px;
  white-space: pre-line;
`;

const List = styled.ul`
  margin: 0 0 16px;
  padding-left: 24px;
`;

const ListItem = styled.li`
  font-family: ${FONTS.body};
  font-size: 16px;
  color: rgba(238,231,249,0.8);
  line-height: 1.8;
  margin-bottom: 8px;

  &::marker {
    color: #B095E3;
  }
`;

/* ── Curriculum sections ── */

const CurriculumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 24px;
`;

const CurriculumCard = styled.div`
  padding: 20px;
  border-radius: 14px;
  border: 1px solid rgba(176,149,227,0.12);
  background: rgba(211,196,239,0.04);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(176,149,227,0.3);
    background: rgba(211,196,239,0.08);
  }
`;

const CurriculumNumber = styled.div`
  font-family: ${FONTS.heading};
  font-size: 32px;
  color: rgba(176,149,227,0.3);
  margin-bottom: 8px;
`;

const CurriculumTitle = styled.h3`
  font-family: ${FONTS.body};
  font-size: 15px;
  font-weight: 600;
  color: #EEE7F9;
  margin: 0;
`;

/* ── Roadmap belonging ── */

const RoadmapBelonging = styled.section`
  margin-bottom: 56px;
`;

const RoadmapLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid rgba(176,149,227,0.15);
  background: rgba(211,196,239,0.04);
  text-decoration: none;
  margin-right: 12px;
  margin-bottom: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(176,149,227,0.35);
    background: rgba(211,196,239,0.08);
  }
`;

const RoadmapLinkIcon = styled.span`
  font-size: 24px;
`;

const RoadmapLinkText = styled.span`
  font-family: ${FONTS.body};
  font-size: 14px;
  color: #B095E3;
`;

/* ── Related Courses ── */

const RelatedSection = styled.section`
  max-width: 860px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`;

const RelatedTitle = styled.h2`
  font-family: ${FONTS.heading};
  font-size: clamp(22px, 3.5vw, 32px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 24px;
  text-transform: uppercase;
  text-align: center;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

const RelatedCard = styled(Link)`
  display: block;
  padding: 24px;
  border: 1px solid rgba(176,149,227,0.15);
  border-radius: 16px;
  background: rgba(211,196,239,0.04);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(176,149,227,0.4);
    background: rgba(211,196,239,0.08);
    transform: translateY(-2px);
  }
`;

const RelatedCardTitle = styled.h3`
  font-family: ${FONTS.heading};
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 6px;
`;

const RelatedCardDesc = styled.p`
  font-family: ${FONTS.body};
  font-size: 13px;
  color: rgba(238,231,249,0.5);
  line-height: 1.5;
  margin: 0;
`;

/* ━━━━ Content generators ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const LEVEL_LABELS = {
  "starter-kit": "Starter Kit",
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  "add-on": "Add-On",
};

function generateSections(course) {
  const sections = [];

  // About this course
  sections.push({
    heading: `About This Course`,
    content: `${course.description}\n\nThis course is part of the ${course.roadmapName} roadmap at Margg. It is categorised as a ${LEVEL_LABELS[course.level] || course.level} course, designed to ${course.level === "starter-kit"
      ? "build your foundational skills before you dive into specialised topics"
      : course.level === "beginner"
        ? "introduce you to the core concepts and give you hands-on experience from day one"
        : course.level === "intermediate"
          ? "deepen your understanding and prepare you for advanced challenges"
          : course.level === "advanced"
            ? "push your skills to a professional level with complex, real-world scenarios"
            : "add specialised expertise to your skill set beyond the core curriculum"
      }.\n\nAt Margg, we believe in roadmap-based learning where every course connects to the next, building a coherent path from beginner to job-ready professional. Each module includes hands-on projects, mentor-reviewed assignments, and community discussions.`,
  });

  // Curriculum
  if (course.sections?.length > 0) {
    sections.push({
      heading: "Course Curriculum",
      content: `This course is structured into ${course.sections.length} modules, each building on the previous one. You'll progress through the following topics:`,
      list: course.sections.map(
        (s, i) => `Module ${i + 1}: ${s} — Hands-on exercises, quizzes, and a mini-project`
      ),
    });
  }

  // What you'll gain
  sections.push({
    heading: "What You'll Gain",
    content: "By completing this course, you will:",
    list: [
      `Deep understanding of ${course.title.toLowerCase()} concepts and best practices`,
      "Hands-on experience through real-world projects and exercises",
      "Mentor-reviewed code and design feedback",
      "Industry-aligned skills that employers are actively hiring for",
      "A portfolio project you can showcase in interviews",
      "Streak tracking and XP rewards to keep you motivated",
    ],
  });

  // Who is this for
  sections.push({
    heading: "Who Is This Course For?",
    content: `This course is designed for:`,
    list: [
      "College students (2nd to 4th year) looking to build practical, career-ready skills",
      "Fresh graduates preparing for technical interviews and their first role",
      "Working professionals looking to upskill or transition into a new domain",
      "Self-taught learners who need structured guidance and mentorship",
      `Anyone interested in ${course.roadmapName.toLowerCase()} as a career path`,
    ],
  });

  // How it works
  sections.push({
    heading: "How Margg's Learning Works",
    content: `Every Margg course follows our proven roadmap-based methodology:\n\n1. Visual Roadmap — See the complete path from start to finish. Know exactly what to learn, in what order, and why.\n2. Structured Modules — Each module (${course.duration} total) includes live sessions, recorded content, and hands-on exercises.\n3. Mentor Check-ins — Your assigned mentor reviews your work, provides feedback, and answers your questions.\n4. Streak Tracking — Build daily learning habits with our streak system. Earn XP and level up from Bronze to Diamond.\n5. Community — Connect with peers, share progress, and collaborate on projects.\n6. Interview Prep — Every course ends with an interview preparation module specific to the domain.`,
  });

  return sections;
}

function generateFAQs(course) {
  return [
    {
      question: `Do I need prior experience to take ${course.title}?`,
      answer: course.level === "starter-kit" || course.level === "beginner"
        ? "No prior experience is required. This course starts from the fundamentals and builds up progressively. Basic computer literacy is all you need."
        : `This is a ${LEVEL_LABELS[course.level].toLowerCase()}-level course, so familiarity with the prerequisite topics is recommended. Check the roadmap order to see what courses come before this one.`,
    },
    {
      question: "What is the format of the course?",
      answer: `The course runs for ${course.duration} with live sessions, recorded content, hands-on projects, and mentor feedback. All sessions are recorded and available on-demand. You'll need approximately 10-15 hours per week.`,
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes. Upon completing all modules and the final project, you'll receive a Margg course completion certificate that you can add to your LinkedIn profile and resume.",
    },
    {
      question: "Is this course available online?",
      answer: "Yes, 100% online. Whether you're in Bangalore, Chennai, Hyderabad, Delhi, or any other city in India, you can access the full course, mentorship, and community remotely.",
    },
    {
      question: "How does this course fit into the overall roadmap?",
      answer: `This course is part of the ${course.roadmapName} roadmap at Margg. It's categorised as a ${LEVEL_LABELS[course.level]} course. You can view the complete roadmap to see how this course connects to others in the learning path.`,
    },
  ];
}

/* ── FAQ styled components ── */

const FAQSection = styled.section`
  max-width: 860px;
  margin: 0 auto 80px;
  padding: 0 clamp(24px, 7vw, 120px);
`;

const FAQTitle = styled.h2`
  font-family: ${FONTS.heading};
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 400;
  color: #fff;
  margin: 0 0 32px;
  text-transform: uppercase;
  text-align: center;
`;

const FAQItem = styled.details`
  border: 1px solid rgba(176,149,227,0.2);
  border-radius: 12px;
  margin-bottom: 12px;
  background: rgba(211,196,239,0.04);
  overflow: hidden;
  transition: all 0.3s ease;

  &[open] {
    background: rgba(211,196,239,0.08);
    border-color: rgba(176,149,227,0.35);
  }
`;

const FAQQuestion = styled.summary`
  font-family: ${FONTS.body};
  font-size: 17px;
  font-weight: 600;
  color: #EEE7F9;
  padding: 20px 24px;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  &::-webkit-details-marker { display: none; }

  &::after {
    content: "+";
    font-size: 22px;
    color: #B095E3;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  details[open] > & {
    &::after { content: "−"; }
  }
`;

const FAQAnswer = styled.div`
  font-family: ${FONTS.body};
  font-size: 15px;
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  padding: 0 24px 20px;
`;

/* ━━━━ Component ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export default function CourseDetailPage() {
  const { courseSlug } = useParams();
  const course = allCourses[courseSlug];

  if (!course) {
    return (
      <PageWrap>
        <Navbar />
        <HeroSection>
          <HeroInner>
            <H1>Course Not Found</H1>
            <Paragraph>The course you're looking for doesn't exist.</Paragraph>
            <CTAButton href="/roadmaps">Browse All Roadmaps</CTAButton>
          </HeroInner>
        </HeroSection>
        <Footer />
      </PageWrap>
    );
  }

  const sections = generateSections(course);
  const faqs = generateFAQs(course);

  // Get related courses from same roadmap
  const roadmap = roadmapsData.roadmaps.find(
    (r) => r.slug === course.roadmapSlug
  );
  const relatedCourses = roadmap
    ? [...roadmap.starterKit, ...roadmap.levels, ...roadmap.addOns]
        .filter((c) => c.slug !== courseSlug)
        .slice(0, 4)
    : [];

  const belongsToRoadmaps = courseToRoadmaps[courseSlug] || [];

  return (
    <PageWrap>
      <Navbar />

      <HeroSection>
        <HeroInner>
          <Breadcrumb>
            <Link to="/">Home</Link> /{" "}
            <Link to="/roadmaps">Roadmaps</Link> /{" "}
            <Link to={`/roadmap/${course.roadmapSlug}`}>
              {course.roadmapName}
            </Link>{" "}
            / <span>{course.title}</span>
          </Breadcrumb>

          <LevelBadge className={course.level}>
            {LEVEL_LABELS[course.level]}
          </LevelBadge>

          <H1>{course.title}</H1>
          <HeroDesc>{course.description}</HeroDesc>

          <MetaRow>
            <MetaTag>⏱ {course.duration}</MetaTag>
            <MetaTag>{course.roadmapIcon} {course.roadmapName}</MetaTag>
            <MetaTag>📋 {course.sections?.length || 0} modules</MetaTag>
          </MetaRow>

          <CTAButton href="/#contact-learner">Join the Waitlist</CTAButton>
        </HeroInner>
      </HeroSection>

      <ContentSection>
        {/* Curriculum visual grid */}
        {course.sections?.length > 0 && (
          <SectionBlock>
            <H2>Course Modules</H2>
            <CurriculumGrid>
              {course.sections.map((s, i) => (
                <CurriculumCard key={i}>
                  <CurriculumNumber>
                    {String(i + 1).padStart(2, "0")}
                  </CurriculumNumber>
                  <CurriculumTitle>{s}</CurriculumTitle>
                </CurriculumCard>
              ))}
            </CurriculumGrid>
          </SectionBlock>
        )}

        {/* Content sections */}
        {sections.map((section, i) => (
          <SectionBlock key={i}>
            <H2>{section.heading}</H2>
            <Paragraph>{section.content}</Paragraph>
            {section.list && (
              <List>
                {section.list.map((item, j) => (
                  <ListItem key={j}>{item}</ListItem>
                ))}
              </List>
            )}
          </SectionBlock>
        ))}

        {/* Part of these roadmaps */}
        {belongsToRoadmaps.length > 0 && (
          <RoadmapBelonging>
            <H2>Part Of These Roadmaps</H2>
            <div>
              {belongsToRoadmaps.map((r) => (
                <RoadmapLink key={r.slug} to={`/roadmap/${r.slug}`}>
                  <RoadmapLinkIcon>{r.icon}</RoadmapLinkIcon>
                  <RoadmapLinkText>{r.name}</RoadmapLinkText>
                </RoadmapLink>
              ))}
            </div>
          </RoadmapBelonging>
        )}
      </ContentSection>

      {/* FAQs */}
      <FAQSection>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        {faqs.map((faq, i) => (
          <FAQItem key={i}>
            <FAQQuestion>{faq.question}</FAQQuestion>
            <FAQAnswer>{faq.answer}</FAQAnswer>
          </FAQItem>
        ))}
      </FAQSection>

      {/* Related courses */}
      {relatedCourses.length > 0 && (
        <RelatedSection>
          <RelatedTitle>More in {course.roadmapName}</RelatedTitle>
          <RelatedGrid>
            {relatedCourses.map((rc) => (
              <RelatedCard key={rc.slug} to={`/course/${rc.slug}`}>
                <RelatedCardTitle>{rc.title}</RelatedCardTitle>
                <RelatedCardDesc>
                  {LEVEL_LABELS[rc.level]} · {rc.duration}
                </RelatedCardDesc>
              </RelatedCard>
            ))}
          </RelatedGrid>
        </RelatedSection>
      )}

      <Footer />
    </PageWrap>
  );
}
