import React, { useState, useRef, useEffect, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";
import { FONTS, MEDIA_QUERIES } from "@constants";
import { useContent } from "@content/ContentContext";
import {
  submitLearner,
  submitInstructor,
  submitPartner,
} from "@services/contactApi";

/* ━━ scroll-triggered slide-up ━━━━━━━━━━━━━━━━━━ */

const fadeUp = keyframes`
  0%   { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ━━ validation helpers ━━━━━━━━━━━━━━━━━━━━━━━━━ */

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const PHONE_RE = /^[0-9\s\-+()]{10,15}$/;

function validate(name, value) {
  if (!value || !value.trim()) return "Required";
  switch (name) {
    case "email":
      return EMAIL_RE.test(value.trim()) ? "" : "Invalid email";
    case "phone":
      return PHONE_RE.test(value.trim()) ? "" : "Invalid phone number";
    case "fullName":
      return value.trim().length >= 2 ? "" : "At least 2 characters";
    case "orgName":
      return value.trim().length >= 2 ? "" : "At least 2 characters";
    default:
      return "";
  }
}

/* ━━ data ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const ROLES = [
  {
    key: "learner",
    title: "Learners",
    desc: "Have questions about your course, progress, or certification? Reach out and we\u2019ll get you the support you need.",
  },
  {
    key: "instructor",
    title: "Instructors",
    desc: "Interested in joining our platform or facing technical issues while managing your content? We\u2019re just a message away.",
  },
  {
    key: "partner",
    title: "Partners",
    desc: "Let\u2019s explore how we can grow together. We welcome colleges, institutions, companies, and collaborators to connect with our team.",
  },
];



/* ━━ icons ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const LearnerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z" fill="#D3C4EF" fillOpacity=".8" />
    <path d="M17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" fill="#EEE7F9" />
  </svg>
);

const InstructorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" fill="#D3C4EF" />
    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" fill="#D3C4EF" fillOpacity=".6" />
    <path d="M12 5.5L10 9.5v2l2-2 2 2v-2l-2-4z" fill="#EEE7F9" />
  </svg>
);

const PartnerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M16.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="#D3C4EF" fillOpacity=".6" />
    <path d="M9 11a3 3 0 100-6 3 3 0 000 6z" fill="#D3C4EF" />
    <path d="M16.5 14c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75z" fill="#D3C4EF" fillOpacity=".6" />
    <path d="M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z" fill="#D3C4EF" />
  </svg>
);

const ROLE_ICONS = { learner: LearnerIcon, instructor: InstructorIcon, partner: PartnerIcon };



/* ━━ styled components ━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const Section = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  --pad: clamp(24px, 7vw, 120px);
  padding: 100px var(--pad) 120px;

  ${MEDIA_QUERIES.mobile} { padding: 80px 20px 80px; }
  @media (max-width: 480px) { padding: 60px 16px 60px; }
`;

/* decorative glow blobs */
const Glow = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  opacity: 0.35;
`;
const Glow1 = styled(Glow)` width:320px;height:320px;background:rgba(80,19,192,.5);top:10%;right:5%; `;
const Glow2 = styled(Glow)` width:260px;height:260px;background:rgba(176,149,227,.4);top:30%;left:2%; `;
const Glow3 = styled(Glow)` width:200px;height:200px;background:rgba(80,19,192,.4);bottom:15%;right:15%; `;

const Inner = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* ── animations ── */

const animMixin = css`
  opacity: 0;
  ${(p) => p.$show && css`
    animation: ${fadeUp} 0.7s ease forwards;
    animation-delay: ${p.$d || "0s"};
  `}
`;

/* ── heading ── */

const SectionTitle = styled.h2`
  margin: 0;
  font-family: ${FONTS.heading};
  color: #fff;
  font-weight: 400;
  font-size: clamp(40px, 6vw, 64px);
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
  ${animMixin}
`;

const SectionSub = styled.p`
  margin: 16px 0 0;
  font-family: ${FONTS.body};
  color: rgba(238, 231, 249, 0.7);
  font-size: clamp(14px, 1.6vw, 18px);
  line-height: 1.6;
  text-align: center;
  max-width: 700px;
  ${animMixin}
`;

/* ── role cards ── */

const CardsRow = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;
  width: 100%;
  justify-content: center;
  ${animMixin}

  ${MEDIA_QUERIES.mobile} { gap: 16px; }
  @media (max-width: 600px) {
    gap: 10px;
    margin-top: 36px;
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 280px;
  position: relative;
  cursor: pointer;
  transition: filter 0.35s ease;
  filter: ${(p) =>
    p.$active
      ? "drop-shadow(0 0 1px rgba(176,149,227,0.7)) drop-shadow(0 0 1px rgba(176,149,227,0.5)) drop-shadow(0 4px 24px rgba(80,19,192,0.5)) drop-shadow(0 0 50px rgba(176,149,227,0.12))"
      : "drop-shadow(0 0 0.5px rgba(176,149,227,0.2)) drop-shadow(0 0 0.5px rgba(176,149,227,0.2))"};

  &:hover {
    filter: drop-shadow(0 0 1px rgba(176,149,227,0.45)) drop-shadow(0 0 1px rgba(176,149,227,0.35)) drop-shadow(0 2px 16px rgba(80,19,192,0.3));
  }

  ${MEDIA_QUERIES.mobile} { flex: 0 0 220px; }
  @media (max-width: 600px) {
    flex: 1 1 0;
    min-width: 0;
  }
`;

const RoleCard = styled.button`
  all: unset;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 24px 72px;
  clip-path: url(#shield-clip);
  transition: background 0.35s ease;

  background: ${(p) =>
    p.$active
      ? "linear-gradient(160deg, rgba(80,19,192,0.55) 0%, rgba(60,42,96,0.7) 100%)"
      : "linear-gradient(160deg, rgba(80,19,192,0.15) 0%, rgba(60,42,96,0.2) 100%)"};

  &:hover {
    background: linear-gradient(160deg, rgba(80,19,192,0.35) 0%, rgba(60,42,96,0.45) 100%);
  }

  ${MEDIA_QUERIES.mobile} { padding: 24px 16px 56px; }

  @media (max-width: 600px) {
    clip-path: none;
    border-radius: 16px;
    padding: 16px 8px 20px;
    border: 1px solid ${(p) => (p.$active ? "rgba(176,149,227,0.5)" : "rgba(176,149,227,0.12)")};
  }
`;

const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(176, 149, 227, 0.12);
  margin-bottom: 16px;

  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    margin-bottom: 8px;
    svg { width: 20px; height: 20px; }
  }
