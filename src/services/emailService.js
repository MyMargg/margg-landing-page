/**
 * emailService.js – EmailJS integration for notification emails.
 *
 * Lazily loads the EmailJS SDK from CDN on first use, then sends
 * a templated email via the configured service + template IDs.
 *
 * ── Setup (one-time) ───────────────────────────────────────────────────
 * 1. Sign up at https://www.emailjs.com (free tier: 200 emails/month).
 * 2. Create an Email Service (Gmail, Outlook, etc.) — copy the Service ID.
 * 3. Create Email Templates for each form type. Use {{variables}} that
 *    match the keys passed to `sendNotification()`.
 * 4. Copy your Public Key from Account → General.
 * 5. Fill content.json → api.emailjs with serviceId, publicKey, and
 *    template IDs for each form type.
 * ────────────────────────────────────────────────────────────────────────
 */

let emailjsLoaded = false;
let loadPromise = null;

/**
 * Dynamically load the EmailJS SDK script (once).
 */
function loadEmailJS() {
  if (emailjsLoaded && window.emailjs) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    // Check if already present (e.g. loaded by another path)
    if (window.emailjs) {
      emailjsLoaded = true;
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      emailjsLoaded = true;
      resolve();
    };
    script.onerror = () => {
      loadPromise = null;
      reject(new Error("Failed to load EmailJS SDK."));
    };
    document.head.appendChild(script);
  });

  return loadPromise;
}

/**
 * Resolve the account credentials and template ID for a given template key.
 * Supports multi-account config:
 *   emailjs.accounts.{ accountName: { serviceId, publicKey } }
 *   emailjs.templates.{ key: { templateId, account } }
 */
function resolveTemplate(emailjsConfig, templateKey) {
  const tmpl = emailjsConfig?.templates?.[templateKey];
  if (!tmpl) return null;

  const accountName = tmpl.account;
  const account = emailjsConfig?.accounts?.[accountName];
  if (!account?.serviceId || !account?.publicKey) return null;

  return {
    serviceId: account.serviceId,
    publicKey: account.publicKey,
    templateId: tmpl.templateId,
  };
}

/**
 * Send a notification email via EmailJS.
 *
 * Supports multi-account routing — each template maps to a specific
 * EmailJS account defined in content.json → api.emailjs.accounts.
 *
 * @param {object} emailjsConfig – { accounts, templates, notifyEmail }
 * @param {string} templateKey   – key into emailjsConfig.templates (e.g. "learner")
 * @param {object} templateVars  – variables to pass to the EmailJS template
 */
export async function sendNotification(emailjsConfig, templateKey, templateVars) {
  const resolved = resolveTemplate(emailjsConfig, templateKey);

  if (!resolved) {
    console.warn(`[EmailJS] No valid config for "${templateKey}" — skipping.`);
    return { ok: true, skipped: true };
  }

  try {
    await loadEmailJS();

    // Initialise with the account's public key (re-init is safe)
    window.emailjs.init(resolved.publicKey);

    const vars = {
      ...templateVars,
      to_email: emailjsConfig.notifyEmail || "info@margg.in",
      submission_time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    const result = await window.emailjs.send(
      resolved.serviceId,
      resolved.templateId,
      vars,
    );

    if (result.status !== 200) {
      console.warn("[EmailJS] Non-200 status:", result);
    }

    return { ok: true };
  } catch (err) {
    // Email failure should NOT block form submission — log and move on.
    console.error("[EmailJS] Send failed:", err);
    return { ok: false, error: err.message };
  }
}
