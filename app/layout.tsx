import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "./globals.css";
import { Navigation, Intro, Footer, MotionProvider } from "@/components/chrome";
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://maison-elara.example",
  ),
  title: {
    default: "MAISON ÉLARA — Timeless Wedding Experiences",
    template: "%s | MAISON ÉLARA",
  },
  description:
    "An editorial vision of bespoke wedding celebrations. An original luxury wedding portfolio concept by NESNOVA.",
  openGraph: {
    title: "MAISON ÉLARA",
    description: "Where Every Moment Becomes Timeless.",
    type: "website",
    images: ["/images/hero.webp"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Navigation />
          <Intro />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