`;

const CardTitle = styled.span`
  font-family: ${FONTS.body};
  font-weight: 700;
  font-size: 22px;
  color: #fff;
  margin-bottom: 12px;
  ${MEDIA_QUERIES.mobile} { font-size: 18px; }
  @media (max-width: 600px) { font-size: 14px; margin-bottom: 0; }
`;

const CardDesc = styled.span`
  font-family: ${FONTS.body};
  font-size: 14px;
  line-height: 1.55;
  color: rgba(238, 231, 249, 0.7);
  ${MEDIA_QUERIES.mobile} { font-size: 13px; }
  @media (max-width: 600px) { display: none; }
`;

/* Mobile-only: description shown below the tab row for the active role */
const MobileDesc = styled.p`
  display: none;
  @media (max-width: 600px) {
    display: block;
    margin: 16px 0 0;
    font-family: ${FONTS.body};
    font-size: 14px;
    line-height: 1.6;
    color: rgba(238, 231, 249, 0.65);
    text-align: center;
    max-width: 340px;
    ${animMixin}
  }
`;

/* ── connector lines ── */

const ConnectorArea = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: -20px;
  @media (max-width: 600px) { display: none; }
`;

const DashedLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border-left: 2px dashed rgba(176, 149, 227, 0.3);
  ${(p) => p.$pos === "left" && css` left: 18%; transform: rotate(22deg); transform-origin: top center; `}
  ${(p) => p.$pos === "center" && css` left: 50%; `}
  ${(p) => p.$pos === "right" && css` right: 18%; transform: rotate(-22deg); transform-origin: top center; `}
