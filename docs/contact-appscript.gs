const SHEET_ID = "18hsDTChWAuSsOiYYTgnUSKLfAD3afgVHYrNHa0d_YtU";
const SHEET_NAME = "Sheet1";
const ADMIN_EMAIL = "gurunadarao.reddy@gmail.com";

function doGet() {
  return HtmlService.createHtmlOutput(getLandingPageHtml_())
    .setTitle("Portfolio Contact API")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    const contact = normalizeContact_(payload);
    validateContact_(contact);

    const result = saveToSheet_(contact);
    sendAdminNotification_(contact, result.rowNumber);

    if (wantsHtmlResponse_(e, payload)) {
      return HtmlService.createHtmlOutput(getSuccessPageHtml_(contact.name))
        .setTitle("Message Sent")
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }

    return jsonResponse_({
      ok: true,
      message: "Message stored successfully.",
      rowNumber: result.rowNumber,
    });
  } catch (error) {
    const message = error && error.message ? error.message : "Unexpected error";

    if (wantsHtmlResponse_(e, null)) {
      return HtmlService.createHtmlOutput(getErrorPageHtml_(message))
        .setTitle("Submission Error")
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }

    return jsonResponse_({ ok: false, message: message });
  }
}

function parsePayload_(e) {
  const postData = e && e.postData ? e.postData : null;
  const raw =
    postData && postData.contents ? String(postData.contents).trim() : "";
  const contentType =
    postData && postData.type ? String(postData.type).toLowerCase() : "";

  let body = {};

  if (raw) {
    if (
      contentType.indexOf("application/json") !== -1 ||
      contentType.indexOf("text/plain") !== -1
    ) {
      body = safeJsonParse_(raw);
    } else if (
      contentType.indexOf("application/x-www-form-urlencoded") !== -1
    ) {
      body = parseQueryString_(raw);
    } else {
      const maybeJson = safeJsonParse_(raw);
      body = Object.keys(maybeJson).length ? maybeJson : parseQueryString_(raw);
    }
  }

  const params = e && e.parameter ? e.parameter : {};
  return Object.assign({}, params, body);
}

function normalizeContact_(payload) {
  const source =
    payload && payload.source
      ? String(payload.source).trim()
      : "portfolio-contact-form";

  return {
    name: getField_(payload, ["name", "fullName"]),
    email: getField_(payload, ["email", "emailAddress"]),
    subject: getField_(payload, ["subject", "topic"]),
    message: getField_(payload, ["message", "body"]),
    source: source,
    submittedAt: new Date(),
  };
}

function validateContact_(contact) {
  if (!contact.name) {
    throw new Error("Name is required.");
  }
  if (!contact.email) {
    throw new Error("Email is required.");
  }
  if (!contact.message) {
    throw new Error("Message is required.");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(contact.email)) {
    throw new Error("Please provide a valid email address.");
  }
}

function saveToSheet_(contact) {
  const sheet = getOrCreateSheet_();
  ensureHeaderRow_(sheet);

  sheet.appendRow([
    contact.submittedAt,
    contact.name,
    contact.email,
    contact.subject,
    contact.message,
    contact.source,
  ]);

  return { rowNumber: sheet.getLastRow() };
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  return sheet;
}

function ensureHeaderRow_(sheet) {
  if (sheet.getLastRow() > 0) {
    return;
  }

  sheet.appendRow([
    "Submitted At",
    "Name",
    "Email",
    "Subject",
    "Message",
    "Source",
  ]);
}

function sendAdminNotification_(contact, rowNumber) {
  const subject = "New Portfolio Contact: " + contact.name;
  const body = [
    "You have a new contact form submission.",
    "",
    "Row: " + rowNumber,
    "Name: " + contact.name,
    "Email: " + contact.email,
    "Subject: " + (contact.subject || "(not provided)"),
    "Message:",
    contact.message,
    "",
    "Source: " + contact.source,
    "Submitted At: " + contact.submittedAt,
  ].join("\n");

  EmailApp.sendEmail(ADMIN_EMAIL, subject, body);
}

