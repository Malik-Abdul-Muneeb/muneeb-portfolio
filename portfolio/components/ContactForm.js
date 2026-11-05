"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/data/site";

const fieldClass =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none";

/*
 * This form has no backend. On submit it opens the visitor's email app with the
 * message pre-filled (a mailto: link), so nothing is lost or faked.
 *
 * FUTURE INTEGRATION POINT: to send emails without opening the email app,
 * replace the body of handleSubmit with a fetch() call to a form service
 * (e.g. Formspree, Web3Forms or your own API route) and show a success message.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = `Website enquiry from ${name}`;
    const body = `${message}\n\n---\nName: ${name}\nEmail: ${email}`;

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-line bg-card p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Your name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Your email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Tell me about your project
        </label>
        <textarea id="message" name="message" required rows={5} className={`${fieldClass} resize-y`} placeholder="What do you need and when?" />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition duration-200 hover:bg-accent-hover active:scale-[0.98]"
      >
        <Send className="h-4 w-4" aria-hidden="true" /> Send Message
      </button>

      <p className="text-xs text-muted" role="status">
        {sent
          ? "Your email app should have opened with the message ready to send. If it didn't, email me directly at the address on this page."
          : "This opens your email app with your message pre-filled."}
      </p>
    </form>
  );
}