`;

/* ── form card ── */

const FormCard = styled.div`
  width: 100%;
  border-radius: 32px;
  border: 1px solid rgba(176, 149, 227, 0.5);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 2px 50px rgba(211, 196, 239, 0.2);
  padding: 40px;
  ${animMixin}

  ${MEDIA_QUERIES.mobile} { padding: 28px 20px; border-radius: 24px; }
  @media (max-width: 480px) { padding: 24px 16px; }
`;

const FormTitle = styled.h3`
  margin: 0;
  font-family: ${FONTS.heading};
  font-weight: 400;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
  ${MEDIA_QUERIES.mobile} { font-size: 32px; }
`;

const FormSub = styled.p`
  margin: 8px 0 0;
  font-family: ${FONTS.body};
  font-size: 18px;
  color: rgba(238, 231, 249, 0.6);
  font-weight: 400;
  letter-spacing: -0.3px;
  ${MEDIA_QUERIES.mobile} { font-size: 15px; }
`;

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 32px;
  margin-top: 48px;

  ${MEDIA_QUERIES.mobile} { grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 32px; }
  @media (max-width: 600px) { grid-template-columns: 1fr; gap: 20px; }
`;

const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${(p) => p.$full && css` grid-column: 1 / -1; `}
`;

const Label = styled.label`
  font-family: ${FONTS.body};
  font-weight: 500;
  font-size: 14px;
  color: rgba(238, 231, 249, 0.6);
`;

const inputBase = css`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(to right, rgba(211,196,239,0.04), rgba(211,196,239,0.16));
  font-family: ${FONTS.body};
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  outline: none;
  transition: box-shadow 0.2s ease;

  &::placeholder { color: rgba(238,231,249,0.35); font-weight: 400; }
  &:focus { box-shadow: 0 0 0 1.5px rgba(176,149,227,0.5); }
`;

const Input = styled.input` ${inputBase} `;

const TextArea = styled.textarea`
  ${inputBase}
  min-height: 90px;
  resize: vertical;
`;

const Select = styled.select`
  ${inputBase}
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5l5 5 5-5' stroke='%23B095E3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;

  option {
    background: #1a0e2e;
    color: #fff;
    font-family: ${FONTS.body};
    padding: 8px;
  }
`;



const ErrorText = styled.span`
  font-family: ${FONTS.body};
  font-size: 12px;
  color: #f87171;
  margin-top: -4px;
`;

/* ── tags (instructor topics) ── */

const TagsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  background: rgba(176, 149, 227, 0.18);
  border: 1px solid rgba(176, 149, 227, 0.3);
  font-family: ${FONTS.body};
  font-size: 13px;
  color: #eee7f9;
`;

const TagRemove = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0.6;
  transition: opacity 0.15s;
  &:hover { opacity: 1; }
`;

/* ── checkbox ── */

const CheckRow = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 24px;
  cursor: pointer;
`;

const Checkbox = styled.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1.5px solid rgba(176, 149, 227, 0.5);
  background: ${(p) => (p.$checked ? "#5013C0" : "rgba(211,196,239,0.06)")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  svg { opacity: ${(p) => (p.$checked ? 1 : 0)}; transition: opacity 0.15s; }
`;

const CheckLabel = styled.span`
  font-family: ${FONTS.body};
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  line-height: 1.4;
  @media (max-width: 600px) { font-size: 13px; }
`;

/* ── submit ── */

const SubmitBtn = styled.button`
  all: unset;
  cursor: pointer;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 197px;
  height: 43px;
  border-radius: 40px;
  background: #fff;
  border: 1px solid #d3c4ef;
  box-shadow: 0 4px 24px rgba(176, 149, 227, 0.5);
  font-family: ${FONTS.body};
  font-weight: 700;
  font-size: 16px;
  color: #5013c0;
  letter-spacing: -0.3px;
  transition: all 0.25s ease;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 28px;
  }

  &:hover { transform: translateY(-2px); box-shadow: 0 6px 32px rgba(176,149,227,0.6); }
  &:active { transform: translateY(0); }
  &:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
