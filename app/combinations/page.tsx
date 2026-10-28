import type { Metadata } from "next";
import { Enquire, PageHero, Photo } from "@/components/editorial";
import { photos } from "@/lib/site";
export const metadata: Metadata = { title: "Combinations & \u00c0 La Carte" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="COMBINATIONS & À LA CARTE"
        title="Every detail,"
        italic="your way."
        image={photos.detail}
      />
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / CURATED COMBINATIONS</p>
            <h2>
              Beautiful together.
              <br />
              <em>Better as yours.</em>
            </h2>
          </div>
          <p>
            Creative combinations for a harmonious celebration.
            <br />
            All services are illustrative concepts.
          </p>
        </div>
        <div className="combination-grid">
          {[
            [
              "The Intimate Edit",
              "Essentielle styling, a botanical digital invitation, and personal welcome stationery.",
              photos.flowers,
            ],
            [
              "The Signature Story",
              "Signature styling, a tailored invitation concept, and the QR gallery experience.",
              photos.table,
            ],
            [
              "The Complete Vision",
              "Prestige creative direction, bespoke stationery, and considered guest details.",
              photos.venue,
            ],
          ].map(([name, desc, image]) => (
            <article key={name}>
              <Photo src={image} alt={`${name} inspiration`} />
              <h3>{name}</h3>
              <p>{desc}</p>
              <Enquire subject={name} label="EXPLORE THIS COMBINATION" />
            </article>
          ))}
        </div>
        <div className="a-la-carte">
          <p className="eyebrow">02 / À LA CARTE EXPERIENCES</p>
          <h2>
            The perfect <em>finishing touch.</em>
          </h2>
          {[
            "Floral Poetry",
            "The Stationery Suite",
            "Welcome & Wayfinding",
            "The Art of Gifting",
            "Digital Invitations",
            "QR Gallery Concept",
          ].map((name, i) => (
            <div key={name}>
              <span className="eyebrow">0{i + 1}</span>
              <h3>{name}</h3>
              <Enquire
                subject={`the à la carte ${name} experience`}
                label="ENQUIRE"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
