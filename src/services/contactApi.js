/**
 * contactApi.js – Unified submission service for all contact / enquiry forms.
 *
 * Supports two modes (controlled by content.json → api.submissionMode):
 *
 *   "api"    → POST to backend REST endpoints (default).
 *   "sheets" → Write to Google Sheets (via Apps Script) + send
 *              notification email via EmailJS.
 *
 * Each public function validates input first, then dispatches to the
 * correct backend based on the flag.
 */

import { postToSheet } from "./sheetsService";
import { sendNotification } from "./emailService";

// ─── helpers ────────────────────────────────────────────────────────────────

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_RE = /^[0-9\s\-+()]{10,15}$/;

function required(val, label) {
  if (!val || !String(val).trim()) throw new Error(`${label} is required`);
  return String(val).trim();
}

function emailOk(val) {
  const v = required(val, "Email").toLowerCase().slice(0, 254);
  if (!EMAIL_RE.test(v)) throw new Error("Please enter a valid email address");
  return v;
}

function phoneOk(val) {
  const v = required(val, "Phone number");
  if (!PHONE_RE.test(v)) throw new Error("Please enter a valid phone number");
  return v;
}

/**
 * Shared POST helper with timeout, retry-friendly error messages,
 * and structured error parsing.
 */
async function post(url, body) {
  let res;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15_000),
    });
  } catch (err) {
    if (err.name === "TimeoutError" || err.name === "AbortError") {
      throw new Error(
        "The request timed out. Please check your connection and try again.",
      );
    }
    throw new Error(
      "Unable to reach the server. Please check your internet connection and try again.",
    );
  }

  if (res.ok) return { ok: true };

  // Try to extract a meaningful message from the response body.
  let serverMsg = "";
  try {
    const json = await res.json();
    serverMsg =
      json?.data?.message || json?.message || json?.error || "";
  } catch {
    /* ignore parse errors */
  }

  // Map common HTTP status codes to user-friendly messages.
  if (res.status === 409) {
    throw new Error(
      serverMsg || "This entry already exists. Please use a different email.",
    );
  }
  if (res.status === 422 || res.status === 400) {
    throw new Error(
      serverMsg || "Some fields are invalid. Please review and try again.",
    );
  }
  if (res.status === 429) {
    throw new Error(
      "Too many requests. Please wait a moment and try again.",
    );
  }
  if (res.status >= 500) {
    throw new Error(
      "Our servers are temporarily unavailable. Please try again in a few moments.",
    );
  }

  throw new Error(
    serverMsg || "Something went wrong. Please try again.",
  );
}

// ─── Mode check ─────────────────────────────────────────────────────────────

function useSheets(apiConfig) {
  return apiConfig?.submissionMode === "sheets";
}

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Join Waitlist — email only.
 */
export async function submitWaitlist(apiConfig, rawEmail) {
  const email = emailOk(rawEmail);

  if (useSheets(apiConfig)) {
    await postToSheet(apiConfig.googleSheets?.scriptUrl, "Waitlist", { email });
    await sendNotification(apiConfig.emailjs, "waitlist", {
      form_type: "Waitlist",
      email,
    });
    return { ok: true };
  }

  const url = `${apiConfig.baseUrl}${apiConfig.endpoints.waitlist}`;
  return post(url, { email });
}

/**
 * Learner contact form.
 */
export async function submitLearner(apiConfig, form) {
  const firstName = required(form.fullName, "Full name").split(" ")[0];
  const lastName = required(form.fullName, "Full name").split(" ").slice(1).join(" ") || "";
  const phone = phoneOk(form.phone);
  const email = emailOk(form.email);
  const collegeName = required(form.college, "College name");
  const branch = required(form.branch, "Branch");
  const year = required(form.year, "Year");
  const query = form.query || "";

  if (useSheets(apiConfig)) {
    const row = { firstName, lastName, phone, email, collegeName, branch, year, query };
    await postToSheet(apiConfig.googleSheets?.scriptUrl, "Learners", row);
    await sendNotification(apiConfig.emailjs, "learner", {
      form_type: "Learner Enquiry",
      full_name: `${firstName} ${lastName}`.trim(),
      phone, email, college_name: collegeName, branch, year, query,
    });
    return { ok: true };
  }

  const body = { firstName, lastName, phone, email, collegeName, branch, year, query };
  const url = `${apiConfig.baseUrl}${apiConfig.endpoints.learner}`;
  return post(url, body);
}

/**
 * Instructor enquiry form.
 */
export async function submitInstructor(apiConfig, form) {
  const fullName = required(form.fullName, "Full name");
  const phone = phoneOk(form.phone);
  const email = emailOk(form.email);
  const topics = form.topics?.length
    ? form.topics
    : (() => { throw new Error("Add at least one topic"); })();

  if (useSheets(apiConfig)) {
    const row = { fullName, phone, email, topics: topics.join(", ") };
    await postToSheet(apiConfig.googleSheets?.scriptUrl, "Instructors", row);
    await sendNotification(apiConfig.emailjs, "instructor", {
      form_type: "Instructor Enquiry",
      full_name: fullName, phone, email, topics: topics.join(", "),
    });
    return { ok: true };
  }

  const body = { fullName, phone, email, topics };
  const url = `${apiConfig.baseUrl}${apiConfig.endpoints.instructor}`;
  return post(url, body);
}

/**
 * Partner / organisation enquiry form.
 */
export async function submitPartner(apiConfig, form) {
  const organisationType = required(form.orgType, "Organisation type");
  const organisationName = required(form.orgName, "Organisation name");
  const numberOfStudents = Number(required(form.students, "Number of students")) || 0;
  const phone = phoneOk(form.phone);
  const email = emailOk(form.email);

  if (useSheets(apiConfig)) {
    const row = { organisationType, organisationName, numberOfStudents, phone, email };
    await postToSheet(apiConfig.googleSheets?.scriptUrl, "Partners", row);
    await sendNotification(apiConfig.emailjs, "partner", {
      form_type: "Partner / Organisation Enquiry",
      organisation_type: organisationType,
      organisation_name: organisationName,
      number_of_students: numberOfStudents,
      phone, email,
    });
    return { ok: true };
  }

  const body = { organisationType, organisationName, numberOfStudents, phone, email };
  const url = `${apiConfig.baseUrl}${apiConfig.endpoints.partner}`;
  return post(url, body);
}
