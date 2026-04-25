import { useState } from "react";

import contactUsIllustration from "../assets/CONTACTUS.svg";
import { portfolioContent } from "../data/portfolioContent";

const appsScriptUrl = "https://script.google.com/macros/s/AKfycbzccRUjgj8BE4AaezvWlaerlTqv-MP_DF246NYdSqU0TLHl6sdg3XUp28KgLsASL9nx/exec";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

async function submitContactMessage(payload: ContactPayload) {
  try {
    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
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

  const fallbackEmail =
    portfolioContent.contactItems.find((item) => item.value.includes("@"))
      ?.value ?? "hello@prebuiltui.com";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = "Portfolio Contact Inquiry";
    const message = String(formData.get("message") ?? "").trim();

    setIsSending(true);
    setStatusMessage("");

    try {
      await submitContactMessage({ name, email, subject, message });
      setStatusMessage("Message sent successfully.");
      event.currentTarget.reset();
    } catch {
      setStatusMessage(
        `Could not send the message right now. Please email us at ${fallbackEmail}.`,
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="screen-section reveal-block">
      <div className="content-shell w-full">
        <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-around gap-8 lg:gap-12">
          <aside className="w-full lg:w-5/12 text-slate-700">
            <div className="rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur p-2">
              <img
                src={contactUsIllustration}
                alt="Contact us"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>
          </aside>

          <form
            className="w-full lg:w-6/12 flex flex-col items-center text-sm text-slate-800"
            onSubmit={handleSubmit}
          >
            <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
              Contact Us
            </p>
            <h1 className="text-4xl font-bold py-4 text-center">
              Let&apos;s Get In Touch.
            </h1>
            <p className="max-md:text-sm text-gray-500 pb-10 text-center">
              Or just reach out manually to us at{" "}
              <a
                href={`mailto:${fallbackEmail}`}
                className="text-indigo-600 hover:underline"
              >
                {fallbackEmail}
              </a>
            </p>

            <div className="max-w-96 w-full px-4">
              <label htmlFor="name" className="font-medium">
                Full Name
              </label>
              <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
                    fill="#475569"
                  />
                </svg>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="h-full px-2 w-full outline-none bg-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <label htmlFor="email-address" className="font-medium mt-4">
                Email Address
              </label>
              <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
                    fill="#475569"
                  />
                </svg>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  className="h-full px-2 w-full outline-none bg-transparent"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <label htmlFor="message" className="font-medium mt-4">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all"
                placeholder="Enter your message"
                required
              />

              {statusMessage ? (
                <p className="mt-3 text-sm text-center text-slate-600">
                  {statusMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSending}
                className="flex items-center justify-center gap-1 mt-5 bg-yellow-500 hover:bg-indigo-600 disabled:opacity-70 text-white py-2.5 w-full rounded-full transition"
              >
                {isSending ? "Sending..." : "Submit Form"}
                <svg
                  className="mt-0.5"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
