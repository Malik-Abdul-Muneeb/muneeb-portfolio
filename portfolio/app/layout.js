import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import { siteConfig } from "@/data/site";
import "./globals.css";

const description =
  "Malik Abdul Muneeb is a frontend developer building modern, responsive and user-friendly websites with React, Next.js and Tailwind CSS.";

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.wordmark,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description,
  },
};

export const viewport = {
  themeColor: "#0B0F19",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
