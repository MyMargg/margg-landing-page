/**
 * CoursePage – SEO-optimised, SSR-rendered course landing page.
 *
 * Each page targets specific keywords, has 1000+ words of content,
 * proper H1→H2→H3 heading hierarchy, and FAQ sections that generate
 * JSON-LD FAQPage schema for rich snippets.
 */
import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { FONTS, MAX_CONTENT_WIDTH, MEDIA_QUERIES } from "@constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
import coursesData from "@content/courses.json";

/* ━━━━ Styled Components ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const PageWrap = styled.div`
  background: #090215;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  position: relative;
  padding: 160px var(--pad, clamp(24px, 7vw, 120px)) 80px;
  text-align: center;
  background:
    radial-gradient(700px circle at 30% 20%, rgba(176,149,227,0.18), transparent 60%),
    radial-gradient(600px circle at 70% 80%, rgba(80,19,192,0.15), transparent 60%),
    linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);

  @media (max-width: 768px) {
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

  a {
    color: #B095E3;
    text-decoration: none;
    &:hover { text-decoration: underline; }
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
`;

const Subtitle = styled.p`
  font-family: ${FONTS.body};
  font-size: clamp(18px, 2.5vw, 24px);
  color: #D3C4EF;
  margin: 0 0 16px;
  font-weight: 400;
`;

const HeroDesc = styled.p`
  font-family: ${FONTS.body};
  font-size: 16px;
  color: rgba(238,231,249,0.75);
  line-height: 1.7;
  margin: 0 0 32px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
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

/* ── Content area ── */

const ContentSection = styled.main`
  max-width: ${MAX_CONTENT_WIDTH};
  margin: 0 auto;
  padding: 0 clamp(24px, 7vw, 120px) 80px;
`;

const Article = styled.article`
  max-width: 820px;
  margin: 0 auto;
`;

const SectionBlock = styled.section`
  margin-bottom: 56px;
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

/* ── FAQ ── */

const FAQSection = styled.section`
  max-width: 820px;
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
    &::after {
      content: "−";
    }
  }
`;

const FAQAnswer = styled.div`
  font-family: ${FONTS.body};
  font-size: 15px;
  color: rgba(238,231,249,0.7);
  line-height: 1.7;
  padding: 0 24px 20px;
`;

/* ── Related courses ── */

const RelatedSection = styled.section`
  max-width: 820px;
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;

const RelatedCard = styled(Link)`
  display: block;
  padding: 24px;
  border: 1px solid rgba(176,149,227,0.2);
  border-radius: 16px;
  background: rgba(211,196,239,0.05);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(176,149,227,0.5);
    background: rgba(211,196,239,0.1);
    transform: translateY(-2px);
  }
`;

const RelatedCardTitle = styled.h3`
  font-family: ${FONTS.heading};
  font-size: 22px;
  font-weight: 400;
  color: #fff;
  margin: 0 0 8px;
  text-transform: uppercase;
`;

const RelatedCardDesc = styled.p`
  font-family: ${FONTS.body};
  font-size: 14px;
  color: rgba(238,231,249,0.6);
  line-height: 1.5;
  margin: 0;
`;

/* ━━━━ Component ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const allSlugs = Object.keys(coursesData);

export default function CoursePage() {
  const { slug } = useParams();
  const course = coursesData[slug];

  if (!course) {
    return (
      <PageWrap>
        <Navbar />
        <HeroSection>
          <HeroInner>
            <H1>Course Not Found</H1>
            <Paragraph>The course you're looking for doesn't exist.</Paragraph>
            <CTAButton href="/">Back to Home</CTAButton>
          </HeroInner>
        </HeroSection>
        <Footer />
      </PageWrap>
    );
  }

  const relatedCourses = allSlugs
    .filter((s) => s !== slug)
    .map((s) => coursesData[s]);

  return (
    <PageWrap>
      <Navbar />

      {/* Hero with H1 */}
      <HeroSection>
        <HeroInner>
          <Breadcrumb>
            <Link to="/">Home</Link> / <span>{course.heroTitle}</span>
          </Breadcrumb>
          <H1>{course.heroTitle}</H1>
          <Subtitle>{course.heroSubtitle}</Subtitle>
          <HeroDesc>{course.heroDescription}</HeroDesc>
          <CTAButton href={`/${course.ctaHash}`}>
            {course.ctaText}
          </CTAButton>
        </HeroInner>
      </HeroSection>

      {/* Main content with H2 sections */}
      <ContentSection>
        <Article>
          {course.sections.map((section, i) => (
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
        </Article>
      </ContentSection>

      {/* FAQs */}
      {course.faqs?.length > 0 && (
        <FAQSection>
          <FAQTitle>Frequently Asked Questions</FAQTitle>
          {course.faqs.map((faq, i) => (
            <FAQItem key={i}>
              <FAQQuestion>{faq.question}</FAQQuestion>
              <FAQAnswer>{faq.answer}</FAQAnswer>
            </FAQItem>
          ))}
        </FAQSection>
      )}

      {/* Related courses for internal linking */}
      <RelatedSection>
        <RelatedTitle>Explore Other Courses</RelatedTitle>
        <RelatedGrid>
          {relatedCourses.map((rc) => (
            <RelatedCard key={rc.slug} to={`/${rc.slug}`}>
              <RelatedCardTitle>{rc.heroTitle}</RelatedCardTitle>
              <RelatedCardDesc>{rc.heroSubtitle}</RelatedCardDesc>
            </RelatedCard>
          ))}
        </RelatedGrid>
      </RelatedSection>

      <Footer />
    </PageWrap>
  );
}
