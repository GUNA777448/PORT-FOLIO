import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import { portfolioContent } from "../data/portfolioContent";

const contactUsIllustration = new URL(
  "../assets/CONTACTUS.svg",
  import.meta.url,
).href;

const appsScriptUrl =
  "https://script.google.com/macros/s/AKfycbzccRUjgj8BE4AaezvWlaerlTqv-MP_DF246NYdSqU0TLHl6sdg3XUp28KgLsASL9nx/exec";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

async function submitContactMessage(payload: ContactPayload) {
  try {
    await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams(payload).toString(),
    });
  } catch {
    await fetch(appsScriptUrl, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      body: new URLSearchParams(payload).toString(),
    });
  }
}

export function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const fallbackEmail =
    portfolioContent.contactItems.find((item) => item.value.includes("@"))
      ?.value ?? "hello@prebuiltui.com";

  const contactRows = portfolioContent.contactItems.map((item) => {
    let icon = <Mail size={16} className="text-neutral-500" />;

    if (item.value.includes("@")) {
      icon = <Mail size={16} className="text-neutral-500" />;
    } else if (item.value.includes("+")) {
      icon = <Phone size={16} className="text-neutral-500" />;
    } else {
      icon = <MapPin size={16} className="text-neutral-500" />;
    }

    return { ...item, icon };
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = "Portfolio Contact Inquiry";
    const message = String(formData.get("message") ?? "").trim();

    setIsSending(true);
    setStatusMessage("");
    setStatusType("idle");

    try {
      await submitContactMessage({ name, email, subject, message });
      setStatusMessage("Message sent successfully.");
      setStatusType("success");
      event.currentTarget.reset();
    } catch {
      setStatusMessage(
        `Could not send the message right now. Please email us at ${fallbackEmail}.`,
      );
      setStatusType("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-surface section-surface-a w-full py-20 md:py-28"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-neutral-500">
              Contact
            </p>
            <span className="inline-flex items-center gap-1 rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-orange-700">
              <Sparkles size={12} />
              Open For Collaboration
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.08]">
            Let&apos;s build something meaningful together.
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Share your idea, timeline, and goals. I&apos;ll get back with the
            best next step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.aside
            {...fadeInUp}
            className="lg:col-span-5 rounded-3xl border border-neutral-200 bg-white p-6"
          >
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-2">
              <img
                src={contactUsIllustration}
                alt="Contact"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>

            <div className="mt-6 space-y-3">
              {contactRows.map((item) => (
                <div
                  key={item.value}
                  className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 transition hover:bg-white"
                >
                  <div className="flex items-center gap-3 text-sm text-neutral-700">
                    {item.icon}
                    <span>{item.value}</span>
                  </div>
                  <ArrowUpRight size={14} className="text-neutral-400" />
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-emerald-700">
                Response Time
              </p>
              <p className="mt-1 text-sm text-emerald-800">
                Usually within 24 hours.
              </p>
            </div>
          </motion.aside>

          <motion.form
            {...fadeInUp}
            className="lg:col-span-7 rounded-3xl border border-neutral-200 bg-white p-6 md:p-7"
            onSubmit={handleSubmit}
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-500">
              Send Message
            </p>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Prefer email? Reach out directly at{" "}
              <a
                href={`mailto:${fallbackEmail}`}
                className="text-neutral-900 underline underline-offset-2"
              >
                {fallbackEmail}
              </a>
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-neutral-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-500 focus:bg-white"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email-address"
                  className="text-sm font-medium text-neutral-700"
                >
                  Email Address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-500 focus:bg-white"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <label
                htmlFor="message"
                className="md:col-span-2 text-sm font-medium text-neutral-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="md:col-span-2 w-full rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 resize-none outline-none transition focus:border-neutral-500 focus:bg-white"
                placeholder="Enter your message"
                required
              />
            </div>

            {statusMessage ? (
              <p
                className={`mt-4 text-sm ${
                  statusType === "error" ? "text-red-600" : "text-emerald-600"
                }`}
              >
                {statusMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSending}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black disabled:opacity-70"
            >
              {isSending ? "Sending..." : "Send Message"}
              <Send size={15} />
            </button>

            <div className="mt-5 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-neutral-500">
                Collaboration Note
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                Include your goals and preferred timeline for a faster kickoff.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
