import type { Metadata } from "next";
import { AboutStory, PageHero, TextLink } from "@/components/editorial";
import { photos } from "@/lib/site";
export const metadata: Metadata = { title: "Our Story" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="THE MAISON PHILOSOPHY"
        title="Rooted in feeling."
        italic="Refined by design."
        image={photos.couple}
      />
      <AboutStory />
      <section className="section philosophy">
        <p className="eyebrow">OUR CREATIVE WORLD</p>
        <h2>
          Quiet elegance.
          <br />
          Meaningful details.
          <br />
          <em>Unforgettable feeling.</em>
        </h2>
        <div className="three-columns">
          {[
            [
              "01",
              "Thoughtful by nature",
              "A celebration begins with listening. Every texture, colour, and gesture is imagined in harmony with a personal story.",
            ],
            [
              "02",
              "Personal by design",
              "From an intimate table to a complete visual world, the most beautiful details feel unmistakably yours.",
            ],
            [
              "03",
              "Timeless in spirit",
              "We are drawn to a beauty that endures: natural materials, considered proportions, and moments of honest connection.",
            ],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span className="eyebrow">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <div className="portfolio-note">
          <p className="eyebrow">CONCEPT PROJECT BY NESNOVA</p>
          <p>
            Maison Élára is an original portfolio exploration by NESNOVA — Web
            Development & Digital Solutions. It demonstrates bespoke visual
            branding, custom frontend engineering, responsive design, and
            thoughtful digital experiences. It is not a previously commissioned
            client project or an operating wedding business.
          </p>
          <TextLink href="/contact">EXPLORE THE POSSIBILITIES</TextLink>
        </div>
      </section>
    </>
  );
}