function wantsHtmlResponse_(e, payload) {
  const params = e && e.parameter ? e.parameter : {};
  const formatValue = (params.format || (payload && payload.format) || "")
    .toString()
    .toLowerCase();
  return formatValue === "html";
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function safeJsonParse_(text) {
  try {
    const parsed = JSON.parse(text);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (err) {
    return {};
  }
}

function parseQueryString_(raw) {
  const out = {};
  if (!raw) {
    return out;
  }

  raw.split("&").forEach(function (pair) {
    if (!pair) {
      return;
    }
    const parts = pair.split("=");
    const key = decodeURIComponent((parts[0] || "").replace(/\+/g, " "));
    const value = decodeURIComponent(
      (parts.slice(1).join("=") || "").replace(/\+/g, " "),
    );
    if (key) {
      out[key] = value;
    }
  });

  return out;
}

function getField_(obj, keys) {
  if (!obj) {
    return "";
  }

  for (var i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return String(obj[key] || "").trim();
    }
  }

  return "";
}

function escapeHtml_(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getSuccessPageHtml_(name) {
  const safeName = escapeHtml_(name || "there");
  return (
    "<!doctype html>" +
    '<html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    "<title>Message Sent</title>" +
    "<style>" +
    "body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f0ede8;font-family:'Barlow',Arial,sans-serif;color:#111;}" +
    ".card{width:min(92vw,560px);background:#fff;border:1px solid rgba(0,0,0,.1);border-radius:18px;padding:30px 28px;box-shadow:10px 10px 0 #F5A623;}" +
    ".kicker{display:inline-block;font-size:11px;letter-spacing:.2em;text-transform:uppercase;font-weight:700;color:#6b7280;}" +
    "h1{margin:14px 0 10px;font-family:'Barlow Condensed',Arial,sans-serif;font-weight:900;letter-spacing:.04em;font-size:42px;line-height:1;}" +
    "h1 span{color:#F5A623;}" +
    "p{margin:0;color:#4b5563;line-height:1.6;font-size:15px;}" +
    ".btn{display:inline-block;margin-top:20px;padding:11px 18px;border-radius:999px;background:#111;color:#fff;text-decoration:none;font-weight:700;font-size:13px;letter-spacing:.08em;text-transform:uppercase;}" +
    ".btn:hover{background:#F5A623;color:#111;}" +
    "</style></head><body>" +
    '<section class="card">' +
    '<span class="kicker">Contact Form</span>' +
    "<h1>THANK <span>YOU</span></h1>" +
    "<p>Hi " +
    safeName +
    ", your message was submitted successfully. I will get back to you soon.</p>" +
    '<a class="btn" href="javascript:window.close();">Close</a>' +
    "</section></body></html>"
  );
}

function getErrorPageHtml_(message) {
  const safeMessage = escapeHtml_(message || "Something went wrong.");
  return (
    "<!doctype html>" +
    '<html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    "<title>Submission Error</title>" +
    "<style>" +
    "body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f0ede8;font-family:'Barlow',Arial,sans-serif;color:#111;}" +
    ".card{width:min(92vw,560px);background:#fff;border:1px solid rgba(0,0,0,.1);border-radius:18px;padding:30px 28px;box-shadow:10px 10px 0 #111;}" +
    "h1{margin:0 0 10px;font-family:'Barlow Condensed',Arial,sans-serif;font-weight:900;letter-spacing:.04em;font-size:36px;line-height:1;color:#111;}" +
    "p{margin:0;color:#4b5563;line-height:1.6;font-size:15px;}" +
    "</style></head><body>" +
    '<section class="card">' +
    "<h1>Submission Failed</h1>" +
    "<p>" +
    safeMessage +
    "</p>" +
    "</section></body></html>"
  );
}

function getLandingPageHtml_() {
  return (
    "<!doctype html>" +
    '<html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    "<title>Portfolio Contact API</title>" +
    "<style>" +
    "body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f0ede8;font-family:'Barlow',Arial,sans-serif;color:#111;}" +
    ".card{width:min(92vw,640px);background:#fff;border:1px solid rgba(0,0,0,.1);border-radius:18px;padding:24px 24px 20px;box-shadow:10px 10px 0 #F5A623;}" +
    "h1{margin:0 0 8px;font-family:'Barlow Condensed',Arial,sans-serif;font-weight:900;font-size:34px;letter-spacing:.04em;}" +
    "p{margin:0 0 10px;color:#4b5563;line-height:1.6;}" +
    "code{display:block;background:#111;color:#f5f5f5;border-radius:10px;padding:10px 12px;white-space:pre-wrap;font-size:12px;}" +
    "</style></head><body>" +
    '<section class="card">' +
    "<h1>Portfolio Contact API</h1>" +
    "<p>This endpoint accepts POST requests and stores form data in Google Sheets.</p>" +
    "<p>Expected fields: name, email, subject (optional), message.</p>" +
    '<code>POST /exec\n{\n  "name": "User",\n  "email": "user@example.com",\n  "subject": "Project",\n  "message": "Hello"\n}</code>' +
    "</section></body></html>"
  );
}
