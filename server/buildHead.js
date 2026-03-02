/**
 * buildHead.js  (server-side)
 *
 * Builds the full <head> injection string for each request:
 *   – SEO meta tags (title, description, canonical, theme-color)
 *   – Open Graph tags (og:title, og:image, etc.)
 *   – Twitter Card tags
 *   – JSON-LD structured data (Organization + EducationalOrganization)
 *   – styled-components style tags (passed in from entry-server)
 *
 * All values originate from content.json → seo section,
 * so they can be updated remotely without a redeploy.
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load course data once at module level (tiny JSON, never changes at runtime)
let coursesAll = {};
try {
  const raw = readFileSync(
    resolve(__dirname, "../src/content/courses.json"),
    "utf-8",
  );
  coursesAll = JSON.parse(raw);
} catch {
  // courses.json may not exist in some environments — continue without it
}

// Load roadmaps data
let roadmapsAll = { roadmaps: [] };
try {
  const raw = readFileSync(
    resolve(__dirname, "../src/content/roadmaps.json"),
    "utf-8",
  );
  roadmapsAll = JSON.parse(raw);
} catch {
  // roadmaps.json may not exist — continue without it
}

// Build flat course lookup from roadmaps
const roadmapCourses = {};
roadmapsAll.roadmaps.forEach((rm) => {
  [...rm.starterKit, ...rm.levels, ...rm.addOns].forEach((c) => {
    roadmapCourses[c.slug] = {
      ...c,
      roadmapName: rm.name,
      roadmapSlug: rm.slug,
    };
  });
});

// Escape HTML attribute values to prevent XSS
function esc(val) {
  return String(val ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Escape JSON for inline <script> (prevents </script> injection)
function escJson(obj) {
  return JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/\//g, "\\u002f");
}

export function buildHead(
  { seo = {}, footer = {}, blocks = {}, analytics = {} },
  styleTags = "",
  { url: reqUrl = "/" } = {},
) {
  const {
    title: defaultTitle = "Margg \u2013 Curated Routes for Curious Minds",
    description: defaultDescription = "",
    keywords: defaultKeywords = "",
    author = "Margg Private Limited",
    robots = "index, follow",
    locale = "en_IN",
    url: siteUrl = "https://margg.in",
    ogImage: defaultOgImage = `${siteUrl}/og-cover.png`,
    twitterHandle = "@margg",
    themeColor = "#090215",
    foundingYear = "2023",
    appCategory = "EducationApplication",
  } = seo;

  // ── Per-page overrides for course pages ─────────────────────────────────────
  let title = defaultTitle;
  let description = defaultDescription;
  let keywords = defaultKeywords;
  let ogImage = defaultOgImage;
  let canonicalUrl = siteUrl;
  let extraSchemas = "";

  const slug = reqUrl.replace(/^\//, "").replace(/\/$/, "");
  const courseData = coursesAll[slug] ?? null;
  const isHomePage = slug === "" || slug === "/";

  // Detect new route patterns
  const isRoadmapsPage = slug === "roadmaps";
  const roadmapMatch = slug.match(/^roadmap\/(.+)$/);
  const courseMatch = slug.match(/^course\/(.+)$/);
  const roadmapDetailData = roadmapMatch
    ? roadmapsAll.roadmaps.find((r) => r.slug === roadmapMatch[1])
    : null;
  const courseDetailData = courseMatch ? roadmapCourses[courseMatch[1]] : null;

  // Known page check: home, courses.json courses, roadmaps page, roadmap detail, course detail
  const isKnownPage =
    isHomePage ||
    courseData ||
    isRoadmapsPage ||
    roadmapDetailData ||
    courseDetailData;
  // Unknown slugs (not home, not a valid course/roadmap) get noindex
  const effectiveRobots = !isKnownPage ? "noindex, nofollow" : robots;

  if (isRoadmapsPage) {
    title =
      "Learning Roadmaps – Structured Courses for Every Career Path | Margg";
    description =
      "Explore Margg's structured learning roadmaps. Frontend, Backend, UI/UX, Data Engineering, DevOps, Cyber Security & Business Analytics – from Starter-Kit to Add-Ons.";
    keywords =
      "learning roadmaps, career roadmap, course roadmap India, structured learning path, Margg roadmaps, tech career path";
    canonicalUrl = `${siteUrl}/roadmaps`;

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Roadmaps",
          item: canonicalUrl,
        },
      ],
    };
    extraSchemas += `\n    <script type="application/ld+json">${escJson(breadcrumbSchema)}</script>`;

    // ItemList of all roadmaps for rich SERP
    const roadmapListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Margg Learning Roadmaps",
      numberOfItems: roadmapsAll.roadmaps.length,
      itemListElement: roadmapsAll.roadmaps.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: r.name,
        url: `${siteUrl}/roadmap/${r.slug}`,
      })),
    };
    extraSchemas += `\n    <script type="application/ld+json">${escJson(roadmapListSchema)}</script>`;
  } else if (roadmapDetailData) {
    title = roadmapDetailData.metaTitle;
    description = roadmapDetailData.metaDescription;
    keywords = roadmapDetailData.keywords;
    canonicalUrl = `${siteUrl}/roadmap/${roadmapDetailData.slug}`;

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Roadmaps",
          item: `${siteUrl}/roadmaps`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: roadmapDetailData.name,
          item: canonicalUrl,
        },
      ],
    };
    extraSchemas += `\n    <script type="application/ld+json">${escJson(breadcrumbSchema)}</script>`;

    // Course list within roadmap
    const allRoadmapCourses = [
      ...roadmapDetailData.starterKit,
      ...roadmapDetailData.levels,
      ...roadmapDetailData.addOns,
    ];
    const courseListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${roadmapDetailData.name} Courses`,
      numberOfItems: allRoadmapCourses.length,
      itemListElement: allRoadmapCourses.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.title,
        url: `${siteUrl}/course/${c.slug}`,
      })),
    };
    extraSchemas += `\n    <script type="application/ld+json">${escJson(courseListSchema)}</script>`;
  } else if (courseDetailData) {
    title = `${courseDetailData.title} – ${courseDetailData.roadmapName} | Margg`;
    description = courseDetailData.description;
    keywords = `${courseDetailData.title}, ${courseDetailData.roadmapName}, Margg course, ${courseDetailData.level} course India`;
    canonicalUrl = `${siteUrl}/course/${courseDetailData.slug}`;

    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: courseDetailData.title,
      description: courseDetailData.description,
      provider: { "@type": "Organization", name: "Margg", url: siteUrl },
      url: canonicalUrl,
      educationalLevel:
        courseDetailData.level === "starter-kit"
          ? "Beginner"
          : courseDetailData.level === "beginner"
            ? "Beginner"
            : courseDetailData.level === "intermediate"
              ? "Intermediate"
              : "Advanced",
      inLanguage: "en",
      isAccessibleForFree: false,
    };
    extraSchemas += `\n    <script type="application/ld+json">${escJson(courseSchema)}</script>`;

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Roadmaps",
          item: `${siteUrl}/roadmaps`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: courseDetailData.roadmapName,
          item: `${siteUrl}/roadmap/${courseDetailData.roadmapSlug}`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: courseDetailData.title,
          item: canonicalUrl,
        },
      ],
    };
    extraSchemas += `\n    <script type="application/ld+json">${escJson(breadcrumbSchema)}</script>`;
  } else if (courseData) {
    title = courseData.title;
    description = courseData.metaDescription;
    keywords = courseData.keywords;
    canonicalUrl = `${siteUrl}/${slug}`;

    // FAQ Page schema for rich snippets
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: (courseData.faqs ?? []).map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    };

    // Course schema
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: courseData.heroTitle,
      description: courseData.metaDescription,
      provider: {
        "@type": "Organization",
        name: "Margg",
        url: siteUrl,
      },
      url: canonicalUrl,
      educationalLevel: "Beginner to Advanced",
      inLanguage: "en",
      isAccessibleForFree: false,
    };

    extraSchemas = `
    <script type="application/ld+json">${escJson(faqSchema)}</script>
    <script type="application/ld+json">${escJson(courseSchema)}</script>`;

    // BreadcrumbList for enhanced SERP display
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: courseData.heroTitle,
          item: canonicalUrl,
        },
      ],
    };
    extraSchemas += `\n    <script type="application/ld+json">${escJson(breadcrumbSchema)}</script>`;
  } else {
    canonicalUrl = siteUrl;
  }

  const url = siteUrl;

  // ── JSON-LD: Organization + EducationalOrganization ───────────────────────
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    name: "Margg",
    alternateName: [
      "Margg Private Limited",
      "MarggLive",
      "Gagan's Application",
    ],
    url,
    logo: {
      "@type": "ImageObject",
      url: `${url}/logo.png`,
      width: 200,
      height: 60,
    },
    image: ogImage,
    description,
    slogan: "Curated routes for curious minds",
    foundingDate: foundingYear,
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "State", name: "Karnataka" },
      { "@type": "State", name: "Andhra Pradesh" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "State", name: "Telangana" },
      { "@type": "State", name: "Kerala" },
    ],
    knowsAbout: [
      "Learning Management System",
      "Roadmap Based Courses",
      "Career Mentorship",
      "Interview Preparation",
      "Roadmap Based Learning",
      "Skill Development",
      "College Student Education",
      "Best LMS in South India",
      "Online Education India",
      "Structured Learning Paths",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: footer.phone ?? "",
      email: footer.email ?? "",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: footer.location ?? "",
      addressCountry: "IN",
    },
    sameAs: (footer.socialLinks ?? []).map((s) => s.url).filter(Boolean),
  };

  // ── JSON-LD: WebSite with SearchAction ──────────────────────────────────────
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Margg",
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // ── JSON-LD: SoftwareApplication ────────────────────────────────────────────
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Margg",
    url,
    description,
    applicationCategory: appCategory,
    operatingSystem: "Web, Android, iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: analytics.stats?.[1]?.value?.replace(/\D/g, "") ?? "1000",
      bestRating: "5",
    },
    author: { "@type": "Organization", name: "Margg Private Limited" },
  };

  // ── JSON-LD: ItemList of learning features ──────────────────────────────────
  const featureLabels = {
    roadmap: "Roadmap Based Learning",
    mentorship: "One-on-One Mentorship",
    interviewPrep: "Interview Prep Materials",
    jobBoard: "Job Board",
    projects: "Projects",
    resume: "Resume Builder",
    skills: "Skills Assessment",
    streaks: "Streaks & Consistency Tracking",
    certifications: "Certifications",
    community: "Peer Community",
    focusTimer: "Focus Timer",
  };
  const blockEntries = Object.entries(blocks).filter(([, v]) => v?.title);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Margg Platform Features",
    description: "Core features of the Margg LMS for college students",
    numberOfItems: blockEntries.length,
    itemListElement: blockEntries.map(([key, val], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: val.title ?? featureLabels[key] ?? key,
      url: `${url}#${key}`,
    })),
  };

  return `
    <!-- SEO -->
    <title>${esc(title)}</title>
    <meta name="description"        content="${esc(description)}" />
    <meta name="keywords"           content="${esc(keywords)}" />
    <meta name="author"             content="${esc(author)}" />
    <meta name="robots"             content="${esc(effectiveRobots)}" />
    <meta name="theme-color"        content="${esc(themeColor)}" />
    <link rel="canonical"           href="${esc(canonicalUrl)}" />

    <!-- Geo targeting for South India -->
    <meta name="geo.region"         content="IN-KA" />
    <meta name="geo.placename"      content="Bangalore, South India" />
    <meta name="geo.position"       content="12.9716;77.5946" />
    <meta name="ICBM"              content="12.9716, 77.5946" />
    <meta name="distribution"       content="India" />
    <meta name="language"           content="en-IN" />
    <meta name="rating"             content="general" />
    <meta name="revisit-after"      content="7 days" />

    <!-- Locale targeting -->
    <link rel="alternate" hreflang="en-IN" href="${esc(canonicalUrl)}" />
    <link rel="alternate" hreflang="x-default" href="${esc(canonicalUrl)}" />

    <!-- Open Graph -->
    <meta property="og:type"        content="${courseData || courseDetailData ? "article" : "website"}" />
    <meta property="og:locale"      content="${esc(locale)}" />
    <meta property="og:url"         content="${esc(canonicalUrl)}" />
    <meta property="og:site_name"   content="Margg" />
    <meta property="og:title"       content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:image"       content="${esc(ogImage)}" />
    <meta property="og:image:width"  content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt"   content="Margg – Roadmap Based Courses & Best LMS Platform in South India" />

    <!-- Twitter Card -->
    <meta name="twitter:card"        content="summary_large_image" />
    <meta name="twitter:site"        content="${esc(twitterHandle)}" />
    <meta name="twitter:creator"     content="${esc(twitterHandle)}" />
    <meta name="twitter:title"       content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image"       content="${esc(ogImage)}" />
    <meta name="twitter:image:alt"   content="Margg – Roadmap Based Courses & Best LMS Platform" />

    <!-- JSON-LD -->
    <script type="application/ld+json">${escJson(orgSchema)}</script>
    <script type="application/ld+json">${escJson(websiteSchema)}</script>
    <script type="application/ld+json">${escJson(appSchema)}</script>
    <script type="application/ld+json">${escJson(itemListSchema)}</script>${extraSchemas}

    <!-- styled-components SSR styles -->
    ${styleTags}
  `.trim();
}
