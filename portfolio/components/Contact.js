import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import GitHubIcon from "./GitHubIcon";
import Reveal from "./Reveal";

export default function Contact() {
  const githubHandle = siteConfig.github.split("/").pop();

  const methods = [
    {
      icon: <Mail className="h-5 w-5" aria-hidden="true" />,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: <GitHubIcon />,
      label: "GitHub",
      value: `github.com/${githubHandle}`,
      href: siteConfig.github,
      external: true,
    },
  ];

  // The WhatsApp card only appears once a number is configured in .env.local.
  if (siteConfig.whatsappNumber) {
    methods.push({
      icon: <MessageCircle className="h-5 w-5" aria-hidden="true" />,
      label: "WhatsApp",
      value: "Message me on WhatsApp",
      href: `https://wa.me/${siteConfig.whatsappNumber}`,
      external: true,
    });
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section border-t border-line bg-surface">
      <div className="container-page">
        <SectionHeading
          id="contact-heading"
          eyebrow="05 / Contact"
          title="Have a Project in Mind?"
          description="Let's discuss how I can help bring your ideas to life."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <ul className="space-y-4">
              {methods.map(({ icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 rounded-xl border border-line bg-card p-5 transition-colors hover:border-accent/60"
                  >
                    <span className="rounded-lg bg-accent/10 p-2.5 text-accent">{icon}</span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-muted">{label}</span>
                      <span className="block truncate font-medium">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
