import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "./globals.css";
import { Navigation, Intro, Footer, MotionProvider } from "@/components/chrome";
import { site, photos } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MAISON ÉLARA — London-Inspired Wedding Atelier",
    template: "%s | MAISON ÉLARA",
  },
  description:
    "London-inspired wedding collections, from botanical glasshouses to intimate townhouses and candlelit city receptions. An original portfolio concept by NESNOVA.",
  openGraph: {
    title: "MAISON ÉLARA",
    description: "Where Every Moment Becomes Timeless.",
    type: "website",
    images: [photos.hero],
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
