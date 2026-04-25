import { useState } from "react";

import { portfolioContent } from "../data/portfolioContent";
import { Card } from "../components/ui/Card";
import { Input, Textarea } from "../components/ui/FormFields";
import { Button } from "../components/ui/Button";

const appsScriptUrl =
  "https://script.google.com/macros/s/AKfycbzccRUjgj8BE4AaezvWlaerlTqv-MP_DF246NYdSqU0TLHl6sdg3XUp28KgLsASL9nx/exec";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

async function submitContactMessage(payload: ContactPayload) {
  // Google Apps Script endpoints often reject browser CORS preflight requests.
  // Sending URL-encoded data with no-cors avoids preflight from local/dev origins.
  await fetch(appsScriptUrl, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(payload),
  });
}

export function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const fallbackEmail =
    portfolioContent.contactItems.find((item) => item.value.includes("@"))
      ?.value ?? "gurunadarao.reddy@gmail.com";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setIsSending(true);
    setStatusMessage("");

    try {
      await submitContactMessage({
        name,
        email,
        subject,
        message,
      });

      setStatusMessage("Message sent successfully.");
      event.currentTarget.reset();
    } catch {
      setStatusMessage(
        `Could not send the message right now. Please email me directly at ${fallbackEmail}.`,
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="screen-section reveal-block">
      <div className="content-shell w-full">
        <div className="contact-hero mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="block w-8 h-0.75 bg-[#F5A623]" />
            <p className="text-[10px] font-black tracking-[0.25em] uppercase text-neutral-400">
              Let&apos;s connect
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-black leading-none">
              CONTACT
              <br />
              <span className="text-[#F5A623]">ME</span>
            </h2>

            <div className="contact-hero-stats flex items-center gap-4 pb-1">
              <div className="text-right">
                <p className="text-3xl font-black text-black leading-none">
                  {portfolioContent.contactItems.length}
                </p>
                <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400 mt-0.5">
                  Direct lines
                </p>
              </div>
              <div className="w-px h-10 bg-black/15" />
              <div className="text-right">
                <p className="text-3xl font-black text-black leading-none">
                  {portfolioContent.socialLinks.length}
                </p>
                <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400 mt-0.5">
                  Social links
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-neutral-500 mt-4 max-w-md leading-relaxed font-['Barlow',sans-serif]">
            {portfolioContent.contactText}
          </p>
        </div>

        <div className="contact-page-grid">
          <Card className="reveal-item contact-info-card">
            <div className="contact-card-head">
              <div>
                <p className="contact-card-kicker">Available for</p>
                <h3>{portfolioContent.contactTitle}</h3>
              </div>
              <span className="contact-card-index">01</span>
            </div>

            <div className="contact-card-divider" />

            <ul className="contact-items">
              {portfolioContent.contactItems.map((item) => (
                <li key={item.value} className="contact-item-row">
                  <span className="contact-item-icon" aria-hidden="true">
                    <i className={item.iconClass} />
                  </span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>

            <div className="contact-card-footer">
              <p>
                Usually responds within a day for project work and
                collaborations.
              </p>
              <div className="contact-socials">
                {portfolioContent.socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-link"
                    aria-label={link.href}
                  >
                    <i className={link.iconClass} />
                  </a>
                ))}
              </div>
            </div>
          </Card>

          <Card className="reveal-item contact-form-card">
            <div className="contact-card-head">
              <div>
                <p className="contact-card-kicker">Send a note</p>
                <h3>Project brief</h3>
              </div>
              <span className="contact-card-index">02</span>
            </div>

            <div className="contact-card-divider" />

            <form className="contact-form" onSubmit={handleSubmit}>
              <Input
                label="Name"
                name="name"
                placeholder="Your name"
                required
              />
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <Input
                label="Subject"
                name="subject"
                placeholder="What do you want to talk about?"
                required
              />
              <Textarea
                label="Message"
                name="message"
                placeholder="Tell me about your project"
                rows={5}
                required
              />
              {statusMessage ? (
                <p className="contact-status">{statusMessage}</p>
              ) : null}
              <Button type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
