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
) {
  const {
    title = "Margg \u2013 Curated Routes for Curious Minds",
    description = "",
    keywords = "",
    author = "Margg Private Limited",
    robots = "index, follow",
    locale = "en_IN",
    url = "https://margg.in",
    ogImage = `${url}/og-cover.png`,
    twitterHandle = "@margg",
    themeColor = "#090215",
    foundingYear = "2023",
    appCategory = "EducationApplication",
  } = seo;

  // ── JSON-LD: Organization + EducationalOrganization ───────────────────────
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    name: "Margg",
    alternateName: ["Margg Private Limited", "MarggLive", "Gagan's Application"],
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
    <meta name="robots"             content="${esc(robots)}" />
    <meta name="theme-color"        content="${esc(themeColor)}" />
    <link rel="canonical"           href="${esc(url)}" />

    <!-- Geo targeting for South India -->
    <meta name="geo.region"         content="IN-KA" />
    <meta name="geo.placename"      content="Bangalore, South India" />
    <meta name="geo.position"       content="12.9716;77.5946" />
    <meta name="ICBM"              content="12.9716, 77.5946" />
    <meta name="distribution"       content="India" />
    <meta name="language"           content="en-IN" />
    <meta name="rating"             content="general" />
    <meta name="revisit-after"      content="7 days" />

    <!-- Open Graph -->
    <meta property="og:type"        content="website" />
    <meta property="og:locale"      content="${esc(locale)}" />
    <meta property="og:url"         content="${esc(url)}" />
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
    <script type="application/ld+json">${escJson(itemListSchema)}</script>

    <!-- styled-components SSR styles -->
    ${styleTags}
  `.trim();
}
