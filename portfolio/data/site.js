// Central place for personal details and navigation.
// Contact details can be overridden with environment variables (see .env.example).

export const siteConfig = {
  name: "Malik Abdul Muneeb",
  wordmark: "MUNEEB.DEV",
  title: "Frontend Developer",
  location: "Kasur, Pakistan",
  tagline:
    "I build modern, responsive and user-friendly websites that help businesses establish a strong online presence.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "muneebmalik763122@gmail.com",
  // Digits only, international format. Leave empty to hide the WhatsApp button.
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  github: "https://github.com/Malik-Abdul-Muneeb",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