`;

/* ── form-level error banner ── */

const FormErrorBanner = styled.div`
  margin-top: 20px;
  padding: 14px 20px;
  border-radius: 12px;
  background: rgba(248, 113, 113, 0.1);
  border: 1px solid rgba(248, 113, 113, 0.3);
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 600px) { padding: 12px 14px; gap: 10px; }
`;

const ErrorBannerText = styled.span`
  font-family: ${FONTS.body};
  font-size: 14px;
  color: #f87171;
  flex: 1;
  min-width: 180px;
`;

const RetryBtn = styled.button`
  all: unset;
  cursor: pointer;
  padding: 6px 18px;
  border-radius: 20px;
  font-family: ${FONTS.body};
  font-weight: 600;
  font-size: 13px;
  color: #fff;
  background: rgba(248, 113, 113, 0.25);
  border: 1px solid rgba(248, 113, 113, 0.4);
  transition: background 0.2s;
  white-space: nowrap;

  &:hover { background: rgba(248, 113, 113, 0.4); }
`;

/* ── success state ── */

const SuccessMsg = styled.div`
  text-align: center;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const SuccessIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(80, 19, 192, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SuccessTitle = styled.h3`
  margin: 0;
  font-family: ${FONTS.heading};
  font-size: 36px;
  color: #fff;
  text-transform: uppercase;
`;

const SuccessText = styled.p`
  margin: 0;
  font-family: ${FONTS.body};
  font-size: 16px;
  color: rgba(238, 231, 249, 0.7);
  max-width: 420px;
`;

/* ━━ form initial state per role ━━━━━━━━━━━━━━━━━ */

function initialState(role) {
  switch (role) {
    case "learner":
      return { fullName: "", phone: "", email: "", college: "", branch: "", year: "", query: "", newsletter: false };
    case "instructor":
      return { fullName: "", phone: "", email: "", topics: [], otherTopic: undefined };
    case "partner":
      return { orgType: "", orgName: "", students: "", phone: "", email: "" };
    default:
      return {};
  }
}

/* ━━ component ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export default function Contact({ id }) {
  const apiConfig = useContent("api");
  const [role, setRole] = useState("learner");
  const [form, setForm] = useState(initialState("learner"));
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const lastSubmitRef = useRef(null);  // stash last submit event for retry

  const [viewRef, inView] = useInView(0.08);
  const sectionRef = useRef(null);

  /* ── hash-based role preselection ── */
  useEffect(() => {
    const ROLE_HASHES = {
      "#contact-learner": "learner",
      "#contact-instructor": "instructor",
      "#contact-partner": "partner",
    };

    function handleHash() {
      const hash = window.location.hash;
      const r = ROLE_HASHES[hash];
      if (r) {
        setRole(r);
        setForm(initialState(r));
        setErrors({});
        setSubmitted(false);
        /* scroll to the section */
        requestAnimationFrame(() => {
          const el = sectionRef.current;
          if (el) {
            const navHeight = document.querySelector("nav")?.offsetHeight || 72;
            const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({ top, behavior: "smooth" });
          }
        });
      }
    }

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  /* switch role → reset form */
  const handleRole = useCallback((r) => {
    setRole(r);
    setForm(initialState(r));
    setErrors({});
    setSubmitted(false);
  }, []);

  /* generic field change */
  const set = useCallback(
    (key, value) => {
      setForm((f) => ({ ...f, [key]: value }));
      if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
    },
    [errors],
  );

  /* topic management (instructor) */
  const addTopic = useCallback((topic) => {
    if (!topic) return;
    setForm((f) => ({
      ...f,
      topics: f.topics.includes(topic) ? f.topics : [...f.topics, topic],
    }));
    if (errors.topics) setErrors((e) => ({ ...e, topics: "" }));
  }, [errors]);

  const addOtherTopic = useCallback(() => {
    setForm((f) => {
      const t = f.otherTopic?.trim();
      if (!t) return f;
      return {
        ...f,
        topics: f.topics.includes(t) ? f.topics : [...f.topics, t],
        otherTopic: undefined,
      };
    });
    if (errors.topics) setErrors((e) => ({ ...e, topics: "" }));
  }, [errors]);

  const removeTopic = useCallback((topic) => {
    setForm((f) => ({ ...f, topics: f.topics.filter((t) => t !== topic) }));
  }, []);

  /* validation & submit */
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const errs = {};

      if (role === "learner") {
        ["fullName", "phone", "email"].forEach((k) => {
          const msg = validate(k, form[k]);
          if (msg) errs[k] = msg;
        });
        if (!form.college) errs.college = "Required";
        if (!form.branch) errs.branch = "Required";
        if (!form.year) errs.year = "Required";
      } else if (role === "instructor") {
        ["fullName", "phone", "email"].forEach((k) => {
          const msg = validate(k, form[k]);
          if (msg) errs[k] = msg;
        });
        if (!form.topics.length) errs.topics = "Add at least one topic";
      } else {
        if (!form.orgType) errs.orgType = "Required";
        const orgMsg = validate("orgName", form.orgName);
        if (orgMsg) errs.orgName = orgMsg;
        if (!form.students) errs.students = "Required";
        ["phone", "email"].forEach((k) => {
          const msg = validate(k, form[k]);
          if (msg) errs[k] = msg;
        });
      }

      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }

      setLoading(true);
      setErrors((prev) => ({ ...prev, _form: "" }));
      try {
        if (role === "learner") {
          await submitLearner(apiConfig, form);
        } else if (role === "instructor") {
          await submitInstructor(apiConfig, form);
        } else {
          await submitPartner(apiConfig, form);
        }
        setSubmitted(true);
      } catch (err) {
        setErrors({ _form: err.message || "Something went wrong. Please try again." });
      } finally {
        setLoading(false);
      }
    },
    [role, form, apiConfig],
  );

  /* retry handler – re-fires the last submit */
  const handleRetry = useCallback(() => {
    const syntheticEvent = { preventDefault: () => {} };
    handleSubmit(syntheticEvent);
  }, [handleSubmit]);

  /* ── field renderers ── */

  const renderLearnerFields = () => (
    <>
      <FieldWrap>
        <Label>Full Name</Label>
        <Input placeholder="Enter full name" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} />
        {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
      </FieldWrap>
      <FieldWrap>
        <Label>Phone Number</Label>
        <Input placeholder="Enter phone number" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
        {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
      </FieldWrap>
      <FieldWrap>
        <Label>Email</Label>
        <Input type="email" placeholder="Enter email address" value={form.email} onChange={(e) => set("email", e.target.value)} />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
      </FieldWrap>

      <FieldWrap>
        <Label>College Name</Label>
        <Input placeholder="Enter college name" value={form.college} onChange={(e) => set("college", e.target.value)} />
        {errors.college && <ErrorText>{errors.college}</ErrorText>}
      </FieldWrap>
      <FieldWrap>
        <Label>Branch</Label>
        <Input placeholder="Enter branch" value={form.branch} onChange={(e) => set("branch", e.target.value)} />
        {errors.branch && <ErrorText>{errors.branch}</ErrorText>}
      </FieldWrap>
      <FieldWrap>
        <Label>Year of Passing</Label>
        <Input placeholder="Enter year of passing" value={form.year} onChange={(e) => set("year", e.target.value)} />
        {errors.year && <ErrorText>{errors.year}</ErrorText>}
      </FieldWrap>
      <FieldWrap $full>
        <Label>Query <span style={{ color: 'rgba(238,231,249,0.35)', fontWeight: 400 }}>(optional)</span></Label>
        <TextArea placeholder="Any questions or queries that you have?" value={form.query} onChange={(e) => set("query", e.target.value)} />
      </FieldWrap>
    </>
  );

  const courseOptions = useContent("courses") || [];

  const renderInstructorFields = () => (
    <>
      <FieldWrap>
        <Label>Full Name</Label>
        <Input placeholder="Enter full name" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} />
        {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
      </FieldWrap>
      <FieldWrap>
        <Label>Phone Number</Label>
        <Input placeholder="Enter phone number" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
        {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
      </FieldWrap>
      <FieldWrap>
        <Label>Email</Label>
        <Input type="email" placeholder="Enter email address" value={form.email} onChange={(e) => set("email", e.target.value)} />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
      </FieldWrap>

      <FieldWrap $full>
        <Label>Topics you can teach</Label>
        {form.topics.length > 0 && (
          <TagsArea>
            {form.topics.map((t) => (
              <Tag key={t}>
                {t}
                <TagRemove onClick={() => removeTopic(t)} aria-label={`Remove ${t}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M9 3L3 9M3 3l6 6" stroke="#EEE7F9" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </TagRemove>
              </Tag>
            ))}
          </TagsArea>
        )}
        <Select
          value=""
          onChange={(e) => {
            const val = e.target.value;
            if (!val) return;
            if (val === "__other__") {
              setForm((f) => ({ ...f, otherTopic: "" }));
            } else {
              addTopic(val);
            }
            e.target.value = "";
          }}
        >
          <option value="">Select a topic</option>
          {courseOptions
            .filter((c) => !form.topics.includes(c))
            .map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          <option value="__other__">Other</option>
        </Select>

        {typeof form.otherTopic === "string" && (
          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            <Input
              placeholder="Enter your topic"
              value={form.otherTopic}
              onChange={(e) => set("otherTopic", e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addOtherTopic();
                }
              }}
              style={{ flex: 1 }}
            />
            <SubmitBtn
              type="button"
              onClick={addOtherTopic}
              style={{ marginTop: 0, width: "auto", padding: "0 24px", height: 43, fontSize: 14 }}
            >
              Add
            </SubmitBtn>
          </div>
        )}

        {errors.topics && <ErrorText>{errors.topics}</ErrorText>}
      </FieldWrap>
    </>
  );

  const renderPartnerFields = () => (
    <>
      <FieldWrap>
        <Label>Organisation Type</Label>
        <Input placeholder="Enter organisation type" value={form.orgType} onChange={(e) => set("orgType", e.target.value)} />
        {errors.orgType && <ErrorText>{errors.orgType}</ErrorText>}
      </FieldWrap>
      <FieldWrap>
        <Label>Organisation Name</Label>
        <Input placeholder="Enter organisation name" value={form.orgName} onChange={(e) => set("orgName", e.target.value)} />
        {errors.orgName && <ErrorText>{errors.orgName}</ErrorText>}
      </FieldWrap>
      <FieldWrap>
        <Label>Number of Students</Label>
        <Input placeholder="Enter number of students" value={form.students} onChange={(e) => set("students", e.target.value)} />
        {errors.students && <ErrorText>{errors.students}</ErrorText>}
      </FieldWrap>

      <FieldWrap>
        <Label>Phone Number</Label>
        <Input placeholder="Enter phone number" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
        {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
      </FieldWrap>
      <FieldWrap>
        <Label>Email</Label>
        <Input type="email" placeholder="Enter email address" value={form.email} onChange={(e) => set("email", e.target.value)} />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
      </FieldWrap>
    </>
  );

  return (
    <Section id={id} ref={(el) => { viewRef.current = el; sectionRef.current = el; }} aria-label="Contact Us">
      {/* hidden SVG for shield clip-path */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="shield-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.06,0 L 0.94,0 Q 1,0 1,0.06 L 1,0.85 L 0.5,1 L 0,0.85 L 0,0.06 Q 0,0 0.06,0 Z" />
          </clipPath>
        </defs>
      </svg>
      <Glow1 />
      <Glow2 />
      <Glow3 />

      <Inner>
        {/* heading */}
        <SectionTitle $show={inView} $d="0s">
          We are here to help you
        </SectionTitle>
        <SectionSub $show={inView} $d="0.1s">
          Whether you&rsquo;re a student with a question, an educator with a suggestion,
          or a partner looking to collaborate &mdash; we&rsquo;re always eager to hear from you.
        </SectionSub>

        {/* role cards */}
        <CardsRow $show={inView} $d="0.2s">
          {ROLES.map((r) => {
            const Icon = ROLE_ICONS[r.key];
            return (
              <CardWrapper
                key={r.key}
                $active={role === r.key}
                onClick={() => handleRole(r.key)}
              >
                <RoleCard
                  $active={role === r.key}
                  type="button"
                  aria-pressed={role === r.key}
                >
                  <CardIcon><Icon /></CardIcon>
                  <CardTitle>{r.title}</CardTitle>
                  <CardDesc>{r.desc}</CardDesc>
                </RoleCard>
              </CardWrapper>
            );
          })}
        </CardsRow>

        {/* mobile-only: active role description */}
        <MobileDesc $show={inView} $d="0.25s" key={role}>
          {ROLES.find((r) => r.key === role)?.desc}
        </MobileDesc>

        {/* connector lines */}
        <ConnectorArea>
          <DashedLine $pos="left" />
          <DashedLine $pos="center" />
          <DashedLine $pos="right" />
        </ConnectorArea>

        {/* form */}
        <FormCard $show={inView} $d="0.35s">
          {submitted ? (
            <SuccessMsg>
              <SuccessIcon>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#B095E3" />
                </svg>
              </SuccessIcon>
              <SuccessTitle>Thank you!</SuccessTitle>
              <SuccessText>
                We&rsquo;ve received your details and will contact you soon.
              </SuccessText>
              <SubmitBtn type="button" onClick={() => { setSubmitted(false); setForm(initialState(role)); }}>
                Submit another
              </SubmitBtn>
            </SuccessMsg>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <FormTitle>Drop your Details</FormTitle>
              <FormSub>We will contact you real soon!</FormSub>

              <FieldsGrid>
                {role === "learner" && renderLearnerFields()}
                {role === "instructor" && renderInstructorFields()}
                {role === "partner" && renderPartnerFields()}
              </FieldsGrid>

              {role === "learner" && (
                <CheckRow>
                  <Checkbox
                    $checked={form.newsletter}
                    onClick={() => set("newsletter", !form.newsletter)}
                    role="checkbox"
                    aria-checked={form.newsletter}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === " " || e.key === "Enter") {
                        e.preventDefault();
                        set("newsletter", !form.newsletter);
                      }
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Checkbox>
                  <CheckLabel>
                    Stay in the Loop! Subscribe to our newsletter and be the first to know
                    about exciting features and exclusive collaborations.
                  </CheckLabel>
                </CheckRow>
              )}

              {errors._form && (
                <FormErrorBanner>
                  <ErrorBannerText>{errors._form}</ErrorBannerText>
                  <RetryBtn type="button" onClick={handleRetry} disabled={loading}>
                    {loading ? "Retrying\u2026" : "Retry"}
                  </RetryBtn>
                </FormErrorBanner>
              )}

              <SubmitBtn type="submit" disabled={loading}>
                {loading ? "Submitting\u2026" : "Submit"}
              </SubmitBtn>
            </form>
          )}
        </FormCard>
      </Inner>
    </Section>
  );
}
