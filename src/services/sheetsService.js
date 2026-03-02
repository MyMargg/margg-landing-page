/**
 * sheetsService.js – Google Sheets submission via Google Apps Script.
 *
 * Sends form data to a deployed Google Apps Script web app (doPost handler)
 * that appends rows to a Google Sheet.
 *
 * ── Setup (one-time) ──────────────────────────────────────────────────────
 * 1. Create a Google Sheet with 4 tabs: Waitlist, Learners, Instructors, Partners.
 * 2. Open Extensions → Apps Script and paste the handler below.
 * 3. Deploy → New Deployment → Web App → Anyone can access.
 * 4. Copy the deployment URL into content.json → api.googleSheets.scriptUrl.
 *
 * ── Apps Script handler (paste into Code.gs) ──────────────────────────────
 *
 *   function doPost(e) {
 *     var data = JSON.parse(e.postData.contents);
 *     var sheet = SpreadsheetApp.getActiveSpreadsheet()
 *                   .getSheetByName(data._sheet || "Submissions");
 *     if (!sheet) {
 *       sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 *     }
 *     var timestamp = new Date().toISOString();
 *     var row = [timestamp];
 *     var keys = Object.keys(data).filter(k => k !== "_sheet");
 *     keys.forEach(function(k) {
 *       row.push(Array.isArray(data[k]) ? data[k].join(", ") : data[k]);
 *     });
 *     // Auto-create header row if sheet is empty
 *     if (sheet.getLastRow() === 0) {
 *       sheet.appendRow(["Timestamp"].concat(keys));
 *     }
 *     sheet.appendRow(row);
 *     return ContentService.createTextOutput(
 *       JSON.stringify({ result: "ok" })
 *     ).setMimeType(ContentService.MimeType.JSON);
 *   }
 *
 * ──────────────────────────────────────────────────────────────────────────
 */

/**
 * Post a row to Google Sheets via the Apps Script web app.
 * @param {string} scriptUrl – The deployed Apps Script web app URL.
 * @param {string} sheetTab  – Which tab/sheet to write to.
 * @param {object} data      – Key-value pairs to write as a row.
 */
export async function postToSheet(scriptUrl, sheetTab, data) {
  if (!scriptUrl) {
    throw new Error(
      "Google Sheets integration is not configured. Please set the script URL.",
    );
  }

  const payload = { _sheet: sheetTab, ...data };

  let res;
  try {
    res = await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors", // Apps Script doesn't return CORS headers
      headers: { "Content-Type": "text/plain" }, // avoid preflight
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15_000),
    });
  } catch (err) {
    if (err.name === "TimeoutError" || err.name === "AbortError") {
      throw new Error(
        "The request timed out. Please check your connection and try again.",
      );
    }
    throw new Error(
      "Unable to reach Google Sheets. Please check your internet connection and try again.",
    );
  }

  // With mode: "no-cors" the response is opaque (status 0).
  // If we get here without throwing it means the request was sent.
  return { ok: true };
}
