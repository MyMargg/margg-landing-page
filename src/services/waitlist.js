const EMAIL_REGEX = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

function sanitizeEmail(raw) {
  return raw.trim().toLowerCase().slice(0, 254);
}

function validateEmail(email) {
  return EMAIL_REGEX.test(email);
}

export async function submitWaitlistEmail(rawEmail) {
  const email = sanitizeEmail(rawEmail);
  if (!validateEmail(email)) {
    throw new Error("Please enter a valid email address");
  }
  const res = await fetch(
    "https://api.margg.xyz/service-core/general/user-contacts/waitlist",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    },
  );
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(
      body?.data?.message ||
        body?.message ||
        "Something went wrong. Please try again.",
    );
  }
}
